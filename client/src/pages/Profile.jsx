import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [formData, setFormData] = useState({});

  const { currentUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImagePercent(0);
        toast.error('Error uploading image (file size must be less than 2 MB)');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
          toast.success('Image uploaded successfully');
          setImagePercent(0);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        toast.error('Failed to update user');
        return;
      }
      dispatch(updateUserSuccess(data));
      toast.success('User updated successfully');
    } catch (error) {
      dispatch(updateUserFailure(error));
      toast.error('Something went wrong!');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        toast.error('Failed to delete account');
        return;
      }
      dispatch(deleteUserSuccess(data));
      toast.success('Account deleted successfully');
    } catch (error) {
      dispatch(deleteUserFailure(error));
      toast.error('Something went wrong!');
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut());
      toast.success('Signed out successfully');
    } catch (error) {
      console.log(error);
      toast.error('Failed to sign out');
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="back">
        <div className='p-3 max-w-lg mx-auto'>
          <h1 className='text-3xl font-semibold text-center my-7 p-4 text-white'></h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
              type='file'
              ref={fileRef}
              hidden
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt='profile'
              className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
              onClick={() => fileRef.current.click()}
            />
            <p className='text-sm self-center'>
              {imagePercent > 0 && imagePercent < 100 ? (
                <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
              ) : (
                ''
              )}
            </p>
            <input
              defaultValue={currentUser.username}
              type='text'
              id='username'
              placeholder='Username'
              className='bg-slate-100 rounded-lg p-3'
              onChange={handleChange}
            />
            <input
              defaultValue={currentUser.email}
              type='email'
              id='email'
              placeholder='Email'
              className='bg-slate-100 rounded-lg p-3'
              onChange={handleChange}
            />
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='bg-slate-100 rounded-lg p-3'
              onChange={handleChange}
            />
            <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
              {loading ? 'Loading...' : 'Update'}
            </button>
          </form>
          <div className='flex justify-between mt-5'>
            <span
              onClick={handleDeleteAccount}
              className='text-white cursor-pointer bg-red-700 p-3 rounded-lg'
            >
              Delete Account
            </span>
            <span onClick={handleSignOut} className='text-white cursor-pointer bg-red-700 p-3 rounded-lg'>
              Sign out
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
