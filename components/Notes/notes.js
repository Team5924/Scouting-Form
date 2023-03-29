import styles from './notes.module.css'

const Notes = ({ value, eventHandler }) => {
    return (
        <div className={styles.notesWrapper}>
            <label>Notes:</label>
            <textarea
                className={styles.textarea}
                value={value}
                onChange={e => eventHandler(e.target.value)}
            />
        </div>
    )
}
export default Notes