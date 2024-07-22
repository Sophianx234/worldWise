import styles from './Error.module.css'
function Error() {


    return (
        <div className={styles.error}>
            <p>Oops! city does not exist, please click somewhere else 🤔</p>
        </div>
    )
}

export default Error
