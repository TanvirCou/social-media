import img from "../../../assets/person/1.jpeg";
import Ad from "../../Home/Rightbar/Ad/Ad";

const UserInfo = () => {
    return (
        <div className="p-1"> 
            <p className='text-lg font-bold mb-1.5'>User Information</p>
            <div className="px-2">
                <div className='flex items-center'>
                    <p className='text-[15px] font-medium'>Current City:</p>
                    <p className='mx-2 text-md font-medium text-gray-500'>Chittagong</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-[15px] font-medium'>Home Town:</p>
                    <p className='mx-2 text-md font-medium text-gray-500'>Chittagong</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-[15px] font-medium'>Relationship:</p>
                    <p className='mx-2 text-md font-medium text-gray-500'>Single</p>
                </div>
            </div>
            <p className='text-lg font-bold mt-5 mb-3'>User friends</p>
            <div className="flex flex-wrap justify-evenly">
                <div className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-[15px] font-medium">John dae</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-md font-medium">John dae</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-md font-medium">John dae</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-md font-medium">John dae</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-md font-medium">John dae</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer mb-2">
                    <img src={img} alt="" className="w-24 h-24 object-cover rounded-md"/>
                    <span className="text-md font-medium">John dae</span>
                </div>
            </div>
            <div>
                <Ad />
            </div>
        </div>
    );
};

export default UserInfo;