import Compiler from '@/lib/compiler'

const Qualitative = ({ piecesDropped, defense, bumpers, climbTime, setPiecesDropped, setDefense, setBumpers, setClimbTime}) => {

    const content = [
        {
            label: 'Pieces Dropped?',
            component: 'counter',
            value: piecesDropped,
            eventHandler: setPiecesDropped
        },
        {
            label: 'Defense Rating:',
            component: 'slider',
            min: '0',
            max: '5',
            step: '1',
            minDescription: 'Terrible',
            maxDescription: 'Amazing',
            value: defense,
            eventHandler: setDefense
        },
        {
            label: 'Bumpers Fell Off?',
            component: 'checkbox',
            value: bumpers,
            eventHandler: setBumpers
        },
        {
            label: 'Climb Time > 15 sec?',
            component: 'checkbox',
            value: climbTime,
            eventHandler: setClimbTime
        }
    ]

    const form = Compiler(content)

    return (
        <div>
            <h1 className="phase-title">QUALITATIVE</h1>
            
            <div className='form'>
                {form}
            </div>
        </div>
    )
}
export default Qualitative