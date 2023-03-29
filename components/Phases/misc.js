import Compiler from '@/lib/compiler'

const Misc = ({ notes, setNotes }) => {
    const questions = [
        {
            component: 'notes',
            value: notes,
            eventHandler: setNotes
        }
    ]

    const form = Compiler(questions)

    return (
        <div>
            <h1 className='phase-title'>MISC</h1>

            <div className='form'>
                {form}
            </div>
        </div>
    )
}
export default Misc