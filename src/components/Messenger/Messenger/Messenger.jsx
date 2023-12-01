import OnlineFriends from "../../Home/Rightbar/OnlineFriends/OnlineFriends";
import Navbar from "../../Navbar/Navbar";
import ConversionFriend from "../ConversionFriend/ConversionFriend";
import Message from "../Message/Message";

const Messenger = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex pt-12 h-full">
                <div className="w-3/12">
                    <div className="p-3">
                        <input type="search" placeholder="Search your friend" className="w-[90%] text-md font-medium placeholder:text-md placeholder:font-medium border-0 border-b-2 border-gray-300 focus:border-b-2 focus:border-gray-300 focus:outline-none focus:ring-0" />
                        <div>
                            <ConversionFriend />
                            <ConversionFriend />
                            <ConversionFriend />
                        </div>
                    </div>
                </div>
                <div className="w-6/12">
                    <div className=" h-full py-5 px-3">
                        <div className="flex flex-col justify-between h-full">
                            <div className="px-2 overflow-y-scroll webkit">
                            <Message />
                            <Message own/>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message own/>
                            </div>
                            <div className="flex items-center justify-between px-2">
                                <textarea placeholder="Write something..."  className="rounded-md w-[85%] h-16 p-2 border border-gray-600 focus:outline-blue-600 text-md font-medium"></textarea>
                                <button className="py-1 px-3 rounded-md text-white bg-teal-600">Send</button>
                            </div>
                        </div>
                        <div>
                        </div>
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