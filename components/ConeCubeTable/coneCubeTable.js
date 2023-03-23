import styles from './coneCubeTable.module.css'
// this is a custom counter specifically made for the table
import Counter from './Counter/counter.js'

const ConeCubeTable = ({ value, eventHandler }) => {
    /**
     * * Increments the top-row counters
     * @param {String} type 
     */
    function addTop(type) {
        if (type == 'cones') {
            if (value.top.cones < 6)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    top: {
                        ...previousValue.top,
                        cones: parseInt(previousValue.top.cones) + 1
                    }
                }))         
        }
        if (type == 'cubes') {
            if (value.top.cubes < 3)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    top: {
                        ...previousValue.top,
                        cubes: parseInt(previousValue.top.cubes) + 1
                    }
                })) 
        }
    }
    
    /**
     * * Decrements the top-row counters
     * @param {String} type 
     */
    function subtractTop(type) {
        if (type == 'cones') {
            if (value.top.cones > 0)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    top: {
                        ...previousValue.top,
                        cones: parseInt(previousValue.top.cones) - 1
                    }
                }))         
        }
        if (type == 'cubes') {
            if (value.top.cubes > 0)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    top: {
                        ...previousValue.top,
                        cubes: parseInt(previousValue.top.cubes) - 1
                    }
                })) 
        }
    }

    /**
    * * Increments the mid-row counters
    * @param {String} type 
    */
    function addMid(type) {
        if (type == 'cones') {
            if (value.mid.cones < 6)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    mid: {
                        ...previousValue.mid,
                        cones: parseInt(previousValue.mid.cones) + 1
                    }
                }))         
        }
        if (type == 'cubes') {
            if (value.mid.cubes < 3)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    mid: {
                        ...previousValue.mid,
                        cubes: parseInt(previousValue.mid.cubes) + 1
                    }
                })) 
        }
    }
    
    /**
     * * Decrements the mid-row counters
     * @param {String} type 
     */
    function subtractMid(type) {
        if (type == 'cones') {
            if (value.mid.cones > 0)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    mid: {
                        ...previousValue.mid,
                        cones: parseInt(previousValue.mid.cones) - 1
                    }
                }))         
        }
        if (type == 'cubes') {
            if (value.mid.cubes > 0)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    mid: {
                        ...previousValue.mid,
                        cubes: parseInt(previousValue.mid.cubes) - 1
                    }
                })) 
        }
    }

    /**
    * * Increments the bot-row counters
    * @param {String} type 
    */
    function addBot(type) {
        if (type == 'cones') {
            if (value.bot.cones < 6)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    bot: {
                        ...previousValue.bot,
                        cones: parseInt(previousValue.bot.cones) + 1
                    }
                }))         
        }
        if (type == 'cubes') {
            if (value.bot.cubes < 3)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    bot: {
                        ...previousValue.bot,
                        cubes: parseInt(previousValue.bot.cubes) + 1
                    }
                })) 
        }
    }
    
    /**
     * * Decrements the mid-row counters
     * @param {String} type 
     */
    function subtractBot(type) {
        if (type == 'cones') {
            if (value.bot.cones > 0)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    bot: {
                        ...previousValue.bot,
                        cones: parseInt(previousValue.bot.cones) - 1
                    }
                }))         
        }
        if (type == 'cubes') {
            if (value.bot.cubes > 0)
                eventHandler((previousValue) => ({
                    ...previousValue,
                    bot: {
                        ...previousValue.bot,
                        cubes: parseInt(previousValue.bot.cubes) - 1
                    }
                })) 
        }
    }

    /**
     * * Handles the logic when counter is clicked
     * @param {Object} loc 
     * @param {String} signal 
     */
    function handleClick(loc, signal) {
        switch (loc.row) {
            case 'top':
                if (signal == 'add') addTop(loc.type)
                if (signal == 'subtract') subtractTop(loc.type)
                break
            case 'mid':
                if (signal == 'add') addMid(loc.type)
                if (signal == 'subtract') subtractMid(loc.type)
                break
            case 'bot':
                if (signal == 'add') addBot(loc.type)
                if (signal == 'subtract') subtractBot(loc.type)
                break
        }
    }

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.grid}>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}>Cones</div>
                <div className={styles.gridItem}>Cubes</div>

                {/*//* Top */}
                <div className={styles.gridItem}>Top</div>
                <div className={styles.gridItem}>
                    <Counter
                        value={value.top.cones}
                        loc={{ row: 'top', type: 'cones' }}
                        eventHandler={handleClick}
                    />
                </div>
                <div className={styles.gridItem}>
                    <Counter
                        value={value.top.cubes}
                        loc={{ row: 'top', type: 'cubes' }}
                        eventHandler={handleClick}
                    />
                </div>

                {/*//* Mid */}
                <div className={styles.gridItem}>Mid</div>
                <div className={styles.gridItem}>
                    <Counter
                        value={value.mid.cones}
                        loc={{ row: 'mid', type: 'cones' }}
                        eventHandler={handleClick}
                    />
                </div>
                <div className={styles.gridItem}>
                    <Counter
                        value={value.mid.cubes}
                        loc={{ row: 'mid', type: 'cubes' }}
                        eventHandler={handleClick}
                    />
                </div>
                
                {/*//* Bot */}
                <div className={styles.gridItem}>Bot</div>
                <div className={styles.gridItem}>
                    <Counter
                        value={value.bot.cones}
                        loc={{ row: 'bot', type: 'cones' }}
                        eventHandler={handleClick}
                    />
                </div>
                <div className={styles.gridItem}>
                    <Counter
                        value={value.bot.cubes}
                        loc={{ row: 'bot', type: 'cubes' }}
                        eventHandler={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}
export default ConeCubeTable