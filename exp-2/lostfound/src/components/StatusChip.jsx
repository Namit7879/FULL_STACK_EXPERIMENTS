import { Chip } from '@mui/material';

export default function StatusChip({ status, size = 'medium' }) {
  const statusConfig = {
    lost: {
      label: '🔍 LOST',
      color: 'error',
      backgroundColor: '#ffebee',
    },
    found: {
      label: '✓ FOUND',
      color: 'success',
      backgroundColor: '#e8f5e9',
    },
    claimed: {
      label: '✓ CLAIMED',
      color: 'success',
      backgroundColor: '#e8f5e9',
    },
    pending: {
      label: '⏳ PENDING',
      color: 'warning',
      backgroundColor: '#fff3e0',
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <Chip
      label={config.label}
      color={config.color}
      size={size}
      variant="filled"
      sx={{
        fontWeight: 'bold',
        backgroundColor: config.backgroundColor,
      }}
    />
  );
}
