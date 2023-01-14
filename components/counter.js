import { useState } from "react";
import styles from '@/styles/counter.module.css'

export default function Counter(props) {
    const [counter, setCounter] = useState(0);

    function onPlus() {
        setCounter(counter + 1);
        // props.handleScore(counter);
    }

    function onMinus() {
        counter === 0 ? null : setCounter(counter - 1);
        // props.handleScore(counter);
    }

    return (
        <>
            <div id={styles.counter}>
                <div id={styles.grid}>
                    <button id={styles.plus} type="button" onClick={onPlus}>+</button>
                    <span id={styles.number}>{counter}</span>
                    <button id={styles.minus} type="button" onClick={onMinus}>-</button>
                </div>
            </div>
        </>
    )
}