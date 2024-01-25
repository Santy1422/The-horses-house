import TextInput from "@/components/reusableComponents/TextInput"
import { useEffect, useState } from "react"
import Button from "@/components/reusableComponents/Button"

const Paso2InscripcionFotografo = ({setPasos, setModalConfirmacion, setDataInscripcion, dataInscripcion}) => {
    // const [price, setPrice] = useState(0)
    const [videosAmount, setVideosAmount] = useState(0)

    const handleData= (e) => {
        setDataInscripcion({
        ...dataInscripcion,
        [e.target.name]: [e.target.value]
    })  
    }

    useEffect(() => {
        setDataInscripcion({
            ...dataInscripcion,
            videoAmount : videosAmount
        })
    },[videosAmount])


    return(
        <div className="bg-white w-[474px] h-[422px] rounded-xl p-6 relative">
            <section className="flex flex-row justify-between mt-2">
            <p className="text-indigo-950 text-lg font-bold font-LatoRegular leading-relaxed">Ingrese precio</p>
            <div className="w-8 h-8 relative items-start cursor-pointer"
        onClick={() => {setPasos(0), setModalConfirmacion(false)}}>
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
           
            <section className="w-full flex flex-row h-[30%] items-center justify-items-center pl-36 mt-4">
                
                <span className=" text-indigo-950 text-2xl font-bold font-LatoRegular leading-[59px] mr-1">ARS</span>
        <input
          type="number"
          name="price"
          placeholder="0"
          value={dataInscripcion.price}
          onChange={(e) => handleData(e)}
          className="placeholder:text-indigo-950 outline-none border-none text-5xl font-semibold w-auto bg-transparent mb-5 text-indigo-950"
        />
        
      </section>

      <section className="flex flex-col mt-6">
        <p className="text-indigo-950 text-md font-bold font-Lato leading-relaxed mb-[-18px] ">Ingrese cantidad de multimedia (fotografía/video)</p>
        
        <TextInput placeholder={'Ingresar cantidad de videos'} setValue={setVideosAmount} value={videosAmount} />
      </section>

      <section className="flex flex-row gap-3 h-11 absolute bottom-4 w-[90%]">
        <Button
          variant={"primary-alt"}
          descripcion={"Cancelar"}
          action={() => {
            setPasos(0);
            setModalConfirmacion(false);
          }}
          customStyle={"w-[50%] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-semibold font-Lato leading-normal"}
        ></Button>

        <Button
        disabled={!dataInscripcion.price || !videosAmount ? true : false}
        variant={"primary"}
        descripcion={"Aceptar"}
        action={() => {
          setPasos(3);
        }}
        customStyle={`w-[50%] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-normal font-Lato leading-normal`}
        ></Button>
      </section>
           
           
        </div>
    )
}

export default Paso2InscripcionFotografo