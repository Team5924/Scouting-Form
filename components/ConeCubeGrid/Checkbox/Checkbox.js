import styles from './checkbox.module.css'

const Checkbox = ({ loc, value, eventHandler }) => {

    return (
        <div className={styles.checkboxWrapper}>
            <input className={styles.checkbox} type={'checkbox'} checked={value == 1} onChange={() => eventHandler(loc)} />
        </div>
    )
}
export default Checkbox