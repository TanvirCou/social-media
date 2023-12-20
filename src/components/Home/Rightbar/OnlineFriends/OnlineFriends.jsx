/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';

const OnlineFriends = ({ onlineUsers, userId, setCurrentChat }) => {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.post(`https://panda-book.onrender.com/api/users/friends`, { userId: userId });
                setFriends(res.data);
            } catch (err) {
                //
            }
        };
        getFriends();
    }, [userId]);

    console.log(friends);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (friend) => {
        try {
            const res = await axios.get(`https://panda-book.onrender.com/api/conversations/find/${userId}/${friend._id}`);
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div >
            {onlineFriends && onlineFriends.map(friend =>
                <div key={friend._id} className='flex items-center my-3 cursor-pointer' onClick={() => handleClick(friend)}>
                    <div className='relative flex items-center justify-end'>

                        <img src={friend?.profilePicture} alt="" className='w-9 h-9 rounded-[50%] object-cover' />
                        <span className='absolute w-3 h-3 bg-green-500 rounded-[50%] top-0 border border-solid border-white'></span>

                    </div>

                    <p className='text-[15px] font-medium mx-2.5'>{friend.name}</p>
                </div>
            )}
        </div>

    );
};

export default OnlineFriends;