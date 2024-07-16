import { NavLink } from 'react-router-dom'
import styles from './pageNav.module.css'
function PageNav() {
    return (
        <nav className={styles.nav}>
            <NavLink to='/'>
                <img src="/logo.png" alt="dksldf" />
            </NavLink>
            <ul>
                    <li>
                <NavLink to='pricing'>
                    Pricing
                </NavLink>
                    </li>
                <li>
                <NavLink to='product'>
                    Product
                </NavLink>
                    </li>

                <li className={styles.btn}>
                <NavLink to='login'>
                    
                    Login
                    
                </NavLink>    
                    </li>
            </ul>
            
        </nav>
    )
}

export default PageNav