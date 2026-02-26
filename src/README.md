# 🧠 MBTI Cognitive Chatbot

![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)

## 🎥 Demo

🔗 Live Demo: _Coming Soon_  
📹 Demo Video: _Add Loom/YouTube Link Here_



An advanced AI-powered cognitive chatbot that integrates MBTI personality prediction, emotion-aware NLP, and contextual conversation management to deliver psychologically informed, personalized interactions.

This project demonstrates end-to-end integration of machine learning inference,
secure backend architecture, and containerized microservices,
simulating production-grade AI system design.

---

## 🚀 Project Overview

## ✨ Key Features

- 🔐 Secure JWT-based authentication system
- 🧠 Real-time MBTI personality inference
- 🎭 Emotion-aware response adaptation
- 🌍 Multi-language translation support
- 📦 Dockerized multi-container architecture
- 🔌 External AI integration (HuggingFace + Gemini)
- ☁️ Cloud-ready MongoDB Atlas integration

The system combines:

- **MBTI Personality Classification** (custom ML model)
- **Emotion & Tone Analysis** (HuggingFace, Gemini APIs)
- **Context-Aware Conversation Handling**
- **Secure REST API Architecture**
- **Containerized Microservice Deployment**

It is designed to simulate real-world AI integration within scalable backend infrastructure.

---

## 🏗️ System Architecture


The application follows a modular microservice architecture.

### Architecture & Workflow Visuals


Below are key diagrams and visuals illustrating the MBTI Chatbot architecture and workflow. All images are located in the `src/assets` folder:

#### MBTI Chatbot Containerization and Deployment
![Containerization and Deployment](src/assets/MBTI-Chatbot-Containerization-and-Deployment.png)

#### MBTI Chatbot Flow
![Chatbot Flow](src/assets/MBTI-Chatbot-Flow.png)

#### MBTI Chatbot Request Processing Flow
![Request Processing Flow](src/assets/MBTI-Chatbot-Request-Processing-Flow.png)

#### MBTI Chatbot Service Level
![Service Level](src/assets/MBTI-Chatbot-Service-Level.png)

---

### High-Level Flow

```mermaid
graph TD
    A[User] -->|Interacts| B[React Client]
    B -->|REST API| C[Node.js/Express Server]
    C -->|Model Request| D[ML Model Service (Python)]
    C -->|Database Ops| E[MongoDB Atlas]
    C -->|External AI| F[HuggingFace / Gemini APIs]
    D -->|Prediction Response| C
    C -->|JSON Response| B
```

---

### Service Breakdown

```mermaid
flowchart TD
    subgraph Frontend
        A1[React SPA]
    end

    subgraph Backend
        B1[Express API Layer]
        B2[Auth Controller]
        B3[Chat Controller]
        B4[User Controller]
        B5[Translation Service]
        B6[Summarization Service]
    end

    subgraph ML_Service
        C1[Python Model API]
        C2[MBTI Classification Model]
    end

    subgraph Database
        D1[MongoDB Atlas]
    end

    A1 --> B1
    B1 --> B2
    B1 --> B3
    B1 --> B4
    B1 --> B5
    B1 --> B6
    B1 --> C1
    C1 --> C2
    B1 --> D1
```

---

## 🛠️ Tech Stack

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login & receive JWT |
| POST   | /api/chat          | Send message to chatbot |
| GET    | /api/user/profile  | Get user profile |

### Frontend
- React.js (Single Page Application)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

### Machine Learning
- Python (Flask/FastAPI)
- Custom MBTI Classification Model
- HuggingFace API
- Gemini API

### DevOps
- Docker (multi-container setup)
- Environment-based configuration
- Modular service deployment

---

## ⚙️ Setup & Deployment

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/aryankumar4848/MBTI-Chatbot.git
cd MBTI-Chatbot
```

---

### 2️⃣ Download the ML Model


Place the MBTI model file inside:

```
MLmodel/
```

Model files are excluded from version control due to size constraints.

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside `server/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=2h
HUGGINGFACE_API_KEY=your_key
GEMINI_API_KEY=your_key
```

⚠️ Never commit `.env` to version control.

---

## 🐳 Dockerized Deployment

From the project root:

### Client
```bash
docker build -t mbti-client ./client
docker run -d -p 3000:3000 mbti-client
```

### Server
```bash
docker build -t mbti-server ./server
docker run -d -p 5000:5000 mbti-server
```

### ML Model Service
```bash
docker build -t mbti-mlmodel ./MLmodel
docker run -d -p 5001:5001 mbti-mlmodel
```

---

## 🌐 Access Application

Once all services are running:

```
http://localhost:3000
```

---

## 🔐 Security Practices

- JWT-based authentication
- Environment variable isolation
- API key abstraction
- Secure MongoDB Atlas configuration
- Service isolation for ML inference

---

## 📈 Scalability Considerations

## 📁 Project Structure

MBTI-Chatbot/
│
├── src/
│   ├── client/        # React frontend
│   ├── server/        # Express backend
│   ├── MLmodel/       # Python ML service
│   └── assets/        # Architecture diagrams
│
└── README.md

- Independent ML inference service
- Stateless backend design
- Horizontal scalability per service
- Containerized deployment model
- Externalized configuration management

---

## 🎓 Research Context

Developed as part of research in:

- Personality-driven conversational AI
- Emotion-aware NLP systems
- Cognitive interaction modeling

**Research Paper:**  
[Add Research Paper Link Here]

---

## 📌 Future Enhancements

- Kubernetes orchestration
- Persistent conversational memory
- Transformer-based fine-tuning
- CI/CD pipeline automation
- Cloud-native deployment

---

## 👥 Contributors

- Aryan Kumar
- Basavaraj Bhajantri
- Hariprasad BR
- I Suprabath Reddy

For research inquiries or collaboration, please contact the contributors.

---

## 📄 License

This project is intended for academic and research demonstration purposes.