# Lead Management CRM

A full-stack Lead Management System (Mini CRM) built using React, Node.js, Express, and PostgreSQL.  
This application allows users to manage leads efficiently with CRUD operations, dashboard statistics, and search functionality.

---

## Live Demo

Frontend:  
https://mini-crm-pi-woad.vercel.app/

Backend API:  
https://mini-crm-seg2.onrender.com/

---

## GitHub Repository

https://github.com/karthiknani229-art/mini-crm

---

## Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL (Neon DB)

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Features

- Add Leads
- View Leads
- Update Lead Status
- Delete Leads
- Search Leads
- Dashboard Statistics
- PostgreSQL Database Integration
- Responsive UI
- REST API Integration

---

## Project Structure

```txt
mini-crm/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── db/
│   ├── index.js
│   └── .env.example
│
└── README.md
```

---

## API Endpoints

### Get All Leads
```http
GET /api/leads
```

### Add Lead
```http
POST /api/leads
```

### Update Lead Status
```http
PUT /api/leads/:id
```

### Delete Lead
```http
DELETE /api/leads/:id
```

---

## Database Schema

```sql
CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    source VARCHAR(20) NOT NULL,
    status VARCHAR(30) DEFAULT 'Interested',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/karthiknani229-art/mini-crm.git
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Create `.env` file:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

```env
PORT=5000
DATABASE_URL=your_database_url
```



## Author

Karthik
