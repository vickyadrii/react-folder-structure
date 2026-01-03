# React Folder Structure for You 

A modern React application with a scalable folder structure, built with React 19, TypeScript, Vite, React Router v7, and Tailwind CSS v4.

## Technologies used:

[![My Skills](https://skillicons.dev/icons?i=react,ts,vite,tailwind)](https://skillicons.dev)

## Features

- ⚡️ **React 19** - Latest React version with improved performance
- 🎯 **TypeScript** - Full type safety
- 🚀 **Vite** - Lightning fast build tool
- 🎨 **Tailwind CSS v4** - Utility-first CSS with OKLCH color space
- 🎭 **Shadcn UI** - Beautiful and accessible component library
- 🗂️ **React Router v7** - Latest routing with loaders and protected routes
- 📦 **Zustand** - Lightweight state management
- 🎪 **React Hook Form + Zod** - Form validation
- 🌓 **Dark Mode** - Theme switching with next-themes
- 📏 **Prettier + ESLint** - Code formatting and linting
- 🐶 **Husky** - Git hooks for code quality

## Getting Started

Here are the steps below to run this project.

## Prerequisites

Make sure you have installed the following prerequisites before proceeding:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/vickyadrii/react-folder-structure.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-folder-structure
   ```

3. Install all the required dependencies using pnpm (recommended):
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   VITE_API_BASE_URL=http://localhost:3000 # Replace with your API base URL
   ```

## Usage

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Build for production:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

Preview production build:

```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```

Format code with Prettier:

```bash
pnpm format
# or
npm run format
# or
yarn format
```

## Project Structure

Here is the detailed project structure folder:

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Shadcn UI components (Button, Dialog, etc.)
├── configs/            # Configuration files and constants
├── constants/          # App-wide constants and mock data
├── features/           # Feature-based modules
│   ├── auth/          # Authentication feature components
│   ├── dashboard/     # Dashboard feature components
│   ├── errors/        # Error pages (404, etc.)
│   ├── settings/      # Settings feature components
│   └── users/         # Users feature components
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
│   ├── app-layout/    # Main app layout with sidebar
│   ├── auth-layout/   # Authentication layout
│   └── RootLayout.tsx # Root layout wrapper
├── lib/                # Utility functions and helpers
├── pages/              # Page components (route-level)
│   ├── auth/          # Auth pages (Login, Register)
│   ├── dashboard/     # Dashboard pages
│   ├── errors/        # Error pages
│   ├── settings/      # Settings pages
│   └── users/         # Users pages
├── routes/             # Route configurations
│   ├── auth/          # Auth routes
│   ├── dashboard/     # Dashboard routes
│   ├── settings/      # Settings routes
│   ├── users/         # Users routes
│   ├── index.ts       # Main router configuration
│   ├── private.routes.ts  # Private routes
│   ├── public.routes.ts   # Public routes
│   └── ProtectedRoute.tsx # Protected route wrapper
├── services/           # API services and external integrations
├── types/              # TypeScript types and interfaces
├── App.tsx             # Root App component
├── index.css           # Global styles and Tailwind configuration
└── main.tsx            # App entry point
```

## Folder Structure Explanation

- **components/** - Shared/reusable components used across the app
- **configs/** - Configuration files for various services
- **constants/** - App constants, enums, and mock data
- **features/** - Feature-specific components (not shared across features)
- **hooks/** - Custom React hooks for shared logic
- **layouts/** - Layout wrappers for different sections of the app
- **lib/** - Utility functions, helpers, and third-party library configurations
- **pages/** - Page-level components that represent routes
- **routes/** - Route configuration and protected route logic
- **services/** - API calls and external service integrations
- **types/** - TypeScript type definitions and interfaces

## Built With

- [React 19](https://react.dev/) - React library for building user interface
- [TypeScript](https://www.typescriptlang.org/) - Programming language with static typing
- [Vite](https://vitejs.dev/guide/) - Next generation frontend build tool
- [React Router v7](https://reactrouter.com/) - Declarative routing for React
- [Zustand](https://zustand-demo.pmnd.rs/) - Lightweight state management library
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful and accessible component library
- [React Hook Form](https://react-hook-form.com/) - Performant form validation
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Axios](https://axios-http.com/) - Promise-based HTTP client
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [Sonner](https://sonner.emilkowal.ski/) - Toast notification library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).


