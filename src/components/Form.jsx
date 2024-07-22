import { useEffect, useState } from 'react'
import Button from './Button'
import styles from './Form.module.css'
import { useSearchParams } from 'react-router-dom'
import { RotateLoader } from 'react-spinners'

const  override = {
    display: "block",
    margin: "20rem auto",
    borderColor: "red",
  }
function Form() {
    const [retrievedCity, setRetrievedCity] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    
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
        /> :
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
            } 
        </div>
            
        
            
        
    )
}

export default Form

