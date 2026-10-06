# Rent Tracker API

A RESTful API built with **Node.js, Express.js, and MongoDB** to track monthly rent payments.

## 📌 Project Overview

The Rent Tracker API allows users to store and manage rental information such as:

* Tenant name
* Monthly rent amount
* Property type
* Payment status
* Due date

The API supports complete **CRUD operations**, along with filtering and sorting.

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Postman** – API testing
* **dotenv** – Environment variable management

## 📂 Project Structure

```text
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── rentController.js
│
├── middlewares/
│   └── errorhandler.js
│
├── models/
│   └── rent.js
│
├── routers/
│   └── rents.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## 📋 Rent Model

| Field     | Type    | Rules                           |
| --------- | ------- | ------------------------------- |
| `tenant`  | String  | Required, trimmed               |
| `rent`    | Number  | Required, 500–200000            |
| `type`    | String  | Required: `house`, `pg`, `shop` |
| `paid`    | Boolean | Default: `false`                |
| `dueDate` | Date    | Required                        |

## 🚀 API Endpoints

### Create a Rent

```http
POST /rents
```

Example request:

```json
{
  "tenant": "Mahesh",
  "rent": 6500,
  "type": "pg",
  "dueDate": "2026-11-05"
}
```

Response status:

```text
201 Created
```

---

### Get All Rents

```http
GET /rents
```

Returns all rent records.

Response status:

```text
200 OK
```

### Filter by Property Type

```http
GET /rents?type=house
```

Returns only rents where the property type is `house`.

### Sort by Rent

```http
GET /rents?sort=rent
```

Returns rent records in ascending order of rent amount, from lowest to highest.

### Get a Single Rent

```http
GET /rents/:id
```

Returns a specific rent record.

Possible responses:

```text
200 OK
404 Not Found
400 Bad Request — Invalid id
```

### Update a Rent

```http
PUT /rents/:id
```

Updates an existing rent record and returns the updated document.

Possible responses:

```text
200 OK
404 Not Found
```

### Delete a Rent

```http
DELETE /rents/:id
```

Deletes an existing rent record.

Possible responses:

```text
200 OK
404 Not Found
```

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd rent-tracker-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
```

The `.env` file should not be committed to GitHub.

### 4. Start the server

```bash
node index.js
```

For development with nodemon:

```bash
npx nodemon index.js
```

The API runs on:

```text
http://localhost:3000
```

## 🧪 Testing

The API can be tested using **Postman**.

Important test cases include:

* Creating a rent with valid data
* Creating a rent without a tenant
* Creating a rent below the minimum allowed amount
* Creating a rent with an invalid property type
* Getting all rents
* Filtering by property type
* Sorting by rent
* Getting a rent using its ID
* Testing an invalid ID format
* Updating a rent
* Deleting a rent

## 🔒 Environment Variables

The MongoDB connection string is stored in `.env` and excluded from version control using `.gitignore`.

```text
.env
node_modules/
```

## 📚 Learning Focus

This project was built to practice:

* REST API development
* Express.js routing
* MVC-style project structure
* Controllers
* Mongoose schemas and validation
* MongoDB CRUD operations
* Query parameters
* HTTP status codes
* Error handling
* API testing with Postman
