import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const navigate = useNavigate();
  const [recentItems, setRecentItems] = useState([
    {
      id: 1,
      title: 'Lost: Silver iPhone 15',
      status: 'lost',
      date: '2024-01-22',
      location: 'Downtown Mall',
      category: 'Electronics',
      reporter: 'John Doe',
      description: 'Missing since Monday afternoon. Black leather case.',
    },
    {
      id: 2,
      title: 'Found: Brown Leather Wallet',
      status: 'found',
      date: '2024-01-21',
      location: 'Central Park',
      category: 'Wallet',
      reporter: 'Jane Smith',
      description: 'Contains ID cards and cash. Found near the fountain.',
    },
    {
      id: 3,
      title: 'Lost: Blue Backpack',
      status: 'lost',
      date: '2024-01-20',
      location: 'City Library',
      category: 'Clothing',
      reporter: 'Mike Johnson',
      description: 'Navy blue backpack with laptop inside. Very important.',
    },
  ]);

  // Load reported items from localStorage
  useEffect(() => {
    const reportedItems = JSON.parse(localStorage.getItem('reportedItems')) || [];
    if (reportedItems.length > 0) {
      // Show latest reported items (last 3)
      const latestReported = reportedItems.slice(-3).reverse();
      setRecentItems([...recentItems, ...latestReported]);
    }
  }, []);

  const features = [
    {
      icon: <SearchIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Search Items',
      description: 'Browse through our database of lost and found items in your area.',
    },
    {
      icon: <AddCircleIcon sx={{ fontSize: 40, color: '#f57c00' }} />,
      title: 'Report Items',
      description: 'Lost something? Report it here and connect with others in the community.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
      title: 'Claim Items',
      description: 'Found your item? File a claim and we\'ll verify your ownership.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8,
        px: 4,
        borderRadius: 2,
        textAlign: 'center',
        mb: 6,
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Lost & Found Digital Hub
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
          Never miss your belongings again. Report, search, and claim items from our community.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: '#667eea',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
            onClick={() => navigate('/items')}
          >
            Browse Items
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
            }}
            onClick={() => navigate('/report')}
          >
            Report Item
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
          How It Works
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{
                p: 3,
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                },
              }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recent Items Section */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Recently Reported
          </Typography>
          <Button variant="text" color="primary" onClick={() => navigate('/items')}>
            View All →
          </Button>
        </Box>
        <Grid container spacing={3}>
          {recentItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        background: '#f5f5f5',
        p: 4,
        borderRadius: 2,
        textAlign: 'center',
        mt: 8,
      }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Didn't find what you're looking for?
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          Report your lost item and get help from our community members.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/report')}
        >
          Report Your Item
        </Button>
      </Box>
    </Container>
  );
}
