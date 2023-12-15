/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import UploadPost from '../UploadPost/UploadPost';
import Post from '../Post/Post';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import spinner from "../../../../assets/spinner.gif";
import PostSkeleton from '../../../Skeleton/PostSkeleton';

const Feed = ({name}) => {
    const [posts, setPosts] = useState([]);
    const {user, loggedInUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const res = name  ?
            await axios.get(`http://localhost:3000/api/posts/profile/${name}`)
            : await axios.get(`http://localhost:3000/api/posts/timeline/${loggedInUser._id}`);
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
            setLoading(false);
            } catch(err) {
                console.log(err);
            }
        }
        fetchPosts();
    }, [name, loggedInUser]);


    return (
        <div>
            {(!name || name === (user?.name || loggedInUser.name)) && <UploadPost />}
            {loading ? <div>
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                    </div>
               :
                 posts.map(post => <Post key={post._id} post={post} />)
            }
            
        </div>
    );
};

export default Feed;