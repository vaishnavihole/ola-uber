import React, { useState, useEffect } from 'react';
import './Booking.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Booking = () => {

  const [type, setType] = useState("");
  const [user, setUser] = useState({});
  const [description, setDescription] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const serviceRequest = async () => {
    if (!type) {
      alert("Type is required");
      return;
    }

    if (!description) {
      alert("Description  is required");
      return;
    }


    if (!mobile) {
      alert("Mobile is required");
      return;
    }

    if (!address) {
      alert("Address is required");
      return;
    }

    const response = await axios.post("/serviceRequest", {
      type: type,
      description: description,
      mobile: mobile,
      address: address,
    })

    alert(response?.data?.message);

    if (response?.data?.success) {
      window.location.href = "/";
    }
  };

  useEffect(()=>{
    const storageUse = JSON.parse(localStorage.getItem("user") || '{}');
    if(storageUse?.email){
      setUser(storageUse);
    }
    else{
      alert("You are not logged in!");
      window.location.href = "/login";
    }
  }, [])
  return (
    <div>
      <Navbar />

      <div className='form-container'>
        <form>
          <label htmlFor='mobile'>
            Type:
            </label>
            <select name="type" className='text' value={type} onChange={(e) => {
              setType(e.target.value)
            }}>
              <option>Select a type</option>
              <option value="hospitalVisit">Hospital Visit</option>
              <option value="medicinePurchase">Medicine Purchase</option>
              <option value="grocerryPurchase">Grocerry Purchase</option>
              <option value="pickAndDrop">Pick and Drop</option>
            </select>
          

          <label htmlFor='mobile'>
            Description:
            </label>
            
            <textarea className="text" name="description"
              to="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }} />
    

          <label htmlFor='mobile'>
            Address:
            </label>
            <input
              to="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              type="text"
              name="address"
              className='text'
            />
          

          <label htmlFor='mobile'>
            Mobile Number:
          </label>
          <input
            to="mobile"
            type="text"
            name="mobileNumber"
            className='text'
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value)
            }} />

          <button type="button"
            onClick={serviceRequest}>
            Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
