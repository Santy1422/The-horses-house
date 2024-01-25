import { useState} from "react";
import { useSteps } from "../../CustomHooks.jsx/useSteps";
import { OnboardingAdminInitial } from "./OnboardingAdminInitial";
import { professions } from "./professionsAdmin";
import { OnboardingAdmin } from "./OnboardingAdmin";
// import clubesfederadosJSON from "../../../clubesfederados.json"

export const OnboardingAdminIndex = () => {
    const { steps, setSteps } = useSteps(0)
    const [profession, setProfession] = useState([])  //OnboardingInitial
    const [category, setCategory] = useState([])
    const [answers, setAnswers] = useState([])


  

    const FirstStep = () => {
        return (
            <>
                {
                    professions?.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <OnboardingAdmin key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                supporting={prof.step1.supporting}
                                text={prof.step1.text }
                                items={prof.step1.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step1.type} 
                                step1bis= {prof.step1bis ? prof.step1bis : null}
                                step1ter={prof.step1ter ? prof.step1ter : null}
                                step1cuar={prof.step1cuar ? prof.step1cuar : null}
                                step1quin={prof.step1quin ? prof.step1quin : null}
                                
                                />
                        )
                    })
                }
            </>
        )
    }

    let SecondStep = () => {
        return (
            <>

                {
                    professions?.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <OnboardingAdmin
                                key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step2.text}
                                items={prof.step2.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step2.type} />
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            {steps == 0 && <OnboardingAdminInitial profession={profession} setProfession={setProfession} setSteps={setSteps} steps={steps} category={category} setCategory={setCategory} />}
            {steps == 1 && <FirstStep />}
            {steps == 2 && <SecondStep />}
        </>
    )
}