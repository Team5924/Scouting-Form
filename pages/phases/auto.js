import Compiler from "@/lib/compiler"

const Auto = ({ value, eventHandler}) => {
    const questions = [
        {
            label: '',
            component: 'coneCubeGrid',
            value: value,
            eventHandler: eventHandler
        }
    ]

    const form = Compiler(questions)

    return (
        <div>
            <h1 className="phase-title">AUTO</h1>

            <div className="form">
                {form}
            </div>
        </div>
    )
}
export default Auto