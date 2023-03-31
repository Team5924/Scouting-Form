import Compiler from '@/lib/compiler.js'

const Pit = ({
    speed,
    drivetrain,
    auto,
    autoSignal,
    climbTime,
    substation,
    substationSignal,
    pieces,
    piecesSignal,
    setSpeed,
    setDrivetrain,
    setAuto,
    setClimbTime,
    setSubstation,
    setPieces,
}) => {
    const questions = [
        {
            label: 'Speed (ft/sec):',
            component: 'input',
            type: 'number',
            value: speed,
            eventHandler: setSpeed
        },
        {
            label: 'Drive Train:',
            component: 'radioList',
            options: ['Tank', 'Swerve', 'Omni', 'Mecanum'],
            value: drivetrain,
            eventHandler: setDrivetrain
        },
        {
            label: 'Auto',
            component: 'checkboxList',
            options: ['Mobility', 'Docked & Engaged', 'Place Game Pieces', 'No Auto'],
            resetSignal: autoSignal,
            value: auto,
            eventHandler: setAuto,
        },
        {
            label: 'Climb Time?',
            component: 'radioList',
            options: ['< 15 seconds', '> 15 seconds'],
            value: climbTime,
            eventHandler: setClimbTime
        },
        {
            label: 'Substation',
            component: 'checkboxList',
            options: ['Single', 'Double'],
            resetSignal: substationSignal,
            value: substation,
            eventHandler: setSubstation
        },
        {
            label: 'Cones or Cubes?',
            component: 'checkboxList',
            options: ['Cones', 'Cubes'],
            resetSignal: piecesSignal,
            value: pieces,
            eventHandler: setPieces
        }
    ]

    const form = Compiler(questions)

    return (
        <div>
            <h1 className='phase-title'>PIT</h1>

            <div className='form'>
                {form}
            </div>
        </div>
    )
}
export default Pit