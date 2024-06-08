import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        toast.error(data.message, { autoClose: 3000 });
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
      toast.success('Signed up successfully!', { autoClose: 3000 });
    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast.error(error.message, { autoClose: 3000 });
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="back2">
        <div className="p-5 max-w-lg mx-auto">
          <h1 className="text-3xl text-center font-semibold my-7 text-white mt-5">Sign Up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username" onChange={handleChange} />
            <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange} />
            <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange} />
            <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? 'Loading...' : 'Sign Up'}</button>
            <OAuth />
          </form>
          <div className="flex gap-2 mt-5">
            <p className="text-white">Have an account?</p>
            <Link to={"/sign-in"}>
              <span className="text-green-400">Sign in</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}
