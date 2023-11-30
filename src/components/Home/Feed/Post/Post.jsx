import React, { useContext, useEffect, useState } from 'react';
import noAvatar from "../../../../assets/person/noAvatar.png";
import imgPost from "../../../../assets/post/1.jpeg";
import likeIcon from "../../../../assets/like.png";
import loveIcon from "../../../../assets/heart.png";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const {user: currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get(`http://localhost:3000/api/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchPosts();
    }, [post.userId]);

        useEffect(() => {
            setIsLiked(post.likes.includes(currentUser._id));
        }, [post.likes, currentUser._id]);
    
    const likeHandler = () => {
        try {
            axios.put(`http://localhost:3000/api/posts/${post._id}/like`, {userId: currentUser._id});
        } catch(err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };
   
    return (
        <div className='m-3 border shadow-md rounded'>
            <div className='p-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to={`/profile/${user.name}`}>
                        <img src={user.profilePicture ? user.profilePicture : noAvatar} alt="" className='w-8 h-8 rounded-[50%] object-cover'/>
                        </Link>
                        <p className='text-md font-medium mx-3'>{user.name}</p>
                        <p className='text-sm font-medium text-gray-500'>{format(post.createdAt)}</p>
                    </div>
                    <div className='text-xl flex items-center'>
                    <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
                    </div>
                </div>

                <div className='my-3'>
                    <p className='text-md font-medium text-black'>{post?.desc}</p>
                    {post.img && <img src={`data:image/${post?.img.contentType};base64,${post?.img.img}`} alt=""  className='w-full max-h-[500px] mt-3 object-contain'/>}
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src={likeIcon} alt="" className='w-5 h-5 cursor-pointer' onClick={likeHandler}/>
                        <img src={loveIcon} alt="" className='w-5 h-5 cursor-pointer mx-1.5' onClick={likeHandler}/>
                        <span className='text-sm font-medium'>{like} people like it</span>
                    </div>
                    <div>
                        <span className='text-sm font-medium '>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;