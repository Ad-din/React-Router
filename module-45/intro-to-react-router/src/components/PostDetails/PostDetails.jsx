import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PostDetails = () => {
    const posts=useLoaderData();
    const {postId}=useParams();

    const post=posts.find(p=>p.id===Number(postId));
    const {id,title,body}=post;
    return (
        <div>
            <h1>postID:{postId}</h1>
            <h2>This is post Details Page</h2>
            <p>Id is:{id}</p>
            <p>Title is:{title}</p>
            <p>Body is:{body}</p>

        </div>
    );
};

export default PostDetails;