import { useState, useEffect } from "react";
import { createProduct, updateProduct, getProducts } from "../../services/api";
import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchProduct = async () => {
    const { data } = await getProducts();
    const found = data.find((p: any) => p._id === id);
    if (found) setProduct(found);
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const handleSubmit = async () => {
    if (id) {
      await updateProduct(id, product);
    } else {
      await createProduct(product);
    }
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>
        {id ? "Update" : "Create"}
      </Button>
    </div>
  );
}
