import React from 'react';
import UploadPost from '../UploadPost/UploadPost';
import Post from '../Post/Post';
import { Posts } from "../../../../dummyData";

const Feed = () => {
    console.log(Posts);

    return (
        <div>
            <UploadPost />
            {
                Posts.map(post => <Post key={post.id} post={post} />)
            }
            
        </div>
    );
};

export default Feed;