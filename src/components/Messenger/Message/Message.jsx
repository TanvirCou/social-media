import blankDp from "../../../assets/person/1.jpeg";

const Message = ({ own }) => {
    return (
        <div className={`flex flex-col ${own ? "items-end" : "items-start"}`}>
            <div className={`${own ? "flex flex-row-reverse" : "flex"}`}>
                <img src={blankDp} alt="" className="w-8 h-8 rounded-[50%] object-cover"/>
                <p className={`mx-2 text-[15px] max-w-[300px] font-normal rounded-2xl ${own ? "text-black bg-gray-200" : "text-white bg-blue-600"}  p-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit voluptatibus obcaecati architecto neque sint?</p>
            </div>
            <div className="p-1 mb-2">
                <p className="text-sm text-gray-500 font-medium">2 hour ago</p>
            </div>
        </div>
    );
};

export default Message;