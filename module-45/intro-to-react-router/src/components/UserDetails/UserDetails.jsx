import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user= useLoaderData();
    const {name}=user;
    return (
        <div>
            <h1>This is UserDetails File</h1>
            <p>Details about user</p>
            <p>Name:{name}</p>
        </div>
    );
};

export default UserDetails;