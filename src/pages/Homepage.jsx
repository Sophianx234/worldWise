
import Button from '../components/Button'
import PageNav from '../components/pageNav'
import styles from './Homepage.module.css'
function Homepage() {
    return (
        <div className={styles.homepage}>
            
            <PageNav/>
            <section>

            <h1>You travel the world. <br /> WorldWise Keeps track of your adventures.</h1>
            <p className={styles.homepageContainer}>A world map that tracks your footsteps into every city you can think of. Never forget your wonderful  experiences, and show your friends how you have wandered the world.</p>
                <Button loc='login'>Start Tracking Now</Button>
            </section>
            
        </div>
    )
}

export default Homepage
