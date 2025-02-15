import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post;
    console.log(post.title);
    
    const postStyle={
        border:'2px solid blue',
    padding:'5px',
    borderRadius:'25px',
    margin:'5px'
    }
    const navigate=useNavigate();
    const handleShowDetails=()=>{
        navigate(`/posts/${id}`);
    }
    return (
        <div>
            
            <div style={postStyle}>
                <h4>Title:{title}</h4>
                <p>Body:{body}</p>
                <button onClick={handleShowDetails}>Click To See Details</button>
            </div>
        </div>
    );
};

export default Post;