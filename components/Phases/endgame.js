import Compiler from "@/lib/compiler"

const Endgame = ({ parked, endgameDocked, endgameEngaged, setParked, setEndgameDocked, setEndgameEngaged }) => {
    const content = [
        {
            label: 'Parked?',
            component: 'checkbox',
            value: parked,
            eventHandler: setParked
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