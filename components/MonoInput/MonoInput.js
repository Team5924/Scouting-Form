import { useState } from 'react'
import styles from './monoInput.module.css'

const MonoInput = ({ label, type, value, eventHandler }) => {
    return (
        <div>
            <div className={styles.inputWrapper}>
                <label className={styles.right}>{label}</label>
                <input type={type} value={value} onChange={e => eventHandler(e.target.value)} />
            </div>
        </div>
    )
}
export default MonoInput