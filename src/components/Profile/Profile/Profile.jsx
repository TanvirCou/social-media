import { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Home/Sidebar/Sidebar/Sidebar';
import Feed from '../../Home/Feed/Feed/Feed';
import Intro from '../Intro/Intro';
import UserInfo from '../UserInfo/UserInfo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserInfoSkeleton from '../../Skeleton/UserInfoSkeleton';

const Profile = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const name = params.name;

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`https://panda-book.onrender.com/api/users?name=${name}`);
                setUser(res.data);
                setLoading(false);
            } catch (err) {
                //
            }
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
                            {loading ? <UserInfoSkeleton /> : <UserInfo user={user} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;