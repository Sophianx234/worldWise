import { useCities } from "../contexts/CitiesContext"
import CountryItem from "./CountryItem";
import styles from './Countries.module.css'

function Countries() {
    const {cities} = useCities()
    const countries = [...new Set(cities.map(city => city.country).filter(city=>city !==undefined))];

     
      

    
    return (
        <div className={styles.countries}>
            {countries.map(country=><CountryItem country={country} key={country}/>)} 

            
        </div>
    )
}

export default Countries
