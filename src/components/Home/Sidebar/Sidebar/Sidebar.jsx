import SidebarItem from "../SidebarItem/SidebarItem";
import "./Sidebar.css";
import { Users } from "../../../../dummyData";
import CloseFriends from "../CloseFriends/CloseFriends";

const Sidebar = () => {
    const data = [
        {
            icon: "newspaper-sharp",
            title: "NewsFeed"
        },
        {
            icon: "chatbox-ellipses-sharp",
            title: "Chats"
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
    ]
    return (
        <div >
            <div className="fixed w-3/12 h-[92vh] overflow-y-scroll pl-8 webkit">
            <div className="pt-6">
                {
                    data.map(item => <SidebarItem key={item.title} item={item}></SidebarItem>)
                }   
            </div>
            <button className="bg-gray-200 px-8 py-2 rounded text-[15px] font-medium">Show More</button>
            <hr className="my-5 border-1 border-gray-300"/>
            <div>
                {Users.map(user => <CloseFriends key={user.id} user={user}/>)}
            </div>
            </div>
        </div>
    );
};

export default Sidebar;