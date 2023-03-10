import Compiler from "@/lib/compiler"

const Endgame = ({ park, endgameDocked, endgameEngaged, setPark, setEndgameDocked, setEndgameEngaged }) => {
    const content = [
        {
            label: 'Parked?',
            component: 'checkbox',
            value: park,
            eventHandler: setPark
        },
        {
            label: 'Docked?',
            component: 'checkbox',
            value: endgameDocked,
            eventHandler: setEndgameDocked
        },
        {
            label: 'Engaged?',
            component: 'checkbox',
            value: endgameEngaged,
            eventHandler: setEndgameEngaged
        }
    ]
    
    const form = Compiler(content)

    return (
        <div>
            <h1 className='phase-title' >ENDGAME</h1>

            <div className='form'>
                {form}
            </div>
        </div>
    )
}
export default Endgame