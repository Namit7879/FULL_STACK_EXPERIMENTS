# Experiment 3.3: Multi-Page SPA Using Routing

## Aim
To create a multi-page Single Page Application using client-side routing with React Router.

## Software Requirements
- Node.js
- React
- React Router DOM
- Web Browser

## Theory

### Single Page Application (SPA)
A Single Page Application loads a single HTML page and dynamically updates content without full page reloads. Client-side routing enables navigation between multiple pages without server requests.

### Client-Side Routing
Client-side routing renders different components based on the URL path. This provides:
- Instant page transitions
- Better performance
- Improved user experience
- Reduced server load

### Components Used
1. **BrowserRouter**: Provides routing context
2. **Routes**: Defines route mappings
3. **Route**: Maps paths to components
4. **NavLink**: Navigation links with active state styling
5. **Link**: Basic navigation links
6. **useNavigate**: Programmatic navigation (if needed)

## Procedure

1. Create multiple page components
2. Map each component to a route
3. Set up navigation between pages
4. Test navigation and URL changes
5. Handle 404 (Not Found) routes

## Implementation Details

### Project Structure
```
exp-3.3/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

### Page Components

#### 1. **Home.jsx**
- Landing page with feature cards
- Links to other pages
- Overview of the SPA

#### 2. **Products.jsx**
- Product listing with cards
- Product descriptions
- Call-to-action buttons

#### 3. **Services.jsx**
- Service offerings
- Service process explanation
- Quality assurance information

#### 4. **Team.jsx**
- Team member profiles
- Roles and expertise
- Company values

#### 5. **Pricing.jsx**
- Pricing plans comparison
- Plan features
- FAQ section

#### 6. **Contact.jsx**
- Contact form with validation
- Contact information
- Business hours

#### 7. **NotFound.jsx**
- 404 error page
- Link back to home page

### Routing Configuration

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/services" element={<Services />} />
  <Route path="/team" element={<Team />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Features Implemented

✅ **Navigation Bar**: NavLink with active state styling  
✅ **Multiple Routes**: 6 main pages + 404 page  
✅ **Page Transitions**: Smooth fade-in animations  
✅ **Responsive Design**: Mobile-friendly layout  
✅ **Footer Navigation**: Quick links in footer  
✅ **Form Handling**: Contact form with state management  
✅ **Card Components**: Reusable card styling  
✅ **Pricing Table**: Comparison table layout  
✅ **Team Grid**: Profile cards with emojis  

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

4. Test navigation by clicking links in:
   - Main navigation bar
   - Page content links
   - Footer quick links

## Testing Navigation

### Test Cases

1. **Navigation Bar**
   - Click each menu item
   - Verify page changes without reload
   - Confirm active state highlighting

2. **Page Links**
   - Click links within page content
   - Verify navigation works correctly

3. **Footer Links**
   - Navigate using footer links
   - Test multiple routes

4. **Browser Navigation**
   - Use browser back button
   - Use browser forward button
   - Verify URL updates

5. **404 Handling**
   - Enter invalid URL in address bar
   - Verify 404 page displays
   - Test link back to home

6. **URL Changes**
   - Observe URL changes as you navigate
   - Verify URL matches current page
   - Bookmark and reload page

## Key Observations

- Navigation is instant without page reloads
- Active menu item highlights automatically
- Browser history works correctly
- URL changes reflect current page
- No server requests for navigation
- All state is preserved during navigation
- Page components load instantly
- Smooth transitions with CSS animations

## Best Practices

1. **Route Organization**: Group related routes together
2. **Component Structure**: Keep page components in separate files
3. **Navigation**: Use NavLink for primary navigation, Link for inline links
4. **Error Handling**: Include 404 page for invalid routes
5. **Responsive Design**: Ensure mobile-friendly layout
6. **Performance**: Load components efficiently
7. **User Feedback**: Show active states and transitions

## Additional Features

- Form validation in Contact page
- Success message after form submission
- Team member profiles with roles
- Pricing comparison table
- FAQ section
- Contact information display

## Conclusion

This experiment demonstrates creating a complete multi-page SPA with React Router, including:
- Multiple page components
- Client-side routing
- Navigation between pages
- Responsive design
- Form handling
- Error pages

The application shows how to build modern SPAs that provide excellent user experience through instant navigation without page reloads.
