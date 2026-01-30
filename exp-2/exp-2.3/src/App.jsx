import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  TextField,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
  },
})

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Material Design UI',
      description: 'Beautiful Material Design components for React applications.',
      image: 'https://via.placeholder.com/300x200?text=Product+1',
      price: '$99',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Component Library',
      description: 'Comprehensive component library with Material Design principles.',
      image: 'https://via.placeholder.com/300x200?text=Product+2',
      price: '$149',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'UI Kit',
      description: 'Complete UI kit with pre-built Material Design components.',
      image: 'https://via.placeholder.com/300x200?text=Product+3',
      price: '$199',
      isFavorite: false,
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Scalable design system following Material Design guidelines.',
      image: 'https://via.placeholder.com/300x200?text=Product+4',
      price: '$249',
      isFavorite: false,
    },
    {
      id: 5,
      title: 'React Components',
      description: 'Production-ready Material UI React components.',
      image: 'https://via.placeholder.com/300x200?text=Product+5',
      price: '$179',
      isFavorite: false,
    },
    {
      id: 6,
      title: 'Theme Builder',
      description: 'Interactive theme builder for Material Design customization.',
      image: 'https://via.placeholder.com/300x200?text=Product+6',
      price: '$129',
      isFavorite: false,
    },
  ])

  const [openDialog, setOpenDialog] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const toggleFavorite = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    )
  }

  const handleDialogOpen = () => setOpenDialog(true)
  const handleDialogClose = () => setOpenDialog(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    setFormData({ name: '', email: '', message: '' })
    handleDialogClose()
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* AppBar */}
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Material UI Design
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit" onClick={handleDialogOpen}>Contact</Button>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 5, flexGrow: 1 }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#1976d2' }}>
              Material UI Components
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
              Explore our collection of beautiful and functional Material Design components
            </Typography>
            <Button variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
              Get Started
            </Button>
          </Box>

          {/* Products Grid */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label={product.price} color="primary" variant="outlined" />
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Button
                      size="small"
                      startIcon={product.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      onClick={() => toggleFavorite(product.id)}
                      color={product.isFavorite ? 'error' : 'default'}
                    >
                      Like
                    </Button>
                    <Button size="small" startIcon={<EditIcon />}>
                      View
                    </Button>
                    <Button size="small" startIcon={<DeleteIcon />} color="error">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Features Section */}
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Responsive Design
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Built with mobile-first approach for all devices
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Easy Customization
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Easily customize themes and component behavior
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Accessible
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  WCAG 2.1 compliant components for inclusive design
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Contact Dialog */}
        <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogContent sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={4}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: 'white', py: 3, mt: 5 }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center">
              &copy; 2026 Material UI Design Components. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
