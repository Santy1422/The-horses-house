import { useState, useEffect } from "react";
import OnboardingAdminInitial from "./OnboardingAdminInitial";

export const RegistroIndex = () => {
  const [steps, setSteps] = useState(0);
  const [profession, setProfession] = useState([]);
  const [category, setCategory] = useState([]);
  const [answers, setAnswers] = useState([]);

  const saveAnswersAtLocalStorage = () => {
    const dataToSave = {
      profession: profession,
      answers: answers,
    };

    const jsonData = JSON.stringify(dataToSave);
    localStorage.setItem('userData', jsonData);
  };


  useEffect(() => {
    // Llama a la función de guardado cada vez que el array de respuestas cambie
    saveAnswersAtLocalStorage();
  }, [answers, profession]);

  return (
    <>
      <OnboardingAdminInitial
      saveAnswersAtLocalStorage={saveAnswersAtLocalStorage}
        profession={profession}
        setProfession={setProfession}
        setSteps={setSteps}
        steps={steps}
        category={category}
        setCategory={setCategory}
        answers={answers}
        setAnswers={setAnswers}
      />
    </>
  );
};

export default RegistroIndex;
