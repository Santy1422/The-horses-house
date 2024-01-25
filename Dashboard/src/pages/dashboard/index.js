import Dashboard from "@/components/DashboardComponets/Dashboard"
import { eventAllSetEvents, setBorradores, setFiltroEventosEnCurso, setFiltroEventosFuturos, setFiltroEventosPasados, setFiltros, setMyEvent, setMyEventNormalDashboard, setMyEvents, setPublicados } from "@/redux/reducer/reducerEventAll";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventGetAll, getEventsforTime } from "../../../peticiones/event";
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import { getMyEvents } from "../../../peticiones/fotografo";
import DashboardFotografo from "@/components/FotografoComponentes/DashboardFotografo";


const DashboardPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.reducerAuth.usuarioAuth)
    
    useEffect(() => {
      // if(user?.rol?.profesion !== 'fotografo'){
        eventGetAll({
          success: (v) => {
            console.log(v)
            dispatch(eventAllSetEvents(v.allEvents));
            dispatch(setMyEventNormalDashboard(v.myEvents));
            dispatch(setBorradores(v.borrador));
            dispatch(setPublicados(v.publicados));
          },
          error: (e) => console.log("error", e),
          loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
        })
      // }
      }, [])

      useEffect(() => {
        getEventsforTime({
          succes: (v) => {
          //  console.log('eventsfortime', v)
            dispatch(setFiltroEventosEnCurso(v.enCurso));
            dispatch(setFiltroEventosFuturos(v.futuros));
            dispatch(setFiltroEventosPasados(v.pasados));
          },
          error: (e) => console.log("error", e),
          loading: (l) => dispatch(authSetLoading(l)), // Debes pasar el parámetro 'l' a authSetLoading
        })
      }, [])
    
    return(
        <>        
        {user?.rol?.profesion === 'fotografo' && <DashboardFotografo />} 
        {user?.rol?.profesion === 'videoMaker' && <DashboardFotografo />}
        {user?.rol?.profesion === 'AdminEventos' && <Dashboard />}
        {user?.rol?.profesion === 'ninguna' && <Dashboard />}
        </>
    )
}

export default DashboardPage