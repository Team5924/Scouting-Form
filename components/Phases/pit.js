import Compiler from '@/lib/compiler.js'

const Pit = ({ speed, driveTrain, auto, climbTime, substation, pickup, setSpeed, setDriveTrain, setAuto, setClimbTime, setSubstation, setPickup }) => {
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
            value: driveTrain,
            eventHandler: setDriveTrain
        },
        {
            label: 'Auto',
            component: 'radioList',
            options: ['Mobility', 'Docked & Engaged', 'Place Game Pieces', 'No Auto'],
            value: auto,
            eventHandler: setAuto
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
            component: 'radioList',
            options: ['Single', 'Double', 'Both'],
            value: substation,
            eventHandler: setSubstation
        },
        {
            label: 'Ground Pickup or HP Station?',
            component: 'radioList',
            options: ['Ground Pickup', 'HP Station', 'Both'],
            value: pickup,
            eventHandler: setPickup
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