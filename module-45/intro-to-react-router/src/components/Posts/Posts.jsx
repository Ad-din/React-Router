import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts= useLoaderData();
    const postsStyle={
        padding:"5px",
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)"
    }
    return (
        <>
        <h2>This is post Place</h2>
        <p>Total posts: {posts.length}</p>
        <div style={postsStyle}>
            
            
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
        </>
    );
};

export default Posts;