import Compiler from '@/lib/compiler'

const Summary = ({ data, setData }) => {
    const content = [
        {
            component: 'qrCode',
            value: data,
            eventHandler: setData
        }
    ]

    const form = Compiler(content)

    return (
        <div>
            <h1 className='phase-title'>SUMMARY</h1>

            <div className='form' style={{ border: 'none', backgroundColor: '#fff' }}>
                {data != undefined && form}
            </div>
        </div>
    )
}
export default Summary