// FormPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FormPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_USER_DATA', payload: { name, age } });
    };

    return (
        <div>
            <h1>Form Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
