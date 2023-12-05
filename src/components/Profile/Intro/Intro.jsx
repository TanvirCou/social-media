import React, { useContext, useState } from 'react';
import blankCover from "../../../assets/person/noCover.png";
import blankDp from "../../../assets/person/noAvatar.png";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

const Intro = ({ user }) => {
    const {user: currentUser} = useContext(AuthContext);
    const [dpFile, setDpFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    console.log(coverFile);

    const handleSubmit = async(e) => {
        e.preventDefault();
            const data = new FormData()
            if(dpFile) {
                data.append("dpFile", dpFile);
            }
            if(coverFile) {
                data.append("coverFile", coverFile);
            }
            
            
            data.append("userId", (currentUser?._id || (JSON.parse(localStorage.getItem("data")))._id));
            try {
                await axios.put(`http://localhost:3000/api/users/${(currentUser?._id || (JSON.parse(localStorage.getItem("data")))._id)}`, data);
                window.location.reload();
                setDpFile(null);
                setCoverFile(null);
            } catch(err){
                console.log(err);
            }
    }
    return (
        <div className='mt-3'>
            <div className='px-2'>
                <div>

                    {(!dpFile && !coverFile) ? (
                    <div className='h-[315px] relative flex justify-center'>
                        <div>
                        <img src={user.coverPicture ? user.coverPicture : blankDp} alt="" className='h-[250px] w-full object-cover relative'/>
                        {user.name === (currentUser?.name || (JSON.parse(localStorage.getItem("data"))).name) && (<label htmlFor='coverFile' className='absolute text-3xl text-blue-600 cursor-pointer right-5 bottom-14'>
                        <ion-icon name="create-sharp"></ion-icon>
                        <input type="file" id='coverFile' accept=".png,.jpeg,.jpg" className='hidden' onChange={(e) => setCoverFile(e.target.files[0])}/>
                        </label>)}
                        </div>

                        <div className='absolute top-36 flex justify-end items-end'>
                        <img src={user.profilePicture ? user.profilePicture : blankDp} alt="" className='h-[160px] w-[160px]  rounded-[50%]  border-4 border-solid relative border-white'/>
                        {user.name === (currentUser?.name || (JSON.parse(localStorage.getItem("data"))).name) && (<label htmlFor='dpFile' className='absolute text-2xl text-blue-600 bottom-5 cursor-pointer'>
                        <ion-icon name="create-sharp"></ion-icon>
                        <input type="file" id='dpFile' accept=".png,.jpeg,.jpg" className='hidden' onChange={(e) => setDpFile(e.target.files[0])}/>
                        </label>)}
                        </div> 

                    </div>) 
                    
                    : (
                        <form onSubmit={handleSubmit}>
                            <div className='flex justify-end'>
                        <img src={URL.createObjectURL(dpFile || coverFile)} alt="" className='relative w-full h-[250px] object-contain'/>
                        <div className='absolute z-10 text-2xl text-black cursor-pointer' onClick={() => setDpFile(null) || setCoverFile(null)}>
                        <ion-icon name="close-circle-sharp"></ion-icon>
                        </div>
                    </div>
                    <div className='flex justify-center my-2'>
                    <button className='bg-green-500 text-white px-2 py-1 rounded-md'>Update</button>
                    </div>
                    
                        </form>
                    )}

                    
                    <div className='flex flex-col items-center'>
                        <p className='text-2xl font-bold '>{user.name}</p>
                        <p className='text-sm text-gray-400 font-medium leading-4'>{user?.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;