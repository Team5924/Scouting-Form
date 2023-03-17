import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import Prematch from '../components/Phases/prematch.js'
import Pit from '../components/Phases/pit.js'
import Summary from '../components/Phases/summary.js'

export default function App() {
    const prematch = useRef(null)
    const pit = useRef(null)
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
            'Team': parseInt(team),
            'Alliance': parseInt(alliance),
            'Speed (ft/sec)': parseInt(speed),
            'Drive Train': driveTrain,
            'Auto': auto,
            'Climb Time': climbTime,
            'Substation': substation,
            'Ground Pickup or HP Station': pickup,
            'Type': 'pit'
        }

        // '@p' is a placeholder later used in the Scouting App
        console.log(JSON.stringify(data) + ',p')
        return JSON.stringify(data) + ',p'
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
        setDriveTrain('')
        setAuto('')
        setClimbTime('')
        setSubstation('')
        setPickup('')
        updatePage()
    }

    // * ### States & Event Handlers
    
    // ### Prematch
    const [id, setId] = useState('')
    const [team, setTeam] = useState('')
    const [alliance, setAlliance] = useState()

    // ### Pit
    const [speed, setSpeed] = useState('')
    const [driveTrain, setDriveTrain] = useState('')
    const [auto, setAuto] = useState('')
    const [climbTime, setClimbTime] = useState('')
    const [substation, setSubstation] = useState('')
    const [pickup, setPickup] = useState('')

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
                    alliance={alliance}
                    setId={setId}
                    setTeam={setTeam}
                    setAlliance={setAlliance}
                />
            </div>

            <div ref={pit}>
                <Pit
                    speed={speed}
                    driveTrain={driveTrain}
                    auto={auto}
                    climbTime={climbTime}
                    substation={substation}
                    pickup={pickup}
                    setSpeed={setSpeed}
                    setDriveTrain={setDriveTrain}
                    setAuto={setAuto}
                    setClimbTime={setClimbTime}
                    setSubstation={setSubstation}
                    setPickup={setPickup}
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
