# Risk Learning Platform

A workplace safety training platform integrating interactive Unity games with a web-based analytics dashboard, built for Regal Rexnord.

## Overview
This platform combines gamified learning experiences with performance tracking to enhance workplace safety training. Employees engage with Unity-built educational games while managers can monitor progress and performance through a centralized dashboard.

## Features
- 🎮 Interactive 2D safety training games built in Unity
- 📊 Real-time analytics dashboard
- 🔐 Secure user authentication
- 📈 Performance metrics tracking
- 🔄 Seamless game-to-web data integration

## Tech Stack
### Frontend
- React.js
- Material-UI
- JavaScript

### Backend
- Django
- REST APIs
- PostgreSQL

### Games
- Unity 2D
- C#

## Architecture
```
├── Frontend (React)
│   ├── Analytics Dashboard
│   ├── User Management
│   └── Performance Metrics Visualization
│
├── Backend (Django)
│   ├── Authentication
│   ├── Game Metrics Processing
│   └── API Endpoints
│
└── Unity Games
    ├── Safety Training Modules
    └── Metrics Collection
```

## Getting Started
1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
```

4. Set up environment variables
```
Create .env file with:
- Database credentials
- Django secret key
- Other necessary configurations
```

5. Run the development servers
```bash
# Frontend
npm start

# Backend
python manage.py runserver
```

## Contributing
Feel free to submit issues and pull requests.

## License
[Your chosen license]
