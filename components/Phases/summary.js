import Compiler from '@/lib/compiler'
import { useEffect } from 'react'

const Summary = ({ id, match, team, alliance, data, setData }) => {
    let alliance_color
    switch (parseInt(alliance)) {
        case 0:
            alliance_color = 'B1'
            break
        case 1:
            alliance_color = 'B2'
            break
        case 2:
            alliance_color = 'B3'
            break
        case 3:
            alliance_color = 'R1'
            break
        case 4:
            alliance_color = 'R2'
            break
        case 5:
            alliance_color = 'R3'
    }
    const metadata = `ID${id}-M${match}-T${team}-${alliance_color}`

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