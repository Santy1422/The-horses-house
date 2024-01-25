import { useState, useEffect } from "react"

const VisorFotografias = ({ mediaPLayer, onClose, index, fecha, club }) => {
  const [indice, setIndice] = useState(index);

  const cerrarVisor = () => {
    setIndice(0);
    onClose(false);
  };

  const avanzar = () => {
    setIndice((prevIndice) => (prevIndice + 1) % mediaPLayer.length);
  };

  const retroceder = () => {
    setIndice((prevIndice) => (prevIndice - 1 + mediaPLayer.length) % mediaPLayer.length);
  };

  useEffect(() => {
    // Manejar eventos de teclado para avanzar y retroceder
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight') {
        avanzar();
      } else if (event.key === 'ArrowLeft') {
        retroceder();
      } else if (event.key === 'Escape') {
        cerrarVisor();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [avanzar, retroceder, cerrarVisor]);

  const clubIcon = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 27.9891C14.9033 27.9891 14.8066 27.9733 14.7136 27.9419C12.7935 27.3015 3.21875 23.6052 3.21875 13.6558V6.54119C3.21875 6.10981 3.52328 5.73631 3.94741 5.65293C9.84408 4.4736 11.9345 3.43697 14.582 2.12351C14.8369 1.99664 15.1764 1.97982 15.4301 2.1067C18.0389 3.42257 20.1003 4.46151 26.0538 5.65293C26.4779 5.73751 26.7824 6.10981 26.7824 6.54119V13.657C26.7824 23.6064 17.2077 27.3027 15.2876 27.9431C15.1934 27.9733 15.0967 27.9891 15 27.9891ZM5.03125 7.28076V13.6558C5.03125 21.951 12.7863 25.3284 15 26.1223C17.2137 25.3284 24.9688 21.9498 24.9688 13.6558V7.28076C19.6243 6.16184 17.3779 5.11401 15.018 3.92864C12.5083 5.16959 10.3298 6.17392 5.03125 7.28076ZM17.7695 20.1494C17.529 20.1494 17.2886 20.0914 17.0638 19.9742L15 18.8977L12.9362 19.9742C12.419 20.2448 11.804 20.1979 11.3364 19.8535C10.8675 19.5115 10.6378 18.9447 10.7369 18.3732L11.1284 16.1064L9.40792 14.4426C9.00071 14.0486 8.8557 13.4699 9.0309 12.931C9.20611 12.3908 9.66288 12.0054 10.226 11.9244L12.6111 11.5798L13.6406 9.5101C13.898 8.99172 14.42 8.66904 15.0012 8.66904C15.5812 8.66904 16.1032 8.99172 16.3617 9.5101L17.3913 11.5798L19.7779 11.9244C20.3397 12.0042 20.7975 12.3908 20.9715 12.931C21.1467 13.4699 21.0004 14.0486 20.5944 14.4426L18.874 16.1064L19.2666 18.3755C19.3645 18.9483 19.1337 19.5139 18.6648 19.8559C18.3966 20.0504 18.0849 20.1494 17.7695 20.1494ZM15 17.0427C15.2344 17.0427 15.4699 17.0985 15.6838 17.2109L17.3745 18.0929L17.0529 16.2379C16.9708 15.7558 17.1302 15.2653 17.483 14.9258L18.833 13.6207L16.955 13.3502C16.4753 13.2801 16.0597 12.9803 15.8434 12.5477L14.9976 10.8465L14.153 12.5454C13.9355 12.9792 13.5209 13.2801 13.0412 13.3502L11.1623 13.6207L12.5146 14.9281C12.865 15.2653 13.0257 15.7558 12.9424 16.2368L12.6208 18.0929L14.3112 17.2109C14.5299 17.0997 14.7656 17.0427 15 17.0427ZM11.2579 16.232C11.2579 16.232 11.2579 16.2332 11.2591 16.2332L11.2579 16.232ZM18.7448 16.2297C18.7436 16.2309 18.7448 16.2309 18.7448 16.2297V16.2297ZM19.5168 13.7186H19.5289H19.5168ZM14.7366 10.3172L14.7377 10.3184L14.7366 10.3172Z"
        fill="#25314C"
      />
    </svg>
  );

  return (
    <div className={`z-20 relative w-[800px] h-[650px] flex flex-col items-center justify-center border border-white rounded-[10px]`}>
      <button
        onClick={cerrarVisor}
        className="absolute z-50 right-5 top-5"
      >
        <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" fill="white" fill-opacity="0.7" />
          <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#DBDBDB" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1533 15.1514C14.3486 14.9561 14.6652 14.9561 14.8604 15.1514L18.002 18.2929L21.1435 15.1514C21.3388 14.9561 21.6554 14.9561 21.8506 15.1514C22.0459 15.3466 22.0459 15.6632 21.8506 15.8585L18.7091 19L21.8506 22.1415C22.0459 22.3368 22.0459 22.6534 21.8506 22.8486C21.6554 23.0439 21.3388 23.0439 21.1435 22.8486L18.002 19.7071L14.8604 22.8486C14.6652 23.0439 14.3486 23.0439 14.1533 22.8486C13.9581 22.6534 13.9581 22.3368 14.1533 22.1415L17.2949 19L14.1533 15.8585C13.9581 15.6632 13.9581 15.3466 14.1533 15.1514Z" fill="#23254C" />
        </svg>
      </button>

      {mediaPLayer[indice]?.type === "video" ? (
       
       <video
          src={mediaPLayer[indice].url}
          className="w-full h-[90%] rounded-t-[10px]"
          controls

        />
        
      ) : (
        // Renderizar la imagen
        <img
          src={mediaPLayer[indice]?.url}
          className="w-full h-[90%] rounded-t-[10px]"
          alt={`Imagen ${indice + 1}`}
        />
      )}
      <div className="justify-between z-50 bottom-0 flex flex-row items-center h-[95px] p-6 rounded-bl-[10px] rounded-br-[10px] gap-2 w-full">

        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-zinc-200 rounded-full p-2">
              {clubIcon}
            </div>
            <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">{club}</p>

          </div>
          <div className="flex flex-row items-center gap-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3.125H13.9583V2.5C13.9583 2.155 13.6783 1.875 13.3333 1.875C12.9883 1.875 12.7083 2.155 12.7083 2.5V3.125H7.29167V2.5C7.29167 2.155 7.01167 1.875 6.66667 1.875C6.32167 1.875 6.04167 2.155 6.04167 2.5V3.125H5C2.985 3.125 1.875 4.235 1.875 6.25V15C1.875 17.015 2.985 18.125 5 18.125H15C17.015 18.125 18.125 17.015 18.125 15V6.25C18.125 4.235 17.015 3.125 15 3.125ZM5 4.375H6.04167V5C6.04167 5.345 6.32167 5.625 6.66667 5.625C7.01167 5.625 7.29167 5.345 7.29167 5V4.375H12.7083V5C12.7083 5.345 12.9883 5.625 13.3333 5.625C13.6783 5.625 13.9583 5.345 13.9583 5V4.375H15C16.3142 4.375 16.875 4.93583 16.875 6.25V6.875H3.125V6.25C3.125 4.93583 3.68583 4.375 5 4.375ZM15 16.875H5C3.68583 16.875 3.125 16.3142 3.125 15V8.125H16.875V15C16.875 16.3142 16.3142 16.875 15 16.875ZM7.51668 10.8333C7.51668 11.2933 7.14418 11.6667 6.68335 11.6667C6.22335 11.6667 5.84574 11.2933 5.84574 10.8333C5.84574 10.3733 6.21501 10 6.67501 10H6.68335C7.14335 10 7.51668 10.3733 7.51668 10.8333ZM10.85 10.8333C10.85 11.2933 10.4775 11.6667 10.0167 11.6667C9.55668 11.6667 9.17908 11.2933 9.17908 10.8333C9.17908 10.3733 9.54834 10 10.0083 10H10.0167C10.4767 10 10.85 10.3733 10.85 10.8333ZM14.1833 10.8333C14.1833 11.2933 13.8108 11.6667 13.35 11.6667C12.89 11.6667 12.5124 11.2933 12.5124 10.8333C12.5124 10.3733 12.8817 10 13.3417 10H13.35C13.81 10 14.1833 10.3733 14.1833 10.8333ZM7.51668 14.1667C7.51668 14.6267 7.14418 15 6.68335 15C6.22335 15 5.84574 14.6267 5.84574 14.1667C5.84574 13.7067 6.21501 13.3333 6.67501 13.3333H6.68335C7.14335 13.3333 7.51668 13.7067 7.51668 14.1667ZM10.85 14.1667C10.85 14.6267 10.4775 15 10.0167 15C9.55668 15 9.17908 14.6267 9.17908 14.1667C9.17908 13.7067 9.54834 13.3333 10.0083 13.3333H10.0167C10.4767 13.3333 10.85 13.7067 10.85 14.1667ZM14.1833 14.1667C14.1833 14.6267 13.8108 15 13.35 15C12.89 15 12.5124 14.6267 12.5124 14.1667C12.5124 13.7067 12.8817 13.3333 13.3417 13.3333H13.35C13.81 13.3333 14.1833 13.7067 14.1833 14.1667Z" fill="#25314C" />
            </svg>


            <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">{fecha}</p>

          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="cursor-pointer p-2 border border-zinc-300 rounded">
            <svg onClick={retroceder} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7479 11.9998C21.7479 12.4138 21.4119 12.7498 20.9979 12.7498H4.80895L10.5289 18.4698C10.8219 18.7628 10.8219 19.2378 10.5289 19.5308C10.3829 19.6768 10.1909 19.7508 9.99889 19.7508C9.80689 19.7508 9.61487 19.6778 9.46887 19.5308L2.46887 12.5308C2.39987 12.4618 2.345 12.3789 2.307 12.2869C2.231 12.1039 2.231 11.8969 2.307 11.7139C2.345 11.6219 2.39987 11.5387 2.46887 11.4697L9.46887 4.46975C9.76187 4.17675 10.2369 4.17675 10.5299 4.46975C10.8229 4.76275 10.8229 5.23779 10.5299 5.53079L4.80993 11.2508H20.9979C21.4119 11.2498 21.7479 11.5858 21.7479 11.9998Z" fill="#25314C" />
            </svg>
          </div>



          <p className="text-indigo-950 text-base font-normal font-Lato leading-normal">{indice + 1} / {mediaPLayer.length}</p>
          <div className="cursor-pointer p-2 border border-zinc-300 rounded">
            <svg onClick={avanzar} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7061 12.7083L14.707 19.7073C14.512 19.9023 14.256 20.0003 14 20.0003C13.744 20.0003 13.488 19.9023 13.293 19.7073C12.902 19.3163 12.902 18.6842 13.293 18.2933L18.5859 13.0003H3C2.447 13.0003 2 12.5523 2 12.0003C2 11.4483 2.447 11.0003 3 11.0003H18.5859L13.293 5.70731C12.902 5.31631 12.902 4.68425 13.293 4.29325C13.684 3.90225 14.316 3.90225 14.707 4.29325L21.7061 11.2923C21.7991 11.3853 21.8721 11.4952 21.9231 11.6182C22.0241 11.8622 22.0241 12.1384 21.9231 12.3824C21.8721 12.5054 21.7991 12.6153 21.7061 12.7083Z" fill="#25314C" />
            </svg>
          </div>

        </div>

      </div>

    </div>
  );
};

export default VisorFotografias