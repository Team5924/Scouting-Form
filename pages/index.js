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
    const reset = useRef();

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
            case 3: // When on the Endgame page
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
                next.current.style.display = "none";
                reset.current.style.display = "none";
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
        reset.current.style.display = "inline-block";

        setData(parseData());
        setProcData(!procData);
    }

    function handleReset(e) {
        setMatch(parseInt(match) + 1);
        setTaxi();
        setAutoChargeStation();
        setAutoEngaged(0);
        setAutoScore({
            top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        });
        setTeleopScore({
            top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        });
        setEndgameChargeStation();
        setEndgameEngaged(0);

        setClear(!clear);
        
        prematch.current.style.display = "block";
        auto.current.style.display = "none";
        teleop.current.style.display = "none";
        endgame.current.style.display = "none";
        summary.current.style.display = "none";
        page.current = 0;

        reset.current.style.display = "none";
        back.current.style.display = "none";
        next.current.style.display = "inline-block";
    }

    // ##### STATES & EVENT HANLDERS #####

    // ### PREMATCH ###
    const [id, setId] = useState("");
    const [match, setMatch] = useState();
    const [team, setTeam] = useState("");
    const [alliance, setAlliance] = useState("");
    const [event, setEvent] = useState("");

    function handleId(id) { setId(id); }
    function handleMatch(match) { setMatch(parseInt(match)); }
    function handleTeam(team) { setTeam(parseInt(team)); }
    function handleAlliance(alliance) { setAlliance(alliance); }

    // ### AUTO ###
    const [autoScore, setAutoScore] = useState({
        top: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        mid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCone: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        botCube: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
    const [taxi, setTaxi] = useState()
    const [autoChargeStation, setAutoChargeStation] = useState();
    const [autoEngaged, setAutoEngaged] = useState(0);

    function handleTaxi(taxi) { setTaxi(taxi); }
    function handleAutoChargeStation(chargeStation) { setAutoChargeStation(chargeStation); }
    function handleAutoEngaged(engaged) { setAutoEngaged(engaged); }
    function handleAutoScore(score, row, column) {
        const scoreCopy = autoScore;

        row == "top" ? scoreCopy.top[column] = score : null;
        row == "mid" ? scoreCopy.mid[column] = score : null;
        row == "botCone" ? scoreCopy.botCone[column] = score : null;
        row == "botCube" ? scoreCopy.botCube[column] = score : null;

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

        setTeleopScore(scoreCopy);
    }

    // ### ENDGAME ####
    const [endgameChargeStation, setEndgameChargeStation] = useState();
    const [endgameEngaged, setEndgameEngaged] = useState(0);

    function handleEndgameChargeStation(endgameChargeStation) { setEndgameChargeStation(endgameChargeStation); }
    function handleEndgameEngaged(endgameEngaged) { setEndgameEngaged(endgameEngaged); }
    
    // ### SUMMARY ###
    const [data, setData] = useState();
    const [procData, setProcData] = useState(false); // dummy state used to update data to the Summary page
    const [clear, setClear] = useState(false);

    function parseData() {
        const dataObject = {
            "id": parseInt(id),
            "match": parseInt(match),
            "team": parseInt(team),
            "alliance": alliance,
            "taxi": taxi,
            "autoChargeStation": autoChargeStation,
            "autoEngaged": autoEngaged,
            "autoScore": autoScore,
            "teleopScore": teleopScore,
            "endgameChargeStation": endgameChargeStation,
            "endgameEngaged": endgameEngaged
        }
        console.log(dataObject);
        return JSON.stringify(dataObject);
    }

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
                    autoEngaged={autoEngaged} handleTaxi={handleTaxi} autoScore={autoScore} clear={clear} handleAutoScore={handleAutoScore} handleAutoChargeStation={handleAutoChargeStation} handleAutoEngaged={handleAutoEngaged} />
            </div>
            <div ref={teleop}>
                <Teleop teleopScore={teleopScore} clear={clear} handleTeleopScore={handleTeleopScore} />
            </div>
            <div ref={endgame}>
                <Endgame endgameChargeStation={endgameChargeStation} endgameEngaged={endgameEngaged}
                    handleEndgameChargeStation={handleEndgameChargeStation} handleEndgameEngaged={handleEndgameEngaged} />
            </div>
            <div ref={summary}>
                <Summary data={data} procData={procData} />
            </div>

            <div id="nav">
                <button ref={back} id="backButton" type="button" onClick={handleBack}>BACK</button>
                <button ref={next} id="nextButton" type="button" onClick={handleNext}>NEXT</button>
                <button ref={submit} id="submitButton" type="submit" onClick={handleSubmit}>SUBMIT</button>
                <button ref={reset} id="resetButton" type="button" onClick={handleReset}>RESET</button>
            </div>
        </>
    )
}
