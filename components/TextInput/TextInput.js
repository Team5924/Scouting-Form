import styles from './textInput.module.css'

const TextInput = ({ label, type, value, eventHandler }) => {
    return (
        <div>
            <div className={styles.inputWrapper}>
                <div className={styles.label} >
                    <label>{label}</label>
                </div>
                <div className={styles.input}>
                    <input type={type} value={value} onChange={e => eventHandler(e.target.value)} />
                </div>
            </div>
        </div>
    )
}
export default TextInput