import Head from 'next/head'
import { useRef, useState } from 'react'
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

    let count = 0
    const phases = [prematch, auto, teleop, endgame, summary]

    function handleBack() {
        if (count != 0) {
            phases[count].current.style.display = "none";
            count--;
            phases[count].current.style.display = "block";
        }

        if (count == 3) {
            submit.current.style.display = "none";
            next.current.style.display = "inline-block";
        }

        if (count == 0) {
            back.current.style.display = "none";
        }
    }

    function handleNext() {
        if (count != 4) {
            phases[count].current.style.display = "none";
            count++;
            phases[count].current.style.display = "block";
        }

        if (count == 1) {
            back.current.style.display = "inline-block";
        }

        if (count == 4) {
            next.current.style.display = "none";
            submit.current.style.display = "inline-block";
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    // Default Settings

    // ##### STATES #####
    // Prematch
    const [id, setId] = useState("");
    const [match, setMatch] = useState("");
    const [team, setTeam] = useState("");
    const [alliance, setAlliance] = useState("");
    const [event, setEvent] = useState("");

    // ##### EVENT HANDLERS #####
    // Prematch
    function handleIdChange(id) {
        setId(id);
    }

    function handleMatchChange(match) {
        setMatch(match);
    }

    function handleTeamChange(team) {
        setTeam(team);
    }

    function handleAllianceChange(alliance) {
        setAlliance(alliance);
    }

    return (
        <>
            <Head>
                <title>2023 Charged Up</title>
            </Head>

            <h1 id="game-title">2023 CHARGED UP</h1>
            <div ref={prematch}>
                <Prematch id={id} match={match} team={team} alliance={alliance} handleIdChange={handleIdChange} handleMatchChange={handleMatchChange} handleTeamChange={handleTeamChange} handleAllianceChange={handleAllianceChange} />
            </div>
            <div style={{display: "none"}} ref={auto}>
                <Auto />
            </div>
            <div style={{display: "none"}} ref={teleop}>
                <Teleop />
            </div>
            <div style={{display: "none"}} ref={endgame}>
                <Endgame />
            </div>
            <div style={{display: "none"}} ref={summary}>
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
