import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div>{galleryItems.map(picture => {

        return <div key={picture.id} picutre={picture}/>

        
      })}</div>


      <img src="images/atttower.jpg" />
      <img src="images/bridge.jpg" />
      <img src="images/chiles.jpg" />
      <img src="images/clouds.jpg" />
      <img src="images/foshay1.jpg" />
      <img src="images/guthrie.jpg" />
      <img src="images/guthrie2.jpg" />
      <img src="images/uniondepot.jpg" />
      <img src="images/weisman.jpg" />

    </div>
  );
}

export default App;
