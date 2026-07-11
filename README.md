# 📚 Digital Ebook Library

A full-stack Digital Ebook Library application built using **Ruby on Rails API** and **React**. The application allows users to upload, manage, search, read, download, and delete ebooks through a clean and user-friendly interface.

---

## 🚀 Project Overview

The Digital Ebook Library is a simple yet complete ebook management system. Users can:

* Upload PDF ebooks
* View all uploaded ebooks
* Search ebooks by title, author, or file name
* Read ebooks
* Download ebooks
* Delete ebooks
* Experience proper loading, empty, and error states

The backend is built with **Ruby on Rails API**, while the frontend is developed using **React**.

---

# 🛠 Tech Stack

## Backend

* Ruby 3.2.1
* Ruby on Rails 7.1
* PostgreSQL
* Active Storage
* RSpec
* FactoryBot
* Faker
* Rack CORS

## Frontend

* React (Vite)
* React Router DOM
* Axios
* React Hooks

---

# 📁 Project Structure

```
ebook-library/

├── backend/
│   ├── app/
│   ├── config/
│   ├── spec/
│   └── storage/
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   ├── assets/
    │   └── App.jsx
```

---

# ✨ Features

## Backend

* RESTful API
* Ebook Upload
* Ebook Listing
* Ebook Details
* Search API
* Download API
* Delete API
* Active Storage
* File Validation
* JSON Responses
* Error Handling
* RSpec Test Cases

---

## Frontend

* Ebook Library Dashboard
* Upload Ebook
* Search Ebook
* Read Ebook
* Download Ebook
* Delete Ebook
* Loading State
* Empty State
* Responsive UI

---

# 📌 API Endpoints

## Get All Ebooks

```
GET /api/v1/ebooks
```

---

## Upload Ebook

```
POST /api/v1/ebooks
```

Form Data

```
title
author
file
cover (optional)
```

---

## Get Single Ebook

```
GET /api/v1/ebooks/:id
```

---

## Search Ebook

```
GET /api/v1/ebooks/search?q=keyword
```

---

## Download Ebook

```
GET /api/v1/ebooks/:id/download
```

---

## Delete Ebook

```
DELETE /api/v1/ebooks/:id
```

---

# 🗄 Database

## Ebook

| Column     | Type     |
| ---------- | -------- |
| id         | bigint   |
| title      | string   |
| author     | string   |
| created_at | datetime |
| updated_at | datetime |

Attachments

* file
* cover (optional)

---

# ⚙ Backend Setup

Clone the repository

```bash
git clone <repository-url>
```

Move to backend

```bash
cd backend
```

Install dependencies

```bash
bundle install
```

Create database

```bash
rails db:create
```

Run migrations

```bash
rails db:migrate
```

Install Active Storage

```bash
rails active_storage:install
rails db:migrate
```

Start server

```bash
rails server
```

Backend runs on

```
http://localhost:3000
```

---

# 💻 Frontend Setup

Move to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run project

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🧪 Running Tests

Backend tests

```bash
bundle exec rspec
```

Current Status

```
7 Examples
0 Failures
```

---

# 📝 Manual Testing Checklist

* Upload a PDF ebook
* View uploaded ebooks
* Search by title
* Search by author
* Search by filename
* Read ebook
* Download ebook
* Delete ebook
* Empty library state
* Validation errors
* Invalid file upload

---

# 🤖 AI Tools Used

The following AI tools were used as development assistants during this assignment:

* ChatGPT

### AI Assistance

* Project architecture planning
* API design guidance
* React component structure
* Debugging support
* Code optimization suggestions
* Test case guidance
* Documentation drafting

### Manual Work

All generated code was manually reviewed, integrated, tested, and modified where necessary. The final implementation, testing, debugging, and project integration were completed manually.

---

# 📸 Screenshots

Include screenshots for:

* Library Dashboard
* Upload Ebook
* Search
* Read Ebook
* Download
* Delete Confirmation

---

# ⚠ Known Limitations

* PDF reading opens in the browser for compatibility.
* EPUB reading is not implemented.
* Authentication and authorization are not included.
* Cover image generation is optional and not implemented.

---

# 🚀 Future Enhancements

* User Authentication
* EPUB Support
* Bookshelf-style UI
* Last Read Position
* Sorting
* Filtering
* Pagination
* Docker Support
* Cloud Storage (AWS S3)
* Role-Based Access Control

---

# 📋 Assignment Requirements Covered

* Ruby on Rails API ✅
* React Frontend ✅
* Ebook Upload ✅
* Ebook Listing ✅
* Ebook Search ✅
* Ebook Reading ✅
* Ebook Download ✅
* Ebook Delete ✅
* Active Storage ✅
* API Error Handling ✅
* Validations ✅
* Backend Testing ✅
* AI Usage Documentation ✅
* Professional Documentation ✅

---

# 👨‍💻 Author

**Govind Birajdar**

Ruby on Rails & Full Stack Developer
