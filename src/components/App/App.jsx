import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  
let [galleryList, setGalleryList] = useState([]);



  useEffect(() => {
    console.log('useEffect - page load');
    fetchPictures();
    likePhoto();
  }, []);

  const fetchPictures = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryList(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
      alert('something went wrong');
    });
  }

  const likePhoto = (galleryId) => {
    console.log('galleryId', galleryId);
    axios({
        method: 'PUT',
        url: `/gallery/like/${galleryId}`
    }).then(response => {
        console.log('made it here!')
        fetchPictures();
    }).catch(error => {
        console.log(error);
        alert('something went wrong in PUT');
    });
};

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Photos</h1>
      </header>
      <div>
        <GalleryList galleryList={galleryList} likePhoto={likePhoto}/>
        
      </div>
    </div>
  );
}

export default App;

