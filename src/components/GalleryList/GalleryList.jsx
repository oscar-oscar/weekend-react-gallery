import { useState } from 'react';
//like counnt and delete will go in here too
function GalleryList({ galleryList }) {
    return (
        <div>
            <ul>
                {galleryList.map(picture => (
                    <li key={picture.id}>
                        <img src={picture.path} />
                        {picture.likes}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GalleryList;