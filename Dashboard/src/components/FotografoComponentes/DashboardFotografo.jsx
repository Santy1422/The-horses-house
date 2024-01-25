import { useEffect } from "react"
import SideBar from "../DashboardComponets/SideBar"
import VistaDashboardPh from "./fotosComponents/VistaDashboardPh"
import { eventGetAll, getEventsforTime,  } from "../../../peticiones/event"
import { getMyEvents } from "../../../peticiones/fotografo"
import { useDispatch } from "react-redux"
import { inscripcionAlEvento } from "@/redux/reducer/reducerFotografo"
import { eventAllSetEvents, setBorradores, setFiltroEventosEnCurso, setFiltroEventosFuturos, setFiltroEventosPasados, setMyEvent, setPublicados } from "@/redux/reducer/reducerEventAll"
import { authSetLoading } from "@/redux/reducer/reducerAuth";


const DashboardFotografo = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    eventGetAll({
      success: (v) => {
        dispatch(eventAllSetEvents(v.allEvents));
        dispatch(setBorradores(v.borrador));
        dispatch(setPublicados(v.publicados));
      },
      error: (e) => console.log("error", e),
      loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
    })

  }, [])

  useEffect(() => {
    getMyEvents({
      success: (v) => {

       dispatch(inscripcionAlEvento(v.eventosInscritos))
      },
      error: (e) => console.log("error", e),
      loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
    })

  }, [])


  useEffect(() => {
    getEventsforTime({
      succes: (v) => {

        dispatch(setFiltroEventosEnCurso(v.enCurso));
        dispatch(setFiltroEventosFuturos(v.futuros));
        dispatch(setFiltroEventosPasados(v.pasados));
      },
      error: (e) => console.log("error", e),
      loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
    })
  }, [])

  return (
    <div className="flex w-[100%]  bg-[#23254C]">

      <SideBar />
      <VistaDashboardPh />
    </div>
  )
}

export default DashboardFotografo