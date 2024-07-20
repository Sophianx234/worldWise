import Button from './Button'
import styles from './Form.module.css'
function Form() {
    return (
        
            <form className={styles.form} >
                <div>
                <label htmlFor="">City name</label>
                <input type="text"  />
                <span>🌟</span>
                </div>

                <div>
                <label htmlFor="">When did you go to Vecilla, La?</label>
                <input type="text"  />
                </div>
                <div>
                <label htmlFor="">Notes about your trip to Vecilla, La</label>
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

