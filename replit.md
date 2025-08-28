# DigitalCraft Agency Platform

## Overview

DigitalCraft is a modern digital agency website built as a full-stack application featuring a React TypeScript frontend with Express.js backend. The platform showcases the agency's services, portfolio, blog content, and provides client contact functionality. The application uses a glass morphism design aesthetic with modern UI components and responsive layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming and glass morphism effects
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with TypeScript for consistent language across the stack
- **Framework**: Express.js for RESTful API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Validation**: Drizzle-Zod integration for schema validation
- **Development**: tsx for TypeScript execution in development

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon Database serverless hosting
- **Schema Design**: Relational design with tables for users, services, blog posts, portfolio items, contact inquiries, and testimonials
- **Migration Management**: Drizzle Kit for database schema migrations and management

### Component Architecture
- **Design System**: Glass morphism theme with CSS custom properties for consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI primitives ensure WCAG compliance and keyboard navigation
- **SEO Optimization**: Custom SEOHead component for meta tags and structured data

### Content Management
- **Services**: Dynamic service pages with detailed descriptions, features, and pricing
- **Portfolio**: Project showcase with categorization, technology stacks, and case studies
- **Blog**: Content management with published/draft states, tags, and reading time estimates
- **Testimonials**: Client feedback system with rating display

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React plugin for Vite build system
- **@tanstack/react-query**: Data fetching and caching solution
- **wouter**: Lightweight router for single-page application navigation
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL database connection

### UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: Schema validation library for TypeScript
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Development Tools
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast bundler for production builds
- **drizzle-kit**: Database schema management and migration tool

### Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: URL-safe unique string ID generator

### Utilities
- **date-fns**: Date manipulation and formatting library
- **cmdk**: Command palette component for search functionality