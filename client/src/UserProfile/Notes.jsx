import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/notes.css';

function Notes() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('uname', name);
    formData.append('datee', date);

    try {
      const res = await axios.post('http://localhost:3000/upload', formData);
      console.log(res);
      setImageURL(res.data.image);
      // Redirect to the gallery page after successful upload
      window.location.href = '/gallery';
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="login-box">
          <form onSubmit={handleUpload}>
            <h2 className='text-white font-bold '>Memories</h2>

            <div className="input-box">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='uname' required />
              <label>Name</label>
            </div>

            <div className="input-box">
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name='datee' required />
            </div>

            <div className="input-box">
              <input type="file" onChange={handleFileChange} name='filee' required />
            </div>

            <div className="login-button">
              <input type="submit" value="Submit" />
            </div>
          </form>
          {imageURL && <img src={`http://localhost:8560/Images/${imageURL}`} alt="Uploaded" />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Notes;
