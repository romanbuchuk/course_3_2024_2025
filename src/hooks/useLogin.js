import { useState } from 'react';

export const useLogin = () => {
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    const sendRequest = (body) => {
        console.log('--- SENDING REQUEST ----');

        fetch('http://localhost:3030/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }).then((responseBody) => {
            if (responseBody.ok) {
                responseBody.json().then((data) => setResponse(data));
            }

            console.log(responseBody);

            setError(new Error(responseBody.statusText));
        });
    };

    return {
        error,
        response,
        sendRequest,
    };
};
