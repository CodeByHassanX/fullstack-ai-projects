from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import os

app = FastAPI(title="K-Means Customer Segmentation API")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model and scaler
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TRAIN_MODEL_DIR = os.path.join(BASE_DIR, "..", "train_model")

MODEL_PATH = os.path.join(TRAIN_MODEL_DIR, "kmeans_customer_model.pkl")
SCALER_PATH = os.path.join(TRAIN_MODEL_DIR, "kmeans_scaler.pkl")

# We will load them when the app starts
model = None
scaler = None

@app.on_event("startup")
def load_assets():
    global model, scaler
    try:
        model = joblib.load(MODEL_PATH)
        scaler = joblib.load(SCALER_PATH)
        print("Model and Scaler loaded successfully.")
    except Exception as e:
        print(f"Error loading assets: {e}")

class CustomerData(BaseModel):
    Age: int
    Annual_Income: float
    Spending_Score: float

@app.post("/predict")
def predict_segment(data: CustomerData):
    if model is None or scaler is None:
        raise HTTPException(status_code=500, detail="Model or scaler not loaded.")
    
    try:
        # Create a dataframe for the input features
        # Must match the training features: ["Age", "Annual Income (k$)", "Spending Score (1-100)"]
        input_df = pd.DataFrame([{
            "Age": data.Age,
            "Annual Income (k$)": data.Annual_Income,
            "Spending Score (1-100)": data.Spending_Score
        }])
        
        # Scale the features
        scaled_features = scaler.transform(input_df)
        
        # Predict
        cluster = model.predict(scaled_features)[0]
        
        return {
            "cluster": int(cluster),
            "message": "Success"
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
