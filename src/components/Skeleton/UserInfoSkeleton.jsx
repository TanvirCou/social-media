import React from 'react';

const UserInfoSkeleton = () => {
    return (
        <div className='px-2'> 
            <div className="flex flex-col gap-2 w-full">
            <div className="skeleton h-5 my-2 w-32"></div>
                <div className="skeleton h-4 w-56"></div>
                <div className="skeleton h-4 w-56"></div>
                <div className="skeleton h-4 w-56"></div>
                <div className="skeleton h-4 w-56"></div>
            </div>
            <div className="flex flex-col gap-2 mt-5 w-full">
                <div className="skeleton h-5 my-2 w-32"></div>
                <div className='flex gap-2 items-center flex-wrap'>
                <div className="skeleton h-28 w-24"></div>
                <div className="skeleton h-28 w-24"></div>
                <div className="skeleton h-28 w-24"></div>
                <div className="skeleton h-28 w-24"></div>
                <div className="skeleton h-28 w-24"></div>
                <div className="skeleton h-28 w-24"></div>
                </div>
            </div>
            <div className='w-full pr-3 mt-6'>
            <div className="skeleton h-60 w-full"></div>
            </div>
        </div>
    );
};

export default UserInfoSkeleton;