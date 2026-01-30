import { Box, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';

export default function FilterBar({ onFilterChange, activeFilters }) {
  const categories = ['Electronics', 'Wallet', 'Keys', 'Jewelry', 'Clothing', 'Documents', 'Other'];
  const statuses = ['lost', 'found'];

  const handleStatusChange = (status) => {
    onFilterChange({
      ...activeFilters,
      status: activeFilters.status === status ? null : status,
    });
  };

  const handleCategoryChange = (category) => {
    const newCategories = activeFilters.categories?.includes(category)
      ? activeFilters.categories.filter(c => c !== category)
      : [...(activeFilters.categories || []), category];
    
    onFilterChange({
      ...activeFilters,
      categories: newCategories,
    });
  };

  return (
    <Box sx={{
      bgcolor: '#f5f5f5',
      p: 3,
      borderRadius: 2,
      mb: 3,
    }}>
      <Box sx={{ mb: 2 }}>
        <p style={{ marginBottom: '12px', fontWeight: 'bold' }}>Status:</p>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {statuses.map((status) => (
            <Chip
              key={status}
              label={status.toUpperCase()}
              onClick={() => handleStatusChange(status)}
              color={activeFilters.status === status ? 'primary' : 'default'}
              variant={activeFilters.status === status ? 'filled' : 'outlined'}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <p style={{ marginBottom: '12px', fontWeight: 'bold' }}>Categories:</p>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => handleCategoryChange(cat)}
              color={activeFilters.categories?.includes(cat) ? 'primary' : 'default'}
              variant={activeFilters.categories?.includes(cat) ? 'filled' : 'outlined'}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
