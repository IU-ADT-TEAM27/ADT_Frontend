/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal, Box, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CartModal = ({ open, handleClose, cart, navigateToCart }) => {
    console.log("cart modal",open)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
    <Box sx={style}>
        <Typography id="cart-modal-title" variant="h6" component="h2">
            Cart Items
        </Typography>
        <List sx={{ maxHeight: '300px', overflow: 'auto' }}>
            {cart.slice(0, 5).map((item, index) => (
            <ListItem key={index}>
                <ListItemAvatar>
                <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            </ListItem>
            ))}
        </List>
        {cart.length > 5 && (
            <Button onClick={navigateToCart}>See More</Button>
        )}
    </Box>
    </Modal>
  );
};

export default CartModal;
