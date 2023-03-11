import Compiler from '@/lib/compiler'

const Prematch = ({ id, match, team, alliance, noShow, setId, setMatch, setTeam, setAlliance, setNoShow }) => {

    const content = [
        {
            label: 'iD:',
            component: 'input',
            type: 'number',
            value: id,
            eventHandler: setId
        },
        {
            label: 'Match:',
            component: 'input',
            type: 'number',
            value: match,
            eventHandler: setMatch
        },
        {
            label: 'Team:',
            component: 'input',
            type: 'number',
            value: team,
            eventHandler: setTeam
        },
        {
            label: 'Alliance:',
            component: 'alliance',
            value: alliance,
            eventHandler: setAlliance
        },
        {
            label: 'Did Not Show Up?',
            component: 'checkbox',
            value: noShow,
            eventHandler: setNoShow
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