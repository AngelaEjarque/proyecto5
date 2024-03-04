import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Login.css"

interface userData {
    message: string,
    token: string
}

interface userPost {
    email: string,
    password_hash: string
}

function Login() {
    const emailInputRef = useRef<HTMLInputElement>(null); // Cambiado el tipo de referencia
    const passwordInputRef = useRef<HTMLInputElement>(null); // Cambiado el tipo de referencia

    async function loginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!emailInputRef.current || !passwordInputRef.current) return;

        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const userToLog: userPost = { email: email, password_hash: password };

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*' // Agregar el encabezado CORS
                },
                mode: 'cors',
                body: JSON.stringify(userToLog)
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data: userData = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={loginSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
    );
}

export default Login;
