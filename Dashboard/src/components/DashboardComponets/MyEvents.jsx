
import CardEvent from "../reusableComponents/CardEvent";

const MyEvents = ({myEvents}) => {
  return (
    <>
      <div className="main flex flex-col w-full px-3">
        <div className="tusEventosVerTodos flex sm:flex-col md:flex-row justify-between w-full ">
          <div className="tusEventos flex gap-x-2 items-center">
            <div className="label font-lato font-bold text-2xl text-[#23254C] mb-4">
              Tus eventos
            </div>
          </div>
          <div className="verTodos">
            <div className="label font-lato font-bold text-lg text-[#23254C] ">
              Ver todos
            </div>
          </div>
        </div>
        <div className="evntosmios flex flex-row gap-x-4">
          {myEvents &&
            myEvents.map((event, i) => {
                return (
                  <div key={i} className="card">
                    <CardEvent key={event.id} {...event} />
                  </div>
                );
              })
            }
        </div>

        <div>
          {myEvents.eventos &&
            myEvents.eventos.map((event, i) => {
                return (
                  <div key={i} className="card">
                    <CardEvent event={event} />
                  </div>
                );
              })
            }
        </div>
      </div>
    </>
  );
};
export default MyEvents;
