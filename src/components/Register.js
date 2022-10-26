import React, { useState } from "react";

export const Register = (props) => {

    const [password, setPass] = useState('');
    const [username, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        let result = await fetch("http://localhost:4000/users/register", {
            method: "post",
            mode: 'no-cors',
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        // result = result.json();
        // console.log("result: " + result);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">User name</label>
            <input value={username} onChange={(e) => setName(e.target.value)} type="text" placeholder="your name" id="name" name="name" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account? Login here.</button>
    </div>
    )
}