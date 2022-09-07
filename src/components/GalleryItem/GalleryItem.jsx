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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



function GalleryItem({ picture, likePhoto }) {
    const [toggle, setToggle] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);



    return <Box sx={{ flexGrow: 1 }}>


        <Grid xs={12} sm={4} key={picture.id}>

            <Card sx={{  backgroundColor: "#fff0" }} elevation={3}>
                <CardContent>

                    {
                        toggle ? (
                             <Typography align="inherit" gutterBottom variant="h5">{<img src={picture.path} />} <br />
                             {picture.description} </Typography>
                        ) : (
                            <div>{<img src={picture.path} />}</div>
                        )
                    }


                    <Box alignContent={'center'}>
                        <Stack direction="row" spacing={2}><Button color="primary" variant="contained" startIcon={<ThumbUpIcon />}
                        onClick={() => likePhoto(picture.id)}>{picture.likes}</Button></Stack>
                    <Button style={{margin: 'auto', display: "flex"}} onClick={() => setToggle(!toggle)}>{toggle ? 'See Photo' : 'See Info'}</Button>
                    </Box>
                    


                </CardContent>
            </Card>

        </Grid>


    </Box>

}

export default GalleryItem;


