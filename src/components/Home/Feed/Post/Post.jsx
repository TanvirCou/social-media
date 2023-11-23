import React, { useEffect, useState } from 'react';
import img from "../../../../assets/person/1.jpeg";
import imgPost from "../../../../assets/post/1.jpeg";
import likeIcon from "../../../../assets/like.png";
import loveIcon from "../../../../assets/heart.png";
import { Users } from "../../../../dummyData";


const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };
   
    return (
        <div className='m-3 border shadow-md rounded'>
            <div className='p-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src={img} alt="" className='w-8 h-8 rounded-[50%] object-cover'/>
                        <p className='text-md font-medium mx-3'>{Users.filter((user) => user.id === post.userId)[0].username}</p>
                        <p className='text-sm font-medium text-gray-500'>{post.date}</p>
                    </div>
                    <div className='text-xl flex items-center'>
                    <ion-icon name="ellipsis-vertical-sharp"></ion-icon>
                    </div>
                </div>

                <div className='my-3'>
                    <p className='text-md font-medium text-black'>{post?.desc}</p>
                    <img src={imgPost} alt=""  className='w-full max-h-[500px] mt-3 object-contain'/>
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