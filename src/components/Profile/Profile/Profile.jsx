import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Home/Sidebar/Sidebar/Sidebar';
import Feed from '../../Home/Feed/Feed/Feed';
import Intro from '../Intro/Intro';
import UserInfo from '../UserInfo/UserInfo';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-12  flex '>
            <div className='w-3/12'>
            <Sidebar />
            </div>
           <div className='w-9/12'>
                <div>
                   <Intro />
                </div>
                <div className='flex'>
                <div className='w-8/12'>
                    <Feed></Feed>
                    </div>
                    <div className='w-4/12 my-4'>
                    <UserInfo />
                    </div>
                </div>

           </div>
            
          
        </div>
        </div>
    );
};

export default Profile;