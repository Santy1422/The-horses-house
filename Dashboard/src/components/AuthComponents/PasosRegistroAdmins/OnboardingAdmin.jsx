import { useState, useEffect } from "react";
import clubesFederados from "../../../../clubesFederados";
import DropdownWeb from "@/components/reusableComponents/DropdownWeb";
import Search from "@/components/reusableComponents/Search";
import TextInput from "@/components/reusableComponents/TextInput";
import Button from "@/components/reusableComponents/Button";
import { useRouter } from "next/router";
import PhoneInput from "@/components/reusableComponents/PhoneInput";

const OnboardingAdmin = ({
  profession,
  setAnswers,
  answers,
  setSteps,
  steps,
  supporting,
  text,
  items,
  totalSteps,
  type,
  step1bis,
  step1ter,
  step1cuar,
  step1quin,
  saveAnswersAtLocalStorage,

}) => {
  const router = useRouter();
  const {push} = useRouter()
  const [localAnswer, setLocalAnswer] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [selectedOption, onSelect] = useState("");
  const [nombre, setNombre] = useState(""); //para el nombre si selecciona rol presidente
  const [telefono, setTelefono] = useState(""); //para el telefono si selecciona rol presidente
  console.log("answer", answers);
  const [data, setData] = useState([]); //guardar los clubes
  const pasoActual = steps + 1;

  useEffect(() => {
    if (!items.length) {
      setData(clubesFederados);
    } else return;
  }, []);

  //para manejar el boton siguiente habilitado/deshabilitado
  useEffect(() => {
    setDisabled(true);

    // step1bis tienen solo los clubes
    if (step1bis) {
      if (
        selectedOption === "Presidente" &&
        localAnswer &&
        nombre &&
        telefono
      ) {
        setDisabled(false);
      } else if (
        selectedOption !== "Presidente" &&
        localAnswer &&
        selectedOption
      ) {
        setDisabled(false);
      }
    } else {
      if (localAnswer) {
        if (localAnswer === "Presidente") {
          if (nombre && telefono) {
            setDisabled(false);
          }
        }

        if (localAnswer === "Vocal titular") {
          if (nombre && selectedOption) {
            setDisabled(false);
          }
        } else {
          setDisabled(false);
        }
      } else setDisabled(true);
    }
  }, [disabled, selectedOption, localAnswer, nombre, telefono]);

  //objeto que recopila las respustas del paso dos
  const respuestasstep2 = [localAnswer, nombre, telefono, selectedOption];
  const respuestasFinal = respuestasstep2?.filter(
    (resp) => resp && resp.length
  );
  console.log(respuestasFinal, profession);

  //   boton siguiente
  const handleNextStep = () => {
    if (pasoActual === 2 && localAnswer) {
      setAnswers([...answers].concat(respuestasFinal));
      setSteps(steps + 1);
    }
    if (pasoActual === 3 && localAnswer) {
      answers.push(localAnswer);
    }

    if (totalSteps === steps && localAnswer) {
      console.log("answers enviado", answers);
      saveAnswersAtLocalStorage()

      router.push("/register");
    }
  };
  const handleLocalAnswer = (item) => {
    setLocalAnswer(item);
  };

  //para el input name
  const handleChangeNombre = (value) => {
    setNombre(value);
  };

  const handleCancel = () => {
    setSteps(0);
    setAnswers([]);
    push("/register/registerOnboarding");
  };

  return (
    <div className="w-full max-h-[100vh] pb-6">
      <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">
        {" "}
        {text && text}
      </p>

      <div>
        {type === "radio" ? (
          <div className="mt-4">
            {items?.map((item) => (
              <label
              key={item}
              onClick={() => handleLocalAnswer(item)}
              className="h-14 rounded px-3 py-2 gap-2 w-full border border-gray-300 flex items-center mb-2 cursor-pointer"
            >
              <input
                type="radio"
                value={item}
                name={"option"}
                className="text-indigo-950"
              />
              {item}
            </label>
            ))}
          </div>
        ) : (
          <div>
            {items.length > 0 ? (
              <DropdownWeb
                options={items}
                onSelect={setLocalAnswer}
                selectedOption={localAnswer}
                placeholder={supporting}
              />
            ) : (
              <div className="mt-4">
                <Search
                  itemsAbuscar={data}
                  placeholder={supporting}
                  setValue={setLocalAnswer}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {step1bis ? (
        <section className="mt-4">
          <DropdownWeb
            options={step1bis.items}
            selectedOption={selectedOption}
            onSelect={onSelect}
            supporting={step1bis.supporting}
            label={step1bis.text}
          />
        </section>
      ) : null}

      {/* completar su nombre y telefono solo si es presidente del club o de la federacion */}
      <section>
        {selectedOption === "Presidente" || localAnswer === "Presidente" ? (
          <>
            <div className="w-full mt-4">
              <TextInput
                label={step1ter && step1ter.text}
                setValue={handleChangeNombre}
                value={nombre}
              />
            </div>

            <div className="w-full mt-[-4px]">
              <PhoneInput setValue={setTelefono} />
            </div>
          </>
        ) : null}
      </section>

      {/* si es vocal titular para usuarios de la federacion  */}
      <section className="w-full mt-4">
        {localAnswer === "Vocal titular" ? (
          <>
            <div>
              <TextInput
                label={step1ter && step1ter.text}
                setValue={handleChangeNombre}
                value={nombre}
              />
            </div>

            <div>
              <DropdownWeb
                options={step1quin.items}
                onSelect={onSelect}
                selectedOption={selectedOption}
                supporting={step1quin.supporting}
                label={step1quin.text}
              />
            </div>
          </>
        ) : null}
      </section>

      {/* progress points */}
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

      <section className="w-full h-11 bottom-0 flex flex-row items-center justify-center gap-2">
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
          action={() => handleNextStep()}
        />
      </section>
    </div>
  );
};

export default OnboardingAdmin;
