<div align="center">
  
# ✨ SVM: Heart Disease Prediction ✨
  
**A Full-Stack Machine Learning Application**

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)

</div>

---

## 📖 Overview

This project applies a **Support Vector Machine (SVM)** to predict heart disease risk based on patient data.

This repository showcases a complete pipeline, encompassing data processing, model training, and integration into a RESTful API and a React frontend.

---

## 🌟 Key Features

- **Specific Algorithm Used:** Demonstrates implementation and usage of this specific model type.
- **Modern Backend:** Built with **FastAPI** for high performance and easy-to-use automatic interactive documentation.
- **Interactive Frontend:** A clean, responsive user interface built with **React** to seamlessly interact with the ML model.

---

## 📂 Project Structure Details

### 🧠 Model & Data
- `data/heart.csv` - Patient dataset.
- `train_models/SVM.ipynb` - Training notebook.

### 🌐 Web Application
- **`backend/main.py`** - FastAPI server exposing the `/predict` endpoint, ready to load the `.pkl` model.
- **`frontend/App.jsx`** - React component with inputs tailored for the model's features.
- **`frontend/App.css`** - Clean and modern styling for the frontend.

---

## 🚀 Getting Started

### 1️⃣ Backend Setup (FastAPI)

Navigate to the `backend` directory and set up the Python environment:

```bash
cd backend

# Install required dependencies
pip install fastapi uvicorn pydantic joblib pandas scikit-learn

# Run the backend server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
*The API will be available at `http://localhost:8000`.*
*Interactive API docs available at `http://localhost:8000/docs`.*

### 2️⃣ Frontend Setup (React)

Integrate the frontend components into a React application:

```bash
# Copy the frontend/ contents to your React project.
# Install axios for API requests
npm install axios

# Start your React app (e.g., if using Vite or Create React App)
npm start  # or npm run dev
```

---

## 🛠️ Tech Stack

- **Machine Learning:** `scikit-learn`, `pandas`, `SVC`
- **Backend:** Python, FastAPI, Uvicorn, Pydantic
- **Frontend:** React, Axios, CSS3

---

<div align="center">
  <i>Built with ❤️ using modern web and ML technologies.</i>
</div>
