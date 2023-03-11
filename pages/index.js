import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import Prematch from '../components/Phases/prematch.js'
import Auto from '../components/Phases/auto.js'
import Teleop from '../components/Phases/teleop.js'
import Endgame from '../components/Phases/endgame.js'
import Summary from '../components/Phases/summary.js'

export default function App() {
    const prematch = useRef(null)
    const auto = useRef(null)
    const teleop = useRef(null)
    const endgame = useRef(null)
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

                // switch to the form
                summary.current.style.display = 'none'

                submit.current.style.display = 'block'
                back.current.style.display = 'none'
                reset.current.style.display = 'none'
                setPage('form')
                break
        }
    }

    /**
     * * Compiles and returns a stringified object containing all data from the form
     * ..returns {Object} data
     */
    function parseData() {
        const data = {
            // prematch
            'iD': parseInt(id),
            'Match': parseInt(match),
            'Team': parseInt(team),
            'Alliance': parseInt(alliance),
            'No Show': parseInt(noShow),
            // auto
            'Mobility': parseInt(mobility),
            'Docked (Auto)': parseInt(autoDocked),
            'Engaged (Auto)': parseInt(autoEngaged),
            'Score (Auto)': autoScore,
            // teleop
            'Score (Total)': teleopScore,
            'Disabled': parseInt(disabled),
            // endgame
            'Parked': park,
            'Docked (Endgame)': parseInt(endgameDocked),
            'Engaged (Endgame)': parseInt(endgameEngaged)
        }

        // '..p' is a placeholder later used in the Scouting App
        console.log(JSON.stringify(data) + '..p')
        return JSON.stringify(data) + '..p'
    }

    function onBack() {
        updatePage()
    }

    function onSubmit() {
        setData(parseData())
        updatePage()
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
            top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        })
        // teleop
        // * teleopScore has been reseted by 'handleAutoScore'
        setDisabled(0)
        // endgame
        setPark(0)
        setEndgameDocked(0)
        setEndgameEngaged(0)
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
        top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
    const handleAutoScore = (score) => {
        setAutoScore(score)
        setTeleopScore(score)
    }
    
    // ### Teleop 
    const [teleopScore, setTeleopScore] = useState({
        top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
    const [disabled, setDisabled] = useState(0)

    // ### Endgame 
    const [park, setPark] = useState(0)
    const [endgameDocked, setEndgameDocked] = useState(0)
    const [endgameEngaged, setEndgameEngaged] = useState(0)

    // ### Summary
    const [data, setData] = useState()

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
                    disabled={disabled}
                    setTeleopScore={setTeleopScore}
                    setDisabled={setDisabled}
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

            <div ref={summary}>
                <Summary
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
