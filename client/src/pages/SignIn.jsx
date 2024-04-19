import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function SignIn() {
  const [formData, setFormData]=useState({});
  const {loading , error}= useSelector((state)=> state.user);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };
  const handleSubmit =async(e) =>{
    e.preventDefault();
    try {
      dispatch(signInStart());
      const  res=await fetch('/api/auth/signin',
      {
        method:'post',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
      );
      const data=await res.json();
      console.log(data);
      if(data.success === false){
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
   
   
  };
  
  return (
    <>
    <Header/>

    <div className="back2">
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7 p-5 text-white'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 ' >
          
          <input type="email"  placeholder='email ' className='border p-3 rounded-lg 'id='email' onChange={handleChange}/>
          <input type="password"  placeholder='password ' className='border p-3 rounded-lg 'id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
        <OAuth/>
        </form>
        <div className='flex gap-2 mt-5'>
          <p className='text-white'>Dont have an account?</p>
          <Link to={"/sign-up"}>
            <span className='text-green-300'>Sign up</span>
          </Link>
        </div>
        {error && <p className='text-white mt-5'>{error}</p>}
    </div>
    </div>
    <Footer/>
    </>
  )
}