import SideBar from '@/components/DashboardComponets/SideBar'
import React, { useState } from 'react'
import { bell } from '../../../iconos/icons'
import TablaClientes from '../../../components/FotografoComponentes/clientesCompoents/TablaClientes'

const VistaClientes = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='flex'>
      <SideBar />
      {/* titulo y subtitulo */} 
        <div className='flex-1 bg-[#F9F8FD] w-[100%] flex-col px-[47.5px] py-[64px]'>
          <div className='flex w-[100%] items-center justify-between '>
            <h1 className='text-[#23254C] text-[28px] font-semibold'>Mis clientes</h1>
            <span className='border border-[#D1DADA] rounded flex items-center justify-center'>{bell}</span>
          </div>
          <p className='text-[#6D6E6D]'>Aquí podras ver todos los concursos en lo que has sido contratado, y tus clientes.</p>
          {/* TITULOS LISTA */}
          <div className='flex w-[100%] mt-[84px] bg-white items-center border-b-[1px]'>
            <p className='text-[#494949] text-[12px] leading-4 w-[336px] px-6 py-4 h-[42px]'>Clubes</p>
            <p className='text-[#494949] text-[12px] leading-4 w-[83.53px] px-6 py-4 h-[42px]'>Evento</p>
            <p className='text-[#494949] text-[12px] leading-4 w-[137px] px-6 py-4 h-[42px]'>Estado</p>
            <p className='text-[#494949] text-[12px] leading-4 w-[132px] px-6 py-4 h-[42px]'>Clientes</p>
            <p className='text-[#494949] text-[12px] leading-4 w-[363.47px] px-6 py-4 h-[42px]'>Fecha y hora</p>
          </div>


        <div className={`flex flex-row items-center w-[100%] py-[14px] bg-white`}>
          {/* componente */}
          <div className="flex items-center justify-start w-[336px] px-4">
            <div className="contenedorSvg flex justify-start items-center h-5 w-5" 
            onClick={() => { !isOpen ? setIsOpen(true) : setIsOpen(false)}}>
              {!isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M8.00007 3.33318C7.78674 3.33318 7.57338 3.41482 7.41088 3.57732C7.08505 3.90315 7.08505 4.42987 7.41088 4.75571L12.655 9.99985L7.41088 15.244C7.08505 15.5698 7.08505 16.0965 7.41088 16.4224C7.73671 16.7482 8.26343 16.7482 8.58926 16.4224L14.4226 10.589C14.7484 10.2632 14.7484 9.73649 14.4226 9.41065L8.58926 3.57732C8.42676 3.41482 8.2134 3.33318 8.00007 3.33318Z" fill="#23254C"/>
                </svg>
                :
                <svg  width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99978 8.74978C7.80778 8.74978 7.61575 8.67681 7.46975 8.52981L0.46975 1.52981C0.17675 1.23681 0.17675 0.761773 0.46975 0.468773C0.76275 0.175773 1.23779 0.175773 1.53079 0.468773L8.00076 6.93874L14.4707 0.468773C14.7637 0.175773 15.2388 0.175773 15.5318 0.468773C15.8248 0.761773 15.8248 1.23681 15.5318 1.52981L8.53176 8.52981C8.38376 8.67681 8.19178 8.74978 7.99978 8.74978Z"
                    fill="#23254C"/>
                </svg>
              }
            </div>
            <div className="w-[52px] h-[52px] flex items-center justify-center">
              <img src="/img/event_club_dashboard.png" alt="" />
            </div>
            <div className="flex flex-col">
              <div className="labelNombreClub w-[174.44px] text-neutral-700 text-sm font-normal font-lato leading-tight">
                {'evento.clubesPatrocinadores'}
              </div>
              <div className="emailClub w-[180.96px] text-zinc-500 text-sm font-normal font-lato leading-tight">
                {'evento.emailContacto'}
              </div>
            </div>
          </div>
          {/* EVENTO */}
          <div className=" flex justify-center items-center w-[83.53px]">
            {'evento.tipoDeConcurso' === "Concurso" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" >
                <path d="M20.1657 6.38288L19.7715 5.99148C19.695 5.91394 19.6506 5.81059 19.6506 5.70105V5.14963C19.6506 3.17166 18.0347 1.56166 16.0496 1.56166H15.4961C15.3874 1.56166 15.2811 1.51729 15.2045 1.44221L14.8118 1.04961C13.4097 -0.348638 11.1255 -0.351099 9.71845 1.04961L9.32577 1.44101C9.24918 1.51732 9.14284 1.56166 9.03413 1.56166H8.4807C6.49551 1.56166 4.87964 3.17166 4.87964 5.14963V5.70105C4.87964 5.81059 4.83653 5.91397 4.7587 5.99028L4.36452 6.38408C2.96118 7.78233 2.96118 10.0595 4.36452 11.4589L4.7587 11.8503C4.8353 11.9279 4.87964 12.0312 4.87964 12.1408V12.6922C4.87964 14.2 5.81975 15.4875 7.14403 16.018L5.19722 22.822C5.10087 23.1605 5.20584 23.5249 5.46896 23.7613C5.72962 23.9963 6.10393 24.0641 6.43377 23.9324L9.85326 22.5674C11.4098 21.9495 13.1217 21.9495 14.6758 22.5674L18.0977 23.9336C18.2101 23.9779 18.3275 24 18.4424 24C18.6685 24 18.8895 23.9188 19.0625 23.7625C19.3256 23.5261 19.4306 23.1631 19.3342 22.8234L17.3874 16.0192C18.7117 15.4887 19.6518 14.2012 19.6518 12.6934V12.142C19.6518 12.0324 19.6949 11.929 19.7728 11.8527L20.1669 11.4601C20.1669 11.4601 20.1669 11.4602 20.1669 11.4589C21.569 10.0595 21.5691 7.78236 20.1657 6.38288ZM15.3628 20.8515C13.3677 20.0588 11.1675 20.0576 9.16381 20.8515L7.49599 21.5174L8.99462 16.2802H9.03172C9.14043 16.2802 9.24647 16.3245 9.32306 16.3996L9.71604 16.7922C10.4177 17.4913 11.3393 17.8422 12.2633 17.8422C13.1849 17.8422 14.1077 17.4926 14.8106 16.7922L15.2033 16.4008C15.2799 16.3245 15.3862 16.2802 15.4949 16.2802H15.532L17.0303 21.5174L15.3628 20.8515ZM18.8562 10.153L18.4623 10.5456C18.0337 10.9714 17.7988 11.5389 17.7988 12.1408V12.6922C17.7988 13.6522 17.0143 14.4339 16.0508 14.4339H15.4973C14.9007 14.4339 14.3165 14.6751 13.8953 15.096L13.5023 15.4874C12.8414 16.1447 11.6901 16.1447 11.0292 15.4874L10.6362 15.0948C10.215 14.6751 9.63203 14.4339 9.03413 14.4339H8.4807C7.51714 14.4339 6.73265 13.6522 6.73265 12.6922V12.1408C6.73265 11.5376 6.4981 10.9715 6.06944 10.5444L5.67525 10.153C4.99458 9.47353 4.99458 8.36705 5.67525 7.68886L6.06944 7.29625C6.4981 6.87038 6.73265 6.30293 6.73265 5.70105V5.14963C6.73265 4.18957 7.51714 3.40793 8.4807 3.40793H9.03413C9.6308 3.40793 10.215 3.16673 10.6362 2.74578L11.0292 2.35438C11.6901 1.6971 12.8414 1.6971 13.5023 2.35438L13.8953 2.74698C14.3165 3.1667 14.8994 3.40793 15.4973 3.40793H16.0508C17.0143 3.40793 17.7988 4.18957 17.7988 5.14963V5.70105C17.7988 6.30416 18.0337 6.87035 18.4623 7.29745L18.8562 7.68886C19.5369 8.36828 19.5369 9.47353 18.8562 10.153ZM12.2645 4.92065C10.0508 4.92065 8.24968 6.71523 8.24968 8.92091C8.24968 11.1266 10.0508 12.9212 12.2645 12.9212C14.4782 12.9212 16.2794 11.1266 16.2794 8.92091C16.2794 6.71523 14.4782 4.92065 12.2645 4.92065ZM12.2645 11.0749C11.0724 11.0749 10.1027 10.1087 10.1027 8.92091C10.1027 7.73314 11.0724 6.76692 12.2645 6.76692C13.4566 6.76692 14.4264 7.73314 14.4264 8.92091C14.4264 10.1087 13.4566 11.0749 12.2645 11.0749Z"
                  fill="#23254C"/>
              </svg>
            ) : (
              <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M2.38 0.75H3.15C4.05 0.75 4.78 1.54 4.78 2.52V16.98C4.78 17.96 4.05 18.75 3.15 18.75H2.36C1.47 18.75 0.75 17.97 0.75 17V2.52C0.75 1.54 1.48 0.75 2.38 0.75Z" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M5.50977 5.30005H9.82977H14.1498" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M5.50977 8.36011H14.1498" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M8.06982 8.36005V5.30005" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M16.38 0.75H17.15C18.05 0.75 18.78 1.54 18.78 2.52V16.98C18.78 17.96 18.05 18.75 17.15 18.75H16.36C15.47 18.75 14.75 17.97 14.75 17V2.52C14.75 1.54 15.48 0.75 16.38 0.75Z" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M5.4502 11.04H9.7702H14.0902" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M5.4502 14.1001H14.0902" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M11.1802 14.1V11.04" stroke="#26324D" stroke-width="1.5" stroke-miterlimit="10" />
              </svg>
            )}
          </div>
          
          {/*ESTADO*/}
          <div className="estadoContenedor flex justify-start w-[137px]">
              <p className='text-[#1C694E] py-1 px-2.5 w-[89px] text-center bg-[#EFFBF4] font-semibold text-[12px]'>En curso</p>
          </div>

          {/*CLIENTES*/}
          <div className="flex justify-center items-center w-[132px]">
            <div className="contenedorImgenOrganizador flex justify-center">
              <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6" />
              <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6 relative right-2" />
              <img src="/img/faq-avatar.png" alt="" className="foto w-6 h-6 relative right-4" />
            </div>
          </div>

          {/* LUGAR */}
          <div className="flex justify-start w-[363.47px] items-center gap-3 px-6">
              <p className="text-zinc-500">
                Del 06/10 al 08/10, de 08:00 a 18:00 horas.
              </p>
          </div>
        </div>
            {isOpen && <TablaClientes />}
      </div>
    </div>
  )
}

export default VistaClientes