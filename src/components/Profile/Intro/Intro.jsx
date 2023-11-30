import React from 'react';
import blankCover from "../../../assets/person/noCover.png";
import blankDp from "../../../assets/person/noAvatar.png";

const Intro = ({ user }) => {
    return (
        <div className='mt-3'>
            <div className='px-2'>
                <div>
                    <div className='h-[315px] relative flex justify-center'>
                        <img src={user.coverPicture ? user.coverPicture : blankCover} alt="" className='h-[250px] w-full object-cover'/>
                        <img src={user.profilePicture ? user.profilePicture : blankDp} alt="" className='h-[160px] w-[160px] absolute rounded-[50%] top-36 border-4 border-solid border-white'/>
                    </div>
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