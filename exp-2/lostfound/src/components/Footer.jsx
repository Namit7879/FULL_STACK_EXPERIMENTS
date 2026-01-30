import { Box, Container, Typography, Grid, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#263238', color: 'white', py: 5, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Digital Lost & Found helps you recover lost items and connect with community members. Built for quick recoveries and clear handoffs.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/items" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>View Items</Link>
              <Link href="/report" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Report Item</Link>
              <Link href="/claims" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>My Claims</Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>support@lostfound.local</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Help Desk, Building A</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © 2024 Lost & Found. All rights reserved. | Built with React, Material-UI & Bootstrap
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
