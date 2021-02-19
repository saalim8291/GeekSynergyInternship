import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const UserSignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const history = useHistory()

    const hadleFormSubmit = e => {
        e.preventDefault()
        let user = {
            username: username,
            password: password,
            email: email,
            profession: profession
        }

        localStorage.setItem('user', JSON.stringify(user))
        history.push('/login')
    }

    return (
        <div className="mcontainer">
            <h1 >Sign Up</h1>
            <form onSubmit={hadleFormSubmit}>
                <input type="text" name="Username" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} required /><br />
                <input type="password" name="password" placeholder="Enter Password" id="password" required onChange={e => setPassword(e.target.value)} /><br />
                <input type="email" name="Email" id="" placeholder="Enter Your Email" onChange={e => setEmail(e.target.value)} required /><br />
                <select id="dropdown" name="Profession" required onChange={e => setProfession(e.target.value)}>
                    <option disabled selected value> select your profession </option>
                    <option value="accountant" > Accountant </option>
                    <option value="chef" > Chef </option>
                    <option value="coach" > Coach </option>
                    <option value="developer" > Developer </option>
                    <option value="engineer" > Engineer </option>
                    <option value="other" > Other </option>
                </select><br />
                <button type="submit" className="sign-up btn">Sign Up</button> <span> </span>
            </form>
            <br />
            <Link to="/login">Log In</Link>
        </div>

    )
}

export default UserSignUp