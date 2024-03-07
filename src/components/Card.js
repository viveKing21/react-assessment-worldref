import styles from '../modules/home.module.css'

export default function Card({heading, description, onAddDealsClick, onCheckDetailsClick}){
    return (
        <div className={styles.card}>
            <h4>{heading}</h4>
            <p>{description}</p>
            <div>
                <button className='btn' onClick={onAddDealsClick}>Add to Deals</button>
                <button className='btn' onClick={onCheckDetailsClick}>Check Details</button>
            </div>
        </div>
    )
}