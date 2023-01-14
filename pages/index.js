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
            case 4: // When on the Summary page
                phases[page.current].current.style.display = "none";
                page.current--
                phases[page.current].current.style.display = "block";

                submit.current.style.display = "none";
                next.current.style.display = "inline-block";
                break;
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
            case 3: // When on the Endgame page
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
    }

    // ##### STATES & EVENT HANLDERS #####

    // Prematch
    const [id, setId] = useState("");
    const [match, setMatch] = useState("");
    const [team, setTeam] = useState("");
    const [alliance, setAlliance] = useState("");
    const [event, setEvent] = useState("");

    function handleIdChange(id) { setId(id); }
    function handleMatchChange(match) { setMatch(match); }
    function handleTeamChange(team) { setTeam(team); }
    function handleAllianceChange(alliance) { setAlliance(alliance); }

    // Auto
    const [taxi, setTaxi] = useState("")
    const [preload, setPreload] = useState("");
    const [chargeStation, setChargeStation] = useState("");
    const [autoEngaged, setAutoEngaged] = useState("NOT engaged");

    function handleTaxiChange(taxi) { setTaxi(taxi); }
    function handlePreloadChange(preload) { setPreload(preload); }
    function handleChargeStationChange(chargeStation) { setChargeStation(chargeStation); }
    function handleAutoEngagedChange(autoEngaged) { setAutoEngaged(autoEngaged);}

    return (
        <>
            <Head>
                <title>2023 Charged Up</title>
                <meta charSet='UTF-8' />
            </Head>

            <h1 id="game-title">2023 CHARGED UP</h1>
            <div ref={prematch}>
                <Prematch id={id} match={match} team={team} alliance={alliance}
                    handleIdChange={handleIdChange} handleMatchChange={handleMatchChange} handleTeamChange={handleTeamChange} handleAllianceChange={handleAllianceChange} />
            </div>
            <div ref={auto}>
                <Auto taxi={taxi} preload={preload} chargeStation={chargeStation} autoEngaged={autoEngaged} handleTaxiChange={handleTaxiChange} handlePreloadChange={handlePreloadChange} handleChargeStationChange={handleChargeStationChange} handleAutoEngagedChange={handleAutoEngagedChange} />
            </div>
            <div ref={teleop}>
                <Teleop />
            </div>
            <div ref={endgame}>
                <Endgame />
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
