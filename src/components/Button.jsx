import { Link, useNavigate } from 'react-router-dom'
import styles from './Button.module.css'
function Button({children, onclick, type , loc}) {
    const navigate = useNavigate()
    if(type === 'transparent'){
        onclick = function (e){
            e.preventDefault()
            navigate(-1)

        }
    }
    if(loc)
    return (
            <Link to={loc}>
        <button className={ `${styles.btn} ${type}`} onClick={onclick}>
            {children}
        </button>
           </Link>
    )
    else if(type==='tertiary')
    return (
        <Link>
        <button className={ `${styles.btn} ${type}`} onClick={onclick}>
            {children}
        </button>
        </Link>
        
)
else return <button className={ `${styles.btn} ${type}`} onClick={onclick}>
{children}
</button>
}

export default Button
