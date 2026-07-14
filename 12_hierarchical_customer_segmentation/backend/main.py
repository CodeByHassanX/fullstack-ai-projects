from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sklearn.neighbors import KNeighborsClassifier
import joblib
import pandas as pd
import os

app = FastAPI(title="Hierarchical Customer Segmentation API")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TRAIN_MODEL_DIR = os.path.join(BASE_DIR, "..", "train_model")

SCALER_PATH = os.path.join(TRAIN_MODEL_DIR, "hierarchical_scaler.pkl")
CSV_PATH = os.path.join(TRAIN_MODEL_DIR, "customer_clusters.csv")

knn_classifier = None
scaler = None

@app.on_event("startup")
def load_assets():
    global knn_classifier, scaler
    try:
        scaler = joblib.load(SCALER_PATH)
        
        # Load the clustered dataset
        df = pd.read_csv(CSV_PATH)
        
        # Extract the same features used during training
        X = df[["Age", "Annual Income (k$)", "Spending Score (1-100)"]]
        y = df["Cluster"]
        
        # Scale the features
        X_scaled = scaler.transform(X)
        
        # Train a 1-Nearest Neighbor classifier to map new points to the closest hierarchical cluster
        knn_classifier = KNeighborsClassifier(n_neighbors=1)
        knn_classifier.fit(X_scaled, y)
        
        print("Scaler loaded and KNN Classifier trained successfully.")
    except Exception as e:
        print(f"Error loading assets: {e}")

class CustomerData(BaseModel):
    Age: int
    Annual_Income: float
    Spending_Score: float

@app.post("/predict")
def predict_segment(data: CustomerData):
    if knn_classifier is None or scaler is None:
        raise HTTPException(status_code=500, detail="Models not loaded properly.")
    
    try:
        input_df = pd.DataFrame([{
            "Age": data.Age,
            "Annual Income (k$)": data.Annual_Income,
            "Spending Score (1-100)": data.Spending_Score
        }])
        
        # Scale the input
        scaled_features = scaler.transform(input_df)
        
        # Predict the nearest cluster
        cluster = knn_classifier.predict(scaled_features)[0]
        
        return {
            "cluster": int(cluster),
            "message": "Success"
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
