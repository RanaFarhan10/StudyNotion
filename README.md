# StudyNotion

A modern, responsive e-learning web platform built with React, Vite, and Tailwind CSS designed to empower students and instructors through online coding education.

---

## Overview

**StudyNotion** is an ed-tech Single-Page Application (SPA) designed to make learning code accessible, flexible, and engaging. The platform provides intuitive course discovery, student learning dashboards, account creation for both students and instructors, and protected route access control.

### Purpose & Value Proposition
- **Flexible Learning**: Offers a structured course catalog covering modern technologies like Web Development, Python, React, Data Science, and Machine Learning.
- **Role-Based Onboarding**: Supports tailored onboarding flows for both **Students** and **Instructors**.
- **Interactive UI**: Delivers a sleek dark-themed interface with immediate visual feedback via toast notifications and dynamic route protection.

---

## Features

- **Interactive Navigation Bar**: Responsive header featuring brand logo, quick navigation links, and dynamic authentication controls (`Login`, `Sign in`, `Logout`, `Dash Board`).
- **Hero & Landing Page (`/`)**: Promotes instructor onboarding, course highlights, and quick CTA buttons for prospective learners.
- **Authentication & Account Creation**:
  - **Login (`/Login`)**: Form supporting email and password login with a password visibility toggle (`Show`/`Hide`) and Google sign-in UI option.
  - **Sign Up (`/SignUp`)**: Toggleable account creation for **Student** vs **Instructor** roles with password mismatch validation.
- **Route Guarding (`ProtectedRoute`)**: Wraps restricted pages (`/Contact`, `/Courses`, `/About`, `/DashBoard`), redirecting unauthenticated visitors to the login screen with an alert notification.
- **Student Dashboard (`/DashBoard`)**: Displays student profile greeting, learning statistics (enrolled courses count, total hours learned, certificates earned), and course progress bars.
- **Course Catalog (`/Courses`)**: Displays available courses in a responsive grid layout with course imagery, pricing, and descriptions.
- **About Us (`/About`)**: Details the founding story, mission, and vision of StudyNotion.
- **Contact Us (`/Contact`)**: Provides company contact details (Email, Address, Phone) alongside an inquiry contact form.
- **Toast Notifications**: Integrated notification toasts via `react-toastify` for user feedback on login, logout, and access control.

---

## Tech Stack

### Frontend & Core Dependencies
| Technology | Role | Version |
| :--- | :--- | :--- |
| **[React](https://react.dev/)** | UI Framework | `^18.3.1` |
| **[React DOM](https://reactpackage.com/package/react-dom)** | DOM Rendering | `^18.3.1` |
| **[Vite](https://vitejs.dev/)** | Build Tool & Dev Server | `^5.4.1` |
| **[React Router DOM](https://reactrouter.com/)** | Client-Side Routing | `^6.27.0` |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-First Styling | `^3.4.14` |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Icon Library | `^5.3.0` |
| **[React Toastify](https://fkhadra.github.io/react-toastify/introduction)** | UI Toast Notifications | `^10.0.6` |

### Development & Tooling
| Technology | Role | Version |
| :--- | :--- | :--- |
| **[ESLint](https://eslint.org/)** | Code Quality & Linting | `^9.9.0` |
| **[PostCSS](https://postcss.org/)** | CSS Transformation | `^8.4.47` |
| **[Autoprefixer](https://github.com/postcss/autoprefixer)** | Vendor Prefixing | `^10.4.20` |

---

## Project Structure

```text
study-notion/
├── public/
│   └── vite.svg              # Favicon / public static asset
├── src/
│   ├── assets/               # Branding assets and page illustration graphics
│   │   ├── frame.png
│   │   ├── login.png
│   │   ├── signup.png
│   │   └── Logo.svg
│   ├── components/           # Reusable functional components
│   │   ├── Footer.jsx        # Platform footer component
│   │   ├── LoginForm.jsx     # Login form component with password toggle
│   │   ├── Navbar.jsx        # Main navigation header
│   │   ├── ProtectedRoute.jsx# Auth wrapper for guarded routes
│   │   ├── SignUpForm.jsx    # Signup form with role toggle
│   │   └── Template.jsx      # Reusable authentication screen layout
│   ├── pages/                # Page components corresponding to app routes
│   │   ├── About.jsx         # About platform & founding story
│   │   ├── Contact.jsx       # Contact details & messaging form
│   │   ├── Courses.jsx       # Course catalog listing
│   │   ├── DashBoard.jsx     # Student dashboard & progress tracking
│   │   ├── Home.jsx          # Landing hero page
│   │   ├── Login.jsx         # Login page wrapper
│   │   └── SignUp.jsx        # Signup page wrapper
│   ├── App.css               # Global reset styles
│   ├── App.jsx               # Main App component & route declarations
│   ├── index.css             # Tailwind directive imports
│   └── main.jsx              # React DOM entry point
├── .gitignore                # Git ignored files & directories
├── eslint.config.js          # ESLint rules configuration
├── index.html                # HTML entry document
├── package.json              # Project dependencies & npm scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project documentation
├── tailwind.config.js        # Tailwind CSS theme configuration
└── vite.config.js            # Vite bundler configuration
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v16+ recommended) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd study-notion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the Vite local development server with Hot Module Replacement (HMR).
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Bundles the application for production into the `dist/` directory.

### `npm run preview`
Locally previews the production build created in `dist/`.

### `npm run lint`
Runs ESLint to check for syntax and code formatting issues across JavaScript files.
