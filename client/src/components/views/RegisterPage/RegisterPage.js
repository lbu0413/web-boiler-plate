import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action.js';
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onEmailHandler = e => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = e => {
        setPassword(e.target.value)
    }

    const onConfirmPasswordHandler = e => {
        setConfirmPassword(e.target.value)
    }

    const onNameHandler = e => {
        setName(e.target.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        if(password !== confirmPassword) {
            return alert('passwords do not match')
        }

        let body = {
            name: name,
            email: email,
            password: password
        }

        dispatch(registerUser(body))
            .then(res => {
                if(res.payload.success) {
                    props.history.push('/login')
                } else {
                    alert("Failed to register")
                }
            })   
    }

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            
            <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column'}}>
                <h1>Sign Up</h1>
                <label>Name</label>
                <input type="text" value={name} onChange={onNameHandler}/>

                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler}/>

                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler}/>

                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler}/>

                <br/>
                <button type="submit">Register</button>
            </form>
        
        </div>
    )
}

export default withRouter(RegisterPage)
