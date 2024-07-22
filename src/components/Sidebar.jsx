import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './Sidebar.module.css'
function Sidebar() {
    return (

        <div className={styles.sidebar}>
            <Link to='/'>
            <img src="/logo.png" alt="logo" />
            </Link>
            <div className={styles.btnBox}>
                <div className={styles.sidebarBtn}>

                    <NavLink to='cities'>
                <button>

                    Cities
                    </button>
                    </NavLink>
                <NavLink to='countries' >
                <button>
                    Countries
                    </button>
                    </NavLink>

                </div>
            </div>

                <div className={styles.scroll}>
            <div >

                <Outlet/>
                </div>
            </div>
            <footer > &copy; Copyright 2024 by Damian X Inc</footer>
        </div>
    )
}

export default Sidebar
