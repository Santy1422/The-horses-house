import SideBar from "@/components/DashboardComponets/SideBar";
import AutoridadesSection from "@/components/eventsComponents/AutoridadesSection";
import GeneralDataSection from "@/components/eventsComponents/GeneralDataSection";
import InscribedSection from "@/components/eventsComponents/InscribedSection";
import ProofSection from "@/components/eventsComponents/ProofSection";
import Button from "@/components/reusableComponents/Button";
import ModalWeb from "@/components/reusableComponents/ModalWeb";
import ToastCreatedEvent from "@/components/reusableComponents/ToastCreatedEvent";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEvent,
  eventGetAll,
  eventUpdateState,
} from "../../../peticiones/event";
import { useParams } from "next/navigation";
import {
  eventAllSetEvents,
  setEventsWithoutDeleted,
  setEventId,
} from "@/redux/reducer/reducerEventAll";
// import { eventByIdPeticion } from '../../../../../peticiones/event';
import { eventByIdPeticionInscripted } from "../../../peticiones/event";
import Modal from "./Modal";
import ManualInscripted from "../eventsComponents/InscribedSection/ManualInscripted";

const sectionOfPage = [
  "Datos generales",
  "Autoridades",
  "Pruebas y resultados",
  "Inscriptos",
  // "Fotos y videos",
];

const mapeoBotonSeccion = {
  "Datos generales": "Publicar evento",
  Autoridades: "Agregar autoridad",
  "Pruebas y resultados": "Agregar prueba",
  Inscriptos: "Agregar inscripto",
};

const SectionPage = ({ title, active, onClick }) => (
  <div
    className={`flex-col justify-center cursor-pointer items-center inline-flex ${
      active ? "border-b-2 border-indigo-950" : ""
    }`}
    onClick={onClick}
  >
    <div className="px-1 py-[9px] justify-center items-center pb-1 gap-2 inline-flex">
      <h4
        className={`text-${
          active ? "indigo-950" : "zinc-500"
        } text-sm font-normal font-lato leading-tight`}
      >
        {title}
      </h4>
    </div>
  </div>
);

const EventDetail = () => {
  // const { id } = useParams();
  const { back, push, query } = useRouter();
  const dispatch = useDispatch();
  const { id } = query;
  const [sectionPageInfo, setSectionPageInfo] = useState(sectionOfPage[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [eventDetails, setEventDetails] = useState(null);

  const eventID = useSelector((state) => state.reducerEventAll.eventID);

  console.log("idd", eventID);

  // traigo y filtro los eventos del state
  const allEventState = useSelector((state) => state.reducerEventAll);
  const events = useSelector((state) => state.reducerEventAll.eventAll);

  const eventInfo = events.filter((event) => event.id === id);
  console.log("antes", eventInfo[0]);

  useEffect(() => {
    eventByIdPeticionInscripted({
      succes: (v) => {
        dispatch(setEventId(v));
      },
      error: (e) => console.log("error", e),
      loading: (l) => console.log("loading", l),
      id,
    });
  }, []);

  // const handleDeleteEvent = async (eventId) => {
  //     try {
  //       const userConfirm = window.confirm('Se eliminará el evento, ¿deseas continuar?');

  //       if (userConfirm) {
  //         await deleteEvent({
  //           eventId,
  //           succes: (v) => dispatch(setEventsWithoutDeleted(v)),
  //           error: (e) => console.log(e),
  //           loading: (l) => console.log(l),
  //         });

  //         push('/dashboard');
  //       }
  //     } catch (error) {
  //       console.error('Error al eliminar el evento:', error);
  //     }
  //   };
  // const handleDeleteEvent= (id) => {
  //     let userConfirm = window.confirm('Se eliminará el evento, deseas continuar?')
  //     if(userConfirm){

  //         deleteEvent({
  //             succes: () => dispatch(setEventsWithoutDeleted()),
  //             error: (e) => console.log(e),
  //             loading: (l) => console.log(l),
  //         });
  //         push('/dashboard')
  //     } else return

  //   };

  let currentSection;
  switch (sectionPageInfo) {
    case sectionOfPage[0]:
      currentSection = (
        <GeneralDataSection
          publicado={eventInfo[0]?.estadoEvento === "publicado"}
          event={eventInfo[0]}
        />
      );
      break;
    case sectionOfPage[1]:
      currentSection = <AutoridadesSection event={eventInfo[0]} />;
      break;
    case sectionOfPage[2]:
      currentSection = <ProofSection event={eventID} />;
      break;
    case sectionOfPage[3]:
      currentSection = (
        <InscribedSection
          publicado={eventInfo[0]?.estadoEvento === "publicado"}
          event={eventInfo[0]}
          inscriptos={eventDetails}
        />
      );
      break;
    default:
      currentSection = null;
      break;
  }

  const handleAcceptPublicated = () => {
    try {
      setModalOpen(false);
      setShowToast(true);

      eventUpdateState({
        eventId: eventInfo[0].id,
        succes: (v) => console.log("registro existoso", v),
        error: (e) => console.log("error", e),
        loading: (l) => console.log("loading", l),
      });

      eventGetAll({
        succes: (v) => dispatch(eventAllSetEvents(v)),
        error: (e) => console.log(e),
        loading: (l) => console.log(l),
      });

      // const allEventStateNew = useSelector((state) => state.reducerEventAll);
      // const { eventAll: eventsNew } = allEventStateNew

      // const useEvents = useEvento(eventsNew);
      push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container  absolute flex flex-row bg-[#23254C]">
      <SideBar />
      <div className="w-full relative bg-gradient-to-b from-slate-50 to-white rounded-l-3xl pb-12">
        <div
          className="w-full min-w-[100%] h-[153px] pl-[75.5px] pt-[32px] rounded-tl-3xl"
          style={{
            background: 'url("/img/img-events-top.png")',
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            onClick={() => push("/dashboard")}
            className="p-3 justify-center items-center gap-2.5 inline-flex"
          >
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-left">
                <path
                  id="arrow-left_2"
                  d="M29.5011 16C29.5011 16.552 29.0531 17 28.5011 17H6.91584L14.5425 24.6267C14.9331 25.0173 14.9331 25.6507 14.5425 26.0414C14.3478 26.236 14.0918 26.3347 13.8358 26.3347C13.5798 26.3347 13.3237 26.2374 13.1291 26.0414L3.79573 16.708C3.70373 16.616 3.63057 16.5055 3.57991 16.3828C3.47857 16.1388 3.47857 15.8628 3.57991 15.6188C3.63057 15.4962 3.70373 15.3853 3.79573 15.2933L13.1291 5.95999C13.5197 5.56933 14.1531 5.56933 14.5438 5.95999C14.9344 6.35066 14.9344 6.98404 14.5438 7.37471L6.91715 15.0013H28.5011C29.0531 15 29.5011 15.448 29.5011 16Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="w-[100%] px-[75.5px] flex flex-col gap-5 pt-4">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="rounded-md justify-start items-center gap-3 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="award">
                    <path
                      id="award_2"
                      d="M13.7671 4.25525L13.5043 3.99432C13.4532 3.94262 13.4236 3.87373 13.4236 3.8007V3.43309C13.4236 2.11444 12.3464 1.04111 11.0229 1.04111H10.654C10.5815 1.04111 10.5106 1.01153 10.4596 0.961473L10.1978 0.699737C9.26304 -0.232425 7.74024 -0.234066 6.80221 0.699737L6.54042 0.960672C6.48936 1.01155 6.41847 1.04111 6.34599 1.04111H5.97704C4.65358 1.04111 3.57634 2.11444 3.57634 3.43309V3.8007C3.57634 3.87373 3.5476 3.94264 3.49571 3.99352L3.23292 4.25606C2.29736 5.18822 2.29736 6.7063 3.23292 7.63929L3.49571 7.90022C3.54677 7.95192 3.57634 8.02081 3.57634 8.09384V8.46145C3.57634 9.46665 4.20307 10.325 5.08593 10.6786L3.78806 15.2147C3.72382 15.4403 3.7938 15.6833 3.96922 15.8408C4.14299 15.9976 4.39253 16.0427 4.61242 15.9549L6.89208 15.0449C7.92977 14.633 9.07106 14.633 10.1071 15.0449L12.3884 15.9557C12.4633 15.9853 12.5416 16 12.6182 16C12.7689 16 12.9163 15.9458 13.0316 15.8416C13.207 15.6841 13.277 15.4421 13.2127 15.2156L11.9149 10.6794C12.7977 10.3258 13.4245 9.46745 13.4245 8.46226V8.09464C13.4245 8.02161 13.4532 7.9527 13.5051 7.90182L13.7679 7.64009C13.7679 7.64009 13.7679 7.64011 13.7679 7.63929C14.7026 6.7063 14.7026 5.18824 13.7671 4.25525ZM10.5651 13.901C9.23507 13.3726 7.76826 13.3717 6.43245 13.901L5.32057 14.3449L6.31966 10.8534H6.34439C6.41686 10.8534 6.48755 10.883 6.53861 10.9331L6.8006 11.1948C7.26838 11.6609 7.88276 11.8948 8.49879 11.8948C9.11316 11.8948 9.72837 11.6617 10.197 11.1948L10.4588 10.9339C10.5098 10.883 10.5807 10.8534 10.6532 10.8534H10.6779L11.6768 14.3449L10.5651 13.901ZM12.894 6.76864L12.6315 7.03037C12.3457 7.31429 12.1891 7.69259 12.1891 8.09384V8.46145C12.1891 9.1015 11.6661 9.62259 11.0237 9.62259H10.6548C10.257 9.62259 9.86758 9.78339 9.58674 10.064L9.32476 10.325C8.88415 10.7631 8.11664 10.7631 7.67603 10.325L7.41405 10.0632C7.13321 9.78341 6.7446 9.62259 6.34599 9.62259H5.97704C5.33467 9.62259 4.81168 9.1015 4.81168 8.46145V8.09384C4.81168 7.69177 4.65531 7.31431 4.36954 7.02957L4.10675 6.76864C3.65296 6.31568 3.65296 5.57804 4.10675 5.1259L4.36954 4.86417C4.65531 4.58025 4.81168 4.20195 4.81168 3.8007V3.43309C4.81168 2.79305 5.33467 2.27195 5.97704 2.27195H6.34599C6.74377 2.27195 7.13321 2.11115 7.41405 1.83052L7.67603 1.56959C8.11664 1.1314 8.88415 1.1314 9.32476 1.56959L9.58674 1.83132C9.86758 2.11113 10.2562 2.27195 10.6548 2.27195H11.0237C11.6661 2.27195 12.1891 2.79305 12.1891 3.43309V3.8007C12.1891 4.20278 12.3457 4.58023 12.6315 4.86497L12.894 5.1259C13.3478 5.57886 13.3478 6.31568 12.894 6.76864ZM8.49959 3.28043C7.02377 3.28043 5.82303 4.47682 5.82303 5.94727C5.82303 7.41772 7.02377 8.61411 8.49959 8.61411C9.97541 8.61411 11.1762 7.41772 11.1762 5.94727C11.1762 4.47682 9.97541 3.28043 8.49959 3.28043ZM8.49959 7.38326C7.70486 7.38326 7.05836 6.73912 7.05836 5.94727C7.05836 5.15542 7.70486 4.51128 8.49959 4.51128C9.29432 4.51128 9.94082 5.15542 9.94082 5.94727C9.94082 6.73912 9.29432 7.38326 8.49959 7.38326Z"
                      fill="#25314C"
                    />
                  </g>
                </svg>
              </div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="nav-arrow-right">
                  <path
                    id="Vector"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.14645 3.64645C5.95118 3.84171 5.95118 4.15829 6.14645 4.35355L9.79289 8L6.14645 11.6464C5.95118 11.8417 5.95118 12.1583 6.14645 12.3536C6.34171 12.5488 6.65829 12.5488 6.85355 12.3536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.85355 3.64645C6.65829 3.45118 6.34171 3.45118 6.14645 3.64645Z"
                    fill="#C3C3CB"
                  />
                </g>
              </svg>
              <div className="justify-center items-center gap-2 flex">
                <p className="text-neutral-700 text-xs font-normal font-lato leading-[18px]">
                  {eventInfo[0]?.tipoConcurso}{" "}
                  {eventInfo[0]?.clubesPatrocinadores[0]}
                </p>
              </div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="nav-arrow-right">
                  <path
                    id="Vector"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.14645 3.64645C5.95118 3.84171 5.95118 4.15829 6.14645 4.35355L9.79289 8L6.14645 11.6464C5.95118 11.8417 5.95118 12.1583 6.14645 12.3536C6.34171 12.5488 6.65829 12.5488 6.85355 12.3536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.85355 3.64645C6.65829 3.45118 6.34171 3.45118 6.14645 3.64645Z"
                    fill="#C3C3CB"
                  />
                </g>
              </svg>
              <div className="justify-center items-center gap-2 flex">
                <div className="text-neutral-500 text-xs font-normal font-latoleading-[18px]">
                  {sectionPageInfo}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-[52px] h-[52px] p-[4.20px] bg-white rounded-[120px] justify-center items-center flex">
                  <img src="/img/image-club-example.png" />
                </div>
                <div className="w-[492.73px] text-indigo-950 text-[28px] font-bold font-lato leading-9">
                  {eventInfo[0]?.tipoConcurso}{" "}
                  {eventInfo[0]?.clubesPatrocinadores[0]}
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start flex">
                  <div className="pl-2 pr-2.5 py-0.5 bg-white rounded-2xl justify-center items-center gap-1 flex">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="award">
                        <path
                          id="award_2"
                          d="M13.7671 4.25525L13.5043 3.99432C13.4532 3.94262 13.4236 3.87373 13.4236 3.8007V3.43309C13.4236 2.11444 12.3464 1.04111 11.0229 1.04111H10.654C10.5815 1.04111 10.5106 1.01153 10.4596 0.961473L10.1978 0.699737C9.26304 -0.232425 7.74024 -0.234066 6.80221 0.699737L6.54042 0.960672C6.48936 1.01155 6.41847 1.04111 6.34599 1.04111H5.97704C4.65358 1.04111 3.57634 2.11444 3.57634 3.43309V3.8007C3.57634 3.87373 3.5476 3.94264 3.49571 3.99352L3.23292 4.25606C2.29736 5.18822 2.29736 6.7063 3.23292 7.63929L3.49571 7.90022C3.54677 7.95192 3.57634 8.02081 3.57634 8.09384V8.46145C3.57634 9.46665 4.20307 10.325 5.08593 10.6786L3.78806 15.2147C3.72382 15.4403 3.7938 15.6833 3.96922 15.8408C4.14299 15.9976 4.39253 16.0427 4.61242 15.9549L6.89208 15.0449C7.92977 14.633 9.07106 14.633 10.1071 15.0449L12.3884 15.9557C12.4633 15.9853 12.5416 16 12.6182 16C12.7689 16 12.9163 15.9458 13.0316 15.8416C13.207 15.6841 13.277 15.4421 13.2127 15.2156L11.9149 10.6794C12.7977 10.3258 13.4245 9.46745 13.4245 8.46226V8.09464C13.4245 8.02161 13.4532 7.9527 13.5051 7.90182L13.7679 7.64009C13.7679 7.64009 13.7679 7.64011 13.7679 7.63929C14.7026 6.7063 14.7026 5.18824 13.7671 4.25525ZM10.5651 13.901C9.23507 13.3726 7.76826 13.3717 6.43245 13.901L5.32057 14.3449L6.31966 10.8534H6.34439C6.41686 10.8534 6.48755 10.883 6.53861 10.9331L6.8006 11.1948C7.26838 11.6609 7.88276 11.8948 8.49879 11.8948C9.11316 11.8948 9.72837 11.6617 10.197 11.1948L10.4588 10.9339C10.5098 10.883 10.5807 10.8534 10.6532 10.8534H10.6779L11.6768 14.3449L10.5651 13.901ZM12.894 6.76864L12.6315 7.03037C12.3457 7.31429 12.1891 7.69259 12.1891 8.09384V8.46145C12.1891 9.1015 11.6661 9.62259 11.0237 9.62259H10.6548C10.257 9.62259 9.86758 9.78339 9.58674 10.064L9.32476 10.325C8.88415 10.7631 8.11664 10.7631 7.67603 10.325L7.41405 10.0632C7.13321 9.78341 6.7446 9.62259 6.34599 9.62259H5.97704C5.33467 9.62259 4.81168 9.1015 4.81168 8.46145V8.09384C4.81168 7.69177 4.65531 7.31431 4.36954 7.02957L4.10675 6.76864C3.65296 6.31568 3.65296 5.57804 4.10675 5.1259L4.36954 4.86417C4.65531 4.58025 4.81168 4.20195 4.81168 3.8007V3.43309C4.81168 2.79305 5.33467 2.27195 5.97704 2.27195H6.34599C6.74377 2.27195 7.13321 2.11115 7.41405 1.83052L7.67603 1.56959C8.11664 1.1314 8.88415 1.1314 9.32476 1.56959L9.58674 1.83132C9.86758 2.11113 10.2562 2.27195 10.6548 2.27195H11.0237C11.6661 2.27195 12.1891 2.79305 12.1891 3.43309V3.8007C12.1891 4.20278 12.3457 4.58023 12.6315 4.86497L12.894 5.1259C13.3478 5.57886 13.3478 6.31568 12.894 6.76864ZM8.49959 3.28043C7.02377 3.28043 5.82303 4.47682 5.82303 5.94727C5.82303 7.41772 7.02377 8.61411 8.49959 8.61411C9.97541 8.61411 11.1762 7.41772 11.1762 5.94727C11.1762 4.47682 9.97541 3.28043 8.49959 3.28043ZM8.49959 7.38326C7.70486 7.38326 7.05836 6.73912 7.05836 5.94727C7.05836 5.15542 7.70486 4.51128 8.49959 4.51128C9.29432 4.51128 9.94082 5.15542 9.94082 5.94727C9.94082 6.73912 9.29432 7.38326 8.49959 7.38326Z"
                          fill="#25314C"
                        />
                      </g>
                    </svg>
                    <div className="text-center text-indigo-950 text-sm font-bold font-lato leading-tight">
                      Concurso
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start flex">
                  <div
                    className={`pl-2 pr-2.5 py-0.5 ${
                      eventInfo[0]?.estadoEvento === "publicado"
                        ? "bg-green-50"
                        : "bg-orange-50"
                    } rounded-2xl justify-center items-center gap-1.5 flex`}
                  >
                    <div className="w-2 h-2 relative">
                      <div
                        className={`w-1.5 h-1.5 left-[1px] top-[1px] absolute ${
                          eventInfo[0]?.estadoEvento === "publicado"
                            ? "bg-green-500"
                            : "bg-yellow-700"
                        } rounded-full`}
                      />
                    </div>
                    <div
                      className={`text-center ${
                        eventInfo[0]?.estadoEvento === "publicado"
                          ? "text-teal-800"
                          : "text-yellow-700"
                      } text-sm font-bold font-lato leading-tight`}
                    >
                      {eventInfo[0]?.estadoEvento === "publicado"
                        ? "Publicado"
                        : "Sin publicar"}
                    </div>
                  </div>
                </div>
                {eventInfo[0]?.estadoEvento === "publicado" ? (
                  <div className="justify-start items-start flex">
                    <div
                      className={`pl-2 pr-2.5 py-0.5 bg-orange-50 rounded-2xl justify-center items-center gap-1.5 flex`}
                    >
                      <div
                        className={`text-center text-yellow-700 text-sm font-bold font-lato leading-tight`}
                      >
                        Próximo
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="justify-start items-start gap-3 flex">
              {eventInfo[0]?.estadoEvento === "publicado" &&
              sectionPageInfo === sectionOfPage[0] ? (
                <div className="flex gap-2 w-full">
                  {/* //CANCEL button */}
                  <button
                    onClick={() => handleDeleteEvent(id)}
                    className="px-4 py-2.5 bg-white rounded border border-red-500 justify-center items-center gap-2 flex"
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="times">
                        <path
                          id="times_2"
                          d="M15.9415 14.558C16.1856 14.8021 16.1856 15.198 15.9415 15.4422C15.8198 15.5638 15.6598 15.6255 15.4998 15.6255C15.3398 15.6255 15.1798 15.5647 15.0581 15.4422L10.4998 10.8838L5.94146 15.4422C5.81979 15.5638 5.65979 15.6255 5.49979 15.6255C5.33979 15.6255 5.17979 15.5647 5.05813 15.4422C4.81396 15.198 4.81396 14.8021 5.05813 14.558L9.61646 9.99965L5.05813 5.44134C4.81396 5.19718 4.81396 4.80132 5.05813 4.55715C5.30229 4.31298 5.69813 4.31298 5.9423 4.55715L10.5006 9.11551L15.059 4.55715C15.3031 4.31298 15.699 4.31298 15.9431 4.55715C16.1873 4.80132 16.1873 5.19718 15.9431 5.44134L11.3848 9.99965L15.9415 14.558Z"
                          fill="#dc2626"
                        />
                      </g>
                    </svg>
                    <p className="text-red-600 text-base font-bold font-lato leading-normal">
                      Cancelar evento
                    </p>
                  </button>

                  <button className="px-4 py-2.5 bg-white rounded border border-amber-600 justify-center items-center gap-2 flex">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="clock">
                        <path
                          id="clock_2"
                          d="M10.5013 1.04199C5.5613 1.04199 1.54297 5.06033 1.54297 10.0003C1.54297 14.9403 5.5613 18.9587 10.5013 18.9587C15.4413 18.9587 19.4596 14.9403 19.4596 10.0003C19.4596 5.06033 15.4413 1.04199 10.5013 1.04199ZM10.5013 17.7087C6.25047 17.7087 2.79297 14.2512 2.79297 10.0003C2.79297 5.74949 6.25047 2.29199 10.5013 2.29199C14.7521 2.29199 18.2096 5.74949 18.2096 10.0003C18.2096 14.2512 14.7521 17.7087 10.5013 17.7087ZM13.443 12.0586C13.6872 12.3028 13.6872 12.6987 13.443 12.9428C13.3213 13.0645 13.1613 13.1261 13.0013 13.1261C12.8413 13.1261 12.6813 13.0653 12.5596 12.9428L10.0596 10.4428C9.94211 10.3253 9.8763 10.1661 9.8763 10.0011V5.83447C9.8763 5.48947 10.1563 5.20947 10.5013 5.20947C10.8463 5.20947 11.1263 5.48947 11.1263 5.83447V9.74194L13.443 12.0586Z"
                          fill="#b45309"
                        />
                      </g>
                    </svg>
                    <p className="text-amber-700 text-base font-bold font-lato leading-normal">
                      Posponer evento
                    </p>
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 w-full">
                  <Button
                    action={() => setModalOpen(true)}
                    variant="primary"
                    px="px-4"
                    py="py-2.5"
                    rounded="rounded"
                    descripcion={mapeoBotonSeccion[sectionPageInfo]}
                  >
                    {sectionPageInfo === sectionOfPage[0] ? (
                      <></>
                    ) : (
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="plus">
                          <path
                            id="plus_2"
                            d="M16.9596 10.0003C16.9596 10.3453 16.6796 10.6253 16.3346 10.6253H11.1263V15.8337C11.1263 16.1787 10.8463 16.4587 10.5013 16.4587C10.1563 16.4587 9.8763 16.1787 9.8763 15.8337V10.6253H4.66797C4.32297 10.6253 4.04297 10.3453 4.04297 10.0003C4.04297 9.65533 4.32297 9.37533 4.66797 9.37533H9.8763V4.16699C9.8763 3.82199 10.1563 3.54199 10.5013 3.54199C10.8463 3.54199 11.1263 3.82199 11.1263 4.16699V9.37533H16.3346C16.6796 9.37533 16.9596 9.65533 16.9596 10.0003Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    )}
                    <p className="text-white text-base font-bold font-lato leading-normal">
                      {mapeoBotonSeccion[sectionPageInfo]}
                    </p>
                  </Button>
                </div>
              )}
            </div>
          </div>
          {showToast &&
            (eventInfo[0]?.estadoEvento === "publicado" ? (
              <ToastCreatedEvent
                variant="publicated"
                close={() => setShowToast(false)}
              />
            ) : (
              <ToastCreatedEvent
                variant="created"
                close={() => setShowToast(false)}
              />
            ))}
          <div className=" h-10 relative">
            <div className="w-full h-px left-0 top-[39px] absolute bg-gray-200" />
            <div className="left-0 top-0 absolute justify-start items-start gap-4 inline-flex">
              {sectionOfPage.map((section, index) => (
                <SectionPage
                  key={index}
                  title={section}
                  active={section === sectionPageInfo}
                  onClick={() => setSectionPageInfo(section)}
                />
              ))}
            </div>
          </div>
          <div className="w-[100%] overflow-hidden">{currentSection}</div>
        </div>
      </div>
      {modalOpen && (
        <div className="w-[100vw] h-[100vh] fixed inset-0 flex items-center justify-center z-30">
          {sectionPageInfo === sectionOfPage[0] && (
            <ModalWeb
              title="¿Estás seguro de publicar el evento?"
              subtitle="Una vez publicado todos los usuarios podrán acceder a la información del evento."
              textAccept="Sí, publicar evento"
              textReject="No, seguir editando"
              onAccept={() => {
                handleAcceptPublicated();
              }}
              close={() => setModalOpen(false)}
            />
          )}
          {sectionPageInfo === sectionOfPage[3] && (
            <Modal isOpen={modalOpen} closeModal={setModalOpen}>
              <ManualInscripted
                closeModal={setModalOpen}
                pruebas={eventID.evento}
              />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default EventDetail;
