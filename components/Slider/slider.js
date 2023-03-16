import styles from './slider.module.css'

const Slider = ({ label, min, max, minDescription, maxDescription, step, value, eventHandler }) => {
    return (
        <div>
            <div className={styles.inputWrapper}>
                <div className={styles.label} >
                    <label>{label}</label>
                </div>
                <div className={styles.sliderWrapper}>
                    <div className={styles.input}>
                        <span>{value}</span>
                        <div className={styles.slider}>
                            <span>{minDescription}</span>
                            <input type={'range'} min={min} max={max} step={step} value={value} onChange={e => eventHandler(e.target.value)} />
                            <span>{maxDescription}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider