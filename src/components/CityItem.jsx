import { Link, NavLink } from 'react-router-dom';
import styles from './CityItem.module.css'
import { useCities } from '../contexts/CitiesContext';
function CityItem({city}) {
    const options = {
        year: 'numeric',
        month: 'long',  
        day: 'numeric',
    };
    const {currCity,dispatch} = useCities();
    console.log(currCity)
    

    const dateObj = new Date(city.date)
    
    // Create a formatter
    const formatter = new Intl.DateTimeFormat('en-US', options)
    const date = formatter.format(dateObj)
    function handleDeleteCity(e){
        e.preventDefault();
        dispatch({type:'deleteCity', payload: city.cityName})
        
    }
    
    return (
        <div  className={styles.box}>

        <NavLink to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng} `}>
        <div className={`${styles.cityItem} ${currCity?.id === city.id ? 'active__border': null}`}>
            <div className={styles.cityBox} >
                <span>{city.emoji}</span>{city.cityName}
                </div >
            <div className={styles.dateBox}><span>({date})</span><button onClick={handleDeleteCity} >&times;</button></div>
        </div>
            </NavLink>
        </div>
    )
}

export default CityItem
