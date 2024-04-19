import React, { useState } from 'react';
import'../styles/notes.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Notes = () => {
  const [formData, setFormData] = useState({
    text: '',
    date: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, images: [...formData.images, reader.result] });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedFormDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
    const updatedFormDataList = [...storedFormDataList, formData];
    localStorage.setItem('formDataList', JSON.stringify(updatedFormDataList));
    window.location.href = '/gallery';
  };

  return (
    <>
    <Header/>
    <div className='wrapper'>
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
        <h2 className='text-black font-serif' >Memories</h2>

          <div className='input-box'>
            <label htmlFor='text'></label>
            <input type='text' id='text' placeholder='Name' name='text' value={formData.text} onChange={handleChange} required/>
          </div>
          <div className='input-box'>
            <label htmlFor='date'></label>
            <input type='date' id='date' name='date' value={formData.date} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <label htmlFor='image'></label>
            <input accept='image/*' type='file' id='image' name='image' onChange={handleFileChange} required/>
          </div>
          <div className='login-button'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Notes;
