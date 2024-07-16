import styles from './Button.module.css'
function Button({children, onclick, type}) {
    return (
        <button className={`${type} ${styles.btn}`} onClick={onclick}>
            {children}
        </button>
    )
}

export default Button
