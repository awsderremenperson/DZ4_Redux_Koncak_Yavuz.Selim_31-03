import React from 'react';
import { useSelector } from 'react-redux';

const DisplayPage = () => {
    const userData = useSelector((state) => state.appReducer.userData);

    return (
        <div>
            <h1>Display Page</h1>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
        </div>
    );
};

export default DisplayPage;
