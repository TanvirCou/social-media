import React from 'react';

const PostSkeleton = () => {
    return (
        <div className='px-4 pb-3'>
            <div className="flex flex-col py-2 px-4 shadow-md rounded-md border gap-3 w-full">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                    <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                    <div className="skeleton h-8 w-40"></div>
                    </div>
                    <div>
                    <div className="skeleton h-6 w-3"></div>
                    </div>
                </div>
                <div className="skeleton h-10 w-2/3"></div>
                <div className="skeleton h-72 w-full"></div>
                <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                <div className="skeleton w-6 h-6 rounded-full shrink-0"></div>
                <div className="skeleton w-6 h-6 rounded-full shrink-0"></div>
                <div className="skeleton h-6 w-20"></div>
                </div>
                <div className="skeleton h-6 w-28"></div>
                </div>
            </div>
            </div>
    );
};

export default PostSkeleton;