# Mini CRM - Lead Management System

A simple full stack Lead Management System built using:
- React + Vite
- Node.js + Express
- PostgreSQL

## Features
- Add Lead
- View Leads
- Update Lead Status
- Delete Lead
- Dashboard Statistics
- Search Leads
- Form Validation

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
DATABASE_URL=YOUR_DATABASE_URL
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# PostgreSQL Table

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