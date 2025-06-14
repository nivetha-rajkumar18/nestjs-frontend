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

interface CreateProductModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (product: {
    name: string;
    description: string;
    price: number;
    stock: number;
  }) => void;
}

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const handleFieldChange = (field: string, value: string | number) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onCreate(formState);
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
          Create New Product
        </Typography>
        <Grid container spacing={2}>
          <Grid>
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
          <Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Create Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CreateProductModal;