import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';




function GalleryItem({ picture, updateLike }) {
    const [toggle, setToggle] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);

    return <li key={picture.id}> {
        toggle ? (
            <div>{picture.description}</div>
        ) : (
            <div>{<img src={picture.path} />}</div>
        )
    }
    <button onClick={() => setToggle(!toggle)}>{toggle ? 'See Photo' : 'See Info'}</button>
    
    <button onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter}LIKE</button>

    </li>



}

export default GalleryItem;


