import Compiler from '@/lib/compiler'

const Prematch = ({ id, team, setId, setTeam }) => {

    const content = [
        {
            label: 'iD:',
            component: 'input',
            type: 'number',
            value: id,
            eventHandler: setId
        },
        {
            label: 'Team:',
            component: 'input',
            type: 'number',
            value: team,
            eventHandler: setTeam
        }
    ]

    const form = Compiler(content)

    return (
        <div>
            <h1 className="phase-title">PREMATCH</h1>
            
            <div className='form'>
                {form}
            </div>
        </div>
    )
}
export default Prematch