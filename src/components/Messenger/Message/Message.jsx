import blankDp from "../../../assets/person/noAvatar.png";
import {format} from "timeago.js";

const Message = ({ message, own, user, friend }) => {

    const userDp = user?.profilePicture ? user.profilePicture : blankDp;
    const friendDp = friend.profilePicture ? friend.profilePicture : blankDp;

    return (
        <div className={`flex flex-col ${own ? "items-end" : "items-start"}`}>
            <div className={`${own ? "flex flex-row-reverse" : "flex"}`}>
                <img src={own ? userDp : friendDp} alt="" className="w-8 h-8 rounded-[50%] object-cover"/>
                <p className={`mx-2 text-[15px] max-w-[300px] font-normal rounded-2xl ${own ? "text-black bg-gray-200" : "text-white bg-blue-600"}  p-2`}>{message.text}</p>
            </div>
            <div className="p-1 mb-2">
                <p className="text-sm text-gray-500 font-medium">{format(message.createdAt)}</p>
            </div>
        </div>
    );
};

export default Message;