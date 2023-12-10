/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Pagination, Paper,Slider } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CartModal from './cartModal';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
// import { useAuth } from './authContext';
import CircularProgress from '@mui/material/CircularProgress';
import mobileImg from './Assets/mobile1.jpeg'

// const initialProducts  = [
//   { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
//   { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
//   { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//   { id: 4, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//   { id: 5, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//   { id: 6, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//   { id: 7, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//   { id: 8, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' },
//   // Add more products as needed
// ];

let initialProducts = []



const ProductCard = ({ product,cart, setCart }) => {
    const addToCart = () => {
        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
          setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
        } else {
          setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = () => {
        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct && existingProduct.quantity > 1) {
          setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p));
        } else {
          setCart(cart.filter(p => p.id !== product.id));
        }
    };

    const productInCart = cart.find(p => p.id === product.id);

    return(
        <Card>
            <CardMedia
            component="img"
            height="140"
            image={mobileImg}
            alt={product.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.price}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={addToCart}>Add to Cart</Button>
            {productInCart && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button size="small" onClick={removeFromCart}>-</Button>
                    <Typography sx={{ margin: '0 10px' }}>{productInCart.quantity}</Typography>
                    <Button size="small" onClick={addToCart}>+</Button>
                </Box>
                )}
            </CardActions>
        </Card>
    )
  
};


const ProductListingPage = (props) => {
    const apiUrl = 'https://adtteam27.onrender.com/api/user/mobiles';
    // const {token} = useAuth()
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    };

    // const [initialProducts,setInitialProducts] = useState([])


    const [searchQuery, setSearchQuery] = useState('');
    // const [products, setProducts] = useState(initialProducts);
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    // const [cart, setCart] = useState([]);
    let cart = props.cart
    let setCart = props.setCart
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);



    /* Pagination............. */

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    /* */

    useEffect(() => {
        fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            
                // { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
            const updatedProducts = data.map((element) => ({
                id: element['mobile']['_id'],
                name: element['mobile']['title'],
                price: parseInt(element['mobile']['price']) / 110,
                image : 'https://via.placeholder.com/150'
                }));

            // setInitialProducts(updatedProducts)
            initialProducts = updatedProducts

            setFilteredProducts(updatedProducts);
            setIsLoading(false);
          

            // Handle API response data
            // setAuthToken(data.token)
            // navigate('/products')

        })
        .catch((error) => {
            console.error('API Error:', error);
        });
    },[])

    const navigate = useNavigate();

    const toggleCartModal = () => {
        setCartModalOpen(!cartModalOpen);
    };

    const navigateToCartPage = () => {
        console.log("called navigate")
        // Logic to navigate to the cart page
        setCartModalOpen(false);
        navigate('/cart')
        // Example: navigate('/cart'); if using React Router
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
        filterProducts(searchQuery, newValue);
    };

    const filterProducts = (search, price) => {
        const filtered = initialProducts.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase()) &&
          product.price >= price[0] && product.price <= price[1]
        );
        setFilteredProducts(filtered);
    };

    const handleSearchChange = (event) => {
        
        setSearchQuery(event.target.value);
        filterProducts(event.target.value, priceRange);

        // console.log("search", initialProducts)
    };
  return (
    <>
        <Navbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} toggleCartModal={toggleCartModal} cart = {cart} cartModalOpen={cartModalOpen} navigateToCartPage={navigateToCartPage} />
        <Container>
            {/* Filter code */}
            <Paper sx={{ padding: 2, marginTop: 2, marginBottom: 2 }}>
                <Typography variant="h6">Filters</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ marginRight: 2 }}>Price Range:</Typography>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={2000}
                />
                </Box>
            </Paper>
            {/* Product cards code*/}
            {
                isLoading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <CircularProgress />
                    </div>
                ) : (
                    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
                        <Grid container spacing={2}>
                        {currentItems.map(product => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductCard product={product} cart={cart} setCart={setCart} />
                            </Grid>
                        ))}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                        <Pagination count={totalPages} color="primary" page={currentPage}
                                onChange={handlePageChange}/>
                        </Box>
                    </Box>
                )
            }
            
        </Container>
    </>
    
  );
};

export default ProductListingPage;
