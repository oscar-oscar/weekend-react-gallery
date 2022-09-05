import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
//like counnt and delete will go in here too

function GalleryList({galleryList}) {
    return (
        <div>
            <ul>
                {galleryList.map((picture) => {
                  console.log(galleryList);
                    return<GalleryItem
                    key={picture.id}
                    picture={picture}
                    />
                })}
            </ul>
        </div>
    )

}  

// function updateLike(){
//     const [likeCounter, setLikeCounter] = useState(0);

//     const increase = () => {
//         setLikeCounter(likeCounter => +1);
//     }
//     return <button onClick={increase}>Like</button>
// }
        
    
    


export default GalleryList;







            















