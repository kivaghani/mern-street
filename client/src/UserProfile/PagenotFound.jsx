import React from 'react';
import '../styles/pagenotfound.css';

const PagenotFound = () => {
  return (
    <div className=''>
      <section className="page_404">
        <div className="container">
          <div className="row justify-content-center"> {/* Adjusted */}
            <div className="col-sm-10 col-md-8 col-lg-6 text-center"> {/* Adjusted */}
              <div className="four_zero_four_bg">
                <h1>404</h1> {/* Removed redundant className */}
              </div>
              <div className="contant_box_404">
                <h3>Look like you're lost</h3>
                <div className="kalo">{/* Removed redundant className */}
                <p>The page you are looking for is not available!</p>
                </div> 
                <a href="/" className="link_404">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagenotFound;
