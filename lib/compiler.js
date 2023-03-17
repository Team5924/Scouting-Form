import TextInput from '@/components/TextInput/TextInput.js'
import Checkbox from '@/components/Checkbox/Checkbox.js'
import Alliance from '@/components/Alliance/alliance.js'
import ConeCubeGrid from '@/components/ConeCubeGrid/coneCubeGrid.js'
import Slider from '@/components/Slider/slider.js'
import Counter from '@/components/Counter/counter.js'
import RadioList from '@/components/RadioList/radioList.js'
import QRCode from 'react-qr-code'

/**
 * * Compiles an array of questions into components
 * @param {Object} questions 
 * @returns form
 */
export default function Compiler(questions) {
    const form = []
    for (let i = 0; i < questions.length; i++) {
        switch (questions[i].component) {
            case 'input':
                form.push(
                    <TextInput
                        key={i}
                        label={questions[i].label}
                        type={questions[i].type}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break
            
            case 'checkbox':
                form.push(
                    <Checkbox
                        key={i}
                        label={questions[i].label}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break
            
            case 'alliance':
                form.push(
                    <Alliance
                        key={i}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break

            case 'coneCubeGrid':
                form.push(
                    <ConeCubeGrid
                        key={i}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break
            
            case 'slider':
                form.push(
                    <Slider
                        key={i}
                        label={questions[i].label}
                        min={questions[i].min}
                        max={questions[i].max}
                        step={questions[i].step}
                        minDescription={questions[i].minDescription}
                        maxDescription={questions[i].maxDescription}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break
            
            case 'counter':
                form.push(
                    <Counter
                        key={i}
                        label={questions[i].label}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break
            
            case 'qrCode':
                form.push(
                    <div
                        key={i}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <QRCode
                            value={questions[i].value}
                            style={{ width: '100vw' }}
                        />
                    </div>
                )
                break
            
            case 'radioList':
                form.push(
                    <RadioList
                        key={i}
                        label={questions[i].label}
                        options={questions[i].options}
                        value={questions[i].value}
                        eventHandler={questions[i].eventHandler}
                    />
                )
                break
            
            default:
                form.push(
                    <div style={{ textAlign: 'center' }}>
                        Component Not Found
                    </div>
                )
        }
    }

    return form
}