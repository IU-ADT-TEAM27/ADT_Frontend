import {Card, CardContent, CardMedia, Grid, Typography, TextField, Button} from '@mui/material';
import signupLogo from './Assets/signup.png';
// import { useTheme } from '@material-ui/core/styles';
// import { useTheme } from '@emotion/react';
import {useTheme} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import {makeStyles} from '@mui/material/styles';



// const useStyles = makeStyles((theme) => ({
//     myTextField: {
//       width: '100%', // Default width for small screens
  
//       [theme.breakpoints.up('md')]: {
//         width: '75%', // Adjust width for medium screens
//       },
  
//       [theme.breakpoints.up('lg')]: {
//         width: '50%', // Adjust width for large screens
//       },
//     },
//   }));

function Signup(){
    const theme = useTheme();
    // const classes = useStyles();

    return(
        <Grid width={{xs:"100vw", lg:"60vw",xl:"40vw"}} height="100vh" margin="auto" container justifyContent="center" alignItems="center">
            <Grid  height={{xs:"100%", lg:"60%", xl:"40%"}} width={{xs:"100%", lg:"100%", xl:"100%"}} sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius:"10px"}} container>
                <Grid xs={0} sm={0} md={0} lg={6} height={{xs:"50%", lg:"100%", xl:"100%"}} width={{xs:"100%", lg:"50%", xl:"50%"}} sx={{background : `url(${signupLogo})`,backgroundSize:"cover",overflow:"hidden"}}  padding="10px">
                </Grid>
                <Grid xs={12} lg={6} height={{xs:"50%", lg:"100%", xl:"100%"}} width={{xs:"100%", lg:"50%", xl:"50%"}} padding="2% 3%" container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
                    <Grid item xs={12} >
                        <TextField
                            id="outlined-password-input"
                            label="First Name"
                            type="text"
                            autoComplete="current-password"
                            sx={{width:"100%"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-password-input"
                            label="Last Name"
                            type="text"
                            autoComplete="current-password"
                            sx={{width:"100%"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            autoComplete="current-password"
                            sx={{width:"100%"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-password-input"
                            label="password"
                            type="password"
                            autoComplete="current-password"
                            sx={{width:"100%"}}
                            size={theme.breakpoints.down('xl') ? 'small' : 'normal'}
                            // size="large"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            sx={{width:"100%"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button size="large" variant='contained' sx={{width : "100%"}}>
                            Submit
                        </Button>
                    </Grid>
                    {/* <TextField
                        id="outlined-password-input"
                        label="First Name"
                        type="text"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="First Name"
                        type="text"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="First Name"
                        type="text"
                        autoComplete="current-password"
                    /> */}
                </Grid>
            </Grid>
            
        </Grid>
    )
}

export default Signup