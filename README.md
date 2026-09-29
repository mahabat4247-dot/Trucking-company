# RoadLine Trucking Website

A modern, professional frontend website for **RoadLine Trucking**, a logistics and transportation company headquartered in Chicago, IL.

This frontend application is built as a lightweight, performant React project designed to serve as a base project for DevOps practices including GitHub Actions CI/CD pipelines, Docker containerization, SonarQube code analysis, Trivy vulnerability scanning, AWS ECR image registry, and Kubernetes deployments.

## Features

- **Responsive Header & Navigation**: Smooth scrolling navigation bar with company logo, navigation links, and quote request button. Responsive mobile overlay menu.
- **Hero Section**: Modern logistics branding with call-to-action buttons ("Get a Quote" and "Our Services").
- **Services Section**: Interactive cards highlighting key logistics services:
  - Full Truckload (FTL)
  - Less Than Truckload (LTL)
  - Expedited Freight
  - Dedicated Transportation
- **About Us Section**: Highlighting company history ("Moving America Forward") with key operational metrics and statistics counters.
- **Fleet Section**: Overview of fleet capabilities including modern trucks, GPS tracking, regular maintenance, and professional drivers.
- **Why Choose Us**: Key advantages including 24/7 dispatch, real-time tracking, experienced drivers, safety focus, and reliable delivery.
- **Quote Request Form**: Comprehensive quote request form with client-side field validation and feedback state.
- **Contact Info & Footer**: Detailed company location (Chicago, IL), phone number, dispatch email, operating hours, and quick links.

## Tech Stack

- **React 19**
- **Vite 6**
- **Lucide React** (Minimal, clean UI icons)
- **CSS3** (Responsive CSS variables, Grid, Flexbox)

---

## Development & Usage Instructions

### Prerequisites

Ensure you have Node.js (v18+) and npm installed on your machine.

### Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

### Development Server

Start the Vite development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Code Linting

Run Oxlint to check for code quality and syntax issues:

```bash
npm run lint
```

### Production Build

Build the production-ready static assets:

```bash
npm run build
```

The compiled assets will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Fleet.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── Services.jsx
│   │   └── WhyChooseUs.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
