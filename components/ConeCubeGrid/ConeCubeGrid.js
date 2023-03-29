import styles from './coneCubeGrid.module.css'
import Cone from './cone.js'
import Cube from './cube.js'
import Checkbox from './Checkbox/checkbox.js'

const ConeCubeGrid = ({ value, eventHandler }) => {
    const labels = [
        { text: null, columnRange: '1/2' },
        { text: 'Grid', columnRange: '2/5' },
        { text: 'Co-Op Grid', columnRange: '5/8' },
        { text: 'Grid', columnRange: '8/11' }
    ]
    const top = [
        { text: 'Top'},
        { component: 'checkbox', loc: {row: 'top', column: 0}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 1}, class: [styles.gridItem, styles.cube].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 2}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 3}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 4}, class: [styles.gridItem, styles.cube].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 5}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 6}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 7}, class: [styles.gridItem, styles.cube].join(' ') },
        { component: 'checkbox', loc: {row: 'top', column: 8}, class: [styles.gridItem, styles.cone].join(' ') },
    ]
    const mid = [
        { text: 'Mid'},
        { component: 'checkbox', loc: {row: 'mid', column: 0}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 1}, class: [styles.gridItem, styles.cube].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 2}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 3}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 4}, class: [styles.gridItem, styles.cube].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 5}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 6}, class: [styles.gridItem, styles.cone].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 7}, class: [styles.gridItem, styles.cube].join(' ') },
        { component: 'checkbox', loc: {row: 'mid', column: 8}, class: [styles.gridItem, styles.cone].join(' ') },
    ]
    const botCone = [
        { component: 'checkbox', loc: {row: 'botCone', column: 0} },
        { component: 'checkbox', loc: {row: 'botCone', column: 1} },
        { component: 'checkbox', loc: {row: 'botCone', column: 2} },
        { component: 'checkbox', loc: {row: 'botCone', column: 3} },
        { component: 'checkbox', loc: {row: 'botCone', column: 4} },
        { component: 'checkbox', loc: {row: 'botCone', column: 5} },
        { component: 'checkbox', loc: {row: 'botCone', column: 6} },
        { component: 'checkbox', loc: {row: 'botCone', column: 7} },
        { component: 'checkbox', loc: {row: 'botCone', column: 8} },
    ]
    const botCube = [
        { component: 'checkbox', loc: {row: 'botCube', column: 0} },
        { component: 'checkbox', loc: {row: 'botCube', column: 1} },
        { component: 'checkbox', loc: {row: 'botCube', column: 2} },
        { component: 'checkbox', loc: {row: 'botCube', column: 3} },
        { component: 'checkbox', loc: {row: 'botCube', column: 4} },
        { component: 'checkbox', loc: {row: 'botCube', column: 5} },
        { component: 'checkbox', loc: {row: 'botCube', column: 6} },
        { component: 'checkbox', loc: {row: 'botCube', column: 7} },
        { component: 'checkbox', loc: {row: 'botCube', column: 8} },
    ]

    /**
     * * Returns the value of a specific node on the grid
     * @param {{ row: string, column: number}} loc 
     * @returns {number} currentValue
     */
    function currentValue(loc) {
        switch (loc.row) {
            case 'top':
                return value.top[loc.column]
            case 'mid':
                return value.mid[loc.column]
            case 'botCone':
                return value.botCone[loc.column]
            case 'botCube':
                return value.botCube[loc.column]
        }
    }

    /**
     * * Updates an individual item in 'autoScore'.
     * * Does not handle logic
     * @param {{ row: string, column: number }} loc 
     * @param {number} newValue
     */
    function updateValue(loc, newValue) {
        switch (loc.row) {
            case 'top':
                eventHandler({
                    ...value,
                    top: value.top.map((currentValue, i) => {
                        // only update the corresponding index
                        if (i == loc.column) {
                            return newValue
                        } else { return currentValue }
                    })
                })
                break
            case 'mid':
                eventHandler({
                    ...value,
                    mid: value.mid.map((currentValue, i) => {
                        // only update the corresponding index
                        if (i == loc.column) {
                            return newValue
                        } else { return currentValue } 
                    })
                })
                break
            case 'botCone':
                // pass the eventHandler a function to update state synchronously
                eventHandler((previousValue) => ({
                    ...previousValue,
                    botCone: previousValue.botCone.map((item, i) => {
                        // only update the corresponding index
                        if (i == loc.column) {
                            return newValue
                        } else { return item }
                    })
                }))
                break
            case 'botCube':
                // pass the eventHandler a function to update state synchronously
                eventHandler((previousValue) => ({
                    ...previousValue,
                    botCube: previousValue.botCube.map((item, i) => {
                        // only update the corresponding index
                        if (i == loc.column) {
                            return newValue
                        } else { return item }
                    })
                }))
                break
        }
    }

    /**
     * * Handles the logic when a specific checkbox gets clicked
     * @param {{ row: string, column: number }} loc
     */
    function handleClick(loc) {
        switch (loc.row) {
            case 'top':
                switch (currentValue(loc)) {
                    case 0:
                        updateValue(loc, 1)
                        break
                    case 1:
                        updateValue(loc, 0)
                        break
                }
                break
            case 'mid':
                switch (currentValue(loc)) {
                    case 0:
                        updateValue(loc, 1)
                        break
                    case 1:
                        updateValue(loc, 0)
                        break
                }
                break
            case 'botCone':
                switch (currentValue(loc)) {
                    case 0:
                        updateValue(loc, 1)
                        // only a cone or cube, per column, can be selected in the bottom row
                        updateValue(loc = { row: 'botCube', column: loc.column }, 0)
                        break
                    case 1:
                        updateValue(loc, 0)
                        break
                }
                break
            case 'botCube':
                switch (currentValue(loc)) {
                    case 0:
                        updateValue(loc, 1)
                        // only a cone or cube, per column, can be selected in the bottom row
                        updateValue(loc = { row: 'botCone', column: loc.column }, 0)
                        break
                    case 1:
                        updateValue(loc, 0)
                        break
                }
                break
        }
    }
    
    return (
        <>
            <span style={{color: 'hsl(0, 85%, 50%)', textAlign: 'center'}}>Record Only What Your Team Scores</span>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '-40px', marginBottom: '-50px'}}>
                <div className={styles.grid}>
                    {/* // * Labels */}
                    {labels.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className={styles.gridItem}
                                style={{ gridColumn: item.columnRange }}
                            >
                                {item.text}
                            </div>
                        )
                    })}
                    {/* // * Top Row */}
                    <div className={styles.gridItem}>Top</div>
                    {top.filter(item => item.component == 'checkbox').map((item, i) => {
                        return (
                            <div key={i} className={item.class}>
                                <Checkbox value={currentValue(item.loc)} loc={item.loc} eventHandler={handleClick} />
                            </div>
                        )
                    })}
                    {/* // * Mid Row */}
                    <div className={styles.gridItem}>Mid</div>
                    {mid.filter(item => item.component == 'checkbox').map((item, i) => {
                        return (
                            <div key={i} className={item.class}>
                                <Checkbox value={currentValue(item.loc)} loc={item.loc} eventHandler={handleClick} />
                            </div>
                        )
                    })}
                    {/* // * Bot Row (Cone) */}
                    <div className={styles.gridItem}>Bot <Cone /></div>
                    {botCone.filter(item => item.component == 'checkbox').map((item, i) => {
                        return (
                            <div key={i} className={styles.gridItem}>
                                <Checkbox value={currentValue(item.loc)} loc={item.loc} eventHandler={handleClick} />
                            </div>
                        )
                    })}
                    {/* // * Bot Row (Cube) */}
                    <div className={styles.gridItem}>Bot <Cube /></div>
                    {botCube.filter(item => item.component == 'checkbox').map((item, i) => {
                        return (
                            <div key={i} className={styles.gridItem}>
                                <Checkbox value={currentValue(item.loc)} loc={item.loc} eventHandler={handleClick} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default ConeCubeGrid