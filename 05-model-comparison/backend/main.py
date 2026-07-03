from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Placeholder: Load your model here
# model = joblib.load("model.pkl")

class InputData(BaseModel):
    feature1: float
    feature2: float

@app.get("/")
def home():
    return {"message": "API Running"}

@app.post("/predict")
def predict(data: InputData):
    # prediction = model.predict([[data.feature1, data.feature2]])
    # return {"predicted_score": round(float(prediction[0]), 2)}
    return {"predicted_score": "Prediction logic not yet implemented"}
