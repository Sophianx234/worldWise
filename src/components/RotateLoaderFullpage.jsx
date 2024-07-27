import { RotateLoader } from "react-spinners"
import styles from './RotateLoaderFullpage.module.css'
const  override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }
function RotateLoaderFullpage() {
    return (
        <div className={styles.rotate}>
            <RotateLoader
        color='#fff'
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        margin={40}
        />
        </div>
    )
}

export default RotateLoaderFullpage
