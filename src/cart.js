import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import CartNavbar from './cart_Navbar';
import { useState } from 'react';

const CartPage = (props) => {
  let cart = props.cart
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(cart);

   const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        let products = filteredProducts
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredProducts(filtered);
    }

  return (
    <>
        <CartNavbar handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
        <Box sx={{ p: 3 }}>
        <Typography variant="h4">Your Cart</Typography>
        <List>
            {filteredProducts.map((item, index) => (
            <ListItem key={index}>
                <ListItemAvatar>
                <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            </ListItem>
            ))}
        </List>
        <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
        </Box>
    </>
    
  );
};

export default CartPage;
