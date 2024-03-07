import React, { useContext, useState } from 'react'
import styles from '../modules/styles.module.css'
import { Link, Navigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { useAuth } from '../context/AuthContext'

export default function Register() {
    const [status, setStatus] = useState(null)
    const {users, setUsers} = useContext(AppContext)
    const {auth} = useAuth()

    const handleRegister = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let username = e.target.username.value
        let password = e.target.password.value
        
        let isEmailExist = users.find(user => user.email === email)
        let isUsernameExist = users.find(user => user.username === username)

        if(isEmailExist) return setStatus({error: true, text: 'Email address already exist'})
        if(isUsernameExist) return setStatus({error: true, text: 'Username already exist'})

        setUsers(users => [...users, {email, username, password}])
        setStatus({text: 'Account created successfully'})
    }

    if(auth) return <Navigate to='/' />
    return (
        <div className={styles.container}>
            <div className={styles.boxContainer}>
                <h1>Hello,There</h1>
                <p>Let's start with the basic flow.</p>
                <form className={styles.formContainer} onSubmit={handleRegister}>
                    <input className='input' type='email' name='email' placeholder='Email' />
                    <input className='input' type='text' name='username' placeholder='Username' />
                    <input className='input' type='text' name='password' placeholder='Password' />
                    <div className={'status'+(status?.error ? ' status-error':'')}>{status?.text}</div>
                    <input className='btn' type='submit' value='Sign Up' />
                </form>
                <div className={styles.divider}>
                    <hr />
                    <span>OR</span>
                    <hr />
                </div>
                <Link to={'/login'} className='btn bg-secondary'>
                    Sign In
                </Link>
            </div>
        </div>
    )
}
