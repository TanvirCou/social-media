import { useState } from 'react';
import img from "../../assets/person/1.jpeg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    // let Links =[
    //     {name:"HOME",link:"/"},
    //     {name:"SERVICE",link:"/"},
    //     {name:"ABOUT",link:"/"},
    //     {name:"BLOG'S",link:"/"},
    //     {name:"CONTACT",link:"/"},
    //   ];

    const [open, setOpen] = useState(false);

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
                        <input type="search" placeholder='Search for friend, post or video' className='h-full w-[90%] border-none focus:outline-none focus:ring-0 placeholder:font-medium placeholder:text-sm pl-1 ' />
                    </div>
                </div>

                <ul className={`md:flex md:items-center bg-blue-600 md:justify-around md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-4/12 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    <div className='text-sm font-medium text-white'>
                        <span className='mr-3'><Link to="/">Homepage</Link></span>
                        <span><Link to="profile/:username">Timeline</Link></span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='mx-2'>
                            <div className='flex items-center text-xl text-white relative'>
                                <ion-icon name="person-sharp"></ion-icon>
                            </div>
                            <span className='absolute flex items-center justify-center top-1 ml-3  bg-red-600 rounded-[50%] text-white px-[4px] font-medium text-xs'>2</span>
                        </div>
                        <div className='mx-2'> 
                            <div className='flex items-center text-xl text-white relative'>
                            <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
                            </div>
                            <span className='absolute flex items-center justify-center top-1 ml-3  bg-red-600 rounded-[50%] text-white px-[4px] font-medium text-xs'>2</span>
                        </div>
                        <div className='mx-2'>
                            <div className='flex items-center text-xl text-white relative'>
                            <ion-icon name="notifications-sharp"></ion-icon>
                            </div>
                            <span className='absolute flex items-center justify-center top-1 ml-3  bg-red-600 rounded-[50%] text-white px-[4px] font-medium text-xs'>2</span>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" className='w-8 h-8 rounded-[50%] object-cover cursor-pointer'/>
                    </div>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;