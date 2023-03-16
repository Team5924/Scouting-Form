import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import Prematch from '../components/Phases/prematch.js'
import Summary from '../components/Phases/summary.js'
import Qualitative from '../components/Phases/qualitative.js'

export default function App() {
    const prematch = useRef(null)
    const summary = useRef(null)
    const qualitative = useRef(null)

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
                // switch to the summary
                prematch.current.style.display = 'none'
                qualitative.current.style.display = 'none'
                summary.current.style.display = 'block'

                submit.current.style.display = 'none'
                back.current.style.display = 'block'
                reset.current.style.display = 'block'
                setPage('summary')
                break
            case 'summary':
                // switch to the form
                prematch.current.style.display = 'block'
                qualitative.current.style.display = 'block'
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
            'iD': parseInt(id),
            'Match': parseInt(match),
            'Team': parseInt(team),
            'Alliance': parseInt(alliance),
            'Pieces Dropped': parseInt(piecesDropped),
            'Defense Rating': parseInt(defense),
            'Bumpers Fell Off?': parseInt(bumpers),
            'Climb Time > 15 sec?': parseInt(climbTime),
            'Type': 'ql'
        }

        // '@p' is a placeholder later used in the Scouting App
        console.log(JSON.stringify(data) + ',@p')
        return JSON.stringify(data) + ',@p'
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
        setMatch((previousMatch) => parseInt(previousMatch) + 1)
        setTeam('')
        setDefense(0)
        setBumpers(0)
        setPiecesDropped(0)
        setClimbTime(0)
        updatePage()
    }

    // * ### States & Event Handlers
    
    // ### Prematch
    const [id, setId] = useState('')
    const [match, setMatch] = useState('')
    const [team, setTeam] = useState('')
    const [alliance, setAlliance] = useState()

    // ### Qualitative
    const [piecesDropped, setPiecesDropped] = useState(0)
    const [defense, setDefense] = useState(0)
    const [bumpers, setBumpers] = useState(0)
    const [climbTime, setClimbTime] = useState(0)

    // ### Summary
    const [data, setData] = useState()

    return (
        <>
            <Head>
                <title>2023 Charged Up</title>
                <meta charSet='UTF-8' />
            </Head>

            <h1 className='game-title'>2023 CHARGED UP</h1>

            <div ref={summary}>
                <Summary
                    data={data}
                    setData={setData}
                />
            </div>

            <div ref={prematch}>
                <Prematch
                    id={id}
                    match={match}
                    team={team}
                    alliance={alliance}
                    setId={setId}
                    setMatch={setMatch}
                    setTeam={setTeam}
                    setAlliance={setAlliance}
                />
            </div>

            <div ref={qualitative}>
                <Qualitative
                    piecesDropped={piecesDropped}
                    defense={defense}
                    bumpers={bumpers}
                    climbTime={climbTime}
                    setPiecesDropped={setPiecesDropped}
                    setDefense={setDefense}
                    setBumpers={setBumpers}
                    setClimbTime={setClimbTime}
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
