import React, { useContext, useState } from 'react'
import styles from '../modules/styles.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [status, setStatus] = useState(null)
  const {users} = useContext(AppContext)
  const {auth, setAuth} = useAuth()

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    let username = e.target.username.value
    let password = e.target.password.value

    let user = users.find(user => user.username === username)

    if(!user) return setStatus({error: true, text: 'No user found with username'})
    if(user.password !== password) return setStatus({error: true, text: 'Wrong password'})

    setAuth(user)
    navigate('/')
  }
  
  if(auth) return <Navigate to='/' />
  return (
    <div className={styles.container}>
        <div className={styles.boxContainer}>
            <h1>Hello,There</h1>
            <p>Let's start with the basic flow.</p>
            <form className={styles.formContainer} onSubmit={handleLogin}>
                <input className='input' type='text' name='username' placeholder='Username' />
                <input className='input' type='text' name='password' placeholder='Password' />
                <div className={'status'+(status?.error ? ' status-error':'')}>{status?.text}</div>
                <input className='btn' type='submit' value='Sign In'/>
            </form>
            <div className={styles.divider}>
                <hr/>
                    <span>OR</span>
                <hr/>
            </div>
            <Link to={'/register'} className='btn bg-secondary'>
                Sign Up
            </Link>
        </div>
    </div>
  )
}
