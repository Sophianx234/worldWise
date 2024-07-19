import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import styles from './CountryItem.module.css'

function CountryItem({country}) {
    const {cities} = useCities()
    const cityobj =  cities.find(city=>country === city.country);
    const emoji = cityobj.emoji
    // https://restcountries.com/v3.1/name/portugal?fullText=true


    return (
        <div className={styles.countryItem}>
            <p className={styles.countrydec}></p>
            <div>
                <span>

            {emoji}

                </span>
                <p>{country}</p>

            </div>
            
        </div>
    )
}

export default CountryItem;
