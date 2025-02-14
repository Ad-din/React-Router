import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

    const users=useLoaderData();
    const usersStyle={
        padding:"5px",
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)"
    }

    return (
        <div>
            <h2>Our users:{users.length}</h2>
            <div style={usersStyle}>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;