import { useState } from "react"
import Button from "../components/Button"
import PageNav from "../components/pageNav"
import { useAuth } from "../contexts/AuthenticationContext"
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom"



function Login() {
    const {isAuthenticated, user, dispatch } = useAuth()
    const [mail , setMail] = useState('dx4336969@gmail.com')
    const [pass , setPass] = useState('damianx123')
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault();
        if(mail === user.email && pass === user.password){
            dispatch({type: 'login'})
            isAuthenticated && navigate(`/app/cities`)

        }
        else return console.log('login in not successful')
    }

    function handleLogout(e){
        dispatch({type:'logout'})
    }
    return (
        <div className={styles.login}>
            <PageNav/>

            <section>
                <form >
                    <div className="label">
                    <label htmlFor="email">Email address</label>
                    <input id='email' type="text" placeholder="jack@example.com" required value={mail}  onChange={e=>setMail(e.target.value)}/>

                    </div>
                    <div className="label">
                    <label htmlFor="pass">Password</label>
                    <input id='pass' type="password" required value={pass} onChange={e=>setPass(e.target.value)}  />
                    

                    </div>
                    <Button type='tertiary' onclick={handleLogin}> Login</Button>
                </form>
            </section>
            
        </div>
    )
}

export default Login
