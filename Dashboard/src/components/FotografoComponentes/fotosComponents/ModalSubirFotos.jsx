import React from 'react'
import { useState } from 'react';

const ModalSubirFotosoVideos = ({setModalCargaMultimedia}) => {
  const [seleccionFotos, setSeleccionFotos] = useState(false);
  const [seleccionVideos, setSeleccionVideos] = useState(false);

  const handleFotosChange = () => {
    setSeleccionFotos(!seleccionFotos);
  };

  const handleVideosChange = () => {
    setSeleccionVideos(!seleccionVideos);
  };


  return (
    <div className='w-[600px] h-[428px] p-6 bg-white rounded-[10px] shadow'>
      <section className="flex flex-row justify-between items-center">
                <div className="p-5 bg-zinc-100 rounded-full">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9922 5H22.3255V4C22.3255 3.448 21.8775 3 21.3255 3C20.7735 3 20.3255 3.448 20.3255 4V5H11.6589V4C11.6589 3.448 11.2109 3 10.6589 3C10.1069 3 9.65885 3.448 9.65885 4V5H7.99219C4.76819 5 2.99219 6.776 2.99219 10V24C2.99219 27.224 4.76819 29 7.99219 29H23.9922C27.2162 29 28.9922 27.224 28.9922 24V10C28.9922 6.776 27.2162 5 23.9922 5ZM7.99219 7H9.65885V8C9.65885 8.552 10.1069 9 10.6589 9C11.2109 9 11.6589 8.552 11.6589 8V7H20.3255V8C20.3255 8.552 20.7735 9 21.3255 9C21.8775 9 22.3255 8.552 22.3255 8V7H23.9922C26.0949 7 26.9922 7.89733 26.9922 10V11H4.99219V10C4.99219 7.89733 5.88952 7 7.99219 7ZM23.9922 27H7.99219C5.88952 27 4.99219 26.1027 4.99219 24V13H26.9922V24C26.9922 26.1027 26.0949 27 23.9922 27ZM12.0189 17.3333C12.0189 18.0693 11.4229 18.6667 10.6855 18.6667C9.94955 18.6667 9.34538 18.0693 9.34538 17.3333C9.34538 16.5973 9.9362 16 10.6722 16H10.6855C11.4215 16 12.0189 16.5973 12.0189 17.3333ZM17.3522 17.3333C17.3522 18.0693 16.7562 18.6667 16.0189 18.6667C15.2829 18.6667 14.6787 18.0693 14.6787 17.3333C14.6787 16.5973 15.2695 16 16.0055 16H16.0189C16.7549 16 17.3522 16.5973 17.3522 17.3333ZM22.6855 17.3333C22.6855 18.0693 22.0895 18.6667 21.3522 18.6667C20.6162 18.6667 20.012 18.0693 20.012 17.3333C20.012 16.5973 20.6029 16 21.3389 16H21.3522C22.0882 16 22.6855 16.5973 22.6855 17.3333ZM12.0189 22.6667C12.0189 23.4027 11.4229 24 10.6855 24C9.94955 24 9.34538 23.4027 9.34538 22.6667C9.34538 21.9307 9.9362 21.3333 10.6722 21.3333H10.6855C11.4215 21.3333 12.0189 21.9307 12.0189 22.6667ZM17.3522 22.6667C17.3522 23.4027 16.7562 24 16.0189 24C15.2829 24 14.6787 23.4027 14.6787 22.6667C14.6787 21.9307 15.2695 21.3333 16.0055 21.3333H16.0189C16.7549 21.3333 17.3522 21.9307 17.3522 22.6667ZM22.6855 22.6667C22.6855 23.4027 22.0895 24 21.3522 24C20.6162 24 20.012 23.4027 20.012 22.6667C20.012 21.9307 20.6029 21.3333 21.3389 21.3333H21.3522C22.0882 21.3333 22.6855 21.9307 22.6855 22.6667Z" fill="#494949"/>
</svg>

</div>

        <p className="w-[392px] text-indigo-950 text-2xl font-bold font-Lato leading-loose">
          Agregar multimedia
        </p>

        <div
          className="w-8 h-8 items-start cursor-pointer mb-4"
          onClick={() => {
            setModalCargaMultimedia(false);
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

      <p className="text-indigo-950 text-base font-normal font-Lato leading-normal mt-5">Seleccioná el tipo de archivo que quieres agregar</p>
      <p className="text-neutral-500 text-sm font-normal font-Lato leading-tight">(podés seleccionar una o ambas opciones)</p>
     
     <fieldset className='flex flex-col items-center justify-between w-full mt-5'>
      <div 
      onClick={() => handleFotosChange()}
      className='border border-stone-300 h-[72px] rounded p-4 w-full flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-3'>
        <div className='bg-zinc-100 rounded-full p-2'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#F3F2F2"/>
<path d="M22.6025 12.1393C22.2519 11.9713 21.8466 12.0173 21.5439 12.2599L19.8359 13.6266V13.334C19.8359 11.722 18.9479 10.834 17.3359 10.834H11.3359C9.72394 10.834 8.83594 11.722 8.83594 13.334V18.6673C8.83594 20.2793 9.72394 21.1673 11.3359 21.1673H17.3359C18.9479 21.1673 19.8359 20.2793 19.8359 18.6673V18.3747L21.5446 19.742C21.7259 19.8874 21.9453 19.9619 22.1673 19.9619C22.3147 19.9619 22.4625 19.9293 22.6025 19.862C22.9512 19.694 23.1693 19.3479 23.1693 18.9606V13.0413C23.1693 12.6533 22.9519 12.308 22.6025 12.1393ZM18.8359 18.6673C18.8359 19.7187 18.3873 20.1673 17.3359 20.1673H11.3359C10.2846 20.1673 9.83594 19.7187 9.83594 18.6673V13.334C9.83594 12.2827 10.2846 11.834 11.3359 11.834H17.3359C18.3873 11.834 18.8359 12.2827 18.8359 13.334V18.6673ZM22.1693 18.9606L19.8359 17.0939V14.908L22.1693 13.0413V18.9606Z" fill="#25314C"/>
</svg>

        </div>
     <div className='flex flex-col'>
     <label className="text-indigo-950 text-sm font-normal font-lato leading-tight" for="fotos">Fotos</label>
     <span className='text-zinc-500 text-sm font-normal font-Lato leading-tight'>Sólo carga de fotos</span>
     </div> 
     <input type="checkbox" id='fotos' value='fotos' checked={seleccionFotos} />
     </div>
     
     

     </div>

     <div 
     onClick={() => handleVideosChange()}
     className='border border-stone-300 h-[72px] rounded p-4 w-full flex flex-row justify-between items-center mt-3.5'>
      <div className='flex flex-row items-center gap-3 w-[80%]'>
        <div className='bg-zinc-100 rounded-full p-2'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#F3F2F2"/>
<path d="M22.6025 12.1393C22.2519 11.9713 21.8466 12.0173 21.5439 12.2599L19.8359 13.6266V13.334C19.8359 11.722 18.9479 10.834 17.3359 10.834H11.3359C9.72394 10.834 8.83594 11.722 8.83594 13.334V18.6673C8.83594 20.2793 9.72394 21.1673 11.3359 21.1673H17.3359C18.9479 21.1673 19.8359 20.2793 19.8359 18.6673V18.3747L21.5446 19.742C21.7259 19.8874 21.9453 19.9619 22.1673 19.9619C22.3147 19.9619 22.4625 19.9293 22.6025 19.862C22.9512 19.694 23.1693 19.3479 23.1693 18.9606V13.0413C23.1693 12.6533 22.9519 12.308 22.6025 12.1393ZM18.8359 18.6673C18.8359 19.7187 18.3873 20.1673 17.3359 20.1673H11.3359C10.2846 20.1673 9.83594 19.7187 9.83594 18.6673V13.334C9.83594 12.2827 10.2846 11.834 11.3359 11.834H17.3359C18.3873 11.834 18.8359 12.2827 18.8359 13.334V18.6673ZM22.1693 18.9606L19.8359 17.0939V14.908L22.1693 13.0413V18.9606Z" fill="#25314C"/>
</svg>

        </div>
     <div className='flex flex-col'>
     
     </div> </div>

     </div>

     <label className="text-indigo-950 text-sm font-normal font-lato leading-tight" for="videos">Videos 
     <span className='text-zinc-500 text-sm font-normal font-Lato leading-tight'>Sólo carga de videos</span>
     <input  type="checkbox" id='videos' value="videos" checked={seleccionVideos} />
     </label>

      </fieldset>
    </div>
  )
}

export default ModalSubirFotosoVideos 