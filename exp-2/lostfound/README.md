# Lost & Found - Digital Hub

A modern, responsive web application for reporting and tracking lost and found items in your community.

## Features

- 🔍 **Search & Browse**: Find lost or found items in your area
- 📝 **Report Items**: Easily report lost or found items
- ✓ **Claim Items**: File claims for items you've lost
- 👨‍💼 **Admin Dashboard**: Manage items and claims
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Built with Material-UI and Bootstrap

## Tech Stack

- **Frontend Framework**: React 19
- **UI Library**: Material-UI (MUI)
- **Styling**: Bootstrap 5 + Custom CSS
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ItemCard.jsx
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   └── StatusChip.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── ViewItems.jsx
│   ├── ReportItem.jsx
│   ├── MyClaims.jsx
│   └── AdminDashboard.jsx
├── App.jsx            # Main app component with routing
├── main.jsx           # Entry point
├── App.css            # App styles
└── index.css          # Global styles
```

## Pages

- **Home** (`/`): Landing page with featured items and quick actions
- **View Items** (`/items`): Browse all lost and found items with search and filters
- **Report Item** (`/report`): Form to report a new lost or found item
- **My Claims** (`/claims`): Track your reported items and claims
- **Admin Dashboard** (`/admin`): Manage all items and claims (admin only)

## Components

- **Navbar**: Sticky navigation with responsive mobile menu
- **Footer**: Footer with contact information and links
- **ItemCard**: Displays item information with status and actions
- **SearchBar**: Search functionality for items
- **FilterBar**: Filter items by status and category
- **StatusChip**: Visual status indicator for items

## Features in Detail

### Search & Filter
- Search by item name, location, or category
- Filter by status (Lost/Found)
- Filter by multiple categories

### Item Reporting
- Easy-to-use form for reporting items
- Required fields: Title, Category, Location, Date, Contact Info
- Optional: Detailed description and image upload

### Claims Management
- Track all your reported items
- View claim status with step indicators
- Contact reporters directly

### Admin Dashboard
- View all items and claims
- Edit item information
- Delete items
- Statistics and analytics

## Styling

The project uses:
- **Material-UI (MUI)**: Component library and theming
- **Bootstrap**: Utility classes and responsive grid
- **Custom CSS**: Additional styling for brand consistency

## Color Scheme

- Primary: `#1976d2` (Blue)
- Secondary: `#dc004e` (Pink/Red)
- Success: `#4caf50` (Green)
- Error: `#f44336` (Red)
- Warning: `#ff9800` (Orange)

## Future Enhancements

- [ ] Image upload and gallery for items
- [ ] Email notifications for matches
- [ ] User authentication and profiles
- [ ] Real-time chat with reporters
- [ ] Map integration for location-based search
- [ ] Mobile app version
- [ ] Advanced analytics and reporting

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for personal or commercial purposes.
