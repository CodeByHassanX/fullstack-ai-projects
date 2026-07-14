<div align="center">
  
# ✨ K-Means: Customer Segmentation ✨
  
**A Full-Stack Machine Learning Application**

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)

</div>

---

## 📖 Overview

This project implements a **K-Means Clustering** algorithm to segment customers into different groups based on their profiles. It utilizes features like age, annual income, and spending score to find hidden patterns in customer data.

This repository showcases a complete pipeline, encompassing data processing, model training, and integration into a RESTful API and a beautifully styled React frontend.

---

## 🌟 Key Features

- **Specific Algorithm Used:** Demonstrates implementation and usage of K-Means clustering and feature scaling for Customer Segmentation.
- **Modern Backend:** Built with **FastAPI** for high performance and easy-to-use automatic interactive documentation.
- **Interactive Frontend:** A sleek, glassmorphic user interface built with **React** to seamlessly interact with the ML model.

---

## 📂 Project Structure Details

### 🧠 Model & Data
- `data/` - Mall Customers dataset.
- `train_model/train_model.ipynb` - Model training and scaling notebook.
- `train_model/kmeans_customer_model.pkl` - Serialized K-Means model.
- `train_model/kmeans_scaler.pkl` - Serialized standard scaler.

### 🌐 Web Application
- **`backend/main.py`** - FastAPI server exposing the `/predict` endpoint, ready to load the `.pkl` models.
- **`frontend/src/App.jsx`** - React component with inputs tailored for the model's features (Age, Income, Spending Score).
- **`frontend/src/index.css`** - Clean, modern, dark-mode styling for the frontend.

---

## 🚀 Getting Started

We provide a convenient script to run the entire application at once:

### ⚡ Quick Start
Double-click the `run_app.bat` file in the root folder. It will automatically install all Python and Node.js dependencies and start both servers in separate windows.

---

### 1️⃣ Manual Backend Setup (FastAPI)

Navigate to the `backend` directory and set up the Python environment:

```bash
cd backend

# Install required dependencies
pip install -r requirements.txt

# Run the backend server
uvicorn main:app --reload --port 8000
```
*The API will be available at `http://localhost:8000`.*

### 2️⃣ Manual Frontend Setup (React)

Integrate the frontend components into a React application:

```bash
cd frontend

# Install dependencies
npm install

# Start your React app (Vite)
npm run dev
```
*The frontend will be available at `http://localhost:5173`.*

---

## 🛠️ Tech Stack

- **Machine Learning:** `scikit-learn`, `pandas`, `KMeans`, `StandardScaler`
- **Backend:** Python, FastAPI, Uvicorn, Pydantic
- **Frontend:** React, Vite, Vanilla CSS

---

<div align="center">
  <i>Built with ❤️ using modern web and ML technologies.</i>
</div>
