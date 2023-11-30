import React, { useContext, useEffect, useState } from 'react';
import UploadPost from '../UploadPost/UploadPost';
import Post from '../Post/Post';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

const Feed = ({name}) => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = name ?
            await axios.get(`http://localhost:3000/api/posts/profile/${name}`)
            : await axios.get(`http://localhost:3000/api/posts/timeline/${user._id}`);
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        }
        fetchPosts();
    }, [name, user._id]);

    
console.log(posts);
    return (
        <div>
            {(!name || name === user.name) && <UploadPost />}
            {
                posts.map(post => <Post key={post._id} post={post} />)
            }
            
        </div>
    );
};

export default Feed;