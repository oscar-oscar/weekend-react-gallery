import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
//like counnt and delete will go in here too

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

// function updateLike(){
//     const [likeCounter, setLikeCounter] = useState(0);

//     const increase = () => {
//         setLikeCounter(likeCounter => +1);
//     }
//     return <button onClick={increase}>Like</button>
// }
        
// (<ImageList sx={{height: 100%}} cols={3} rowHeight={100%}>
//     {galleryList.map((picture) => (
//       <ImageListItem key={picture.id}>
//         <img
//           src={`${picture.path}?w=164&h=164&fit=crop&auto=format`}
//           srcSet={`${picture.path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//           alt={picture.title}
//           loading="lazy"
//         />
//       </ImageListItem>
//     ))}
//     </ImageList>
// )
    



export default GalleryList;







            















