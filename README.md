# Express.js + PostgreSQL CRUD API

## Setup Instructions

### 1. Install dependencies

```
npm install
```

### 2. Set up your PostgreSQL database

- Create a database and a user with appropriate permissions.
- Run the following SQL to create the `users` table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INTEGER
);
```

### 3. Configure environment variables

- Copy `.env` and fill in your PostgreSQL credentials.

### 4. Start the server

```
npm start
```
Or for development with auto-reload:
```
npm run dev
```

### 5. API Endpoints

- `GET    /users`         - Get all users
- `GET    /users/:id`     - Get a specific user
- `POST   /users`         - Create a new user (`{ "name": "...", "email": "...", "age": ... }`)
- `PUT    /users/:id`     - Update a user (`{ "name": "...", "email": "...", "age": ... }`)
- `DELETE /users/:id`     - Delete a user

---

## Notes

- All responses are in JSON.
- Basic error handling is included.