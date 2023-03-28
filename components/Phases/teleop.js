import Compiler from "@/lib/compiler"

export default function Teleop({ teleopScore, links, piecesDropped, status, defense, sabotage, setTeleopScore, setLinks, setPiecesDropped, setStatus, setDefense, setSabotage }) {
    const content = [
        {
            component: 'coneCubeTable',
            value: teleopScore,
            eventHandler: setTeleopScore,
        },
        {
            label: 'Alliance Links:',
            component: 'counter',
            maxValue: 5,
            value: links,
            eventHandler: setLinks
        },
        {
            label: 'Pieces Dropped:',
            component: 'counter',
            maxValue: piecesDropped + 1, // this just means no max value
            value: piecesDropped,
            eventHandler: setPiecesDropped
        },
        {
            label: 'Overall Status:',
            component: 'radioList',
            options: [
                'Operational',
                'Damaged',
                'Immobile',
                'Totaled'
            ],
            value: status,
            eventHandler: setStatus
        },
        {
            label: 'Defense Rating:',
            component: 'radioList',
            options: [
                'N/A',
                '1 (Terrible)',
                2,
                3,
                4,
                '5 (Amazing)'
            ],
            value: defense,
            eventHandler: setDefense
        },
        {
            label: 'Sabotage Team/Helped Enemy Team? (Elaborate)',
            component: 'checkbox',
            value: sabotage,
            eventHandler: setSabotage
        },
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