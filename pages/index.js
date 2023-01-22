import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Prematch from "./phases/prematch"
import Auto from "./phases/auto"
import Teleop from "./phases/teleop"
import Endgame from "./phases/endgame"
import Summary from './phases/summary'

export default function App() {
    // ###### NAVIGATION #####
    const prematch = useRef();
    const auto = useRef();
    const teleop = useRef();
    const endgame = useRef();
    const summary = useRef();
    
    const back = useRef();
    const next = useRef();
    const submit = useRef();

    useEffect(() => {
        auto.current.style.display = "none";
        teleop.current.style.display = "none";
        endgame.current.style.display = "none";
        summary.current.style.display = "none";
    }, [])

    const page = useRef(0); // this value must persist between re-renders
    const phases = [prematch, auto, teleop, endgame, summary]

    function handleBack() {
        switch (page.current) {
            case 1: // When on the Auto page
                phases[page.current].current.style.display = "none";
                page.current--
                phases[page.current].current.style.display = "block";

                back.current.style.display = "none";
                break;
            case 2: // When on the Endgame page
                phases[page.current].current.style.display = "none";
                page.current--
                phases[page.current].current.style.display = "block";

                submit.current.style.display = "none";
                next.current.style.display = "inline-block";
                break;
            case 4: // When on Summary page
                phases[page.current].current.style.display = "none";
                page.current--
                phases[page.current].current.style.display = "block";

                submit.current.style.display = "inline-block";
                break
            default:
                phases[page.current].current.style.display = "none";
                page.current--
                phases[page.current].current.style.display = "block";
                break;
        }
    }

    function handleNext() {
        switch (page.current) {
            case 0: // When on the Prematch page
                phases[page.current].current.style.display = "none";
                page.current++;
                phases[page.current].current.style.display = "block";
                
                back.current.style.display = "inline-block";
                break;
            case 2: // When on the Endgame page
                phases[page.current].current.style.display = "none";
                page.current++;
                phases[page.current].current.style.display = "block";
                
                submit.current.style.display = "inline-block";
                next.current.style.display = "none";
                break;
            default:
                phases[page.current].current.style.display = "none";
                page.current++
                phases[page.current].current.style.display = "block";
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        phases[page.current].current.style.display = "none";
        page.current++
        phases[page.current].current.style.display = "blocK";

        submit.current.style.display = "none";
    }

    // ##### STATES & EVENT HANLDERS #####

    // ### PREMATCH ###
    const [id, setId] = useState("");
    const [match, setMatch] = useState("");
    const [team, setTeam] = useState("");
    const [alliance, setAlliance] = useState("");
    const [event, setEvent] = useState("");

    function handleId(id) { setId(id); }
    function handleMatch(match) { setMatch(match); }
    function handleTeam(team) { setTeam(team); }
    function handleAlliance(alliance) { setAlliance(alliance); }

    // ### AUTO ###
    const [taxi, setTaxi] = useState("")
    const [autoScore, setAutoScore] = useState({
        top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
    const [autoChargeStation, setAutoChargeStation] = useState("");
    const [autoEngaged, setAutoEngaged] = useState(0);

    function handleTaxi(taxi) { setTaxi(taxi); }
    function handleAutoChargeStation(autoChargeStation) { setAutoChargeStation(autoChargeStation); }
    function handleAutoEngaged(autoEngaged) { setAutoEngaged(autoEngaged); }
    function handleAutoScore(score, row, column) {
        const scoreCopy = teleopScore;

        row == "top" ? scoreCopy.top[column] = score : null;
        row == "mid" ? scoreCopy.mid[column] = score : null;
        row == "botCone" ? scoreCopy.botCone[column] = score : null;
        row == "botCube" ? scoreCopy.botCube[column] = score : null;

        console.log(scoreCopy);
        setAutoScore(scoreCopy);
    }
    
    // ### TELEOP ###
    const [teleopScore, setTeleopScore] = useState({
        top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    });

    function handleTeleopScore(score, row, column) {
        const scoreCopy = teleopScore;

        row == "top" ? scoreCopy.top[column] = score : null;
        row == "mid" ? scoreCopy.mid[column] = score : null;
        row == "botCone" ? scoreCopy.botCone[column] = score : null;
        row == "botCube" ? scoreCopy.botCube[column] = score : null;

        console.log(scoreCopy);
        setTeleopScore(scoreCopy);
    }

    // ### ENDGAME ####
    const [endgameChargeStation, setEndgameChargeStation] = useState("");
    const [endgameEngaged, setEndgameEngaged] = useState(0);

    function handleEndgameChargeStation(endgameChargeStation) { setEndgameChargeStation(endgameChargeStation); }
    function handleEndgameEngaged(endgameEngaged) { setEndgameEngaged(endgameEngaged); }

    return (
        <>
            <Head>
                <title>2023 Charged Up</title>
                <meta charSet='UTF-8' />
            </Head>

            <h1 id="game-title">2023 CHARGED UP</h1>
            <div ref={prematch}>
                <Prematch id={id} match={match} team={team} alliance={alliance}
                    handleId={handleId} handleMatch={handleMatch} handleTeam={handleTeam} handleAlliance={handleAlliance} />
            </div>
            <div ref={auto}>
                <Auto taxi={taxi} autoChargeStation={autoChargeStation}
                    autoEngaged={autoEngaged} handleTaxi={handleTaxi} autoScore={autoScore} handleAutoScore={handleAutoScore} handleAutoChargeStation={handleAutoChargeStation} handleAutoEngaged={handleAutoEngaged} />
            </div>
            <div ref={teleop}>
                <Teleop teleopScore={teleopScore} handleTeleopScore={handleTeleopScore} />
            </div>
            <div ref={endgame}>
                <Endgame endgameChargeStation={endgameChargeStation} endgameEngaged={endgameEngaged}
                    handleEndgameChargeStation={handleEndgameChargeStation} handleEndgameEngaged={handleEndgameEngaged} />
            </div>
            <div ref={summary}>
                <Summary />
            </div>

            <div id="nav">
                <button ref={back} id="backButton" type="button" onClick={handleBack}>BACK</button>
                <button ref={next} id="nextButton" type="button" onClick={handleNext}>NEXT</button>
                <button ref={submit} id="submitButton" type="submit" onClick={handleSubmit}>SUBMIT</button>
            </div>
        </>
    )
}
