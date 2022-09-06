import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, likePhoto}) {
    return (
        <div>
            <ul>
                {galleryList.map((picture) => {
                  console.log(galleryList);
                    return<GalleryItem
                    key={picture.id}
                    picture={picture}
                    likePhoto={likePhoto}
                    />
                })}
            </ul>
        </div>
    )

}  

    



export default GalleryList;







            















