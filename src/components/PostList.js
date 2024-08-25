import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './PostList.css'

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://blog-app-backend-2278.onrender.com/posts')
            .then(response => setPosts(response.data));
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content.substring(0, 100)}...</p>
                    <Link to={`/posts/${post._id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
}

export default PostList;
