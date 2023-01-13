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
            <h1 id="phase-title">PREMATCH</h1>
            <div className="form">
                <form>
                    <div id="form-row">
                        <label>iD</label>
                        <input type={"number"} value={props.id} onChange={onIdChange}></input>
                    </div>

                    <div id="form-row">
                        <label>Match</label>
                        <input type={"number"} value={props.match} onChange={onMatchChange}></input>
                    </div>

                    <div id="form-row">
                        <label>Team</label>
                        <input type={"number"} value={props.team} onChange={onTeamChange}></input>
                    </div>

                    <div id="form-row">
                        <label>Alliance</label>
                        <select value={props.alliance} onChange={onAllianceChange}>
                            <optgroup label="Blue">
                                <option value="blue-1">Blue-1</option>
                                <option value="blue-2">Blue-2</option>
                                <option value="blue-3">Blue-3</option>
                            </optgroup>
                            <optgroup label="Red">
                                <option value="red-1">Red-1</option>
                                <option value="red-2">Red-2</option>
                                <option value="red-3">Red-3</option>
                            </optgroup>
                        </select>
                    </div>

                    <div id="form-row">
                        <label>Event</label>
                        <input type={"text"} value={"SFR"} disabled={true}></input>
                    </div>
                </form>
            </div>
        </>
    )
}