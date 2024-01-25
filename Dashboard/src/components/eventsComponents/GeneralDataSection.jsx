import AddressInput from "@/components/reusableComponents/AddressInput";
import Button from "@/components/reusableComponents/Button";
import CardEditInfoEvent from "@/components/reusableComponents/CardEditInfoEvent";
import DateInput from "@/components/reusableComponents/DateInput";
import DateTimeInput from "@/components/reusableComponents/dateTimeInput";
import React, { useState } from "react";
import ContentCardEditTimeEvent from "./GeneralDataSection/ContentCardEditTimeEvent";
import ContentCardEditInscription from "./GeneralDataSection/ContentCardEditInscription";
import DropdownWeb from "@/components/reusableComponents/DropdownWeb";
import TextArea from "@/components/reusableComponents/textAreaInput";
import ContentCardEditDetails from "./GeneralDataSection/ContentCardEditDetails";
import ContentCardClimate from "./GeneralDataSection/ContentCardClimate";
import EmailInput from "@/components/reusableComponents/EmailInput";
import ContentCardEditContact from "./GeneralDataSection/ContentCardEditContact";
import { useEvento } from "@/customHooks/useEvento";
import FrameInfoContactDelete from "@/components/reusableComponents/FrameInfoContactDelete";
import { updateDataEvent } from "../../../peticiones/event";

const GeneralDataSection = ({ event }) => {
  const [isEditing, setIsEditing] = useState({
    cardTime: false,
    cardInscription: false,
    cardDetails: false,
    cardContact: false,
  });

  const {
    fechaInicio,
    setFechaInicio,
    setfechaFin,
    fechaFin,
    setHoraInicio,
    horaInicio,
    ubicacion,
    setUbicacion,
    fechaInicioInscripcion,
    fechaFinInscripcion,
    setFechaInicioInscripcion,
    setFechaFinInscripcion,
    estadoEvento,
    tipoEvento: tipoConcurso,
    setTipoEvento,
    descripcion: descripcionEvento,
    setDescripcion,
    email: emailContacto,
    setEmail,
    nombre: nombreEvento,
    clubes,
    id,
  } = useEvento(event);

  const [dataToSend, setDataToSend] = useState({});

  const sendData = () => {
    try {
      updateDataEvent({
        eventId: id,
        data: dataToSend,
        succes: () => console.log("200"),
        error: (e) => console.log(e),
        loading: (l) => console.log(l),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100%] flex justify-start items-center gap-4">
      <div className="flex self-start ">
        <CardEditInfoEvent
          title="Fecha y lugar"
          setIsEditing={() => {
            setIsEditing({ ...isEditing, cardTime: !isEditing.cardTime });
            setDataToSend({});
          }}
          isEditing={isEditing.cardTime}
        >
          {isEditing.cardTime ? (
            <div className="flex-col w-[299px] justify-start items-start gap-2 flex">
              <DateInput
                dateLabel="Desde"
                setValue={(value) => {
                  setFechaInicio(value);
                  setDataToSend((prev) => ({ ...prev, fechaInicio: value }));
                }}
                value={fechaInicio}
              />

              <DateInput
                dateLabel="Hasta"
                setValue={(value) => {
                  setfechaFin(value);
                  setDataToSend((prev) => ({ ...prev, fechaFin: value }));
                }}
                value={fechaFin}
              />

              <DateTimeInput
                label="Hora"
                setValue={(value) => {
                  setHoraInicio(value);
                  setDataToSend((prev) => ({ ...prev, horaInicio: value }));
                }}
                value={horaInicio}
              />

              <AddressInput
                setValue={(value) => {
                  setUbicacion(value);
                  setDataToSend((prev) => ({ ...prev, ubicacion: value }));
                }}
                placeholder={""}
                label="Ubicacion"
                hintEditable={true}
                height="130px"
                value={ubicacion}
              />
              <Button
                variant="secondary_alt"
                px="px-4"
                py="py-3"
                rounded="rounded"
                action={() => {
                  setIsEditing({ ...isEditing, cardTime: false });
                  sendData();
                }}
                customStyle="self-end"
              >
                <p className="text-indigo-950 text-sm font-bold font-lato leading-tight">
                  Guardar cambios
                </p>
              </Button>
            </div>
          ) : (
            <ContentCardEditTimeEvent
              fechaInicio={fechaInicio}
              fechaFin={fechaFin}
              horaInicio={horaInicio}
              ubicacion={ubicacion}
            />
          )}
        </CardEditInfoEvent>
      </div>
      <div className="flex flex-col self-start gap-5">
        <CardEditInfoEvent
          title="Inscripciones"
          setIsEditing={() => {
            setIsEditing({
              ...isEditing,
              cardInscription: !isEditing.cardInscription,
            });
            setDataToSend({});
          }}
          isEditing={isEditing.cardInscription}
        >
          {isEditing.cardInscription ? (
            <div className="flex flex-col gap-2">
              <DateInput
                dateLabel="Desde"
                value={fechaInicioInscripcion}
                setValue={(value) => {
                  setFechaInicioInscripcion(value);
                  setDataToSend((prev) => ({
                    ...prev,
                    fechaInicioInscripcion: value,
                  }));
                }}
              />
              <DateInput
                dateLabel="Hasta"
                value={fechaFinInscripcion}
                setValue={(value) => {
                  setFechaFinInscripcion(value);
                  setDataToSend((prev) => ({
                    ...prev,
                    fechaFinInscripcion: value,
                  }));
                }}
              />
              <Button
                variant="secondary_alt"
                px="px-4"
                py="py-3"
                rounded="rounded"
                action={() => {
                  setIsEditing({ ...isEditing, cardInscription: false });
                  sendData();
                }}
                customStyle="self-end"
              >
                <p className="text-indigo-950 text-sm font-bold font-lato leading-tight">
                  Guardar cambios
                </p>
              </Button>
            </div>
          ) : (
            <ContentCardEditInscription
              publicado={estadoEvento === "Publicado"}
              fechaInicioInscripcion={fechaInicioInscripcion}
              fechaFinInscripcion={fechaFinInscripcion}
            />
          )}
        </CardEditInfoEvent>
        <CardEditInfoEvent
          title="Detalles"
          setIsEditing={() => {
            setIsEditing({
              ...isEditing,
              cardDetails: !isEditing.cardDetails,
            });
            setDataToSend({});
          }}
          isEditing={isEditing.cardDetails}
        >
          {isEditing.cardDetails ? (
            <div className="w-[279px] flex flex-col gap-3">
              <DropdownWeb
                label="Tipo concurso"
                selectedOption={tipoConcurso}
                onSelect={(e) => {
                  setTipoEvento(e);
                  setDataToSend((prev) => ({ ...prev, tipoConcurso: e }));
                }}
                options={[
                  'C.I.C.O "B"',
                  'C.I.C.O "A"',
                  'C.I.C.O "C"',
                  "Entrenamiento",
                  "Federal",
                  "Nacional",
                  "Oficial",
                  "Regional",
                ]}
              />
              <TextArea
                label="Descripción"
                value={descripcionEvento}
                setValue={(value) => {
                  setDescripcion(value);
                  setDataToSend((prev) => ({
                    ...prev,
                    descripcionEvento: value,
                  }));
                }}
              />
              <Button
                variant="secondary_alt"
                px="px-4"
                py="py-3"
                rounded="rounded"
                action={() => {
                  setIsEditing({ ...isEditing, cardDetails: false });
                  sendData();
                }}
                customStyle="w-[150px] self-end"
              >
                <p className="text-indigo-950 text-sm font-bold font-lato leading-tight">
                  Guardar cambios
                </p>
              </Button>
            </div>
          ) : (
            <ContentCardEditDetails
              descripcion={descripcionEvento}
              tipoEvento={tipoConcurso}
            />
          )}
        </CardEditInfoEvent>
      </div>
      <div className="flex flex-col self-start gap-6 h-full">
        <CardEditInfoEvent
          title="Contacto"
          setIsEditing={() => {
            setIsEditing({
              ...isEditing,
              cardContact: !isEditing.cardContact,
            });
            setDataToSend({});
          }}
          isEditing={isEditing.cardContact}
        >
          {isEditing.cardContact ? (
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-3">
                <FrameInfoContactDelete
                  nombre={nombreEvento}
                  email={emailContacto}
                />
                <Button
                  variant="secondary-alt"
                  px="px-4"
                  py="py-3"
                  rounded="rounded"
                  customStyle="self-end border-black border-opacity-20"
                  action={() => {}}
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="plus">
                      <path
                        id="plus_2"
                        d="M16.4596 10.0882C16.4596 10.4332 16.1796 10.7132 15.8346 10.7132H10.6263V15.9215C10.6263 16.2666 10.3463 16.5465 10.0013 16.5465C9.6563 16.5465 9.3763 16.2666 9.3763 15.9215V10.7132H4.16797C3.82297 10.7132 3.54297 10.4332 3.54297 10.0882C3.54297 9.74322 3.82297 9.46322 4.16797 9.46322H9.3763V4.25488C9.3763 3.90988 9.6563 3.62988 10.0013 3.62988C10.3463 3.62988 10.6263 3.90988 10.6263 4.25488V9.46322H15.8346C16.1796 9.46322 16.4596 9.74322 16.4596 10.0882Z"
                        fill="#23254C"
                      />
                    </g>
                  </svg>
                  <p className="text-indigo-950 text-sm font-bold font-lato leading-tight">
                    Agregar contacto
                  </p>
                </Button>
              </div>
              <div className="flex flex-col gap-0 self-end">
                <EmailInput
                  label="Correo de contacto"
                  setValue={(value) => {
                    setEmail(value);
                    setDataToSend((prev) => ({
                      ...prev,
                      emailContacto: value,
                    }));
                  }}
                  value={emailContacto}
                />
                <Button
                  variant="secondary-alt"
                  px="px-4"
                  py="py-3"
                  rounded="rounded"
                  customStyle="self-end border-black border-opacity-20"
                  action={() => {
                    setIsEditing({ ...isEditing, cardContact: false });
                    sendData();
                  }}
                >
                  <p className="text-indigo-950 text-sm font-bold font-lato leading-tight">
                    Guardar cambios
                  </p>
                </Button>
              </div>
            </div>
          ) : (
            <ContentCardEditContact
              nombre={nombreEvento}
              email={emailContacto}
              clubes={clubes}
            />
          )}
        </CardEditInfoEvent>
        <CardEditInfoEvent title="Clima" isEditing={false} showButton={false}>
          <ContentCardClimate />
        </CardEditInfoEvent>
      </div>
    </div>
  );
};

export default GeneralDataSection;
