import {Card,CardContent,Typography,Box,CardActions,Button,CardMedia} from '@mui/material';

function MuiCard(){
    return (
        <>
        <Box width="300px" margin="30px"> 
            <Card>
                <CardMedia component='img' height="100px" image="https://i.pinimg.com/originals/aa/43/fa/aa43fae1e6f9778afef66794c61484a5.jpg"/>
                <CardContent>
                    <Typography>
                        After investing in multiple sports, Saudi Arabia has reportedly set its sights on the biggest T20 league in the world. What explains a tripling of the IPL’s last valuation?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Hello</Button>
                    <Button size="small">Share</Button>
                </CardActions>
            </Card>
        </Box>
        </>
    )
}

export default MuiCard