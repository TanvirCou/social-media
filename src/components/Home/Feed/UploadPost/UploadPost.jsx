import React from 'react';
import img from "../../../../assets/person/1.jpeg";

const UploadPost = () => {
    const data = [
        {
            icon: "images-sharp",
            title: "Photo or Video",
            color: "text-orange-600"
        },
        {
            icon: "pricetag-sharp",
            title: "Tag",
            color: "text-blue-600"
        },
        {
            icon: "location-sharp",
            title: "Location",
            color: "text-green-500"
        },
        {
            icon: "happy-sharp",
            title: "Feelings",
            color: "text-amber-400"
        },
    ]
    return (
        <div className='h-44 m-3 border shadow-md'>
            <div className='p-3'>
                <div className='flex items-center'>
                    <img src={img} alt="" className='w-12 h-12 rounded-[50%] object-cover'/>
                    <input type="search" placeholder="What's in your mind?" name="" id="" className='text-md placeholder:font-medium w-[90%] h-full focus:outline-none focus:ring-0 placeholder:text-gray-500 border-none'/>
                </div>
                <hr className='my-5 mx-4 border border-gray-300'/>
                <div className='flex justify-between my-4'>
                    <div className='flex'>
                    {
                        data.map(item => {
                            return (
                                <div key={item.title} className='flex items-center ml-3 mr-2 cursor-pointer'>
                                    <div className={`text-2xl flex items-center ${item.color}`}>
                                    <ion-icon name={item.icon}></ion-icon>
                                    </div>
                                    <span className='text-sm font-medium mx-1'>{item.title}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div>
                    <button className='px-2 py-1 text-white text-md font-semibold bg-green-500 rounded mr-3'>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPost;