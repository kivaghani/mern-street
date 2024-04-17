import React, { useState } from 'react';
import '../../../styles/order.css';
// import Header from '../../components/Layouts/Header';
// import Footer from '../../components/Layouts/Footer';

function AmdManekBalaOrder() {
  const [latteQuantity, setLatteQuantity] = useState(0);
  const [cappuccinoQuantity, setCappuccinoQuantity] = useState(0);
  const [espressoQuantity, setEspressoQuantity] = useState(0);
  const [prQuantity, setprQuantity] = useState(0);

  const [totalCost, setTotalCost] = useState(0);

  const handleLatteQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setLatteQuantity(value);
    }
  };
  
  const handleCappuccinoQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setCappuccinoQuantity(value);
    }
  };
  
  const handleEspressoQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setEspressoQuantity(value);
    }
  };
  
  const handleprQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setprQuantity(value);
    }
  };
  

  const calculateTotalCost = () => {
    const lattePrice = 60;
    const cappuccinoPrice = 90;
    const espressoPrice = 110;
    const prprice = 85;

    const total = lattePrice * latteQuantity + cappuccinoPrice * cappuccinoQuantity + espressoPrice * espressoQuantity + prprice * prQuantity;
    setTotalCost(total.toFixed(2));
  };

  const handleSubmitOrder = () => {
    
  };

  return (
    <>
    {/* <Header/> */}
      <div className='cover'>
        <h1><i className="fas fa-mug-hot"></i> Order Form</h1>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="title">sada Dosa</td>
              <td data-th="price">60</td>
              <td data-th="quantity">
                <input type="number" value={latteQuantity} onChange={handleLatteQuantityChange} placeholder="Enter Quantity" />
              </td>
            </tr>
            <tr>
              <td data-th="title">Sp. Masala Dosa</td>
              <td data-th="price">90</td>
              <td data-th="quantity">
                <input type="number" value={cappuccinoQuantity} onChange={handleCappuccinoQuantityChange} placeholder="Enter Quantity" />
              </td>
            </tr>
            <tr>
              <td data-th="title">Gwalier Masala dosa</td>
              <td data-th="price">110</td>
              <td data-th="quantity">
                <input type="number" value={espressoQuantity} onChange={handleEspressoQuantityChange} placeholder="Enter Quantity" />
              </td>
            </tr>
            <tr>
              <td data-th="title">Cheese Paper Dosa</td>
              <td data-th="price">85</td>
              <td data-th="quantity">
                <input type="number" value={prQuantity} onChange={handleprQuantityChange} placeholder="Enter Quantity" />
              </td>
            </tr>
          </tbody>
        </table>

       

        <button onClick={calculateTotalCost} className="orderbutton">Total Cost</button>
        <button onClick={handleSubmitOrder} className="orderbutton">Book Order</button>
        <div className="result" id="total_cost">Rupees : {totalCost}</div>

      </div>
      {/* <Footer/> */}
    </>
  );
}

export default AmdManekBalaOrder;
