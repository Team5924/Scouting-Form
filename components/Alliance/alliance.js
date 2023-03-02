import styles from './alliance.module.css'

const Alliance = ({ value, eventHandler }) => {
    return (
        <div>
            <p style={{ margin: 0, textAlign: 'center' }}>Alliance</p>
            <div className={styles.allianceWrapper}>
                <div className={styles.blue}>
                    <div className={styles.alliance}>
                        <label>Blue-1
                            <input
                                type={'radio'}
                                value={0}
                                checked={value == 0}
                                onChange={e => eventHandler(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.alliance}>
                        <label>Blue-2
                            <input
                                type={'radio'}
                                value={1}
                                checked={value == 1}
                                onChange={e => eventHandler(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.alliance}>
                        <label>
                            Blue-3
                            <input
                                type={'radio'}
                                value={2}
                                checked={value == 2}
                                onChange={e => eventHandler(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.red}>
                    <div className={styles.alliance}>
                        <label>Red-1
                            <input
                                type={'radio'}
                                value={3}
                                checked={value == 3}
                                onChange={e => eventHandler(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.alliance}>
                        <label>Red-2
                            <input
                                type={'radio'}
                                value={4}
                                checked={value == 4}
                                onChange={e => eventHandler(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.alliance}>
                        <label>Red-3
                            <input
                                type={'radio'}
                                value={5}
                                checked={value == 5}
                                onChange={e => eventHandler(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Alliance