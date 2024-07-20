import { Link } from 'react-router-dom'
import styles from './Button.module.css'
function Button({children, onclick, type , loc}) {
    return (
           <Link to={loc}>
        <button className={ `${styles.btn} ${type}`} onClick={onclick}>
            {children}
        </button>
           </Link>
    )
}

export default Button
