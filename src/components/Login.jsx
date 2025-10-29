import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth'
// REACT HOOK FROM
import {useForm} from "react-hook-form"

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    
    const [error, setError] = useState("");

    const login = async(data) => {
        setError("")

        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                };
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
        </>
    );
}

export default Login;
