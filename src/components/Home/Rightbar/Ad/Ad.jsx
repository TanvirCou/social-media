import React from 'react';
import adImg from "../../../../assets/ad.png";

const Ad = () => {
    return (
        <div>
            <img src={adImg} alt="" className='px-1 my-5 w-full rounded-md'/>
        </div>
    );
};

export default Ad;