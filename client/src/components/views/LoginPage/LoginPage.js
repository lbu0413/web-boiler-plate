import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action.js';



function LoginPage() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = e => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = e => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        let body = {
            email: email,
            password: password
        }

        dispatch(loginUser(body))

        
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
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler}/>
                <br/>
                <button type="submit">Login</button>
            </form>
        
        </div>
    )
}

export default LoginPage
