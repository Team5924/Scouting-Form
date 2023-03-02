import MonoInput from "@/components/MonoInput/MonoInput"
import Alliance from "@/components/Alliance/alliance"
import ConeCubeGrid from "@/components/ConeCubeGrid/ConeCubeGrid"

/**
 * * Compiles an array of questions into components
 * @param {any[]} questions 
 * @returns form
 */
export default function Compiler(questions) {
    const form = []
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].component == 'input') {
            form.push(
                <MonoInput
                    key={i}
                    label={questions[i].label}
                    type={questions[i].type}
                    value={questions[i].value}
                    eventHandler={questions[i].eventHandler}
                />
            )
        }
        if (questions[i].component == 'alliance') {
            form.push(
                <Alliance
                    key={i}
                    value={questions[i].value}
                    eventHandler={questions[i].eventHandler}
                />
            )
        }
        if (questions[i].component == 'coneCubeGrid') {
            form.push(
                <ConeCubeGrid
                    key={i}
                    value={questions[i].value}
                    eventHandler={questions[i].eventHandler}
                />
            )
        }
    }

    return form
}