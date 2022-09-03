import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchPictures();
  }, []);

  const fetchPictures = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryItems(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
      alert('something went wrong');
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Photos</h1>
      </header>
      <div>
        <GalleryList />
      </div>

      <div>{galleryItems.map(picture => {

        return <div key={picture.id} picutre={picture} />


      })}</div>




    </div>
  );
}

export default App;
