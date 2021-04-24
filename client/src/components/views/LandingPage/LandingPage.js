import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(res => {
            if(res.data.success) {
                props.history.push('/login')
            }
            else {
                alert('failed to sign out')
            }
        })
    }
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <h2>Landing Page</h2>
            <button onClick={onClickHandler}>
                Sign Out
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
