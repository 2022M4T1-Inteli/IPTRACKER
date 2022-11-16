import styles from './Button.module.css'
import Link from "next/link"

function Button(props) {
    return (
        <Link href="/predios">
            <button className={styles.btn}>{props.ctn}</button>
        </Link>
    )
}

export default Button