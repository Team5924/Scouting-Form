import Compiler from '@/lib/compiler'

const Summary = ({ id, team, data, setData }) => {
    const metadata = `iD${id}-${team}`

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
            <h1 className='phase-title'>{metadata}</h1>

            <div className='form' style={{ border: 'none', backgroundColor: '#fff' }}>
                {data != undefined && form}
            </div>
        </div>
    )
}
export default Summary