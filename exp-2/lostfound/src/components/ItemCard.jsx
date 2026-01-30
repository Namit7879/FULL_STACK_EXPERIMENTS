import { Card, CardContent, CardActions, Typography, Button, Chip, Box, CardMedia } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

export default function ItemCard({ item }) {
  const getStatusColor = (status) => {
    return status === 'lost' ? 'error' : 'success';
  };

  const getStatusLabel = (status) => {
    return status === 'lost' ? '🔍 LOST' : '✓ FOUND';
  };

  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
      },
    }}>
      {item.image && (
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', flex: 1 }}>
            {item.title}
          </Typography>
          <Chip
            label={getStatusLabel(item.status)}
            color={getStatusColor(item.status)}
            size="small"
            variant="filled"
            sx={{ ml: 1 }}
          />
        </Box>

        {item.description && (
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {item.description}
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon fontSize="small" sx={{ color: '#d32f2f' }} />
            <Typography variant="body2">
              <strong>Location:</strong> {item.location}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarTodayIcon fontSize="small" sx={{ color: '#1976d2' }} />
            <Typography variant="body2">
              <strong>Date:</strong> {new Date(item.date).toLocaleDateString()}
            </Typography>
          </Box>

          {item.reporter && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon fontSize="small" sx={{ color: '#f57c00' }} />
              <Typography variant="body2">
                <strong>Reported by:</strong> {item.reporter}
              </Typography>
            </Box>
          )}

          {item.category && (
            <Box>
              <Chip label={item.category} size="small" variant="outlined" sx={{ mt: 1 }} />
            </Box>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', pt: 0 }}>
        <Button size="small" variant="outlined" color="primary">
          View Details
        </Button>
        <Button size="small" variant="contained" color="secondary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}
