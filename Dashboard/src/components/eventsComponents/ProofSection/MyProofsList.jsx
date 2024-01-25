import MyProofs from "./MyProofs";
import Button from "@/components/reusableComponents/Button";

const MyProofsList = ({pruebas, setPruebas, sendData}) => {
    return(
        <div className="eventosContenedor h-full flex flex-col items-center w-full justify-between ">
            <div className="eventos flex flex-col w-full overflow-y-scroll min-h-[450px]">
              {pruebas?.map((prueba) => {
                return (
                  <MyProofs
                    key={prueba.id}
                    prueba={prueba}
                    setValue={setPruebas}
                    sendNewData={sendData}
                  />
                );
              })}
            </div>

            <div className="divisor border border-gray-300 w-full border-b-0"></div>

            <div className="navegarEventos flex flex-row justify-between w-full items-center py-2 px-5">
              <div className="flex flex-row gap-3">
                <Button
                  variant="secondary-alt"
                  px="px-3.5"
                  py="py-2"
                  rounded="rounded"
                  customStyle="border border-black border-opacity-20"
                >
                  <p className="labelAnterior font-lato text-sm font-normal leading-5 text-[#23254C]">
                    Anterior
                  </p>
                </Button>
                <Button
                  variant="secondary-alt"
                  px="px-3.5"
                  py="py-2"
                  rounded="rounded"
                  customStyle="border border-black border-opacity-20"
                >
                  <p className="labelAnterior font-lato text-sm font-normal leading-5 text-[#23254C]">
                    Siguiente
                  </p>
                </Button>
              </div>
              <p className="numeroPagina font-lato text-sm font-normal left-5 text-[#494949] ">
                Pagina 1 de 10
              </p>
            </div>
          </div>
    )
}

export default MyProofsList