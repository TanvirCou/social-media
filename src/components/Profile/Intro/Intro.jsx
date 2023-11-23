import React from 'react';
import cover from "../../../assets/post/3.jpeg";
import dp from "../../../assets/person/6.jpeg";

const Intro = () => {
    return (
        <div className='mt-3'>
            <div className='px-2'>
                <div>
                    <div className='h-[315px] relative flex justify-center'>
                        <img src={cover} alt="" className='h-[250px] w-full object-cover'/>
                        <img src={dp} alt="" className='h-[160px] w-[160px] absolute rounded-[50%] top-36 border-4 border-solid border-white'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-2xl font-bold '>Alex Ratee</p>
                        <p className='text-sm text-gray-400 font-medium leading-4'>This is my account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;