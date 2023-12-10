import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, AppBar, Toolbar, IconButton, Box, Pagination, TextField, Paper,Slider, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartModal from './cartModal';
// import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    let handleSearchChange = props.handleSearchChange;
    // let toggleCartModal = props.toggleCartModal
    let searchQuery = props.searchQuery
    let cart = props.cart
    let cartModalOpen = props.cartModalOpen
    let toggleCartModal = props.toggleCartModal
    let navigateToCartPage = props.navigateToCartPage

    return(
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor : "pointer" }}>
                    Mobile Insights
                </Typography>
                <TextField
                    label="Search Products"
                    variant="outlined"
                    color="success"
                    size="small"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    sx={{ '& .MuiInput-input': { color: 'white' } }}
                    
                />
                <IconButton color="inherit" onClick={toggleCartModal}>
                    <Badge badgeContent={cart.reduce((total, product) => total + product.quantity, 0)} color="secondary">
                    <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <CartModal open={cartModalOpen} handleClose={toggleCartModal} cart={cart} navigateToCart={navigateToCartPage} />
            </Toolbar>
        </AppBar>
    )
    
}

export default Navbar

