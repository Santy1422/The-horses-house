import { useState } from "react";


const ImageUpload = ({ label }) => {
    const [dragging, setDragging] = useState(false);
    const [droppedImage, setDroppedImage] = useState(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setDragging(false);

        const file = e.dataTransfer.files[0]; // Get the dropped file

        const reader = new FileReader();
        reader.onload = () => {
            setDroppedImage(reader.result); // Set dropped image in state
        };
        reader.readAsDataURL(file);
    };
    return (
        <div className="main container flex flex-col ">
            <div className="titulo font-lato text-base font-normal leading-6 mb-1">{label}</div>
            <div className="subir flex flex-col border border-gray-300 rounded-md justify-center items-center py-4 px-6 "
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                {
                    droppedImage ?
                        <img src={droppedImage} alt="Dropped" className="dropped-image" />
                        :
                        <>
                            <div className="icon h-10 w-10 flex justify-center items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M18.5743 10.8407C18.5743 10.8382 18.5759 10.8357 18.5759 10.8332C18.5759 10.8257 18.5719 10.8198 18.5719 10.8123C18.5619 10.7532 18.5502 10.694 18.5361 10.6348C18.5294 10.6148 18.5261 10.5948 18.5177 10.5757C18.4777 10.4198 18.4377 10.2648 18.3735 10.1148L16.7243 6.26817C16.3068 5.294 15.9126 4.37399 13.8518 4.37399C13.5068 4.37399 13.2268 4.65399 13.2268 4.99899C13.2268 5.34399 13.5068 5.62399 13.8518 5.62399C15.0885 5.62399 15.2011 5.88734 15.5752 6.76067L17.0527 10.2073H14.7043C13.6626 10.2073 12.6969 10.7948 12.1194 11.7798C11.7853 12.3515 11.1643 12.7073 10.5002 12.7073C9.836 12.7073 9.21507 12.3515 8.8809 11.779C8.30423 10.7948 7.33773 10.2073 6.29606 10.2073H3.94763L5.42509 6.76067C5.79926 5.88734 5.91185 5.62399 7.14852 5.62399C7.49352 5.62399 7.77352 5.34399 7.77352 4.99899C7.77352 4.65399 7.49352 4.37399 7.14852 4.37399C5.08685 4.37399 4.6935 5.294 4.276 6.26817L2.62683 10.114C2.56266 10.264 2.52177 10.4198 2.48177 10.5765C2.47427 10.5932 2.47175 10.6115 2.46509 10.629C2.45092 10.6898 2.43849 10.7507 2.42765 10.8123C2.42765 10.819 2.42358 10.8248 2.42358 10.8315C2.42358 10.834 2.4244 10.8357 2.4244 10.8382C2.3969 11.0048 2.37354 11.1732 2.37354 11.3448V14.9998C2.37354 17.0148 3.48354 18.1248 5.49854 18.1248H15.4985C17.5135 18.1248 18.6235 17.0148 18.6235 14.9998V11.3465C18.6252 11.1748 18.6018 11.0073 18.5743 10.8407ZM15.5002 16.8748H5.50016C4.186 16.8748 3.62516 16.314 3.62516 14.9998V11.4582H6.29606C6.88939 11.4582 7.4518 11.8148 7.8018 12.4115C8.3593 13.3657 9.3935 13.9582 10.5002 13.9582C11.6068 13.9582 12.641 13.3657 13.1985 12.4123C13.5485 11.8148 14.1109 11.4582 14.7043 11.4582H17.3752V14.9998C17.3752 16.314 16.8143 16.8748 15.5002 16.8748ZM8.3918 3.77483C8.14764 3.53066 8.14764 3.13483 8.3918 2.89066L10.0585 1.22399C10.116 1.16649 10.1853 1.12067 10.2619 1.089C10.4144 1.02567 10.5869 1.02567 10.7394 1.089C10.8161 1.12067 10.8852 1.16649 10.9427 1.22399L12.6093 2.89066C12.8535 3.13483 12.8535 3.53066 12.6093 3.77483C12.4877 3.8965 12.3276 3.95816 12.1676 3.95816C12.0076 3.95816 11.8476 3.89733 11.726 3.77483L11.126 3.17483V8.33317C11.126 8.67817 10.846 8.95817 10.501 8.95817C10.156 8.95817 9.87598 8.67817 9.87598 8.33317V3.17567L9.276 3.77567C9.031 4.019 8.63597 4.019 8.3918 3.77483Z" fill="#231D43" />
                                </svg>
                            </div>
                            <div className="descripcion font-lato text-sm font-normal leading-5 text-[#23254C]">Hacé click o arrástra y soltá para subir imagen</div>
                            <div className="tipos font-lato text-xs font-normal leading-4 text-[#80807F]">SVG, PNG, JPG or GIF (max. 800x400px)</div>
                        </>
                }

            </div>
        </div>
    )
}

export default ImageUpload