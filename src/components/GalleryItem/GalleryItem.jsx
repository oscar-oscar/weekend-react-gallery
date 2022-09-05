import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/system/Unstable_Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Stack from '@mui/material/Stack';


function GalleryItem({ picture, updateLike }) {
    const [toggle, setToggle] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);


    return <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container space={2}> */}

            <Grid xs={12} sm={4} key={picture.id}>

                <Card sx={{ backgroundColor: "#D2F8E7 " }} elevation={3}>
                   

                    <CardContent>
                        {
                            toggle ? (
                                <Typography variant="h5"><div>{picture.description}</div></Typography>
                            ) : (
                                <div>{<img src={picture.path} />}</div>
                            )
                        }
                        <CardActions>
                            <Button onClick={() => setToggle(!toggle)}>{toggle ? 'See Photo' : 'See Info'}</Button>

                            <Stack direction="row" spacing={2}><Button variant="contained" startIcon={<ThumbUpIcon/>} onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter}</Button></Stack>
                            
                            
       
                        </CardActions>
                    </CardContent>
                </Card>

            </Grid>

        {/* </Grid> */}
    </Box>

}

export default GalleryItem;


