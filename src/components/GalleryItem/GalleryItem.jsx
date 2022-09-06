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
import './GalleryItem.css';
import axiox from 'axios';




function GalleryItem({ picture, likePhoto }) {
    const [toggle, setToggle] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);

   

    return <Box sx={{ flexGrow: 1 }}>

        <Grid xs={12} sm={4} key={picture.id}>

            <Card sx={{ backgroundColor: "#fffde7" }} elevation={3}>
                <CardContent>
                    {
                        toggle ? (
                            <Typography align="center" variant="h5"><div className='description'>{<img style={{ width: 1000 + 'px' }} src={picture.path} />}{picture.description} </div></Typography>
                        ) : (
                            <div className='pic-container'>{<img style={{ width: 1000 + 'px' }}src={picture.path} />}</div>
                        )
                    }
                    <CardActions>
                        <Button onClick={() => setToggle(!toggle)}>{toggle ? 'See Photo' : 'See Info'}</Button>
                        <Stack direction="row" spacing={2}><Button color="primary" variant="contained" startIcon={<ThumbUpIcon />}
                            onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter}</Button></Stack>
                            <button onClick={() => likePhoto(picture.id)}>Like{picture.likes}</button>
                    </CardActions>
                </CardContent>
            </Card>

        </Grid>

      
    </Box>

}

export default GalleryItem;


