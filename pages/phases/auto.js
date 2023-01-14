import { useState } from "react";

export default function Auto(props) {
    function onTaxiChange(e) {
        props.handleTaxiChange(e.target.value);
    }

    function onPreloadChange(e) {
        props.handlePreloadChange(e.target.value);
    }

    function onChargeStationChange(e) {
        props.handleChargeStationChange(e.target.value);
    }

    function onEngagedChange(e) {
        if (e.target.value === "") {
            props.handleAutoEngagedChange("engaged");
        } else if (e.target.value === "engaged") {
            props.handleAutoEngagedChange("");
        }
    }

    // no robot on cs
    // this robot on cs
    // alliance robot on cs

    return (
        <>
            <h1 className="phase-title">AUTO</h1>
            <div className="form">
                <form>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Taxi:</label>
                        </div>

                        <div>
                            <label className="radioText">
                                <input type="radio" value="Yes" checked={props.taxi === "Yes"} onChange={onTaxiChange} />
                                Yes
                            </label>
                            <label className="radioText">
                                <input type="radio" value="No" checked={props.taxi === "No"} onChange={onTaxiChange} />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Preload Game Piece:</label>
                        </div>

                        <div>
                            <label className="radioText">
                                <input type="radio" value="Cube" checked={props.preload === "Cube"} onChange={onPreloadChange} />
                                Cube
                            </label>
                            <label className="radioText">
                                <input type="radio" value="Cone" checked={props.preload === "Cone"} onChange={onPreloadChange} />
                                Cone
                            </label>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Charge Station:</label>
                        </div>
                        
                        <div>
                            <div className="columnbox">
                                <label className="radioText">
                                    <input type="radio" value="Teammate Docked" checked={props.chargeStation === "Teammate Docked"} onChange={onChargeStationChange} />
                                    Teammate docked
                                </label>
                                <label className="radioText">
                                    <input type="radio" value="This Team Docked" checked={props.chargeStation === "This Team Docked"} onChange={onChargeStationChange} />
                                    This team docked
                                </label>
                                <label className="radioText">
                                    <input type="radio" value="None" checked={props.chargeStation === "None"} onChange={onChargeStationChange} />
                                    No one docked
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="centerbox">
                        <label>
                            Engaged?
                            <input type="checkbox" value={props.autoEngaged} onChange={onEngagedChange}/>
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}