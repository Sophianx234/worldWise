import { useEffect, useState } from 'react'
import Button from './Button'
import styles from './Form.module.css'
import { useSearchParams } from 'react-router-dom'
function Form() {
    const [retrievedCity, setRetrievedCity] = useState({})
    
    const [searchParams,setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')
    console.log(retrievedCity)
    const [emoji, setEmoji] = useState('')
    function getFlagEmoji(countryCode) {
        const codePoints =  countryCode?.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }
    

    

    useEffect(function (){
        async function getCity(){
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
            if(!res.ok) throw new Error('Could not fetch from server')
                const data = await res.json();
            setRetrievedCity(data)
             setEmoji(getFlagEmoji(data.countryCode))
        }
        getCity()
    },[lat,lng])
    
    console.log(emoji)
    

    return (
        
            <form className={styles.form} >
                <div>
                <label htmlFor="">City name</label>
                <input type="text" value={retrievedCity.city}  />
                <span>{emoji}</span>
                </div>

                <div>
                <label htmlFor="">When did you go to {retrievedCity.city}</label>
                <input type="text"   />
                </div>
                <div>
                <label htmlFor="">Notes about your trip to {retrievedCity.city}</label>
                <textarea  id="textarea"></textarea>
                </div>
                <div className={styles.btnBox}>
                    <Button type='secondary'>Add</Button>
                    <Button type='transparent' >&larr; Back</Button>
                </div>

            </form>
            
        
    )
}

export default Form

