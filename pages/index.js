import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import Prematch from '@/components/Phases/prematch.js'
import Pit from '@/components/Phases/pit.js'
import Misc from '@/components/Misc/misc.js'
import Summary from '@/components/Phases/summary.js'

export default function App() {
    const prematch = useRef(null)
    const pit = useRef(null)
    const misc = useRef(null)
    const summary = useRef(null)

    const back = useRef(null)
    const submit = useRef(null)
    const reset = useRef(null)
    
    useEffect(() => {
        // set default ref hook behaviors here
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
                pit.current.style.display = 'none'
                misc.current.style.display = 'none'
                summary.current.style.display = 'block'

                submit.current.style.display = 'none'
                back.current.style.display = 'block'
                reset.current.style.display = 'block'
                setPage('summary')
                break
            case 'summary':
                // switch to the form
                prematch.current.style.display = 'block'
                pit.current.style.display = 'block'
                misc.current.style.display = 'block'
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
            'id': parseInt(id),
            'team': parseInt(team),
            'speed': parseInt(speed),
            'drivetrain': drivetrain,
            'auto': auto,
            'climbTime': climbTime,
            'substation': substation,
            'pickup': pickup,
            'pieces': pieces,
            'notes': notes
        }

        console.log(JSON.stringify(data) + ',')
        return JSON.stringify(data) + ','
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
        setTeam('')
        setSpeed('')
        setDrivetrain('')
        setAuto('')
        setClimbTime('')
        setSubstation('')
        setPickup('')
        setPieces('')
        setNotes('')
        updatePage()
    }

    // * ### States & Event Handlers
    
    // ### Prematch
    const [id, setId] = useState('')
    const [team, setTeam] = useState('')

    // ### Pit
    const [speed, setSpeed] = useState('')
    const [drivetrain, setDrivetrain] = useState('')
    const [auto, setAuto] = useState('')
    const [climbTime, setClimbTime] = useState('')
    const [substation, setSubstation] = useState('')
    const [pickup, setPickup] = useState('')
    const [pieces, setPieces] = useState('')

    // ### Misc
    const [notes, setNotes] = useState('')

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
                    team={team}
                    setId={setId}
                    setTeam={setTeam}
                />
            </div>

            <div ref={pit}>
                <Pit
                    speed={speed}
                    drivetrain={drivetrain}
                    auto={auto}
                    climbTime={climbTime}
                    substation={substation}
                    pickup={pickup}
                    pieces={pieces}
                    setSpeed={setSpeed}
                    setDrivetrain={setDrivetrain}
                    setAuto={setAuto}
                    setClimbTime={setClimbTime}
                    setSubstation={setSubstation}
                    setPickup={setPickup}
                    setPieces={setPieces}
                />
            </div>

            <div ref={misc}>
                <Misc
                    notes={notes}
                    setNotes={notes}
                />
            </div>

            <div ref={summary}>
                <Summary
                    id={id}
                    team={team}
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
