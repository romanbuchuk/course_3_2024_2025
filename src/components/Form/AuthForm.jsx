import React, { useRef, useState } from 'react';

import { useLogin } from '../../hooks/useLogin';

export const AuthForm = () => {
    const emailReference = useRef(null);
    const [password, setPassword] = useState('123456');
    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const { error, response, sendRequest } = useLogin();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('email:', emailReference.current.value);
        console.log('password:', password);

        sendRequest({ title: emailReference.current.value, userId: password });
    };

    if (error) {
        console.log('error:', error);
    }

    if (response) {
        console.log('response:', response);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" placeholder="...your email" ref={emailReference} />
            <br />
            <label>
                Password:
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
