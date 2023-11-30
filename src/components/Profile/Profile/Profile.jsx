import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Home/Sidebar/Sidebar/Sidebar';
import Feed from '../../Home/Feed/Feed/Feed';
import Intro from '../Intro/Intro';
import UserInfo from '../UserInfo/UserInfo';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const name = params.name;

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get(`http://localhost:3000/api/users?name=${name}`);
            setUser(res.data);
        }
        fetchPosts();
    }, [name]);
    return (
        <div>
            <Navbar />
            <div className='pt-12  flex '>
            <div className='w-3/12'>
            <Sidebar />
            </div>
           <div className='w-9/12'>
                <div>
                   <Intro user={user} />
                </div>
                <div className='flex'>
                <div className='w-8/12'>
                    <Feed name={name}></Feed>
                    </div>
                    <div className='w-4/12 my-4'>
                    <UserInfo user={user} />
                    </div>
                </div>

           </div>
            
          
        </div>
        </div>
    );
};

export default Profile;