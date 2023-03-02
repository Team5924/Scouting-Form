import Grid from "@/components/grid";
import { useEffect } from "react";

export default function Auto(props) {
    function onTaxiChange(e) {
        e.target.value == 0 ? props.handleTaxi(1) : null
        e.target.value == 1 ? props.handleTaxi(0) : null
    }

    function onChargeStationChange(e) {
        e.target.value == 0 ? props.handleAutoChargeStation(1) : null
        e.target.value == 1 ? props.handleAutoChargeStation(0) : null
    }

    function onEngagedChange(e) {
        e.target.value == 0 ? props.handleAutoEngaged(1) : null;
        e.target.value == 1 ? props.handleAutoEngaged(0) : null;
    }

    return (
        <>
            <h1 className="phase-title">AUTO</h1>
            <div className="form">
                <form>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        Record Only What Your Team Scores
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Grid handleScore={props.handleAutoScore} clear={props.clear} />
                    </div>
                    {/* //* Taxi */}
                    <div>
                        <div className="formRow">
                            <div className="hMiddlebox right">
                                <label className="inputLabel">Taxi?</label>
                            </div>
                            <input className="radioInput left" type="checkbox" value={props.taxi} checked={props.taxi == 1} onChange={onTaxiChange}/>
                        </div>
                    </div>
                    {/* // * Docked */}
                    <div className="formRow">
                        <div className="hMiddlebox">
                            <label className="inputLabel">Docked?</label>
                            <input className="radioInput" type="checkbox" value={props.autoChargeStation} checked={props.autoChargeStation == 1} onChange={onChargeStationChange}/>
                        </div>
                    </div>
                    {/* // * Engaged */}
                    <div className="formRow">
                        <div className="hMiddlebox">
                            {/* //* Engaged */}
                            <label className="inputLabel">Engaged?</label>
                            <input className="radioInput" type="checkbox" value={props.autoEngaged} checked={props.autoEngaged == 1} onChange={onEngagedChange}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}