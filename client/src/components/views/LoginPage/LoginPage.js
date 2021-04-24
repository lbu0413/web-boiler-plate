import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action.js';
import { withRouter } from 'react-router-dom';



function LoginPage(props) {
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
            .then(res => {
                if(res.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error');
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
                <h1>Sign In</h1>
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

export default withRouter(LoginPage)
