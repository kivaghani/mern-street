import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error(data.message, { autoClose: 3000 });
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
      toast.success('Signed in successfully!', { autoClose: 3000 });
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message, { autoClose: 3000 });
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="back2">
          <div className="p-5 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7 text-white mt-5">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange} />
            <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange} />
            <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? 'Loading...' : 'Sign In'}</button>
            <OAuth />
          </form>
          <div className="flex flex-col items-center mt-5">
            <p className="text-white">Don't have an account?</p>
            <Link to="/sign-up" className="text-green-300">Sign up</Link>
          </div>
          {error && <p className="text-white mt-5">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}
