import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';
import StatusChip from '../components/StatusChip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminDashboard() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Lost: Silver iPhone 15',
      reporter: 'John Doe',
      status: 'lost',
      location: 'Downtown Mall',
      date: '2024-01-22',
      claims: 2,
    },
    {
      id: 2,
      title: 'Found: Brown Leather Wallet',
      reporter: 'Jane Smith',
      status: 'found',
      location: 'Central Park',
      date: '2024-01-21',
      claims: 1,
    },
    {
      id: 3,
      title: 'Lost: Blue Backpack',
      reporter: 'Mike Johnson',
      status: 'lost',
      location: 'City Library',
      date: '2024-01-20',
      claims: 3,
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const stats = [
    {
      label: 'Total Items',
      value: items.length,
      color: '#1976d2',
      bgColor: '#e3f2fd',
    },
    {
      label: 'Lost Items',
      value: items.filter(i => i.status === 'lost').length,
      color: '#f44336',
      bgColor: '#ffebee',
    },
    {
      label: 'Found Items',
      value: items.filter(i => i.status === 'found').length,
      color: '#4caf50',
      bgColor: '#e8f5e9',
    },
    {
      label: 'Active Claims',
      value: items.reduce((sum, i) => sum + i.claims, 0),
      color: '#ff9800',
      bgColor: '#fff3e0',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Manage lost and found items, review claims, and monitor platform activity.
        </Typography>
      </Box>

      {/* Statistics */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ p: 2.5, textAlign: 'center', backgroundColor: stat.bgColor }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: stat.color }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Items Management Table */}
      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Reporter</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Claims</TableCell>
                <TableCell sx={{ fontWeight: 'bold', textAlign: 'right' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.reporter}</Typography>
                  </TableCell>
                  <TableCell>
                    <StatusChip status={item.status} size="small" />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.location}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{
                      backgroundColor: '#e3f2fd',
                      padding: '4px 12px',
                      borderRadius: 1,
                      display: 'inline-block',
                      fontWeight: 'bold',
                      color: '#1976d2',
                    }}>
                      {item.claims}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(item)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      startIcon={<DeleteIcon />}
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold' }}>
          Edit Item
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          {selectedItem && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Title"
                defaultValue={selectedItem.title}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Reporter"
                defaultValue={selectedItem.reporter}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Location"
                defaultValue={selectedItem.location}
                variant="outlined"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCloseDialog}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
