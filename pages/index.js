import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import Prematch from '../components/Phases/prematch.js'
import Auto from '../components/Phases/auto.js'
import Teleop from '../components/Phases/teleop.js'
import Endgame from '../components/Phases/endgame.js'
import Misc from '../components/Phases/misc.js'
import Summary from '../components/Phases/summary.js'

export default function App() {
    const prematch = useRef(null)
    const auto = useRef(null)
    const teleop = useRef(null)
    const endgame = useRef(null)
    const misc = useRef(null)
    const summary = useRef(null)

    const back = useRef(null)
    const submit = useRef(null)
    const reset = useRef(null)
    
    useEffect(() => {
        summary.current.style.display = 'none'
        back.current.style.display = 'none'
        reset.current.style.display = 'none'
    }, [])

    const [page, setPage] = useState('form')

    /**
     * * A state machine that controls what the app displays
     */
    function updatePage() {
        switch (page) {
            case 'form':
                prematch.current.style.display = 'none'
                auto.current.style.display = 'none'
                teleop.current.style.display = 'none'
                endgame.current.style.display = 'none'
                misc.current.style.display = 'none'
                // switch to the summary
                summary.current.style.display = 'block'

                submit.current.style.display = 'none'
                back.current.style.display = 'block'
                reset.current.style.display = 'block'
                setPage('summary')
                break
            case 'summary':
                prematch.current.style.display = 'block'
                auto.current.style.display = 'block'
                teleop.current.style.display = 'block'
                endgame.current.style.display = 'block'
                misc.current.style.display = 'block'

                // switch to the form
                summary.current.style.display = 'none'

                submit.current.style.display = 'block'
                back.current.style.display = 'none'
                reset.current.style.display = 'none'
                setPage('form')
                break
        }
    }

    function onBack() {
        updatePage()
    }

    function onSubmit() {
        setData(parseData())
        updatePage()
    }

    // * ### States & Event Handlers
    
    // ### Prematch
    const [id, setId] = useState('')
    const [match, setMatch] = useState('')
    const [team, setTeam] = useState('')
    const [alliance, setAlliance] = useState()
    const [noShow, setNoShow] = useState(0)

    // ### Auto
    const [mobility, setMobility] = useState(0)
    const [autoDocked, setAutoDocked] = useState(0)
    const [autoEngaged, setAutoEngaged] = useState(0)
    const [autoScore, setAutoScore] = useState({
        top: { cones: 0, cubes: 0 },
        mid: { cones: 0, cubes: 0 },
        bot: { cones: 0, cubes: 0 }
    });
    function handleAutoScore(score) {
        setAutoScore(score)
        setTeleopScore(score)
    }
    
    // ### Teleop 
    const [teleopScore, setTeleopScore] = useState({
        top: { cones: 0, cubes: 0 },
        mid: { cones: 0, cubes: 0 },
        bot: { cones: 0, cubes: 0 }
    });
    const [links, setLinks] = useState(0)
    const [piecesDropped, setPiecesDropped] = useState(0)
    const [status, setStatus] = useState('Operational')
    const [defense, setDefense] = useState('N/A')

    // ### Endgame 
    const [park, setPark] = useState(0)
    const [endgameDocked, setEndgameDocked] = useState(0)
    const [endgameEngaged, setEndgameEngaged] = useState(0)

    // ### Misc
    const [notes, setNotes] = useState('')

    // ### Summary
    const [data, setData] = useState()

    /**
     * * Compiles and returns a stringified object containing all data from the form
     * ..returns {Object} data
     */
    function parseData() {
        const data = [
            // prematch
            parseInt(id),
            parseInt(match),
            parseInt(team),
            parseInt(noShow),
            // auto
            parseInt(mobility),
            parseInt(autoDocked),
            parseInt(autoEngaged),
            parseInt(autoScore),
            // teleop
            parseInt(teleopScore),
            parseInt(links),
            parseInt(piecesDropped),
            status,
            defense,
            // endgame
            park,
            parseInt(endgameDocked),
            parseInt(endgameEngaged),
            // notes
            notes
        ]

        console.log('[' + data.toString() + ']' + ',')
        return '[' + data.toString() + ']' + ','
    }

    /**
     * * Resets the form questions to their corresponding default/new value
     */
    function onReset() {
        // prematch
        setMatch((previousMatch) => parseInt(previousMatch) + 1)
        setTeam('')
        setNoShow(0)
        // auto
        setMobility(0)
        setAutoDocked(0)
        setAutoEngaged(0)
        handleAutoScore({
            top: { cones: 0, cubes: 0 },
            mid: { cones: 0, cubes: 0 },
            bot: { cones: 0, cubes: 0 }
        })
        // teleop
        setLinks(0)
        setPiecesDropped(0)
        setStatus('Operational')
        setDefense('N/A')
        // endgame
        setPark(0)
        setEndgameDocked(0)
        setEndgameEngaged(0)
        // misc
        setNotes('')
        updatePage()
    }

    return (
        <>
            <Head>
                <title>2023 Charged Up</title>
                <meta charSet='UTF-8' />
            </Head>

            <h1 className='game-title'>2023 CHARGED UP</h1>

            <div ref={prematch}>
                <Prematch
                    id={id}
                    match={match}
                    team={team}
                    alliance={alliance}
                    noShow={noShow}
                    setId={setId}
                    setMatch={setMatch}
                    setTeam={setTeam}
                    setAlliance={setAlliance}
                    setNoShow={setNoShow}
                />
            </div>

            <div ref={auto}>
                <Auto
                    mobility={mobility}
                    autoDocked={autoDocked}
                    autoEngaged={autoEngaged}
                    autoScore={autoScore}
                    setMobility={setMobility}
                    setAutoDocked={setAutoDocked}
                    setAutoEngaged={setAutoEngaged}
                    setAutoScore={handleAutoScore}
                />
            </div>

            <div ref={teleop}>
                <Teleop
                    teleopScore={teleopScore}
                    links={links}
                    piecesDropped={piecesDropped}
                    status={status}
                    defense={defense}
                    setTeleopScore={setTeleopScore}
                    setLinks={setLinks}
                    setPiecesDropped={setPiecesDropped}
                    setStatus={setStatus}
                    setDefense={setDefense}
                />
            </div>

            <div ref={endgame}>
                <Endgame
                    park={park}
                    endgameDocked={endgameDocked}
                    endgameEngaged={endgameEngaged}
                    setPark={setPark}
                    setEndgameDocked={setEndgameDocked}
                    setEndgameEngaged={setEndgameEngaged}
                />
            </div>

            <div ref={misc}>
                <Misc
                    notes={notes}
                    setNotes={setNotes}
                />
            </div>

            <div ref={summary}>
                <Summary
                    id={id}
                    match={match}
                    team={team}
                    alliance={alliance}
                    data={data}
                    setData={setData}
                />
            </div>


            <div className='nav'>
                <button ref={back} className='backButton' type='button' onClick={onBack}>BACK</button>
                <button ref={submit} className='submitButton' type='submit' onClick={onSubmit}>SUBMIT</button>
                <button ref={reset} className='resetButton' type='button' onClick={onReset}>RESET</button>
            </div>
        </>
    )
}
