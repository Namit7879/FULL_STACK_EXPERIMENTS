import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import StatusChip from '../components/StatusChip';

export default function MyClaims() {
  const myClaims = [
    {
      id: 1,
      itemTitle: 'Lost: Silver iPhone 15',
      dateReported: '2024-01-22',
      status: 'pending',
      currentStep: 0,
      description: 'Missing since Monday afternoon.',
    },
    {
      id: 2,
      itemTitle: 'Lost: Blue Backpack',
      dateReported: '2024-01-20',
      status: 'claimed',
      currentStep: 3,
      description: 'Navy blue backpack with laptop inside.',
    },
  ];

  const claimSteps = ['Reported', 'Under Review', 'Contact Made', 'Claimed'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          My Claims
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Track the status of your lost and found item claims here.
        </Typography>
      </Box>

      {myClaims.length > 0 ? (
        <Grid container spacing={3}>
          {myClaims.map((claim) => (
            <Grid item xs={12} key={claim.id}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {claim.itemTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {claim.description}
                    </Typography>
                  </Box>
                  <StatusChip status={claim.status} />
                </Box>

                <Stepper activeStep={claim.currentStep} sx={{ mb: 3 }}>
                  {claimSteps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="textSecondary">
                    Reported on: {new Date(claim.dateReported).toLocaleDateString()}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" size="small">
                      View Details
                    </Button>
                    <Button variant="contained" color="primary" size="small">
                      Contact
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper sx={{
          p: 4,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            You haven't made any claims yet.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            When you report an item as lost or found, it will appear here.
          </Typography>
        </Paper>
      )}

      {/* Claim Statistics */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2.5, textAlign: 'center', backgroundColor: '#e3f2fd' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              {myClaims.length}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total Claims
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2.5, textAlign: 'center', backgroundColor: '#fff3e0' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f57c00' }}>
              {myClaims.filter(c => c.status === 'pending').length}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Pending
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2.5, textAlign: 'center', backgroundColor: '#e8f5e9' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
              {myClaims.filter(c => c.status === 'claimed').length}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Claimed
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2.5, textAlign: 'center', backgroundColor: '#ffebee' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f44336' }}>
              0
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Unclaimed
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
