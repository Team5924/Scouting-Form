import Compiler from '@/lib/compiler'

const Auto = ({ mobility, autoScore, autoDocked, autoEngaged, setMobility, setAutoScore, setAutoDocked, setAutoEngaged }) => {
    const content = [
        {
            label: 'Mobility?',
            component: 'checkbox',
            value: mobility,
            eventHandler: setMobility
        },
        {
            label: 'Docked?',
            component: 'checkbox',
            value: autoDocked,
            eventHandler: setAutoDocked
        },
        {
            label: 'Engaged?',
            component: 'checkbox',
            value: autoEngaged,
            eventHandler: setAutoEngaged
        },
        {
            component: 'coneCubeTable',
            value: autoScore,
            eventHandler: setAutoScore,
        }
    ]

    const form = Compiler(content)

    return (
        <div>
            <h1 className="phase-title">AUTO</h1>

            <div className="form">
                {form}
            </div>
        </div>
    )
}
export default Auto