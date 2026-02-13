import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function ReportItem() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'lost',
    category: '',
    location: '',
    date: '',
    reporter: '',
    email: '',
    phone: '',
  });

  const categories = ['Electronics', 'Wallet', 'Keys', 'Jewelry', 'Clothing', 'Documents', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.category || !formData.location || !formData.date || !formData.reporter) {
      alert('Please fill in all required fields');
      return;
    }

    // Create new item with ID
    const newItem = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    // Get existing items from localStorage
    const existingItems = JSON.parse(localStorage.getItem('reportedItems')) || [];
    
    // Add new item
    existingItems.push(newItem);
    
    // Save to localStorage
    localStorage.setItem('reportedItems', JSON.stringify(existingItems));

    console.log('Item reported:', newItem);
    alert('Item reported successfully! Thank you for contributing to our community.');
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      status: 'lost',
      category: '',
      location: '',
      date: '',
      reporter: '',
      email: '',
      phone: '',
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Report an Item
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Help the community by reporting a lost or found item. Please provide as much detail as possible.
        </Typography>
      </Box>

      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Status */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Item Status</InputLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  label="Item Status"
                >
                  <MenuItem value="lost">Lost</MenuItem>
                  <MenuItem value="found">Found</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Category */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                >
                  {categories.map(cat => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Title */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Item Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Lost: Silver iPhone 15"
                required
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the item in detail (color, brand, distinguishing features, etc.)"
                multiline
                rows={4}
                required
              />
            </Grid>

            {/* Location */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where was the item lost or found?"
                required
              />
            </Grid>

            {/* Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>

            {/* Reporter Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="reporter"
                value={formData.reporter}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ py: 1.5, fontWeight: 'bold' }}
              >
                Report Item
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Info Box */}
      <Paper sx={{ p: 3, mt: 4, backgroundColor: '#e3f2fd' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          💡 Tips for Better Results
        </Typography>
        <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
          <li>Be as detailed as possible about the item's appearance</li>
          <li>Include distinctive marks or identifying features</li>
          <li>Provide the exact location where it was lost or found</li>
          <li>Use a clear date when the incident occurred</li>
          <li>Provide contact information so others can reach you</li>
        </ul>
      </Paper>
    </Container>
  );
}
