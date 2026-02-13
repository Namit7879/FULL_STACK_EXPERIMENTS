import { Container, Grid, Box, Typography, Pagination } from '@mui/material';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ItemCard from '../components/ItemCard';

export default function ViewItems() {
  const defaultItems = [
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
    {
      id: 4,
      title: 'Found: Sony Headphones',
      status: 'found',
      date: '2024-01-19',
      location: 'Metro Station',
      category: 'Electronics',
      reporter: 'Sarah Williams',
      description: 'Black wireless headphones in good condition.',
    },
    {
      id: 5,
      title: 'Lost: Silver Keys',
      status: 'lost',
      date: '2024-01-18',
      location: 'Office Building',
      category: 'Keys',
      reporter: 'David Brown',
      description: 'Key ring with house and car keys.',
    },
    {
      id: 6,
      title: 'Found: Gold Wedding Ring',
      status: 'found',
      date: '2024-01-17',
      location: 'Beach',
      category: 'Jewelry',
      reporter: 'Emily Davis',
      description: 'Gold wedding ring with initials inside.',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ status: null, categories: [] });
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [allItems, setAllItems] = useState(defaultItems);

  // Load reported items from localStorage on mount
  useEffect(() => {
    const reportedItems = JSON.parse(localStorage.getItem('reportedItems')) || [];
    setAllItems([...defaultItems, ...reportedItems]);
  }, []);

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filters.status || item.status === filters.status;
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(item.category);

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const paginatedItems = filteredItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Browse Lost & Found Items
      </Typography>

      <SearchBar onSearch={handleSearch} />

      <FilterBar onFilterChange={handleFilterChange} activeFilters={filters} />

      {paginatedItems.length > 0 ? (
        <>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              Showing {paginatedItems.length} of {filteredItems.length} items
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {paginatedItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
              />
            </Box>
          )}
        </>
      ) : (
        <Box sx={{
          textAlign: 'center',
          py: 8,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
        }}>
          <Typography variant="h6" color="textSecondary">
            No items found matching your search criteria.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Try adjusting your filters or search term.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
