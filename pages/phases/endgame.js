export default function Endgame(props) {
    function onChargeStationChange(e) {
        props.handleEndgameChargeStation(e.target.value);
    }

    function onEngagedChange(e) {
        e.target.value == 0 ? props.handleEndgameEngaged(1) : null;
        e.target.value == 1 ? props.handleEndgameEngaged(0) : null;
    }

    return (
        <>
            <h1 className="phase-title">ENDGAME</h1>
            <div className="form">
                <form>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Charge Station:</label>
                        </div>
                        
                        <div className="hMiddlebox">
                            <div className="columnbox">
                                <div className="hMiddlebox radioMargin">
                                    {/* "td" = This team docked */}
                                    <input type="radio" value="etd" checked={props.endgameChargeStation == "t-d"} onChange={onChargeStationChange} />
                                    <label className="radioLabel">This team docked</label>
                                </div>
                                <div className="hMiddlebox radioMargin">
                                    {/* 0 = No one docked */}
                                    <input type="radio" value={0} checked={props.endgameChargeStation == 0} onChange={onChargeStationChange} />
                                    <label className="radioLabel">No one docked</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="centerbox">
                        <div className="hMiddlebox">
                            <label className="inputLabel">Engaged?</label>
                            <input className="radioInput" type="checkbox" value={props.endgameEngaged} onChange={onEngagedChange}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}