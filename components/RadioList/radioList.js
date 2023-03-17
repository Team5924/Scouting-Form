import styles from './radiolist.module.css'

const RadioList = ({ label, options, value, eventHandler }) => {
    return (
        <div className={styles.radioListWrapper}>
            <div className={styles.label}>
                <label>{label}</label>
            </div>
            <div className={styles.radiosWrapper}>
                <div className={styles.radios}>
                    {options.map((option, i) => 
                        <label key={i} className={styles.radio}>
                            <input
                                type={'radio'}
                                value={option}
                                checked={value == option}
                                onChange={e => eventHandler(e.target.value)}
                            />
                            {option}
                        </label>
                    )}
                </div>
            </div>
        </div>
    )
}
export default RadioList