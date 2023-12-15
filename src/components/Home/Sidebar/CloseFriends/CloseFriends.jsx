

const CloseFriends = ({friend}) => {
    
    return (
        <div className="flex items-center pb-5">
                <img src={friend?.profilePicture} alt="" className="w-8 h-8 rounded-[50%] object-cover"/>
                <span className="text-md mx-4 font-medium">{friend?.name}</span>
            </div>
    );
};

export default CloseFriends;