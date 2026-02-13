# Experiment 3.2: Navigation Using Link Component

## Aim
To implement navigation links in a SPA using React Router Link component and explore different navigation patterns.

## Software Requirements
- Node.js
- React
- React Router DOM
- Web Browser

## Theory

### Link Component
The Link component is the fundamental way to enable navigation between routes in React Router applications. Unlike traditional anchor tags, Link components prevent full page reloads and provide seamless client-side navigation.

### NavLink Component
NavLink is an enhanced version of Link that automatically provides active state information. It's particularly useful for highlighting the current navigation item.

### Key Features
1. **Smooth Navigation**: Instant route transitions without page reloads
2. **Active State Styling**: NavLink automatically adds classes/styles when the route is active
3. **Browser History**: Full integration with browser back/forward buttons
4. **Declarative**: Clear, component-based routing definitions

## Procedure

1. Import Link and NavLink from react-router-dom
2. Create navigation links in your components
3. Enable smooth navigation with proper styling
4. Implement active state indicators for current routes
5. Test navigation between different pages

## Implementation Details

### Project Structure
```
exp-3.2/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

### Key Components

#### 1. App.jsx
- Implements BrowserRouter wrapper
- Uses NavLink for main navigation with active state styling
- Defines Routes for all pages
- Includes footer with Link examples

#### 2. Page Components
Each page demonstrates different usage patterns of Link:
- **Home.jsx**: Link examples and feature cards
- **Products.jsx**: Links within product cards
- **About.jsx**: Navigation section with multiple links
- **Blogs.jsx**: Links in blog listings
- **Dashboard.jsx**: Links in various dashboard sections

#### 3. Styling
- Active NavLink highlighting with gradient background
- Smooth transitions and hover effects
- Responsive design for mobile devices
- Feature cards and navigation sections

## Link vs NavLink

### Link
```jsx
<Link to="/about">About</Link>
```
- Basic navigation without active state
- No automatic styling for current route

### NavLink
```jsx
<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>
```
- Automatically detects active state
- Applies styling based on current route
- Perfect for navigation menus

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

## Features Demonstrated

✅ **NavLink with Active Styling**: Main navigation menu highlights active page  
✅ **Link Component Usage**: Various Link patterns throughout pages  
✅ **Smooth Transitions**: Fade-in animations on page changes  
✅ **Footer Links**: Additional navigation in footer section  
✅ **Quick Access Links**: Inline links for cross-page navigation  
✅ **Responsive Design**: Mobile-friendly navigation  

## Observations

- Navigation is instant without page reload
- Active menu item is highlighted automatically
- Browser history works correctly
- Links can be placed anywhere in the component tree
- NavLink provides automatic active state detection
- All styling is applied smoothly with CSS transitions
- The application maintains state during navigation

## Best Practices

1. Use NavLink for primary navigation menus
2. Use Link for inline navigation within content
3. Always specify the `to` prop with the target route
4. Use `className` with isActive check for custom styling
5. Keep navigation intuitive and consistent
6. Provide visual feedback for active states
