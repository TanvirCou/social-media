/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';
import likeIcon from "../../../../assets/like.png";
import loveIcon from "../../../../assets/heart.png";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser, loggedInUser } = useContext(AuthContext);
    const [commentActive, setCommentActive] = useState(false);
    const [postComments, setPostComments] = useState([...post.comments]);
    const commentRef = useRef();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://panda-book.onrender.com/api/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchPosts();
    }, [post.userId]);

    useEffect(() => {
        setIsLiked(post.likes.includes(loggedInUser?._id || currentUser?._id));
    }, [post.likes, loggedInUser]);

    const likeHandler = () => {
        try {
            axios.put(`https://panda-book.onrender.com/api/posts/${post._id}/like`, { userId: loggedInUser?._id || currentUser?._id});
        } catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const handleDelete = async() => {
        try {
            await axios.delete(`https://panda-book.onrender.com/api/posts/${post._id}`, {data: {userId: loggedInUser?._id || currentUser?._id}});
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    }

    const handleComment = async() => {
        const data = {
            content: commentRef.current.value,
            user: loggedInUser || currentUser
        }
        try {
            await axios.put(`https://panda-book.onrender.com/api/posts/${post._id}/comments`, data);
            setPostComments([...postComments, data]);
            commentRef.current.value = "";

        } catch (err) {
            console.log(err);
        }
    };




    return (
        <div className='m-3 border shadow-md rounded'>
            <div className='p-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to={`/profile/${user.name}`}>
                            <img src={user?.profilePicture} alt="" className='w-8 h-8 rounded-[50%] object-cover' />
                        </Link>
                        <p className='text-md font-medium mx-3'>{user.name}</p>
                        <p className='text-sm font-medium text-gray-500'>{format(post.createdAt)}</p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn shadow-none border-none bg-white">
                            <div className='text-xl flex items-center'>
                            <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
                        </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-28">
                            <li>
                                <p className='font-medium' onClick={handleDelete}>Delete</p>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='my-3'>
                    <p className='text-md font-medium text-black'>{post?.desc}</p>
                    {post.img && <img src={post?.img} alt="" className='w-full max-h-[500px] mt-3 object-contain' />}
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src={likeIcon} alt="" className='w-5 h-5 cursor-pointer' onClick={likeHandler} />
                        <img src={loveIcon} alt="" className='w-5 h-5 cursor-pointer mx-1.5' onClick={likeHandler} />
                        <span className='text-sm font-medium'>{like} people like it</span>
                    </div>
                    <div className='tooltip tooltip-bottom' data-tip="Click to see comments">
                        <span className='text-sm font-medium cursor-pointer' onClick={() => setCommentActive(!commentActive)}>{postComments.length} comments</span>
                    </div>
                </div>
                {commentActive ? <div className='bg-gray-200 p-2 rounded-md'>
                    <div>
                        <div className='my-2 px-2'>
                        {
                            postComments && postComments.map((comment, index) => (<div key={index} className='flex bg-white py-2 px-1 rounded-md'>
                                <img src={comment.user?.profilePicture} alt="" className='w-6 h-6 mx-2 rounded-full object-cover mt-1'/>
                                <div>
                                    <p className='font-medium'>{comment.user.name}</p>
                                    <p className='text-sm bg-gray-200 px-3 py-1 rounded-md'>{comment.content}</p>
                                </div>
                            </div>) )
                        }
                        </div>
                        <div className='w-full flex items-center'>
                            <img src={loggedInUser?.profilePicture || currentUser?.profilePicture} className='w-8 h-8 mx-2 rounded-full object-cover'  alt="" />
                            <input type="text" ref={commentRef} className='w-4/5 h-10 focus:outline-blue-600 rounded-md px-2'/>
                            <button onClick={handleComment} className='px-3 py-2 bg-blue-600 rounded-md text-white mx-2'>Send</button>
                        </div>
                    </div>
                </div> : ""}
            </div>
        </div>
    );
};

export default Post;