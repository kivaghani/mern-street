import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/gallery.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Gallery() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/gallery')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <Header/>
    <div className="fi">
    <div className="gallery text-center">
      <h1>Gallery</h1>
      <div className="image-grid">
        {notes.map((note, index) => (
          <div key={index} className="image-card">
            <img src={`http://localhost:3000/Images/${note.image}`} alt="" />
            <div className="note-info">
              <p><strong>Name:</strong> {note.Username}</p>
              <p><strong>Date:</strong> {note.Date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Gallery;
