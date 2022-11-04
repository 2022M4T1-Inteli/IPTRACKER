import styles from './Button.module.css'

function Button(props) {
    return (
        <button className={styles.btn}>{props.ctn}</button>
    )
}

export default Button