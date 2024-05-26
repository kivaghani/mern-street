


import React, { useEffect, useState } from "react";
import "../styles/gallery.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallery = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const storedFormData =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setFormDataList(storedFormData);
  }, []);

  return (
    <>
      <Header />
      <div className="fi">
        <div className="gallery">
          <h2 className="text-white">Gallery</h2>
          <div className="image-grid">
            {formDataList.map((formData, index) => (
              <div key={index} className="image-card">
                {formData.images &&
                  formData.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      width={100}
                      height={100}
                      src={image}
                      alt=""
                    />
                  ))}
                <div className="note-info">
                  <p className="text-white">Text: {formData.text}</p>
                  <p className="text-white">Date: {formData.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
