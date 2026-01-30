import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import BuildIcon from '@mui/icons-material/Build'
import ContactMailIcon from '@mui/icons-material/ContactMail'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'About', icon: <InfoIcon /> },
    { label: 'Services', icon: <BuildIcon /> },
    { label: 'Contact', icon: <ContactMailIcon /> },
  ]

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Navigation
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {item.icon}
                <ListItemText primary={item.label} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleMobileMenuToggle}
            sx={{
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
              <BuildIcon />
              <ListItemText primary="Products" />
              {mobileMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ py: 1 }}>
                <ListItemText primary="Product 1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ py: 1 }}>
                <ListItemText primary="Product 2" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ py: 1 }}>
                <ListItemText primary="Product 3" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  )

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Responsive AppBar */}
        <AppBar position="sticky" elevation={2}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, flex: 1 }}>
              Responsive NavBar
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    sx={{
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                    startIcon={item.icon}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  color="inherit"
                  onClick={handleMenuClick}
                  endIcon={anchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  sx={{
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Products
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>Product 1</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Product 2</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Product 3</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Product 4</MenuItem>
                </Menu>
              </Box>
            )}

            {/* Mobile Navigation Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 5, flexGrow: 1 }}>
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#2196f3' }}>
              Responsive Navigation Bar
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
              This navigation bar is fully responsive and adapts to different screen sizes
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
              Try resizing your browser window to see the navigation transform between desktop and mobile views
            </Typography>
          </Box>

          {/* Features Grid */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <HomeIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Responsive Design
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                    Automatically adapts to mobile, tablet, and desktop screens with smooth transitions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <MenuIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Hamburger Menu
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                    Mobile-friendly hamburger menu that appears on smaller screens with smooth animations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <BuildIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Dropdown Menus
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                    Multi-level dropdown menus for products with collapsible navigation on mobile
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <InfoIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Sticky Navigation
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                    Navigation bar stays at the top while scrolling for easy access to menu items
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ContactMailIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Easy Access
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                    Quick access to all sections with intuitive menu organization and clear labels
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 } }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ExpandMoreIcon sx={{ fontSize: 40, color: '#2196f3' }} />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    Expandable Menus
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                    Collapsible menus that expand to show sub-items on both desktop and mobile
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Navigation Tips */}
          <Card sx={{ mt: 5, backgroundColor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                📱 Navigation Features
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  <strong>Desktop View:</strong> Full horizontal navigation with dropdown menu for Products
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  <strong>Mobile View:</strong> Hamburger menu icon appears, opens side drawer with full navigation
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  <strong>Responsive Breakpoints:</strong> Navigation switches layout at tablet breakpoint (md)
                </Typography>
                <Typography component="li" variant="body2">
                  <strong>Smooth Animations:</strong> All transitions between mobile and desktop views are smooth and intuitive
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: '#333', color: 'white', py: 3, mt: 5 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center">
              &copy; 2026 Responsive Navigation Bar. All rights reserved. | Resize your browser to see responsiveness in action
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
