// components/product/ProductHeader.tsx
import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Chip
} from '@mui/material';
import { Add, Search, FilterList } from '@mui/icons-material';
import { FilterOptions } from '../../types/product.types';

interface ProductHeaderProps {
  totalProducts: number;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onCreateProduct: () => void;
  onOpenFilters: () => void;
  activeFilters: FilterOptions;
  onClearFilters: () => void;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({
  totalProducts,
  searchTerm,
  onSearchChange,
  onCreateProduct,
  onOpenFilters,
  activeFilters,
  onClearFilters,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Typography variant="h6">
        Products ({totalProducts})
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={onCreateProduct}
        >
          Add Product
        </Button>
        <Button
          variant="outlined"
          startIcon={<FilterList />}
          onClick={onOpenFilters}
        >
          Filters
        </Button>
        {Object.keys(activeFilters).length > 0 && (
          <Chip
            label="Clear Filters"
            onClick={onClearFilters}
            color="secondary"
          />
        )}
      </Box>
    </Box>
  );
};