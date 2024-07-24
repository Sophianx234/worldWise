import { useParams, useSearchParams } from "react-router-dom"
import { useCities } from "../contexts/CitiesContext"
import styles from './City.module.css'
import Button from "./Button"
import { useEffect } from "react"

function City() {
    const {cities, dispatch} = useCities()

    const {id}= useParams()
    console.log(id)
    const currCity = cities.find(city=>city.id === id)
    console.log(currCity)

    useEffect(function(){
        dispatch({type: 'currCity/loaded', payload: currCity})

    },[dispatch, currCity])

    const now = new Date(currCity?.date)
    const option = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    
    const formatter = new Intl.DateTimeFormat('en-US', option)
    const date = formatter.format(now)
    console.log(date)

    return (
        <div className={styles.city}>
            <h1>City Name</h1>
            <div className={styles.title}><span>{currCity.emoji}</span> <span>{currCity.cityName}</span></div>
            <div className={styles.date}>
            <p>You went to {currCity.cityName} On</p>
            <p>{date}</p>

            </div>
            { currCity.notes &&
            <div className={styles.date}>
                <p>Your Notes </p>
                <p>{currCity.notes}</p>


                </div>}
            <div className={styles.link}>
                <p>learn More</p>
                <a href="">Check out {currCity.cityName} on Wikipedia &rarr;</a>
            </div>
            <Button type='transparent'>&larr; back</Button>


            
        </div>
    )
}

export default City
