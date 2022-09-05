import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';




function GalleryItem({ picture }) {
    const [toggle, setToggle] = useState(false);

    return <li key={picture.id}> {
        toggle ? (
            <div>{<img src={picture.path} />}</div>
        ) : (
            <div>{picture.description}</div>
        )
    }
    <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
    </li>



}

export default GalleryItem;


