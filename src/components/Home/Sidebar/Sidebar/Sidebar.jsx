import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import CloseFriends from "../CloseFriends/CloseFriends";
import SidebarItem from "../SidebarItem/SidebarItem";
import "./Sidebar.css";

const Sidebar = () => {
    const data = [
        {
            icon: "newspaper-sharp",
            title: "NewsFeed",
            link: "/"
        },
        {
            icon: "chatbox-ellipses-sharp",
            title: "Chats",
            link: "/messenger"
        },
        {
            icon: "caret-forward-circle-sharp",
            title: "Videos"
        },
        {
            icon: "people-sharp",
            title: "Groups"
        },
        {
            icon: "bookmark-sharp",
            title: "Bookmarks"
        },
        {
            icon: "help-circle-outline",
            title: "Questions"
        },
        {
            icon: "bag-outline",
            title: "Jobs"
        },
        {
            icon: "calendar-outline",
            title: "Events"
        },
        {
            icon: "school-sharp",
            title: "Courses"
        },
    ];

    const [friends, setFriends] = useState([]);
    const { loggedInUser, user } = useContext(AuthContext);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.post(`https://panda-book.onrender.com/api/users/friends`, { userId: loggedInUser?._id || user?._id });
                setFriends(res.data);
            } catch (err) {
                //
            }
        };
        getFriends();
    }, [loggedInUser, user]);

    return (
        <div >
            <div className="fixed w-3/12 h-[92vh] overflow-y-scroll pl-8 webkit">
                <div className="pt-6">
                    {
                        data.map(item => <SidebarItem key={item.title} item={item}></SidebarItem>)
                    }
                </div>
                <button className="bg-gray-200 px-8 py-2 rounded text-[15px] font-medium">Show More</button>
                <hr className="my-5 border-1 border-gray-300" />
                <div>
                    {friends.map(friend => <CloseFriends key={friend._id} friend={friend} />)}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;