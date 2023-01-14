import { useState } from "react";

export default function Prematch(props) {
    function onIdChange(e) {
        props.handleIdChange(e.target.value);
    }

    function onMatchChange(e) {
        props.handleMatchChange(e.target.value);
    }

    function onTeamChange(e) {
        props.handleTeamChange(e.target.value);
    }

    function onAllianceChange(e) {
        props.handleAllianceChange(e.target.value);
    }

    return (
        <>
            <h1 className="phase-title">PREMATCH</h1>
            <div className="form">
                <form>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">iD:</label>
                        </div>

                        <input className="textInput" type={"number"} value={props.id} onChange={onIdChange} />
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Match:</label>
                        </div>

                        <input className="textInput" type={"number"} value={props.match} onChange={onMatchChange} />
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Team:</label>
                        </div>

                        <input className="textInput" type={"number"} value={props.team} onChange={onTeamChange} />
                    </div>
                    <div className="centerbox">
                        <label className="inputLabel">Alliance</label>
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <div className="columnbox">
                                <label className="radioText">
                                    <input type={"radio"} value={"blue-1"} checked={props.alliance === "blue-1"} onChange={onAllianceChange} />
                                    Blue-1
                                </label>
                                <label className="radioText">
                                    <input type={"radio"} value={"blue-2"} checked={props.alliance === "blue-2"} onChange={onAllianceChange} />
                                    Blue-2
                                </label>
                                <label className="radioText">
                                    <input type={"radio"} value={"blue-3"} checked={props.alliance === "blue-3"} onChange={onAllianceChange} />
                                    Blue-3
                                </label>
                            </div>
                        </div>

                        <div className="columnbox">
                            <label className="radioText">
                                <input type={"radio"} value={"red-1"} checked={props.alliance === "red-1"} onChange={onAllianceChange} />
                                Red-1
                            </label>
                            <label className="radioText">
                                <input type={"radio"} value={"red-2"} checked={props.alliance === "red-2"} onChange={onAllianceChange} />
                                Red-2
                            </label>
                            <label className="radioText">
                                <input type={"radio"} value={"red-3"} checked={props.alliance === "red-3"} onChange={onAllianceChange} />
                                Red-3
                            </label>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Event:</label>
                        </div>

                        <input className="textInput" type={"text"} value={"SFR"} disabled={true} />
                    </div>
                </form>
            </div>
        </>
    )
}