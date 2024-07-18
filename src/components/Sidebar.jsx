import { NavLink, Outlet } from 'react-router-dom'
import styles from './Sidebar.module.css'
function Sidebar() {
    return (

        <div className={styles.sidebar}>
            <img src="/logo.png" alt="logo" />
            <div className={styles.btnBox}>
                <div>

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
            <p>Damian X</p>
        </div>
    )
}

export default Sidebar
