/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import UploadPost from '../UploadPost/UploadPost';
import Post from '../Post/Post';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import spinner from "../../../../assets/spinner.gif";

const Feed = ({name}) => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [localId, setLocalId] = useState((JSON.parse(localStorage.getItem("data")))._id);
   
    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const res = name  ?
            await axios.get(`http://localhost:3000/api/posts/profile/${name}`)
            : await axios.get(`http://localhost:3000/api/posts/timeline/${localId}`);
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
    }, [name, localId]);


    return (
        <div>
            {(!name || name === (user?.name || (JSON.parse(localStorage.getItem("data"))).name)) && <UploadPost />}
            {loading && <div>
                        <img src={spinner} alt="" className='w-20 py-48 mx-auto'/>
                    </div>
                }
            {
                !loading && posts.map(post => <Post key={post._id} post={post} />)
            }
            
        </div>
    );
};

export default Feed;