import Grid from "@/components/grid";

export default function Auto(props) {
    function onTaxiChange(e) {
        props.handleTaxi(e.target.value);
    }

    function onChargeStationChange(e) {
        props.handleAutoChargeStation(e.target.value);
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
                        <Grid handleScore={props.handleAutoScore} />
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Taxi:</label>
                        </div>

                        <div>
                            <div className="hMiddlebox">
                                <div className="hMiddlebox">
                                    <input className="radioInput" type="radio" value={1} checked={props.taxi == 1} onChange={onTaxiChange} />
                                    <label className="radioLabel">Yes</label>
                                </div>
                                <div className="hMiddlebox">
                                    <input className="radioInput" type="radio" value={0} checked={props.taxi == 0} onChange={onTaxiChange} />
                                    <label className="radioLabel">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="hMiddlebox right">
                            <label className="inputLabel">Charge Station:</label>
                        </div>
                        
                        <div className="hMiddlebox">
                            <div className="columnbox">
                                <div className="hMiddlebox radioMargin">
                                    {/* "ad" = Alliance Docked */}
                                    <input type="radio" value="aad" checked={props.autoChargedStation == "a-d"} onChange={onChargeStationChange} />
                                    <label className="radioLabel">Teammate docked</label>
                                </div>
                                <div className="hMiddlebox radioMargin">
                                    {/* "td" = Team Docked */}
                                    <input type="radio" value="t-d" checked={props.autoChargedStation == "t-d"} onChange={onChargeStationChange} />
                                    <label className="radioLabel">This team docked</label>
                                </div>
                                <div className="hMiddlebox radioMargin">
                                    {/* 0 = No one docked */}
                                    <input type="radio" value={0} checked={props.autoChargedStation == 0} onChange={onChargeStationChange} />
                                    <label className="radioLabel">No one docked</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="centerbox">
                        <div className="hMiddlebox">
                            <label className="inputLabel">Engaged?</label>
                            <input className="radioInput" type="checkbox" value={props.autoEngaged} onChange={onEngagedChange}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}