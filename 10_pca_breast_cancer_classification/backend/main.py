from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("../train_models/logistic_model.pkl")

class InputData(BaseModel):
    feature1: str | float
    feature2: str | float

@app.get("/")
def home():
    return {"message": "API Running"}

@app.post("/predict")
def predict(data: InputData):
    try:
        f1 = float(data.feature1)
        f2 = float(data.feature2)
        
        patient_pca = np.array([[f1, f2]])
        prediction = model.predict(patient_pca)
        
        # The model predicts "M" or "B"
        result = "Malignant" if prediction[0] == "M" else "Benign"
        
        return {"prediction": result}
    except Exception as e:
        return {"prediction": f"Error: {str(e)}"}
