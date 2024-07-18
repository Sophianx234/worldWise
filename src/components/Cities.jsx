import { useCities } from "../contexts/CitiesContext"
import CityItem from "./CityItem"
import styles from './Cities.module.css'
function Cities() {
    const {cities} = useCities()
    return (
        <div className={styles.cities}>
            {cities.map(city=><CityItem city={city} key={city.id}/>)}
            
            
        </div>
    )
}

export default Cities
