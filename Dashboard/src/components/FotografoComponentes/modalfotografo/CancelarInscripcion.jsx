import Button from "@/components/reusableComponents/Button";

const CancelarInscripcion = ({setModalCancelacion, evento}) => {
  // console.log('evento en canc', evento)

    return(
        <div className="w-[600px] h-[220px] bg-white font-lato text-indigo-950 rounded-xl p-6 relative">
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

        <p className="w-[392px] text-xl font-semibold font-Lato leading-[32px] ml-2">
          ¿Desea darse de baja del evento {evento}?
        </p>

        <div
          className="w-8 h-8 items-start cursor-pointer mb-4"
          onClick={() => {
            setModalCancelacion(false);
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

      <div className="w-full flex items-center justify-end">
      <section className="flex flex-row gap-3 h-11 absolute bottom-6 w-[91%]">
        <Button
          variant={"primary-alt"}
          descripcion={"Cancelar"}
          action={() => {
            setModalCancelacion(false);
          }}
          customStyle={"w-[50%] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-semibold font-Lato leading-normal"}
        ></Button>

        <Button
        variant={"primary"}
        descripcion={"Aceptar"}
        action={() => {}}
        
        customStyle={"w-[50%] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-normal font-Lato leading-normal"}
        ></Button>
      </section>
      </div>

        </div>
    )
}

export default CancelarInscripcion