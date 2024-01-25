import { plusIcon, bell2, bell } from "@/iconos/icons"

const Header = ({ usuarioAuth, openModal }) => {
  return (
    <>
      <div className="flex-col lg:flex-row self-stretch justify-start items-start gap-4 inline-flex w-full">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex lg:w-1/2">
          <div className="self-stretch text-[#23254C] text-[28px] font-bold font-lato leading-9">
            ¡Bienvenido de vuelta, {usuarioAuth.user?.firstName ? usuarioAuth.user.firstName : usuarioAuth.firstName}!
          </div>
          <div className="self-stretch text-gray-500 text-base font-normal font-lato leading-normal">
            Subí concursos, pasadas y todos los eventos que estén relacionados con tus eventos.
          </div>
        </div>
        <div className="h-10 justify-start items-center gap-2 flex lg:w-1/2">
          <div
            className="grow shrink basis-0 rounded justify-start items-start flex hover:cursor-pointer"
            onClick={openModal}
          >
            <div className="px-3.5 py-2 bg-indigo-950 h-11 w-[100%] rounded justify-center items-center gap-2.5 flex">
              <div className="w-5 h-5 relative">{plusIcon}</div>
              <div className="text-white text-md font-regular font-lato leading-normal">Crear evento</div>
            </div>
          </div>
          {/* 
          <div className="rounded-lg justify-start items-start flex hover:cursor-pointer">
            <div className="px-4 py-2.5 w-11 h-11 rounded shadow border border-gray-300 justify-center items-center gap-2 flex">
              <div className="w-6 h-6 relative">{bell}</div>
            </div>
          </div> 
        */}
        </div>
      </div>
    </>
  )
}

export default Header