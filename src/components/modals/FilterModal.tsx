import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
  onFilter: (filters: {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    stockAvailable?: boolean;
  }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ open, onClose, onFilter }) => {
  const [filters, setFilters] = useState({
    name: '',
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    stockAvailable: false,
  });

  const handleFieldChange = (field: string, value: string | number | boolean) => {
    setFilters((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onFilter(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      name: '',
      minPrice: undefined,
      maxPrice: undefined,
      stockAvailable: false,
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Filter Products
        </Typography>
        <Grid container spacing={2}>
          <Grid >
            <TextField
              fullWidth
              label="Product Name"
              value={filters.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
            />
          </Grid>
          <Grid >
            <FormControl fullWidth>
              <InputLabel htmlFor="min-price-input">Min Price</InputLabel>
              <OutlinedInput
                id="min-price-input"
                type="number"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Min Price"
                value={filters.minPrice || ''}
                onChange={(e) =>
                  handleFieldChange('minPrice', parseFloat(e.target.value) || '')
                }
                inputProps={{ min: 0, step: 0.01 }}
              />
            </FormControl>
          </Grid>
          <Grid >
            <FormControl fullWidth>
              <InputLabel htmlFor="max-price-input">Max Price</InputLabel>
              <OutlinedInput
                id="max-price-input"
                type="number"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Max Price"
                value={filters.maxPrice || ''}
                onChange={(e) =>
                  handleFieldChange('maxPrice', parseFloat(e.target.value) || '')
                }
                inputProps={{ min: 0, step: 0.01 }}
              />
            </FormControl>
          </Grid>
          <Grid >
            <FormControl fullWidth>
              <InputLabel htmlFor="stock-available">Stock Available</InputLabel>
              <OutlinedInput
                id="stock-available"
                type="checkbox"
                value={filters.stockAvailable}
                onChange={(e) =>
                  handleFieldChange('stockAvailable', (e.target as HTMLInputElement).checked)
                }
              />
            </FormControl>
          </Grid>
          <Grid >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Apply Filters
            </Button>
          </Grid>
          <Grid >
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleReset}
            >
              Reset Filters
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default FilterModal;