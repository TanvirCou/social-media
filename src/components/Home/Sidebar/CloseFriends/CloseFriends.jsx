import React from 'react';
import img from "../../../../assets/person/2.jpeg"

const CloseFriends = ({user}) => {
    return (
        <div className="flex items-center pb-5">
                <img src={img} alt="" className="w-8 h-8 rounded-[50%] object-cover"/>
                <span className="text-md mx-4 font-medium">{user.username}</span>
            </div>
    );
};

export default CloseFriends;