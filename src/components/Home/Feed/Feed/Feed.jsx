import React, { useEffect, useState } from 'react';
import UploadPost from '../UploadPost/UploadPost';
import Post from '../Post/Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/posts/timeline/655bca928e237b45421c76b8")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    
console.log(posts);
    return (
        <div>
            <UploadPost />
            {
                posts.map(post => <Post key={post._id} post={post} />)
            }
            
        </div>
    );
};

export default Feed;