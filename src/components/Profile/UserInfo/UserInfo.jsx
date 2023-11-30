import { useContext, useEffect, useState } from "react";
import blankDp from "../../../assets/person/noAvatar.png";
import Ad from "../../Home/Rightbar/Ad/Ad";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const UserInfo = ({user}) => {
    const [friends, setFriends] = useState([]);
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.following.includes(user._id));

   

    useEffect(() => {
        const getFriends = async() => {
            try {
                const res = await axios.post(`http://localhost:3000/api/users/friends`, {userId: user._id});
            setFriends(res.data);
            } catch(err){
                //
            }
        };
        getFriends();
    },[user._id]);

    const handleFollow = async() => {
        try {
            if(followed) {
                await axios.put(`http://localhost:3000/api/users/${user._id}/unfollow`, {userId: currentUser._id});
                dispatch({ type: "UNFOLLOW", payload: user._id});
            } else {
                await axios.put(`http://localhost:3000/api/users/${user._id}/follow`, {userId: currentUser._id});
                dispatch({ type: "FOLLOW", payload: user._id});
            }
        } catch(err) {
            //
        }
        setFollowed(!followed);
    };
    return (
        <div className="p-1"> 
            {user.name !== currentUser.name && (
                <button onClick={handleFollow} className="bg-blue-600 text-white text-md font-medium flex items-center px-2.5 py-1 rounded mb-2">
                    {followed ? 'Unfollow' : 'Follow'}
                    <div className="flex items-center text-2xl">
                    <ion-icon name={followed ? "remove-outline" : "add-outline"}></ion-icon>
                    </div>
                </button>
            )}
            <p className='text-lg font-bold mb-1.5'>User Information</p>
            <div className="px-2">
                <div className='flex items-center'>
                    <p className='text-[15px] font-medium'>Current City:</p>
                    <p className='mx-2 text-md font-medium text-gray-500'>{user?.currentCity}</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-[15px] font-medium'>Home Town:</p>
                    <p className='mx-2 text-md font-medium text-gray-500'>{user?.homeTown}</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-[15px] font-medium'>Relationship:</p>
                    <p className='mx-2 text-md font-medium text-gray-500'>{user?.relationship}</p>
                </div>
            </div>
            <p className='text-lg font-bold mt-5 mb-3'>User friends</p>
            <div className="flex flex-wrap justify-between">
                {
                friends.map(friend => (
                    <Link to={`/profile/${friend.name}`} key={friend._id}>
                        <div  className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={friend.profilePicture ? friend.profilePicture : blankDp} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-[15px] font-medium">{friend.name}</span>
                    </div>
                    </Link>
                ))}
            </div>
            <div>
                <Ad />
            </div>
        </div>
    );
};

export default UserInfo;