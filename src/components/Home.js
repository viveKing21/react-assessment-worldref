import React from 'react'
import styles from '../modules/home.module.css'
import { useAuth } from '../context/AuthContext'
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const dummyData = [
  { heading: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { heading: "Dolor Sit", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { heading: "Consectetur", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { heading: "Adipiscing Elit", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

export default function Home() {
  const {auth, setAuth} = useAuth()
  const navigate = useNavigate()

  const checkAuth = () => {
    if(!auth) {
      if(window.confirm('You\'r not logged In. Please login')) navigate('/login')
      return false
    }
    return true
  }
  
  const handleSignOut = () => {
    if(!checkAuth()) return
    setAuth(null)
  }
  const handleAddDealsClick = () => {
    if(!checkAuth()) return
    alert('Add to Deals Clicked')
  }
  const handleCheckDetailsClick = () => {
    if(!checkAuth()) return
    alert('Check details Clicked')
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <h1>Hello, {auth?.username || 'Guest'}</h1>
        <p>Welcome to the basic authentication flow in React.</p>
        {
          auth ? <button onClick={handleSignOut} className='btn bg-secondary'>Sign Out</button>:null
        }
        <section className={styles.cardContainer}>
            {
              dummyData.map((data, i) => (
                <Card 
                  {...data}
                  key={i} 
                  onAddDealsClick={() => handleAddDealsClick(i)}
                  onCheckDetailsClick={() => handleCheckDetailsClick(i)}
                />
              ))
            }
        </section>
      </div>
    </div>
  )
}
