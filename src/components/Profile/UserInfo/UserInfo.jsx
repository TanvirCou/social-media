/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Ad from "../../Home/Rightbar/Ad/Ad";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import 'react-loading-skeleton/dist/skeleton.css'

const UserInfo = ({ user }) => {
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch, loggedInUser } = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser?.following.includes(user._id) || loggedInUser?.following.includes(user._id));
    const [editInfo, setEditInfo] = useState(false);
    const [currentCity, setCurrentCity] = useState("");
    const [homeTown, setHomeTown] = useState("");
    const [relationship, setRelationship] = useState("");
    const [birthday, setBirthday] = useState("")

    const navigate = useNavigate();



    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.post(`https://panda-book.onrender.com/api/users/friends`, { userId: user._id });
                setFriends(res.data);
            } catch (err) {
                //
            }
        };
        getFriends();
    }, [user._id]);

    const handleFollow = async () => {
        try {
            if (followed) {
                await axios.put(`https://panda-book.onrender.com/api/users/${user._id}/unfollow`, { userId: (currentUser?._id || loggedInUser?._id) });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`https://panda-book.onrender.com/api/users/${user._id}/follow`, { userId: currentUser?._id || loggedInUser?._id });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
        } catch (err) {
            //
        }
        setFollowed(!followed);
    };

    const handleUserInfo = async (e) => {
        e.preventDefault();
        const info = {
            userId: (currentUser?._id || loggedInUser?._id),
            currentCity: currentCity,
            homeTown: homeTown,
            relationship: relationship,
            birthday: birthday
        };
        try {
            await axios.put(`https://panda-book.onrender.com/api/users/${currentUser?._id || loggedInUser?._id}`, info);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
        setEditInfo(false);
    }

    const handleLogout = () => {
        localStorage.removeItem("data");
        navigate("/login");
        window.location.reload();
    };

    return (
        <div className="p-1">
            {(user.name !== (loggedInUser?.name || currentUser?.name)) && (
                <button onClick={handleFollow} className="bg-blue-600 text-white text-md font-medium flex items-center px-2.5 py-1 rounded mb-2">
                    {followed ? 'Unfollow' : 'Follow'}
                    <div className="flex items-center text-2xl">
                        <ion-icon name={followed ? "remove-outline" : "add-outline"}></ion-icon>
                    </div>
                </button>
            )}
            <div className="flex items-center justify-between">
                <p className='text-lg font-bold mb-1.5'>User Information</p>
                {user.name === (currentUser?.name || loggedInUser?.name) && <p type="button" onClick={() => setEditInfo(true)} className="text-blue-600 text-sm font-medium px-6 underline cursor-pointer">Edit</p>}
            </div>
            {!editInfo ? (
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
                    <div className='flex items-center'>
                        <p className='text-[15px] font-medium'>Date of Birth:</p>
                        <p className='mx-2 text-md font-medium text-gray-500'>{user?.birthday ? (new Date(user?.birthday)?.toLocaleDateString()) : ""}</p>
                    </div>
                </div>
            )
                : (
                    <form onSubmit={handleUserInfo} className="px-2">
                        <div className='flex items-center py-2'>
                            <p className='text-[15px] font-medium'>Current City:</p>
                            <input type="text" placeholder="Current City" onBlur={(e) => setCurrentCity(e.target.value)} className="border-b-2 ml-4 text-gray-600 px-2 w-40 placeholder:text-sm focus:outline-none" />
                        </div>
                        <div className='flex items-center py-2'>
                            <p className='text-[15px] font-medium'>Home Town:</p>
                            <input type="text" placeholder="Home Town" onBlur={(e) => setHomeTown(e.target.value)} className="border-b-2 ml-4 text-gray-600 px-2 w-40 placeholder:text-sm focus:outline-none" />
                        </div>
                        <div className='flex items-center py-2'>
                            <p className='text-[15px] font-medium'>Relationship:</p>
                            <select onClick={(e) => setRelationship(e.target.value)} className="w-40 ml-4 bg-gray-200 focus:outline-none py-1 rounded-md text-sm">
                                <option value="Single">Single</option>
                                <option value="In a relationship">In a relationship</option>
                                <option value="Married">Married</option>
                            </select>
                        </div>
                        <div className='flex items-center py-2'>
                            <p className='text-[15px] font-medium'>Date of Birth:</p>
                            <input type="date" onBlur={(e) => setBirthday(e.target.value)} className="border-b-2 ml-4 text-sm text-gray-600 px-2 w-40  focus:outline-none" />
                        </div>
                        <button className="bg-green-500 my-2 px-2 py-1 text-white text-md font-medium rounded-md">Update</button>
                    </form>
                )
            }
            {(friends.length > 0) && <p className='text-lg font-bold mt-5 mb-3'>User friends</p>}
            <div className="flex flex-wrap w-full gap-2">
                {
                    friends.map(friend => (
                        <Link to={`/profile/${friend.name}`} key={friend._id}>
                            <div className="flex flex-col items-center cursor-pointer">
                                <img src={friend?.profilePicture} alt="" className="w-24 h-24 rounded-2xl object-cover" />
                                <span className="text-[15px] font-medium">{friend.name}</span>
                            </div>
                        </Link>
                    ))}
            </div>
            <div>
                <Ad />
            </div>
            {user.name === (currentUser?.name || loggedInUser?.name) &&
                <div className="px-1 flex justify-end">
                    <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded-md">Logout</button>
                </div>}
        </div>
    );
};

export default UserInfo;