@echo off
echo ========================================================
echo Starting Full-Stack AI Application...
echo ========================================================

:: Check Python installation
python --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Python is not installed or not added to PATH. Please install Python.
    pause
    exit /b
)

:: Check Node.js installation
node --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed or not added to PATH. Please install Node.js.
    pause
    exit /b
)

:: Step 1: Install backend dependencies and start FastAPI server
echo.
echo Installing Backend Dependencies...
cd backend
python -m pip install -r requirements.txt

echo.
echo Starting FastAPI Backend Server...
start cmd /k "uvicorn main:app --reload --host 0.0.0.0 --port 8000"

:: Step 2: Install frontend dependencies and start React server
echo.
echo Installing Frontend Dependencies...
cd ../frontend
call npm install

echo.
echo Starting React Frontend Server...
start cmd /k "npm run dev"

echo.
echo Both servers are starting in separate windows.
echo Frontend will be available at http://localhost:5173
echo Backend API will be available at http://localhost:8000
echo.
pause
