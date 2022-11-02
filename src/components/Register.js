import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

import { useMutation } from 'react-query'

async function fetchPosts() {
    const { data } = await fetch("http://localhost:4000/users/register");
    return data;
}

export const Register = (props) => {

    const [password, setPass] = useState('');
    const [username, setName] = useState('');
    const [result, setResult] = useState({ status: '', submit: true });

    const { register, handleSubmit } = useForm();
    
    useEffect(() => {
        console.log("log-22: " + result.status);
        if (result.status === "EXISTED") {
            toast("Username '" + username + "' already exists");
            return;
        }
        if (result.status === "INVALID_INPUT") {
            toast("Username or Password is missing");
            return;
        }
        if (result.status === "OK") {
            toast("Sign Up Success. Username: " + username);
            return;
        }
        toast("Hello!");

    }, [result])

    const account = useMutation(async () =>
        await fetch("https://btcn05-be-19120524.onrender.com/users/register", {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(async (response) => {
                setResult({
                    status: response.status,
                    submit: !result.submit
                });
            })
    );

    const OnSubmit = () => {
        account.mutate();

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit(OnSubmit)}>
                <ToastContainer />

                <label>User name</label>
                <input {...register("username", {
                    onChange: (e) => setName(e.target.value),
                })} placeholder="Your Name" />

                <label>Password</label>
                <input {...register("password", {
                    onChange: (e) => setPass(e.target.value),
                })} placeholder="••••••••" type="password" />

                <button type="submit">Register</button>
            </form>
            <button className="link-btn" >Already have an account? Login here.</button>

        </div>
    );
}


