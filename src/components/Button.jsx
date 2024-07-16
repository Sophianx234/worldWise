import { Link } from 'react-router-dom'
import styles from './Button.module.css'
function Button({children, onclick, type , loc}) {
    return (
           <Link to={loc}>
        <button className={`${type} ${styles.btn}`} onClick={onclick}>
            {children}
        </button>
           </Link>
    )
}

export default Button
