import { useContext, useEffect, useRef, useState } from "react";
import OnlineFriends from "../../Home/Rightbar/OnlineFriends/OnlineFriends";
import Navbar from "../../Navbar/Navbar";
import ConversionFriend from "../ConversionFriend/ConversionFriend";
import Message from "../Message/Message";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import io from "socket.io-client";
// import blankDp from "../../../assets/person/noAvatar.png";

var socket, selectedChatCompare;

const Messenger = () => {
    const { user, loggedInUser, notifications, setNotifications } = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [friend, setFriend] = useState({});
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [isTyping, setIsTyping] = useState(false);



    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/conversations/${user?._id || loggedInUser._id}`);
                setConversations(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getConversation();
    }, [user, loggedInUser]);

    useEffect(() => {
        const getMessages = async() => {
            try {
                const res = await axios.get(`http://localhost:3000/api/messages/${currentChat?._id}`);
                setChatMessages(res.data);

                socket.emit("join chat", currentChat._id);
                selectedChatCompare = currentChat;
            } catch(err) {
                console.log(err);
            }
        }
        getMessages();
    }, [currentChat]);

    

    useEffect(() => {
        const friendId = chatMessages.find(message => message.senderId !== loggedInUser._id);
        const getConvoFriend = async() => {
            try {
                const res = await axios.get(`http://localhost:3000/api/users?userId=${friendId?.senderId}`);
                setFriend(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getConvoFriend();
    }, [chatMessages,  loggedInUser]);

    const handleNewMessage = async(e) => {
        e.preventDefault();
        const message = {
            conversation: currentChat?._id,
            senderId: (user?._id || loggedInUser),
            text: newMessage
        };
        try {
            const res = await axios.post(`http://localhost:3000/api/messages`, message);
                setChatMessages([...chatMessages, res.data]);
                setNewMessage("");
                console.log(res.data.conversation.members);
                socket.emit("new message", res.data);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth"});
    }, [chatMessages]);



    useEffect(() => {
        socket = io("http://localhost:3000/");
        socket.emit("setup", loggedInUser);
        socket.on("connected", () => setSocketConnected(true));
        socket.on("typing", () => setIsTyping(true));
        socket.on("stop typing", () => setIsTyping(false));
    }, []);

    useEffect(() => {
        socket.on("message received", (newMessageReceived) => {
            if (!selectedChatCompare || (selectedChatCompare._id !== newMessageReceived.conversation._id)) {
                if (!notifications.includes(newMessageReceived)) {
                    setNotifications([newMessageReceived, ...notifications]);
                    // setFetchAgain(!fetchAgain);
                }
            } else {
                setChatMessages([...chatMessages, newMessageReceived]);
            }
                
            
        });
    });

console.log(notifications);

    const handleTyping = (e) => {
        setNewMessage(e.target.value);

        if (!socketConnected) return;

        if (!typing) {
            setTyping(true);
            socket.emit("typing", currentChat._id);
        }

        let lastTypingTime = new Date().getTime();
        var timerLength = 3000;
        setTimeout(() => {
            var timeNow = new Date().getTime();
            var timeDiff = timeNow - lastTypingTime;
            if (timeDiff >= timerLength && typing) {
                socket.emit("stop typing", currentChat._id);
                setTyping(false);
            }
        }, timerLength);
    };


    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex pt-12 h-full">
                <div className="w-3/12">
                    <div className="p-3">
                        <input type="search" placeholder="Search your friend" className="w-[90%] text-md font-medium placeholder:text-md placeholder:font-medium border-0 border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-300 focus:outline-none focus:ring-0" />
                        <div>
                            {conversations.map(conversation => 
                            <div key={conversation._id} onClick={() => setCurrentChat(conversation)}>
                            <ConversionFriend active={currentChat?._id === conversation?._id}  conversation={conversation} currentUser={loggedInUser} />
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="w-6/12">
                    <div className=" h-full py-5 px-3">
                        {currentChat ? 
                            <div className="flex flex-col justify-between h-full">
                            <div className="px-2 overflow-y-scroll webkit">
                                {/* <div className="border shadow-md mb-2 py-2 px-4 flex items-center bg-gray-100">
                                    <img src={friend.profilePicture ? friend.profilePicture : blankDp} alt="" className="w-8 h-8 rounded-[50%] object-cover"/>
                                    <p className="text-md font-semibold mx-2">{friend.name}</p>
                                </div> */}
                                {
                                    chatMessages.map(message => <div ref={scrollRef} key={message._id}> <Message  message={message} own={message.senderId === (user?._id || loggedInUser._id)} user={loggedInUser} friend={friend}/> </div>)
                                }
                                
                            </div>
                            {isTyping ? <div className='bg-gray-200 w-fit h-fit px-3 rounded-md my-1 mx-2'>
                                            <span className="loading loading-dots loading-md"></span>
                                        </div> : ""}
                            <div className="flex items-center justify-between px-2">
                                <textarea value={newMessage} onChange={handleTyping}  placeholder="Write something..." className="rounded-md w-[85%] h-16 p-2 border border-gray-600 focus:outline-blue-600 text-md font-medium"></textarea>
                                <button onClick={handleNewMessage} className="py-1 px-3 rounded-md text-white bg-teal-600">Send</button>
                            </div>
                        </div>
                        : 
                
                            <p className="text-lg font-semibold text-gray-500 text-center py-60">Open a conversation to start a chat</p>
                        
                    }
                    </div>
                </div>
                <div className="w-3/12">
                    <div className='p-2'>
                        <p className='text-md font-medium'>Online Friends</p>
                        <div>
                            <OnlineFriends />
                            <OnlineFriends />
                            <OnlineFriends />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Messenger;