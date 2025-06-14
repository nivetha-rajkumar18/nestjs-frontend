
// src/pages/Register.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { register } from '../services/authService';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await register({ email, password });
      alert('Registered successfully');
    } catch (err) {
      alert('Registration failed');
    }
  };return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>
      <TextField label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} margin="normal" />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setPassword(e.target.value)} margin="normal" />
      <Button variant="contained" fullWidth onClick={handleSubmit}>Register</Button>
    </Container>
  );
}