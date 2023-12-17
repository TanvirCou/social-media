import React, {  useEffect, useState } from 'react';
import axios from 'axios';

const ConversionFriend = ({ conversation, currentUser, active}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const friendId = conversation.members.find(member => member !== (currentUser._id));
        const getConvoFriend = async() => {
            try {
                const res = await axios.get(`http://localhost:3000/api/users?userId=${friendId}`);
                setUser(res.data);
                console.log(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getConvoFriend();
    }, [conversation.members, currentUser._id]);

    

    return (
        <div className={`flex items-center my-2 p-2 cursor-pointer ${active ? "bg-teal-500 hover:bg-teal-600" : "bg-white hover:bg-gray-200"} hover:bg-gray-200 rounded-md`}>
            <img src={user?.profilePicture} alt="" className='w-10 h-10 rounded-[50%] object-cover'/>
            <span className='mx-3 text-md font-medium'>{user.name}</span>
        </div>
    );
};

export default ConversionFriend;