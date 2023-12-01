import React from 'react';
import blankDp from "../../../assets/person/1.jpeg";

const ConversionFriend = () => {
    return (
        <div className='flex items-center my-3'>
            <img src={blankDp} alt="" className='w-10 h-10 rounded-[50%] object-cover'/>
            <span className='mx-3 text-md font-medium'>Nawar</span>
        </div>
    );
};

export default ConversionFriend;