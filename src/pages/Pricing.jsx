import PageNav from "../components/pageNav"
import styles from './Pricing.module.css'
function Pricing() {
    return (
        <div className={styles.pricing}>
           <PageNav/> 
           <section>
            <div>
                <h2>Simple Pricing. <br /> Just $9/month.</h2>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
                </p>
            </div>
            <img src="/img-2.jpg" alt="dkadklsfj" />
           </section>
        </div>
    )
}

export default Pricing
