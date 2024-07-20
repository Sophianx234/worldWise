import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'
function CityItem({city}) {
    const options = {
        year: 'numeric',
        month: 'long',  
        day: 'numeric',
    };

    const dateObj = new Date(city.date)
    
    // Create a formatter
    const formatter = new Intl.DateTimeFormat('en-US', options)
    const date = formatter.format(dateObj)
    
    return (
        <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
        <div className={styles.cityItem}>
            <div className={styles.cityBox}>
                <span>{city.emoji}</span>{city.cityName}
                </div >
            <div className={styles.dateBox}><span>({date})</span><button >&times;</button></div>
        </div>
            </Link>
    )
}

export default CityItem
