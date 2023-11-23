import React from 'react';
import img from "../../../../assets/person/3.jpeg";

const OnlineFriends = ({user}) => {
    return (
        <div className='flex items-center my-3'>
            <div className='relative flex items-center justify-end'>
                <img src={img} alt="" className='w-9 h-9 rounded-[50%] object-cover' />
                <span className='absolute w-3 h-3 bg-green-500 rounded-[50%] top-0 border border-solid border-white'></span>
            </div>
            <p className='text-[15px] font-medium mx-2.5'>{user.username}</p>
        </div>
    );
};

export default OnlineFriends;