import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';




function GalleryItem({ picture }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <li key={picture.id}>
                    {<img src={picture.path} />}
                    {picture.description} <br/>
                    likes: {picture.likes}
                    </li>
        </div>
    )
   

    // return <div>{picture.id} {
    //     toggle ? (

    //         <div>{picture.descprtion}</div>
    //     ) : (

    //         <div><img src={picture.path}/></div>
    //     )
    // }

    //     <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>

    //     </div>

}

export default GalleryItem;



