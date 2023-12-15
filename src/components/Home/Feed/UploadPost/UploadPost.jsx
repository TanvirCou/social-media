import React, { useContext, useRef, useState } from 'react';
import blankDp from "../../../../assets/person/noAvatar.png";
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';

const UploadPost = () => {
    
    const { user, loggedInUser } = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        // const newPost = {
        //     userId: user._id,
        //     desc: desc.current.value
        // };

        // if(file) {
            const data = new FormData()
            // const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("userId", user?._id || loggedInUser._id);
            data.append("desc", desc.current.value);
            try {
                await axios.post("http://localhost:3000/api/posts", data);
                window.location.reload();
            } catch(err){
                //
            }
            // data.append("name", fileName);
            // newPost.img = fileName;
        //     try {
        //         await axios.post("http://localhost:3000/api/upload", data);
        //     } catch(err){
        //         //
        //     }
        // }
        


    }
    return (
        <div className=' m-3 border shadow-md'>
            <div className='p-3'>
                <div className='flex items-center'>
                    <img src={(user?.profilePicture || loggedInUser.profilePicture) ? (user?.profilePicture || loggedInUser.profilePicture) : blankDp} alt="" className='w-12 h-12 rounded-[50%] object-cover' />
                    <input type="search" placeholder={`What's in your mind ${user?.name || loggedInUser.name}?`} ref={desc} className='text-md px-2 placeholder:font-medium w-[90%] h-full focus:outline-none focus:ring-0 placeholder:text-gray-500 border-none' />
                </div>
                <hr className='my-5 mx-4 border border-gray-300' />
                {file && (
                    <div className='flex justify-end'>
                        <img src={URL.createObjectURL(file)} alt="" className='relative w-full '/>
                        <div className='absolute z-10 text-2xl text-black cursor-pointer' onClick={() => setFile(null)}>
                        <ion-icon name="close-circle-sharp"></ion-icon>
                        </div>
                    </div>
                )}
                <form onSubmit={handleSubmit} className='flex justify-between my-4'>
                    <div className='flex'>
                        <label htmlFor='file' className='flex items-center ml-3 mr-2 cursor-pointer'>
                            <div className={`text-2xl flex items-center text-orange-600`}>
                                <ion-icon name="images-sharp"></ion-icon>
                            </div>
                            <span className='text-sm font-medium mx-1'>Photo or Video</span>
                            <input type="file" id='file' accept=".png,.jpeg,.jpg" className='hidden' onChange={(e) => setFile(e.target.files[0])}/>
                        </label>
                        <div className='flex items-center ml-3 mr-2 cursor-pointer'>
                            <div className={`text-2xl flex items-center text-blue-600`}>
                                <ion-icon name="pricetag-sharp"></ion-icon>
                            </div>
                            <span className='text-sm font-medium mx-1'>Tag</span>
                        </div>
                        <div className='flex items-center ml-3 mr-2 cursor-pointer'>
                            <div className={`text-2xl flex items-center text-green-500`}>
                                <ion-icon name="location-sharp"></ion-icon>
                            </div>
                            <span className='text-sm font-medium mx-1'>Location</span>
                        </div>
                        <div className='flex items-center ml-3 mr-2 cursor-pointer'>
                            <div className={`text-2xl flex items-center text-amber-400`}>
                                <ion-icon name="happy-sharp"></ion-icon>
                            </div>
                            <span className='text-sm font-medium mx-1'>Feelings</span>
                        </div>
                    </div>
                    <div>
                        <button className='px-2 py-1 text-white text-md font-semibold bg-green-500 rounded mr-3'>Share</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPost;