import styles from './ConeCubeGrid.module.css'
import Cone from '../grid-components/cone'
import Cube from '../grid-components/cube'

const ConeCubeGrid = ({ value, eventHandler }) => {
    const labels = [
        { text: null, columnRange: '1/2' },
        { text: 'Grid', columnRange: '2/5' },
        { text: 'Co-Op Grid', columnRange: '5/8' },
        { text: 'Grid', columnRange: '8/11' }
    ]
    const grid = [
        { text: 'Top'},
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
    ]

    const topLayout = [
        { text: 'Top'},
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
    ]
    const midLayout = [
        { text: 'Mid'},
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cone' },
        { component: 'checkbox', type: 'cube' },
        { component: 'checkbox', type: 'cone' },
    ]
    const botConeLayout = [
        { svg: 'Cone'},
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
    ]
    const botCubeLayout = [
        { svg: 'Cube'},
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
        { component: 'checkbox' },
    ]

    const label = []
    const top = []
    const mid = []
    const botCone = []
    const botCube = []
    for (let i = 0; i < labels.length; i++) {
        label.push(
            <div
                key={i}
                className={styles.gridItem}
                style={{ gridColumn: labels[i].columnRange }}
            >
                {labels[i].text}
            </div>
        )
    }

    for (let i = 0; i < topLayout.length; i++) {
        top.push(
            <div key={i} className={styles.gridItem}>
                {topLayout[i].text}
            </div>
        )
        mid.push(
            <div key={i} className={styles.gridItem}>
                {midLayout[i].text}
            </div>
        )
        if (botConeLayout[i].svg == 'Cone') {
            botCone.push(
                <div key={i} className={styles.gridItem}>
                    Bot<Cone />
                </div>
            )
        } else {
            botCone.push(
                <div key={i} className={styles.gridItem}></div>
            )
        }
        botCube.push(
            botCubeLayout[i].svg == 'Cube' ?
                <div key={i} className={styles.gridItem}>
                    Bot<Cube />
                </div>
            :
                <div key={i} className={styles.gridItem}></div>
        )
    }

    return (
        <>
            <span style={{textAlign: 'center', marginBottom: '-20px'}}>Record Only What Your Team Scores</span>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className={styles.grid}>
                    {label}
                    {top}
                    {mid}
                    {botCone}
                    {botCube}
                </div>
            </div>
        </>
    )
}
export default ConeCubeGrid