import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/components/reusableComponents/Logo";
import styles from "../../../styles/Landing.module.css";
import BackArrow from "@/components/reusableComponents/BackArrow";
import { professionsArray } from "./professions";
import OnboardingAdmin from "./OnboardingAdmin";
import Button from "@/components/reusableComponents/Button";

const OnboardingAdminInitial = ({
  profession,
  steps,
  setSteps,
  setProfession,
  answers,
  setAnswers,
  category,
  setCategory,
  saveAnswersAtLocalStorage,
}) => {
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  const { push } = router;
console.log('profesion', profession)
  const [professions, setProfessions] = useState([
    { name: "Club de Equitación", selected: false },
    { name: "Federación Ecuestre Argentina", selected: false },
    { name: "Organizador de Eventos", selected: false },
    { name: "Fotógrafo/Videos", selected: false },
    { name: "Proveedor de videos", selected: false },
  ]);

  const handleProfessionChange = (selectedProfession) => {
    setProfessions(
      professions.map((profession) => ({
        ...profession,
        selected: profession.name === selectedProfession,
      }))
    );
    setProfession(selectedProfession);
    setDisabled(false);
  };

  const pasoActual = steps + 1;

  const handleCancel = () => {
    setSteps(0);
    setAnswers([]);
    push("/");
  };

  const handleBackArrow = () => { 
    if(steps === 0) push('/')
    setSteps(steps - 1)
  }

  const FirstStep = () => {
    return (
      <>
        {professionsArray?.map((prof) => {
          return (
            profession === prof.name && (
              <OnboardingAdmin
                key={prof.name}
                profession={profession}
                setAnswers={setAnswers}
                answers={answers}
                setSteps={setSteps}
                steps={steps}
                supporting={prof.step1.supporting}
                text={prof.step1.text}
                items={prof.step1.items}
                totalSteps={prof.totalSteps}
                type={prof.step1.type}
                step1bis={prof.step1bis ? prof.step1bis : null}
                step1ter={prof.step1ter ? prof.step1ter : null}
                step1cuar={prof.step1cuar ? prof.step1cuar : null}
                step1quin={prof.step1quin ? prof.step1quin : null}
              />
            )
          );
        })}
      </>
    );
  };

  let SecondStep = () => {
    return (
      <>
        {professionsArray?.map((prof) => {
          return (
            profession === prof.name && (
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
                type={prof.step2.type}
                saveAnswersAtLocalStorage={saveAnswersAtLocalStorage}
              />
            )
          );
        })}
      </>
    );
  };

  return (
    <div
      className={`relative z-0 flex flex-row-reverse h-screen w-screen bg-white`}
    >
      <div
        onClick={() => handleBackArrow()}
        className="cursor-pointer absolute top-[60px] left-[44px] w-11 h-11 bg-white rounded border border-gray-300 flex justify-center items-center"
      >
        <BackArrow />
      </div>
      <div
        className={`w-[60vw] h-[100vh] ${styles["login-background-img"]}`}
        style={{ backgroundImage: "url(/img/registerImg.png)" }}
      ></div>

      <div
        className={`flex flex-grow justify-center`}
        style={{ overflowY: "scroll" }}
      >
        <div className="items-center text-left w-full h-full max-w-[327px] gap-y-[16px] flex flex-col justify-start">
          <div className="mt-[50px] mb-[34px]">
            <Logo size="large" />
          </div>

          {/* Esto debe cambiar segun el paso que este */}

          <div className="flex flex-col">
            <p
              className={`w-[326px] text-indigo-950 text-2xl font-semibold leading-loose ${styles["text-font-lato"]}`}
            >
              Configurá tu cuenta
            </p>
            <p className="w-[326px] text-neutral-500 text-base font-normal font-Lato leading-normal mt-[-5px]">
              Paso {pasoActual}/3
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-[100%]">
            {/* Paso 1 */}

            {steps === 0 && (
              <>
                <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">
                  ¿Qué tipo de usuario sos?
                </p>
                <div className="w-full gap-3 mt-4">
                  {professions.map((prof) => (
                    <label
                    key={prof.name}
                    className={`${
                      prof.selected && "bg-zinc-100"
                    } flex items-center p-3 border border-stone-300 mb-3 rounded cursor-pointer`}
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${prof.name}`}
                      value={prof.name}
                      checked={prof.selected}
                      onChange={() => handleProfessionChange(prof.name)}
                    />
                    <span className="ml-2 text-indigo-950 text-sm font-normal font-Lato leading-tight">
                      {prof.name}
                    </span>
                  </label>
                    // <div
                    //   key={prof.name}
                    //   className={`${
                    //     prof.selected && "bg-zinc-100"
                    //   } flex items-center p-3 border border-stone-300 mb-3 rounded`}
                    // >
                    //   <input
                    //     type="checkbox"
                    //     id={`checkbox-${prof.name}`}
                    //     value={prof.name}
                    //     checked={prof.selected}
                    //     onChange={() => handleProfessionChange(prof.name)}
                    //   />
                    //   <label
                    //     htmlFor={`checkbox-${prof.name}`}
                    //     className="ml-2 text-indigo-950 text-sm font-normal font-Lato leading-tight"
                    //   >
                    //     {prof.name}
                    //   </label>
                    // </div>
                  ))}
                </div>
                <div className="bottom-0 w-[4%] mx-auto">
                  {/* Progres Points */}
                  <div className="flex flex-row justify-center items-center h-11 mx-auto my-8">
                    <div className="w-2 h-2 relative mr-2">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.246094"
                          y="0.808594"
                          width="8"
                          height="8"
                          rx="4"
                          fill={pasoActual === 1 ? "#23254C" : "#d6d3d1"}
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 relative mx-2">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.246094"
                          y="0.808594"
                          width="8"
                          height="8"
                          rx="4"
                          fill={pasoActual === 2 ? "#23254C" : "#d6d3d1"}
                        />
                      </svg>
                    </div>

                    <div className="w-2 h-2 relative ml-2">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.246094"
                          y="0.808594"
                          width="8"
                          height="8"
                          rx="4"
                          fill={pasoActual === 3 ? "#23254C" : "#d6d3d1"}
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Progres Points */}
                </div>

                <section className="w-full h-11 bottom-0 flex flex-row items-center justify-center gap-2 pb-6">
                  <Button
                    variant={"primary-alt"}
                    descripcion={"Cancelar"}
                    customStyle={
                      "w-[50%] rounded h-11 px-4 py-2.5 text-base font-semibold leading-normal"
                    }
                    action={() => handleCancel()}
                  />
                  <Button
                    variant={"primary"}
                    descripcion={"Siguiente"}
                    customStyle={`${
                      disabled && "bg-stone-300 border-transparent"
                    } w-[50%] rounded h-11 px-4 py-2.5 text-base font-normal leading-normal`}
                    action={() => setSteps(steps + 1)}
                  />
                </section>
              </>
            )}

            {/* Paso 2  */}
            {steps === 1 && <FirstStep />}

            {/* Paso 3  */}
            {steps === 2 && <SecondStep />}
          </div>
          {/* Hasta aqui */}
        </div>
      </div>
    </div>
  );
};
export default OnboardingAdminInitial;
