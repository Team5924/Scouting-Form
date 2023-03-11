import styles from './checkbox.module.css'

const Checkbox = ({ label, value, eventHandler }) => {
 
    function handleChange(e) {
        switch (value) {
            case 0:
                eventHandler(1)
                break
            case 1:
                eventHandler(0)
                break
        }
    }

    return (
        <div>
            <div className={styles.inputWrapper}>
                <div className={styles.label} >
                    <label className={styles.right}>{label}</label>
                </div>
                <div className={styles.input}>
                    <input type={'checkbox'} checked={value == 1} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}
export default Checkbox