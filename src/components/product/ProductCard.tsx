// components/product/ProductCard.tsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  IconButton
} from '@mui/material';
import { Edit, Delete, Inventory } from '@mui/icons-material';
import { Product } from '../../types/product.types';
import { formatCurrency } from '../utilis/helper';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete
}) => {
  const isLowStock = product.stock < 10;
  const isOutOfStock = product.stock === 0;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {product.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6" color="primary">
            {formatCurrency(product.price)}
          </Typography>
          <Chip 
            label={product.category} 
            size="small" 
            variant="outlined"
          />
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Inventory fontSize="small" />
          <Typography 
            variant="body2" 
            color={isOutOfStock ? 'error' : isLowStock ? 'warning.main' : 'text.secondary'}
          >
            {isOutOfStock ? 'Out of Stock' : `${product.stock} in stock`}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box>
          <IconButton 
            size="small" 
            onClick={() => onEdit(product)}
            color="primary"
          >
            <Edit />
          </IconButton>
          <IconButton 
            size="small" 
            onClick={() => onDelete(product.id)}
            color="error"
          >
            <Delete />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}