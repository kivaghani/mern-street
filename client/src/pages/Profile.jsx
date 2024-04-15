  import { useSelector } from "react-redux"
  import { useRef, useState, useEffect } from "react";
  import { app } from "../firebase";
  import {getStorage, ref, uploadBytesResumable} from 'firebase/storage'


  export default function Profile() {
    const fileRef = useRef(null);
    const [image, setImage] = useState(undefined);
    console.log(image);
    const { currentUser } = useSelector((state) => state.user);
    
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
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // setImagePercent(Math.round(progress));
        }
      );
    };
  
    return (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
        <form className='flex flex-col gap-4'>
          <input 
            type="file" 
            ref={fileRef} 
            hidden 
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* allow read;
              allow write: if
              request.resource.size < 2 * 1024 * 1024 &&
              request.resource.contentType.matches('image/.*') */}
          <img
            src={currentUser.profilePicture}
            alt="profile"
            className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
            onClick={() => fileRef.current.click()}
          />
          <input 
            defaultValue={currentUser.username} 
            type="text" 
            id="username"
            placeholder="Username" 
            className="bg-slate-100 rounded-lg p-3" 
          />
          <input 
            defaultValue={currentUser.email}
            type="email" 
            id="email"
            placeholder="Email" 
            className="bg-slate-100 rounded-lg p-3" 
          />
          <input 
            type="password" 
            id="password"
            placeholder="Password" 
            className="bg-slate-100 rounded-lg p-3" 
          />
  
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            update
          </button>
        </form>
  
        <div className="flex justify-between mt-5">
          <span className="text-red-700 cursor-pointer">Delete Account</span>
          <span className="text-red-700 cursor-pointer">Sign out</span>
        </div>
      </div>
    );
  }
  