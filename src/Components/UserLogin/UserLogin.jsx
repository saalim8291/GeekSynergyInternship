import React from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState } from 'react'

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
            localStorage.setItem('isLoggedIn', true)
            history.push('/movies')
        }
        else {
            alert('username or password is incorrect')
        }
    }

    return (
        <div className="mcontainer">
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Username" placeholder="Enter Your Username" onChange={e => setUsername(e.target.value)} required /> <br />
                <input type="password" name="Password" placeholder="Enter Your Password" onChange={e => setPassword(e.target.value)} id="password" /> <br />
                <button type="submit" className="log-in btn">Log In</button>

            </form>
            <br />
            Dont have an account yet?<Link to="/">Sign Up</Link>

        </div>
    )
}

export default UserLogin