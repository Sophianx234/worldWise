import { useCities } from "../contexts/CitiesContext"
import CountryItem from "./CountryItem";
import styles from './Countries.module.css'
import { useEffect } from "react";

function Countries() {
    const {dispatch,countries} = useCities()

    useEffect(function (){
        

            dispatch({type:'countries/loaded'})
        

    },[])
   
     
      

    
    return (
        <div className={styles.countries}>
            {countries.map(country=><CountryItem country={country} key={country}/>)} 

            
        </div>
    )
}

export default Countries
