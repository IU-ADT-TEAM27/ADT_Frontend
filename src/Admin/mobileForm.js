/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Container, Grid, TextField, Button, AppBar, Toolbar, Typography, IconButton, Checkbox , FormControlLabel} from '@mui/material';
import { Logout } from '@mui/icons-material'; // You can import an appropriate logout icon
import { useNavigate } from 'react-router-dom';

const MobileForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        brand_name: '',
        price: '',
        has_5g: false,
        has_nfc: false,
        has_ir_blaster: false,
        ram_capacity: 0,
        internal_memory: 0,
        screen_size: 0,
        refresh_rate: 0,
        os: '',
        extended_memory_available: false,
        extended_upto: 0,
        rating: 0,
        resolution: '',
        battery_capacity: '',
        fast_charging_available: false,
        fast_charging: '',
        num_rear_cameras: 0,
        num_front_cameras: 0,
        primary_camera_rear: '',
        primary_camera_front: '',
        processor_brand: '',
        processor_speed: '',
        num_cores: 0,
      });
    
    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
    });
    };

    const [errors, setErrors] = useState({
    title: '',
    brand_name: '',
    price: '',
    });

    const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.title) {
        newErrors.title = 'Title is required';
        isValid = false;
    } else {
        newErrors.title = '';
    }

    if (!formData.brand_name) {
        newErrors.brand_name = 'Brand Name is required';
        isValid = false;
    } else {
        newErrors.brand_name = '';
    }

    if (!formData.price) {
        newErrors.price = 'Price is required';
        isValid = false;
    } else {
        newErrors.price = '';
    }

    setErrors(newErrors);
    return isValid;
    };
    

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  const handleSubmit = (e) => {

    
    e.preventDefault();
    if (validateForm()) {
    // Handle form submission here

        console.log(formData)
        const apiUrl = 'https://adtteam27.onrender.com/api/admin/mobile';
    // const {token} = useAuth()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 
            'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyYjA2YzY5LTAwY2MtNGNiNi05YTVkLTBiM2Q2ZDk1OTRhYiIsImlhdCI6MTcwMTgxNzk0NywiZXhwIjoxNzA0NDA5OTQ3fQ.Q468W6YgtxDcOt21I3KxSD8vqyUBCFXVRNp3SUK5ua4"},
            body : JSON.stringify(formData)
        };

        // const apiUrl = isSignup ? 'http://localhost:5000/api/register' : 'http://localhost:5000/api/auth/login';
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formData),
        //     };

        //     fetch(apiUrl, requestOptions)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             // Handle API response data
        //             setAuthToken(data.token)
        //             navigate('/products')

        //         })
        //         .catch((error) => {
        //             console.error('API Error:', error);
        //         });

        fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            navigate('/admin/mymobiles')
            // console.log(data)
            
                // { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
            // const updatedProducts = data.map((element) => ({
            //     id: element['mobile']['_id'],
            //     name: element['mobile']['title'],
            //     price: parseInt(element['mobile']['price']) / 110,
            //     image : 'https://via.placeholder.com/150'
            //     }));

            // setInitialProducts(updatedProducts)
            // initialProducts = updatedProducts

            // setFilteredProducts(updatedProducts);
            // setIsLoading(false);
          

            // Handle API response data
            // setAuthToken(data.token)
            // navigate('/products')

        })
        .catch((error) => {
            console.error('API Error:', error);
        });
    }
    // console.log(formData);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Products
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mobile Insights
          </Typography>
          <IconButton color="inherit">
            <Logout /> {/* Replace with your logout icon */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Mobile
              </Typography>
            </Grid>
            {/* Mobile Fields */}
            <Grid item Xs={3}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                size="small"
                error={!!errors.title}
                helperText={errors.title}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Brand Name"
                name="brand_name"
                value={formData.brand_name}
                onChange={handleChange}
                size="small"
                error={!!errors.brand_name}
                helperText={errors.brand_name}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                size="small"
                error={!!errors.price}
                helperText={errors.price}
              />
            </Grid>
            <Grid item xs={3}>
                <FormControlLabel
                control={
                  <Checkbox
                    name="has_5g"
                    checked={formData.has_5g}
                    onChange={handleChange}
                  />
                }
                label="Has 5G"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel
                control={
                  <Checkbox
                    name="has_nfc"
                    checked={formData.has_nfc}
                    onChange={handleChange}
                  />
                }
                label="Has NFC"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel
                control={
                  <Checkbox
                    name="has_ir_blaster"
                    checked={formData.has_ir_blaster}
                    onChange={handleChange}
                  />
                }
                label="Has IR Blaster"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="RAM Capacity"
                name="ram_capacity"
                type="number"
                value={formData.ram_capacity}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Internal Memory"
                name="internal_memory"
                type="number"
                value={formData.internal_memory}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Screen Size"
                name="screen_size"
                type="number"
                value={formData.screen_size}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Refresh Rate"
                name="refresh_rate"
                type="number"
                value={formData.refresh_rate}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="OS"
                name="os"
                value={formData.os}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                    <Checkbox
                    name="extended_memory_available"
                    checked={formData.extended_memory_available}
                    onChange={handleChange}
                    />
                }
                label="Extended Memory Available"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Extended Upto"
                name="extended_upto"
                type="number"
                value={formData.extended_upto}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Rating"
                name="rating"
                type="number"
                value={formData.rating}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Resolution"
                name="resolution"
                value={formData.resolution}
                onChange={handleChange}
                size="small"
              />
            </Grid>

            {/* Battery Heading */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Battery
              </Typography>
            </Grid>

            {/* Battery Fields */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Battery Capacity"
                name="battery_capacity"
                value={formData.battery_capacity}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="fast_charging_available"
                    checked={formData.fast_charging_available}
                    onChange={handleChange}
                  />
                }
                label="Fast Charging Available"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Fast Charging"
                name="fast_charging"
                value={formData.fast_charging}
                onChange={handleChange}
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                camera
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Number of Rear Cameras"
                name="num_rear_cameras"
                value={formData.num_rear_cameras}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Number of Front Cameras"
                name="num_front_cameras"
                value={formData.num_front_cameras}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Primary Rear Camera"
                name="primary_camera_rear"
                value={formData.primary_camera_rear}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Primary Front Camera"
                name="primary_camera_front"
                value={formData.primary_camera_front}
                onChange={handleChange}
                size="small"
              />
            </Grid>

            {/* Processor Heading */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Processor
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Processor Brand"
                name="processor_brand"
                value={formData.processor_brand}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Processor Speed"
                name="processor_speed"
                value={formData.processor_speed}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Number of Cores"
                name="num_cores"
                value={formData.num_cores}
                onChange={handleChange}
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default MobileForm;
