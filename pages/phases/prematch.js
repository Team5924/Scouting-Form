import { useState } from "react";

export default function Prematch(props) {
    function onIdChange(e) {
        props.handleId(e.target.value);
    }

    function onMatchChange(e) {
        props.handleMatch(e.target.value);
    }

    function onTeamChange(e) {
        props.handleTeam(e.target.value);
    }

    function onAllianceChange(e) {
        props.handleAlliance(e.target.value);
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
                    <div className="formRow rowCenter">
                        <div className="hMiddlebox right">
                            <div className="columnbox">
                                <div className="hMiddlebox radioMargin">
                                    <input className="radioInput" type={"radio"} value={"blue-1"} checked={props.alliance === "blue-1"} onChange={onAllianceChange} />
                                    <label className="radioText blue">Blue-1</label>
                                </div>
                                <div className="hMiddlebox radioMargin">
                                    <input className="radioInput" type={"radio"} value={"blue-2"} checked={props.alliance === "blue-2"} onChange={onAllianceChange} />
                                    <label className="radioText blue">Blue-2</label>
                                </div>
                                <div className="hMiddlebox radioMargin">
                                    <input className="radioInput" type={"radio"} value={"blue-3"} checked={props.alliance === "blue-3"} onChange={onAllianceChange} />
                                    <label className="radioText blue">Blue-3</label>
                                </div>
                            </div>
                        </div>

                        <div className="columnbox">
                            <div className="hMiddlebox radioMargin">
                                <input className="radioInput" type={"radio"} value={"red-1"} checked={props.alliance === "red-1"} onChange={onAllianceChange} />
                                <label className="radioText red">Red-1</label>
                            </div>
                            <div className="hMiddlebox radioMargin">
                                <input className="radioInput" type={"radio"} value={"red-2"} checked={props.alliance === "red-2"} onChange={onAllianceChange} />
                                <label className="radioText red">Red-2</label>
                            </div>
                            <div className="hMiddlebox radioMargin">
                                <input className="radioInput" type={"radio"} value={"red-3"} checked={props.alliance === "red-3"} onChange={onAllianceChange} />
                                <label className="radioText red">Red-3</label>
                            </div>
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