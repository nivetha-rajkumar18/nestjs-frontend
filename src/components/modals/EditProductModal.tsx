import React, { useState, useEffect } from 'react';
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

interface EditProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  };
  onUpdate: (updatedProduct: {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  }) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  open,
  onClose,
  product,
  onUpdate,
}) => {
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (product) {
      setFormState(product);
    }
  }, [product]);

  const handleFieldChange = (field: string, value: string | number) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(formState);
    onClose();
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
          Edit Product
        </Typography>
        <Grid container spacing={2}>
          <Grid >
            <TextField
              fullWidth
              label="Product Name"
              value={formState.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={3}
              value={formState.description}
              onChange={(e) => handleFieldChange('description', e.target.value)}
            />
          </Grid>
          <Grid>
            <FormControl fullWidth>
              <InputLabel htmlFor="price-input">Price</InputLabel>
              <OutlinedInput
                id="price-input"
                type="number"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Price"
                value={formState.price}
                onChange={(e) =>
                  handleFieldChange('price', parseFloat(e.target.value) || 0)
                }
                inputProps={{ min: 0, step: 0.01 }}
              />
            </FormControl>
          </Grid>
          <Grid>
            <TextField
              fullWidth
              label="Stock"
              type="number"
              value={formState.stock}
              onChange={(e) =>
                handleFieldChange('stock', parseInt(e.target.value) || 0)
              }
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Update Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EditProductModal;