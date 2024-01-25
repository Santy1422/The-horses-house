import Button from "@/components/reusableComponents/Button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { inscripcionAEvento, } from "../../../../peticiones/fotografo";
import { inscripcionAlEvento } from "../../../redux/reducer/reducerFotografo"
import { authSetLoading } from "@/redux/reducer/reducerAuth";
import { eventAllSetEvents, setBorradores, setFiltroEventosEnCurso, setFiltroEventosFuturos, setFiltroEventosPasados, setMyEvents, setPublicados } from "@/redux/reducer/reducerEventAll";
import { eventGetAll, getEventsforTime } from "../../../../peticiones/event";
import { useSelector } from "react-redux";

const Paso3InscripcionFotografo = ({ setPasos, setModalConfirmacion, dataInscripcion, objInscripcion, eventDetails }) => {
  const { push } = useRouter()
  const dispatch = useDispatch()

  const myEventsReduxState = useSelector((state) => state.reducerFotografo.misEventos);
  const myEventsReduxState2 = useSelector((state) => state.reducerEventAll.myEvents);

  const sendInscripcion = async () => {
    if (objInscripcion.length === 0) return

    const data = objInscripcion

    try {

      await getEventsforTime({
        succes: (events) => {
          setPasos(0);
          setModalConfirmacion(false)

          console.log(events, "response de la peticion getEventsforTime")
          console.log(eventDetails, "Esto es eventDetail")
          dispatch(inscripcionAlEvento(eventDetails));
          dispatch(inscripcionAlEvento(eventDetails));
          dispatch(setFiltroEventosEnCurso(events.enCurso));
          dispatch(setFiltroEventosFuturos(events.futuros));
          dispatch(setFiltroEventosPasados(events.pasados));
        },
        error: (e) => console.log("error", e),
        loading: (l) => dispatch(authSetLoading(l)),
      })

      inscripcionAEvento({
        data,
        success: (v) => {
          console.log("Revisar el objeto de inscripcion", data);
        },
        error: (e) => console.log("error", e),
        loading: (l) => dispatch(authSetLoading(l)),
      })

      await eventGetAll({
        success: (data) => {
          console.log(data, "Esto es la response de eventGetAll");
          dispatch(eventAllSetEvents(data.allEvents));
          dispatch(setMyEvents(eventDetails));
          dispatch(setBorradores(data.borrador));
          dispatch(setPublicados(data.publicados));
        },
        error: (e) => console.log("error", e),
        loading: (l) => dispatch(authSetLoading(l)),
      })

      push(`/dashboardPh`)

    } catch (error) {
      console.log("Error al inscribir al fotografo", error);
    }
  }



  return (
    <div className="bg-white w-[600px] h-[224px] rounded-xl p-6 relative">
      <section className="flex flex-row justify-between items-center">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="72" height="72" rx="36" fill="#F3F2F2" />
          <path
            d="M35.9974 50.3307C28.0934 50.3307 21.6641 43.9014 21.6641 35.9974C21.6641 28.0934 28.0934 21.6641 35.9974 21.6641C43.9014 21.6641 50.3307 28.0934 50.3307 35.9974C50.3307 43.9014 43.9014 50.3307 35.9974 50.3307ZM35.9974 23.6641C29.1961 23.6641 23.6641 29.1961 23.6641 35.9974C23.6641 42.7987 29.1961 48.3307 35.9974 48.3307C42.7987 48.3307 48.3307 42.7987 48.3307 35.9974C48.3307 29.1961 42.7987 23.6641 35.9974 23.6641ZM37.3574 40.6641C37.3574 39.9281 36.7614 39.3307 36.0241 39.3307H36.0107C35.2747 39.3307 34.6839 39.9281 34.6839 40.6641C34.6839 41.4001 35.2881 41.9974 36.0241 41.9974C36.7601 41.9974 37.3574 41.4001 37.3574 40.6641ZM36.9974 36.0921V29.9974C36.9974 29.4454 36.5494 28.9974 35.9974 28.9974C35.4454 28.9974 34.9974 29.4454 34.9974 29.9974V36.0921C34.9974 36.6441 35.4454 37.0921 35.9974 37.0921C36.5494 37.0921 36.9974 36.6441 36.9974 36.0921Z"
            fill="#25314C"
          />
        </svg>

        <p className="w-[392px] text-indigo-950 text-2xl font-bold font-Lato leading-loose">
          ¿Desea confirmar este servicio?
        </p>

        <div
          className="w-8 h-8 items-start cursor-pointer mb-4"
          onClick={() => {
            setPasos(0), setModalConfirmacion(false);
          }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5297 17.9964C18.8227 18.2894 18.8227 18.7644 18.5297 19.0574C18.3837 19.2034 18.1917 19.2774 17.9997 19.2774C17.8077 19.2774 17.6158 19.2044 17.4698 19.0574L11.9997 13.5874L6.52975 19.0574C6.38375 19.2034 6.19175 19.2774 5.99975 19.2774C5.80775 19.2774 5.61575 19.2044 5.46975 19.0574C5.17675 18.7644 5.17675 18.2894 5.46975 17.9964L10.9398 12.5264L5.46975 7.05642C5.17675 6.76342 5.17675 6.28838 5.46975 5.99538C5.76275 5.70238 6.23775 5.70238 6.53075 5.99538L12.0008 11.4654L17.4707 5.99538C17.7637 5.70238 18.2387 5.70238 18.5317 5.99538C18.8247 6.28838 18.8247 6.76342 18.5317 7.05642L13.0617 12.5264L18.5297 17.9964Z"
              fill="#25314C"
            />
          </svg>
        </div>
      </section>

      <section className="flex flex-row items-center gap-3 mt-5 ml-6">
        <div className="flex flex-row items-center">
          <div className="w-5 h-5 relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2473 5.17464C17.809 4.96464 17.3024 5.02207 16.9241 5.3254L14.7891 7.03377V6.66797C14.7891 4.65297 13.6791 3.54297 11.6641 3.54297H4.16406C2.14906 3.54297 1.03906 4.65297 1.03906 6.66797V13.3346C1.03906 15.3496 2.14906 16.4596 4.16406 16.4596H11.6641C13.6791 16.4596 14.7891 15.3496 14.7891 13.3346V12.9688L16.9249 14.678C17.1516 14.8597 17.4258 14.9529 17.7033 14.9529C17.8875 14.9529 18.0723 14.9121 18.2473 14.828C18.6831 14.618 18.9557 14.1854 18.9557 13.7013V6.30216C18.9557 5.81716 18.684 5.38548 18.2473 5.17464ZM13.5391 13.3346C13.5391 14.6488 12.9782 15.2096 11.6641 15.2096H4.16406C2.8499 15.2096 2.28906 14.6488 2.28906 13.3346V6.66797C2.28906 5.3538 2.8499 4.79297 4.16406 4.79297H11.6641C12.9782 4.79297 13.5391 5.3538 13.5391 6.66797V13.3346ZM17.7057 13.7013L14.7891 11.3679V8.63554L17.7057 6.30216V13.7013Z"
                fill="#BEBDBD"
              />
            </svg>
          </div>

          <span className="text-indigo-950 text-base font-normal font-Lato leading-normal ml-2">
            {dataInscripcion.videoAmount}{" "}
            {dataInscripcion.videoAmount == 1 ? "Video" : "Videos"}
          </span>
        </div>

        <div className="flex flex-row items-center">
          <div className="w-5 h-5 relative">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9544 15.4508C12.321 16.0842 11.4852 16.435 10.596 16.4525V17.5C10.596 17.845 10.316 18.125 9.97105 18.125C9.62605 18.125 9.34605 17.845 9.34605 17.5V16.4458C7.65688 16.38 6.25771 15.0992 6.06688 13.4033C6.02854 13.06 6.27521 12.7508 6.61771 12.7125C6.96354 12.6692 7.27021 12.9208 7.30854 13.2633C7.43354 14.3725 8.36687 15.2083 9.47937 15.2083H10.5294C11.1094 15.2083 11.6569 14.9808 12.0702 14.5658C12.4852 14.1517 12.7127 13.605 12.7127 13.0242C12.7127 12.0234 12.0327 11.1517 11.0594 10.905L8.64604 10.3058C7.90104 10.1166 7.23604 9.68254 6.77021 9.08254C6.30521 8.49337 6.04688 7.74418 6.04688 6.97418C6.04688 5.12668 7.51687 3.62585 9.34687 3.55418V2.5C9.34687 2.155 9.62687 1.875 9.97187 1.875C10.3169 1.875 10.5969 2.155 10.5969 2.5V3.54746C12.316 3.58163 13.7494 4.87751 13.9427 6.59668C13.981 6.94001 13.7344 7.24916 13.3919 7.2875C13.041 7.32833 12.7394 7.07915 12.701 6.73665C12.576 5.62749 11.6427 4.79167 10.5302 4.79167H9.48021C8.27604 4.79167 7.29688 5.77083 7.29688 6.975C7.29688 7.46416 7.45937 7.93915 7.75354 8.31248C8.05271 8.69831 8.47688 8.97414 8.95021 9.09414L11.3644 9.6933C12.896 10.0816 13.9635 11.4517 13.9635 13.025C13.9627 13.9392 13.6044 14.8008 12.9544 15.4508Z" fill="#BEBDBD" />
            </svg>

          </div>

          <span className="text-indigo-950 text-base font-normal font-Lato leading-normal">
            {dataInscripcion.price} ARS
          </span>
        </div>
      </section>

      <div className="w-full flex items-center justify-end">
        <section className="flex flex-row gap-3 h-11 absolute bottom-6 w-[40%]">
          <Button
            variant={"primary-alt"}
            descripcion={"Cancelar"}
            action={() => {
              setPasos(0);
              setModalConfirmacion(false);
            }}
            customStyle={"w-[120px] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-semibold font-Lato leading-normal"}
          ></Button>

          <Button
            variant={"primary"}
            descripcion={"Aceptar"}
            action={() => sendInscripcion()}

            customStyle={"w-[120px] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-normal font-Lato leading-normal"}
          ></Button>
        </section>
      </div>
    </div>
  );
};

export default Paso3InscripcionFotografo;
