import Compiler from "@/lib/compiler"

export default function Teleop({ teleopScore, disabled, setTeleopScore, setDisabled }) {
    const content = [
        {
            component: 'coneCubeGrid',
            value: teleopScore,
            eventHandler: setTeleopScore,
        },
        {
            label: 'Disabled?',
            component: 'checkbox',
            value: disabled,
            eventHandler: setDisabled
        }
    ]

    const form = Compiler(content)

    return (
        <div>
            <h1 className="phase-title">TELEOP</h1>

            <div className="form">
                {form}
            </div>
        </div>
    )
}