# K-Means Customer Segmentation (Full-Stack)

This project is a complete full-stack web application that uses a trained Machine Learning model (K-Means Clustering) to segment customers into different groups based on their profiles.

## Architecture

The project is divided into three main components:
1. **Machine Learning Model (`train_model/`)**: Contains the Jupyter notebook used for training the model on the Mall Customers dataset. The trained `kmeans_customer_model.pkl` and `kmeans_scaler.pkl` are stored here.
2. **Backend API (`backend/`)**: A fast, modern REST API built with **FastAPI** in Python. It loads the pre-trained K-Means model and scaler, and provides a `/predict` endpoint that the frontend uses to get predictions.
3. **Frontend Application (`frontend/`)**: A sleek, responsive, glassmorphic user interface built with **React** and **Vite**. It allows users to easily input customer details and instantly see which segment they belong to.

## Input Features

To predict the customer segment, the model takes three inputs:
- **Age**: The customer's age.
- **Annual Income (k$)**: The customer's annual income in thousands of dollars.
- **Spending Score (1-100)**: A score assigned by the mall based on customer behavior and spending nature.

## How to Run

Running the application is incredibly simple. You do not need to start the backend and frontend separately.

1. Ensure you have **Python** and **Node.js** installed on your system.
2. Double-click the `run_app.bat` file located in the root of this folder.
3. The script will automatically:
   - Install any missing backend Python dependencies.
   - Start the FastAPI backend on `http://localhost:8000`.
   - Install any missing frontend Node.js dependencies.
   - Start the Vite React development server.

Two command prompt windows will open for the servers, and you can visit the frontend link (usually `http://localhost:5173`) in your browser to interact with the application.

## Aesthetic Design
The frontend employs a rich, dark-mode aesthetic utilizing Vanilla CSS. It features custom gradients, glassmorphism card designs, and micro-animations to deliver a highly premium user experience.
