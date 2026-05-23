# Lead Management CRM

A full-stack Lead Management System (Mini CRM) built using React, Node.js, Express, and PostgreSQL. Manage leads efficiently with CRUD operations, dashboard statistics, and search functionality.

## Live Demo

- Frontend: https://mini-crm-pi-woad.vercel.app/
- Backend API: https://mini-crm-seg2.onrender.com/

## Tech Stack

**Frontend:** React.js, Vite, CSS

**Backend:** Node.js, Express.js

**Database:** PostgreSQL (Neon DB)

**Deployment:** Vercel (Frontend), Render (Backend)

## Features

- Add, update, and delete leads
- Search leads by name or status
- Update lead status (Interested / Not Interested / Converted)
- Dashboard statistics overview
- PostgreSQL database integration
- Responsive UI
- REST API integration

## Project Structure
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
## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/leads | Get all leads |
| GET | /api/leads?search= | Search leads |
| POST | /api/leads | Add new lead |
| PUT | /api/leads/:id | Update lead status |
| DELETE | /api/leads/:id | Delete lead |

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

## Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/karthiknani229-art/mini-crm.git
cd mini-crm
```

**2. Backend setup**

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside `/server`:
PORT=5000
DATABASE_URL=your_postgresql_connection_string

**3. Frontend setup**

```bash
cd client
npm install
npm run dev
```

## Author

Penta Karthik — [GitHub](https://github.com/karthiknani229-art)
