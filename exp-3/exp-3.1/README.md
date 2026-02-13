# Experiment 3.1: Basic Client-Side Routing Using React Router

## Aim
To implement basic client-side routing in a Single Page Application using React Router.

## Theory
Routing in a Single Page Application allows navigation between different views without reloading the page. React Router is a popular library used to handle client-side routing in React applications using components such as BrowserRouter, Routes, and Route.


### Key Components

1. **App.jsx**: Main component wrapped with BrowserRouter, defines routes and navigation
2. **Home.jsx**: Home page component
3. **About.jsx**: About page component
4. **Services.jsx**: Services page listing
5. **Contact.jsx**: Contact form with state management

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Features

- **Client-side Routing**: Navigation between pages without page reload
- **React Router**: Uses BrowserRouter, Routes, and Route components
- **Navigation Links**: Uses Link component for navigation
- **Responsive Design**: Styled with CSS for a modern look
- **Form Handling**: Contact page includes form with state management

## Observations

- Navigation is instant without page reload
- URL changes as you navigate between pages
- Browser back/forward buttons work correctly
- All pages are rendered on the client side
