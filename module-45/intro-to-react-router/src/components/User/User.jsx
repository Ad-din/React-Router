import React from 'react';

const userStyle={
    border:'2px solid blue',
    padding:'5px',
    borderRadius:'25px',
    margin:'5px'
}


const User = ({user}) => {
    const {id,name,email,phone}=user;
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
        </div>
    );
};

export default User;