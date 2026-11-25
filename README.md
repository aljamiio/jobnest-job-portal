# JobNest — Full-Stack Job & Internship Portal

JobNest is a modern full-stack job and internship portal designed to connect job seekers with employers through a user-friendly and efficient platform.

The platform will provide job seekers with opportunities to discover jobs, manage applications, build professional profiles, and track their career progress. Employers will be able to create company profiles, publish job vacancies, manage applicants, and monitor recruitment activities.

JobNest will initially focus on the Bangladesh job market, with the possibility of supporting international opportunities in the future.

---

## 🎯 Project Objectives

- Build a complete job and internship portal.
- Provide separate experiences for Candidates, Employers, and Administrators.
- Simplify job searching and application management.
- Help employers manage recruitment efficiently.
- Develop a secure, scalable, and maintainable full-stack application.
- Provide a responsive interface for desktop, tablet, and mobile users.

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Context API
- Axios

## Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- bcrypt.js

## Database

- MongoDB
- Mongoose

## Additional Tools & Technologies

- Git & GitHub
- Cloudinary (File and Resume Uploads)
- Jest (Testing)
- Supertest (API Testing)
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---

# 👥 User Roles

JobNest will support three primary user roles.

### 1. Candidate / Job Seeker

- Register and log in.
- Create and manage professional profiles.
- Upload resumes.
- Browse and search jobs.
- Filter jobs by category, location, salary, and job type.
- View detailed job information.
- Apply for jobs.
- Save jobs for later.
- Track application status.
- Receive notifications.
- Manage submitted applications.

### 2. Employer

- Register and log in.
- Create and manage company profiles.
- Publish new job vacancies.
- Edit and delete job postings.
- Manage published jobs.
- View applicants.
- Review candidate profiles and resumes.
- Update application statuses.
- Track recruitment activities.
- View basic recruitment analytics.

### 3. Administrator

- Access the admin dashboard.
- Manage registered users.
- Manage employer accounts.
- Manage companies.
- Review and approve job postings.
- Remove inappropriate job listings.
- Monitor applications and platform activity.
- Manage reports.
- Maintain platform security and administration.

---

# ✨ Complete Feature List

## A. Public Website

- Home Page
- Browse Jobs
- Job Details
- Search Jobs
- Advanced Job Filters
- Browse Companies
- Company Details
- About Us
- Contact Us
- Terms & Conditions
- Privacy Policy
- 404 Not Found Page

## B. Authentication System

- User Registration
- User Login
- Logout
- Forgot Password
- Password Reset
- Form Validation
- JWT Authentication
- Role-Based Authorization
- Protected Routes
- Secure Password Hashing
- Session Management

## C. Candidate Dashboard

- Dashboard Overview
- Candidate Profile
- Edit Profile
- Resume Upload
- Applied Jobs
- Saved Jobs
- Application Tracking
- Application Status
- Notifications
- Account Settings

## D. Employer Dashboard

- Employer Dashboard Overview
- Company Profile Management
- Create Job Posting
- Edit Job Posting
- Delete Job Posting
- Manage Active Jobs
- Manage Job Applications
- View Applicants
- View Candidate Profiles
- Download Candidate Resumes
- Update Application Status
- Recruitment Analytics

## E. Admin Dashboard

- Admin Overview
- User Management
- Candidate Management
- Employer Management
- Company Management
- Job Posting Management
- Job Approval System
- Application Monitoring
- Report Management
- Platform Statistics

## F. Advanced Features (Future Scope)

- Advanced Job Recommendation System
- AI-Based Job Matching
- AI Resume Analysis
- Real-Time Notifications
- Employer-Candidate Communication
- Interview Scheduling
- Recruitment Analytics
- Advanced Reporting System

---

# 🏗️ Complete System Architecture

JobNest will follow a modular full-stack architecture.

```text
JobNest/
│
├── client/                         # React Frontend
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── home/
│   │   │   ├── layout/
│   │   │   ├── jobs/
│   │   │   ├── dashboard/
│   │   │   └── forms/
│   │   │
│   │   ├── constants/
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── data/
│   │   │
│   │   ├── hooks/
│   │   │
│   │   ├── layouts/
│   │   │   ├── MainLayout.jsx
│   │   │   ├── CandidateLayout.jsx
│   │   │   ├── EmployerLayout.jsx
│   │   │   └── AdminLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   │
│   │   │   ├── jobs/
│   │   │   │   ├── Jobs.jsx
│   │   │   │   └── JobDetails.jsx
│   │   │   │
│   │   │   ├── companies/
│   │   │   │   ├── Companies.jsx
│   │   │   │   └── CompanyDetails.jsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   │
│   │   │   │   ├── candidate/
│   │   │   │   │   ├── CandidateDashboard.jsx
│   │   │   │   │   ├── Profile.jsx
│   │   │   │   │   ├── AppliedJobs.jsx
│   │   │   │   │   ├── SavedJobs.jsx
│   │   │   │   │   ├── Applications.jsx
│   │   │   │   │   └── Notifications.jsx
│   │   │   │   │
│   │   │   │   ├── employer/
│   │   │   │   │   ├── EmployerDashboard.jsx
│   │   │   │   │   ├── CompanyProfile.jsx
│   │   │   │   │   ├── PostJob.jsx
│   │   │   │   │   ├── ManageJobs.jsx
│   │   │   │   │   ├── Applicants.jsx
│   │   │   │   │   └── Analytics.jsx
│   │   │   │   │
│   │   │   │   └── admin/
│   │   │   │       ├── AdminDashboard.jsx
│   │   │   │       ├── ManageUsers.jsx
│   │   │   │       ├── ManageEmployers.jsx
│   │   │   │       ├── ManageJobs.jsx
│   │   │   │       ├── ManageCompanies.jsx
│   │   │   │       └── Reports.jsx
│   │   │   │
│   │   │   ├── applications/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   ├── Terms.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── routes/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── RoleBasedRoute.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── jobService.js
│   │   │   ├── applicationService.js
│   │   │   └── profileService.js
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/                         # Node.js Backend
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── cloudinary.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── profileController.js
│   │   │   ├── jobController.js
│   │   │   ├── companyController.js
│   │   │   ├── applicationController.js
│   │   │   ├── savedJobController.js
│   │   │   ├── notificationController.js
│   │   │   └── adminController.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── SeekerProfile.js
│   │   │   ├── Company.js
│   │   │   ├── Job.js
│   │   │   ├── Application.js
│   │   │   ├── SavedJob.js
│   │   │   ├── Notification.js
│   │   │   └── Report.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── profileRoutes.js
│   │   │   ├── jobRoutes.js
│   │   │   ├── companyRoutes.js
│   │   │   ├── applicationRoutes.js
│   │   │   ├── savedJobRoutes.js
│   │   │   ├── notificationRoutes.js
│   │   │   └── adminRoutes.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── roleMiddleware.js
│   │   │   ├── errorMiddleware.js
│   │   │   └── uploadMiddleware.js
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── emailService.js
│   │   │   └── notificationService.js
│   │   │
│   │   ├── utils/
│   │   │   ├── generateToken.js
│   │   │   └── apiResponse.js
│   │   │
│   │   ├── validators/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── tests/
│   │
│   ├── .env.example
│   └── package.json
│
├── docs/
│   ├── API_DOCUMENTATION.md
│   └── DATABASE_SCHEMA.md
│
├── .gitignore
└── README.md
```

*Note: This is the target architecture. Some folders and files are planned and will be created as development progresses.*

---

# 🗄️ Database Architecture

MongoDB with Mongoose will be used for data management.

### Planned Collections

| Collection     | Purpose                            |
| -------------- | ---------------------------------- |
| Users          | Authentication and user roles      |
| SeekerProfiles | Candidate professional information |
| Companies      | Employer company information       |
| Jobs           | Job and internship postings        |
| Applications   | Candidate job applications         |
| SavedJobs      | Saved job records                  |
| Notifications  | User notifications                 |
| Reports        | Platform reports and moderation    |

### Main Relationships

- A User can have one Candidate Profile.
- An Employer User can manage a Company.
- A Company can publish multiple Jobs.
- A Candidate can submit multiple Applications.
- A Job can receive multiple Applications.
- A Candidate can save multiple Jobs.
- Users can receive multiple Notifications.

---

# 🔌 Backend API Architecture

The backend will expose RESTful APIs.

### Authentication APIs

| Method | Endpoint                  | Purpose                |
| ------ | ------------------------- | ---------------------- |
| POST   | /api/auth/register        | Register user          |
| POST   | /api/auth/login           | User login             |
| GET    | /api/auth/me              | Get current user       |
| POST   | /api/auth/logout          | Logout                 |
| POST   | /api/auth/forgot-password | Request password reset |
| POST   | /api/auth/reset-password  | Reset password         |

### Job APIs

| Method | Endpoint       | Purpose         |
| ------ | -------------- | --------------- |
| GET    | /api/jobs      | Get all jobs    |
| GET    | /api/jobs/\:id | Get job details |
| POST   | /api/jobs      | Create job      |
| PUT    | /api/jobs/\:id | Update job      |
| DELETE | /api/jobs/\:id | Delete job      |

### Application APIs

| Method | Endpoint                      | Purpose                    |
| ------ | ----------------------------- | -------------------------- |
| POST   | /api/applications             | Apply for a job            |
| GET    | /api/applications/my          | Get candidate applications |
| GET    | /api/applications/job/\:jobId | Get job applicants         |
| PATCH  | /api/applications/\:id/status | Update application status  |

### Profile APIs

- GET /api/profiles/me
- PUT /api/profiles/me
- POST /api/profiles/resume

### Company APIs

- GET /api/companies
- GET /api/companies/\:id
- POST /api/companies
- PUT /api/companies/\:id

### Saved Job APIs

- POST /api/saved-jobs/\:jobId
- GET /api/saved-jobs
- DELETE /api/saved-jobs/\:jobId

### Admin APIs

- GET /api/admin/dashboard
- GET /api/admin/users
- GET /api/admin/jobs
- PATCH /api/admin/jobs/\:id/approval
- DELETE /api/admin/users/\:id

*API endpoints and request/response structures may evolve during backend development.*

---

# 🔐 Security Architecture

- JWT-based authentication.
- Password hashing using bcrypt.
- Role-based access control.
- Protected API routes.
- Input validation.
- Centralized error handling.
- Secure environment variable management.
- Authorized file uploads.
- Employer ownership checks for job management.
- Admin-only administrative operations.

---

# 🧪 Testing Strategy

### Frontend Testing

- Component Testing
- Form Validation Testing
- Navigation Testing
- Authentication Flow Testing
- Dashboard Functionality Testing
- Responsive UI Testing

### Backend Testing

- API Endpoint Testing
- Authentication Testing
- Authorization Testing
- Database Operation Testing
- Error Handling Testing
- Integration Testing

### Tools

- Jest
- Supertest
- Postman

---

# 🗺️ Development Roadmap

Development will follow three major phases.

# Phase A — Core Job Portal

Project Setup

Authentication Frontend

Login & Registration

Form Validation

Forgot Password Page

Mock Authentication

Home Page

Job Listing

Job Details

Job Search & Filtering

Candidate Dashboard

Candidate Profile

Applied Jobs

Saved Jobs

Employer Dashboard

Company Profile

Job Posting Management

Applicant Management

About & Contact Pages

Final Frontend Polish

# Phase B — Backend & Professional Features

Node.js & Express Setup

MongoDB Integration

Mongoose Models

REST API Development

JWT Authentication

Password Hashing

Role-Based Authorization

Candidate Profile API

Employer & Company APIs

Job Management APIs

Application Management APIs

Resume Upload

Admin Dashboard

Job Approval System

Notification System

API Testing

Frontend & Backend Integration

Deployment

# Phase C — Advanced Features (Future Scope)

AI-Based Job Recommendations

AI Resume Analysis

Job Matching System

Real-Time Notifications

Candidate-Employer Chat

Interview Scheduling

Advanced Recruitment Analytics

Advanced Reporting

# Security Considerations

Secure password storage using bcrypt.js.

JWT-based authentication.

Role-based access control.

Protected frontend and backend routes.

Input validation and sanitization.

Secure file upload handling.

Environment variable management.

Proper API error handling.

Authorization checks for sensitive operations.
---

# 🚀 Installation & Setup

### Prerequisites

- Node.js
- npm
- Git
- MongoDB

### Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
cd JobNest
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend development server:

```text
http://localhost:5173
```

### Backend Setup

*Backend setup will be available after server development begins.*

```bash
cd server
npm install
```

Create a `.env` file using `.env.example` and configure the required environment variables.

---

# 📌 Project Status

**Status: Active Development**

JobNest is currently undergoing frontend development. The authentication system, public pages, job listing, and job details functionality are being developed before backend integration.

The architecture and roadmap describe the complete planned system, including future backend and advanced features.

---

# 👨‍💻 Author

Md. Jubayer Al Jami
GitHub: @aljamiio

Software Engineering Student & Developer

Project: JobNest
Type: Full-Stack Job & Internship Portal
Architecture: MERN Stack
Target Market: Bangladesh (with future international expansion)

# License

This project is developed for educational and portfolio purposes.

