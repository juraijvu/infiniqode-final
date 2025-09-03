# DigitalCraft Platform - Local Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download from postgresql.org](https://www.postgresql.org/downloads/)
- **Git** - [Download from git-scm.com](https://git-scm.com/)

## Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd digitalcraft-platform
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Database Setup

### Option A: PostgreSQL (Recommended)

1. **Start PostgreSQL service:**
   ```bash
   # On Windows (if using PostgreSQL service)
   net start postgresql
   
   # On macOS (if using Homebrew)
   brew services start postgresql
   
   # On Linux (Ubuntu/Debian)
   sudo systemctl start postgresql
   ```

2. **Create database and user:**
   ```bash
   # Connect to PostgreSQL as superuser
   psql -U postgres
   
   # Create database
   CREATE DATABASE digitalcraft_local;
   
   # Create user (optional, you can use postgres user)
   CREATE USER digitalcraft WITH PASSWORD 'your_secure_password';
   
   # Grant privileges
   GRANT ALL PRIVILEGES ON DATABASE digitalcraft_local TO digitalcraft;
   
   # Exit psql
   \q
   ```

### Option B: SQLite (Offline Development)

If you prefer a file-based database for offline development:

1. **Install SQLite support:**
   ```bash
   npm install better-sqlite3 @types/better-sqlite3
   ```

2. **Modify database configuration** (see Advanced Configuration section)

## Step 4: Environment Configuration

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the .env file with your database settings:**

   **For PostgreSQL:**
   ```env
   NODE_ENV=development
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/digitalcraft_local
   PGUSER=postgres
   PGHOST=localhost
   PGDATABASE=digitalcraft_local
   PGPORT=5432
   PGPASSWORD=your_password
   PORT=5000
   SESSION_SECRET=your-random-session-secret-here
   ```

   **For SQLite:**
   ```env
   NODE_ENV=development
   DATABASE_URL=file:./database.sqlite
   PORT=5000
   SESSION_SECRET=your-random-session-secret-here
   ```

## Step 5: Database Schema Setup

```bash
# Push the database schema
npm run db:push

# If you encounter issues, force the push
npm run db:push --force
```

## Step 6: Start the Application

```bash
# Start in development mode
npm run dev
```

The application will be available at: `http://localhost:5000`

## Step 7: Verify Installation

1. Open your browser and navigate to `http://localhost:5000`
2. You should see the DigitalCraft homepage
3. Check that the API endpoints are working:
   - `http://localhost:5000/api/services`
   - `http://localhost:5000/api/blog`
   - `http://localhost:5000/api/testimonials`

## Production Build

To build for production:

```bash
# Build the application
npm run build

# Start in production mode
npm start
```

## Troubleshooting

### Common Issues

1. **Port 5000 already in use:**
   ```bash
   # Find process using port 5000
   lsof -i :5000
   
   # Kill the process (replace PID with actual process ID)
   kill -9 PID
   
   # Or change the port in .env file
   PORT=3000
   ```

2. **Database connection errors:**
   - Ensure PostgreSQL service is running
   - Verify database credentials in .env file
   - Check if the database exists

3. **Permission errors:**
   ```bash
   # On Linux/macOS, you might need to adjust permissions
   sudo chown -R $USER:$USER ~/.postgresql
   ```

### Database Reset

If you need to reset the database:

```bash
# Drop and recreate database (PostgreSQL)
psql -U postgres -c "DROP DATABASE IF EXISTS digitalcraft_local;"
psql -U postgres -c "CREATE DATABASE digitalcraft_local;"

# Push schema again
npm run db:push --force
```

## Advanced Configuration

### Switching to SQLite

If you want to use SQLite instead of PostgreSQL:

1. **Install SQLite dependencies:**
   ```bash
   npm install drizzle-orm better-sqlite3 @types/better-sqlite3
   ```

2. **Update server/storage.ts:**
   ```typescript
   import { drizzle } from 'drizzle-orm/better-sqlite3';
   import Database from 'better-sqlite3';
   
   const sqlite = new Database('./database.sqlite');
   const db = drizzle(sqlite);
   ```

3. **Update shared/schema.ts** to use SQLite types instead of PostgreSQL types

4. **Update .env:**
   ```env
   DATABASE_URL=file:./database.sqlite
   ```

### Adding Environment Secrets

For production or when using external APIs:

```env
# OpenAI Integration
OPENAI_API_KEY=your_openai_api_key

# Email Service (SendGrid, Mailgun, etc.)
EMAIL_API_KEY=your_email_service_key

# Payment Processing (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key

# Analytics
GOOGLE_ANALYTICS_ID=your_ga_id
```

## Development Workflow

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Make changes to code** - The server will automatically restart

3. **Database changes:**
   ```bash
   # After modifying shared/schema.ts
   npm run db:push
   ```

4. **Type checking:**
   ```bash
   npm run check
   ```

## Project Structure

```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and database schema
├── .env.example     # Environment template
├── package.json     # Dependencies and scripts
└── drizzle.config.ts # Database configuration
```

## Support

If you encounter any issues:

1. Check the console logs for error messages
2. Verify all dependencies are installed correctly
3. Ensure the database is running and accessible
4. Check the .env file configuration

For additional help, please refer to the documentation or create an issue in the repository.