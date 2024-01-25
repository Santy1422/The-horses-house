import { useState } from "react";
import { useSteps } from "../../CustomHooks.jsx/useSteps";
import { OnboardingInitial } from "./OnboardingInitial";
import { professions } from "./professions";
import { Onboarding } from "./Onboarding";

export const OnboardingIndex = () => {
    const { steps, setSteps } = useSteps()
    const [profession, setProfession] = useState([])  //OnboardingInitial
    const [category, setCategory] = useState([])
    const [answers, setAnswers] = useState([])

    const FirstStep = () => {
        return (
            <>
                {
                    professions.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <Onboarding key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step1.text}
                                supporting={prof.step1.supporting}
                                items={prof.step1.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step1.type} />
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
                    professions.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <Onboarding
                            key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step2.text}
                                supporting={prof.step2.supporting}
                                items={prof.step2.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step2.type} />
                        )
                    })
                }
            </>
        )
    }

    let ThirdStep = () => {
        return (
            <>

                {
                    professions.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <Onboarding
                            key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step3.text}
                                supporting={prof.step3.supporting}
                                items={prof.step3.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step3.type} />
                        )
                    })
                }
            </>
        )
    }

    let FourthStep = () => {
        return (
            <>

                {
                    professions.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <Onboarding
                            key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step4.text}
                                supporting={prof.step4.supporting}
                                items={prof.step4.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step4.type} />
                        )
                    })
                }
            </>
        )
    }
    let FifthStep = () => {
        return (
            <>

                {
                    professions.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <Onboarding
                            key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step5.text}
                                supporting={prof.step5.supporting}
                                items={prof.step5.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step5.type} />
                        )
                    })
                }
            </>
        )
    }
    let SixthStep = () => {
        return (
            <>
                {
                    professions.map(prof => {
                        return (
                            profession[0] === prof.name &&
                            <Onboarding
                            key={prof.name}
                                profession={profession}
                                setAnswers={setAnswers}
                                answers={answers}
                                setSteps={setSteps}
                                steps={steps}
                                text={prof.step6.text}
                                supporting={prof.step6.supporting}
                                items={prof.step6.items}
                                totalSteps={prof.totalSteps}
                                type={prof.step6.type} />
                        )
                    })
                }
            </>
        )
    }

    let SeventhStep = () => {
        return (
            <>
            </>
        )
    }






    // <steps == 1 && <OnboardingDisciplina  profession={profession} setProfession={setProfession} setSteps={setSteps} />
    return (
        <>
            {steps == 0 && <OnboardingInitial profession={profession} setProfession={setProfession} setSteps={setSteps} steps={steps} category={category} setCategory={setCategory} />}
            {steps == 1 && <FirstStep />}
            {steps == 2 && <SecondStep />}
            {steps == 3 && <ThirdStep />}
            {steps == 4 && <FourthStep />}
            {steps == 5 && <FifthStep />}
            {steps == 6 && <SixthStep />}
            {steps == 7 && <SeventhStep />}
        </>
    )
}




// let newUser = {
//     userType: '',
//     firstName: '',
//     lastName: '',
//     cellphone: '',
//     email: '',
//     emailVerified: false,
//     onboarding: false,
//     verificationCode: false,
//     password: '',
//     nationality: '',
//     workplaceRadio: '',
//     country: '',
//     province: '',
//     profilePic: '',
//     rating: [0],
//     zipCode: '',
//     tokens: [''],
//     deviceToken: [],
//     onboardingdata: [],
//     horses: [],
//     professions: []
// }