import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, loggedInUser, notifications } = useContext(AuthContext);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = async (text) => {
        setSearch(text);
        try {
            const res = await axios.post(`https://panda-book.onrender.com/api/users/search?search=${search}`, { userId: loggedInUser?._id || user?._id });
            setSearchResult(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10 '>
            <div className='flex items-center py-2 bg-blue-600  pl-4'>

                <div className='font-bold text-2xl cursor-pointer items-center font-[Poppins] 
      text-white w-3/12 px-2'>
                    <Link to="/">
                        Pandabook
                    </Link>
                </div>


                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-6 top-3 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <div className='w-5/12 '>
                    <div className='flex items-center w-full h-[32px] bg-white rounded-2xl'>
                        <div className='flex items-center text-lg font-semibold pl-3 pt-1'>
                            <ion-icon name="search-sharp"></ion-icon>
                        </div>
                        <div className="dropdown dropdown-bottom w-full">
                            <div tabIndex={0} role="button" className="">
                                <input type="search" value={search} onChange={(e) => handleSearch(e.target.value)} placeholder='Search for friend, post or video' className='h-full w-[90%] border-none focus:outline-none focus:ring-0 placeholder:font-medium placeholder:text-sm pl-1 ' />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[525px]">
                                <div className='w-full'>
                                    {searchResult ? searchResult.slice(0, 4).map(data => (<div key={data.email}><Link to={`https://panda-book.netlify.app/profile/${data.name}`}>
                                        <div className={`flex items-center my-2 p-2 cursor-pointer hover:bg-teal-500 rounded-md`}>
                                            <img src={data?.profilePicture} alt="" className='w-8 h-8 rounded-[50%] object-cover' />
                                            <span className='mx-3 text-md font-medium'>{data.name}</span>
                                        </div></Link>
                                    </div>)) : ""}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className={`md:flex md:items-center bg-blue-600 md:justify-around md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-4/12 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    <div className='text-sm font-medium text-white'>
                        <span className='mr-3'><Link to="/">Homepage</Link></span>
                        <span><Link to={`https://panda-book.netlify.app/profile/${user?.name || loggedInUser?.name}`}>Timeline</Link></span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='mx-2'>
                            <div className='flex items-center text-xl text-white relative'>
                                <ion-icon name="person-sharp"></ion-icon>
                            </div>
                            <span className='absolute flex items-center justify-center top-1 ml-3  bg-red-600 rounded-[50%] text-white px-[4px] font-medium text-xs'>2</span>
                        </div>
                        <div className='mx-2'>
                            <Link to="/messenger">
                                <div className='flex items-center text-xl text-white relative'>
                                    <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
                                </div>
                                {notifications.length ? <span className='absolute flex items-center justify-center top-1 ml-3  bg-red-600 rounded-[50%] text-white px-[4px] font-medium text-xs'>{notifications.length}</span> : ""}
                            </Link>
                        </div>

                        <div className='mx-2'>
                            <div className='flex items-center text-xl text-white relative'>
                                <ion-icon name="notifications-sharp"></ion-icon>
                            </div>
                            <span className='absolute flex items-center justify-center top-1 ml-3  bg-red-600 rounded-[50%] text-white px-[4px] font-medium text-xs'>2</span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/profile/${user?.name || loggedInUser?.name}`}>
                            <img src={loggedInUser?.profilePicture || user?.profilePicture} alt="" className='w-8 h-8 rounded-[50%] object-cover cursor-pointer' />
                        </Link>
                    </div>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;