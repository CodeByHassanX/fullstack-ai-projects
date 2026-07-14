<div align="center">
  
# ✨ Hierarchical Clustering: Customer Segmentation ✨
  
**A Full-Stack Machine Learning Application**

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)

</div>

---

## 📖 Overview

This project utilizes **Hierarchical (Agglomerative) Clustering** to identify distinct customer groups based on spending habits, income, and age. Because standard Hierarchical Clustering does not support predicting segments for new customers, the backend intelligently employs a **K-Nearest Neighbors (KNN)** inductive model to assign incoming profiles to the pre-discovered clusters.

This repository highlights a robust, end-to-end full-stack workflow, mapping complex unsupervised learning onto a modern, responsive web application.

---

## 🌟 Key Features

- **Specific Algorithm Used:** Hierarchical (Agglomerative) Clustering with a transductive-to-inductive backend bridge via KNN.
- **Modern Backend:** Built with **FastAPI** for low-latency, scalable predictions and interactive API documentation.
- **Interactive Frontend:** A sleek, glassmorphic dark-mode user interface powered by **React** & **Vite**.

---

## 📂 Project Structure Details

### 🧠 Model & Data
- `data/Mall_Customers.csv` - The original customer demographics dataset.
- `train_model/train_model.ipynb` - Jupyter Notebook showcasing the EDA, scaling, and Hierarchical Clustering logic.
- `train_model/customer_clusters.csv` - Labeled customer data mapping each ID to its optimal cluster.
- `train_model/hierarchical_scaler.pkl` - Serialized standard scaler for consistent feature normalization.

### 🌐 Web Application
- **`backend/main.py`** - FastAPI server loading the saved scaler and labels, and wrapping them in a dynamic KNN classifier to answer `/predict` queries.
- **`frontend/src/App.jsx`** - React application capturing user inputs for Age, Income, and Spending Score.
- **`frontend/src/index.css`** - Premium vanilla CSS featuring variables, backdrop filters, and gradient texts.

---

## 🚀 Getting Started

We provide a convenient script to start the entire application concurrently:

### ⚡ Quick Start
Double-click the `run_app.bat` file in the project folder. It will automatically install all Python and Node.js dependencies and launch both the backend and frontend in separate command windows.

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
*The API is hosted at `http://localhost:8000`.*

### 2️⃣ Manual Frontend Setup (React)

Integrate the frontend components into a React application:

```bash
cd frontend

# Install dependencies
npm install

# Start your React app (Vite)
npm run dev
```
*The web interface is available at `http://localhost:5173`.*

---

## 🛠️ Tech Stack

- **Machine Learning:** `scikit-learn`, `pandas`, `AgglomerativeClustering`, `KNeighborsClassifier`
- **Backend:** Python, FastAPI, Uvicorn, Pydantic
- **Frontend:** React, Vite, Vanilla CSS

---

<div align="center">
  <i>Built with ❤️ using modern web and ML technologies.</i>
</div>
