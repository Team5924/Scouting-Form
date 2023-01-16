import Grid from "@/components/grid"

export default function Teleop(props) {
    return (
        <>
            <h1 className="phase-title">TELEOP</h1>
            <div className="form">
                <div style={{display: "flex", justifyContent: "center"}}>
                    Record Only What Your Team Scores
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Grid handleScore={props.handleTeleopScore} />
                </div>
            </div>
        </>
    )
}