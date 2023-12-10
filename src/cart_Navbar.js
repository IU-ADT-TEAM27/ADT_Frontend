import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, AppBar, Toolbar, IconButton, Box, Pagination, TextField, Paper,Slider, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from './cartModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartNavbar(props){
    let searchQuery = props.searchQuery
    let handleSearchChange = props.handleSearchChange

    let navigate = useNavigate()

    function navigateToHome(){
        navigate('/products')
    }

    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor:'pointer' }} onClick={navigateToHome}>
                    Mobile Insights
                </Typography>
                <TextField
                    label="Search Products"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                {/* <IconButton color="inherit" onClick={toggleCartModal}>
                    <Badge badgeContent={cart.reduce((total, product) => total + product.quantity, 0)} color="secondary">
                    <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <CartModal open={cartModalOpen} handleClose={toggleCartModal} cart={cart} navigateToCart={navigateToCartPage} /> */}
            </Toolbar>
        </AppBar>
    )
}

export default CartNavbar