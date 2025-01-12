import React, { useState } from 'react'
import '../../Assets/styles/Login.css'
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { MdAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from "../../redux/features/auth/authSlice";
import LoginLogo from '../../Assets/Resources/footer_prophecy-new.svg'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation()

    const dispatch = useDispatch()

    // login sucess and redirect t page
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        try {
            const response = await loginUser(data).unwrap();
            console.log(response);
            const { token, user } = response;
            dispatch(setUser({ user }))
            alert("Login Sucessfully")
            navigate('/dashboard/manage-post')
        } catch (error) {
            setMessage("Please Provide a Valid Email and Password")
        }
    };


    return (
        <div className="login-page-main">
            <div className='login-page'>
                <div className="container">
                    <div className="logo">
                        <img src={LoginLogo} alt="" />
                    </div>
                    <div className="heading">Hello Again! Log In to Continue</div>
                    <form onSubmit={handleLogin}>
                        <input
                            required
                            className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                        />
                        <input
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="input"
                            type="password"
                            placeholder="Password"
                        />
                        {
                            message && <p>{message}</p>
                        }
                        <button
                            disabled={loginLoading}
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login