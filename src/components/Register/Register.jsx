import React from 'react';

const Register = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-gray-100'>
            <div className='h-[70%] w-[70%] flex'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <p className='text-4xl font-bold text-blue-600 mb-2'>Pandabook</p>
                    <p className='text-xl '>Pandabook helps you connect and share with <br /> the people in your life.</p>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='h-[400px] w-[90%] bg-white p-4 flex flex-col justify-between rounded-md shadow-md'>
                        <input type="email" placeholder='Username' className='h-12 rounded-md border border-gray-300 border-solid' required/>
                        <input type="email" placeholder='Email Address' className='h-12 rounded-md border border-gray-300 border-solid' required/>
                        <input type="password" placeholder='Password' className='h-12 rounded-md border border-gray-300 border-solid' required/>
                        <input type="email" placeholder='Confirm Password' className='h-12 rounded-md border border-gray-300 border-solid' required/>
                        <button className='h-12 rounded-md bg-blue-600 text-white text-lg font-semibold cursor-pointer'>Sign Up</button>
                        <button className='h-12 bg-[#42b72a] w-[50%] cursor-pointer text-lg font-semibold text-white rounded-md self-center'>Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;