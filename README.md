# Energy Monitoring Dashboard

A comprehensive SaaS platform for real-time energy monitoring, management, and optimization. This dashboard provides users with detailed insights into their energy consumption, green energy usage, and AI-driven recommendations for efficiency.

## 🚀 Features

- **Real-time Monitoring**: Track electricity, water, and gas consumption with interactive charts.
- **Green Energy Integration**: Visualize renewable energy sources (Solar, Wind) and grid dependency.
- **3D Visualization**: Interactive 3D building model showing live connection statuses.
- **Smart Recommendations**: AI-powered suggestions to reduce energy footprint and costs.
- **Detailed Reporting**: carbon footprint analysis and cost tracking.
- **Responsive Design**: Fully responsive interface built with a custom design system.

## 🛠️ Tech Stack

### Backend

- **Framework**: [NestJS](https://nestjs.com/) (Node.js)
- **Database**: PostgreSQL (Production) / SQLite (Local Dev)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT & Passport
- **Testing**: Jest

### Frontend

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Visualization**: [Recharts](https://recharts.org/) (Charts), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (3D)
- **State Management**: Zustand
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- Docker (optional, for PostgreSQL)

### 🔧 Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Environment Configuration:
   The project is pre-configured to use **SQLite** for local development to avoid Docker dependency issues.
   Ensure `.env` contains:

   ```env
   DATABASE_URL="file:./dev.db"
   PORT=3000
   JWT_SECRET="your-secret-key"
   ```

4. Database Setup:

   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Push schema to SQLite database
   npx prisma db push
   ```

5. Start the server:
   ```bash
   npm run start:dev
   ```
   The API will be available at `http://localhost:3000`.

### 🎨 Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 🧪 Testing

### Backend Tests

Run unit tests for the backend services and controllers:

```bash
cd backend
npm run test
```

### Frontend Tests

Run component rendering and logic tests:

```bash
cd frontend
npm run test
```

## 📂 Project Structure

```
.
├── backend/                # NestJS Application
│   ├── src/
│   │   ├── auth/           # Authentication Module
│   │   ├── devices/        # Device Management
│   │   ├── green-energy/   # Renewable Sources
│   │   ├── prisma/         # Database Service
│   │   ├── properties/     # Property Management
│   │   ├── readings/       # Energy Data Handling
│   │   └── recommendations/# AI Recommendations
│   └── test/               # E2E Tests
│
├── frontend/               # React Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/         # Three.js Models
│   │   │   ├── layout/     # Dashboard Layouts
│   │   │   └── widgets/    # Dashboard Widgets
│   │   └── lib/            # Utilities
│
└── README.md               # Project Documentation
```

## 📄 License

Private / Proprietary
