import Button from "../components/Button"
import PageNav from "../components/pageNav"
import styles from './Login.module.css'


function Login() {
    return (
        <div className={styles.login}>
            <PageNav/>

            <section>
                <form >
                    <div className="label">
                    <label htmlFor="email">Email address</label>
                    <input id='email' type="text" placeholder="jack@example.com" />

                    </div>
                    <div className="label">
                    <label htmlFor="pass">Password</label>
                    <input id='pass' type="password"  />
                    

                    </div>
                    <Button type='tertiary' loc='app'> Login</Button>
                </form>
            </section>
            
        </div>
    )
}

export default Login
