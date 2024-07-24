import { useEffect, useState } from 'react'
import Button from './Button'
import styles from './Form.module.css'
import { useSearchParams } from 'react-router-dom'
import { RotateLoader } from 'react-spinners'
import Error from './Error'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from '../contexts/CitiesContext'


const  override = {
    display: "block",
    margin: "20rem auto",
    borderColor: "red",
  }
  
  function Form() {
    const [searchParams] = useSearchParams();
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')
    const [retrievedCity, setRetrievedCity] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [date , setDate] = useState('')
    const [notes, setNotes]= useState('')
    const [cityName,setCityName] = useState(retrievedCity.city)

    const [emoji, setEmoji] = useState('')
    const {dispatch} = useCities()

    function getFlagEmoji(countryCode) {
        const codePoints =  countryCode?.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }

    
console.log(retrievedCity)


    useEffect(function (){
        async function getCity(){
            setIsLoading(true)
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
            if(!res.ok) throw new Error('Could not fetch from server')
                const data = await res.json();
            setRetrievedCity(data)
             setEmoji(getFlagEmoji(data.countryCode))
             setIsLoading(false)
        }
        getCity()
    },[lat,lng])
    
    const color = '#fff'
    function handleSubmit(e){
        e.preventDefault();
        console.log('Damian X')
        setIsLoading(true)
        const {
            city: cityName,
            countryName: country,
            latitude: lat,
            longitude: lng
        } = retrievedCity

        const newCity = {
            cityName, 
            country,
            date: date.toISOString(),
            notes,
            emoji,
            position: {lat,lng},
            id: crypto.randomUUID().split('-')[0]
        }
        console.log(newCity)
        dispatch({type: 'cities/added', payload: newCity})
        setIsLoading(false)
        
    /* const cityObj = {
        id: "1700",
      cityName: "Accra",
      country: "Ghana",
      date: "2024-07-13T11:23:19.681Z",
      notes: "I really enjoyed the place ",
      emoji: "🇬🇭",
      position: {
        lat: "5.5997146469398436",
        lng: "-0.24170085307603456"
        }
        }
        console.log('newCity', newCity)
        
        const {

         city ,
         countryName ,
          latitude,
          longitude
        
      } = retrievedCity; 
      
      console.log(retrievedCity)
      /* const newCity = {
        cityName,
        countryName,
          date: date.toISOString(),
          notes,
          emoji,
          id: crypto.randomUUID(),
          position: {
            latitude,
            longitude
        }
        
    } 
    */
   
   
   
}
    return (

        <div>

        {
          isLoading?  <RotateLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        margin={10}
        /> : !retrievedCity.city? <Error/>:
        <form className={styles.form} onSubmit={handleSubmit}  >
            
                <label htmlFor="">City name
                <input type="text" value={retrievedCity.city} onChange={e=>setCityName(e.target.value)} required />

                <span>{emoji}</span>
                </label>

                
                <label htmlFor="">When did you go to {retrievedCity.city}
                <DatePicker selected={date} onChange={date=>setDate(date)} required/>

                </label>
                
                
                <div className='date-container'>
                <label htmlFor="">Notes about your trip to {retrievedCity.city}</label>
                <textarea  id="textarea" value={notes} onChange={e=>setNotes(e.target.value)}></textarea>
                </div>
                <div className={styles.btnBox}>
                    <Button type='secondary' >Add</Button>
                    <Button type='transparent'   >&larr; Back</Button>
                </div>

            </form>
            } 
            </div>
            
        
            
        
    )
}
  


export  default Form

