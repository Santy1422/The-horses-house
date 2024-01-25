import React, { useEffect, useState } from "react";
import Button from "@/components/reusableComponents/Button";
import axios from "axios";
import { useRouter } from "next/router";
import {
  closeCard,
  uploadArroWIcon,
  driveUploadIcon,
  checkIconLoadComplete,
  checkOk,
  errorIcon,
  IconFileModal,
  IconTrashModal,
  IconCheckModal,
} from "@/iconos/icons";
import { Spinner } from "@material-tailwind/react";

const ModalCargaFotos = ({ setModalOpen, eventId }) => {
  console.log(eventId);
  const { push } = useRouter();
  const [error, setError] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileUploadProgress, setFileUploadProgress] = useState({});


  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files); //por si el usuario quiere agregar mas archivos durante la carga
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...newFiles,
    ]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  useEffect(() => {
    if (selectedFiles.length > 0) cargaImagenes();
  }, [selectedFiles]);



  const cargaImagenes = async () => {
    if (selectedFiles.length > 0) {
      setError(false);
      const token = localStorage.getItem("token");

      const cargarUnArchivo = async (file) => {
        try {
          const formData = new FormData();
          formData.append("files", file);
          const fileSize = file.size;

          const response = await axios.post(
            `https://horse-riders-house-production-34bb.up.railway.app/fotografo/upload/${eventId}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
              onUploadProgress: (progressEvent) => {
                const progress = Math.round(
                  (progressEvent.loaded / progressEvent.total) * 100
                );
                //  setUploadProgress(progress);
                setFileUploadProgress((prevProgress) => ({
                  ...prevProgress,
                  [file.name]: progress,
                }));
              },
            }
          );
        } catch (error) {
          setError(true);
          console.error("Error al subir archivos:", error);
        }
      };

      for (const file of selectedFiles) {
        if (
          !uploadedFiles.find((uploadedFile) => uploadedFile.name === file.name)
        ) {
          // setear el estado de progreso para este archivo especifico
          setFileUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: 0,
          }));

          await cargarUnArchivo(file);

          // actualiza la lista de archivos cargados
          setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, file]);

          // limpia el estado de progreso para este archivo dp de cargar
          setFileUploadProgress((prevProgress) => {
            const { [file.name]: deletedProgress, ...rest } = prevProgress;
            return rest;
          });
        } else continue;
      }
      setSelectedFiles([]);
    }
  };

  const formatBytes = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  //para navegar a la pagina donde se muestran los multimedias del evento
  const udploadFiles = async () => {
    try {
      push({
        pathname: `/dashboardPh/eventosPh/${eventId}`,
        query: { eventId },
      });
    } catch (error) {
      console.error("Error al obtener imágenes del evento:", error);
      setError(true);
    }
  };

  const handleRetry = async (index) => {
    // Reiniciar la carga solo del archivo seleccionado
    const token = localStorage.getItem("token");
    setError(false);
    const file = selectedFiles[index];

    try {
      const formData = new FormData();
      formData.append("files", file);

      const response = await axios.post(
        `https://horse-riders-house-production-34bb.up.railway.app/fotografo/upload/${eventId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setFileUploadProgress((prevProgress) => ({
              ...prevProgress,
              [file.name]: progress,
            }));
          },
        }
      );

      // Actualizar la lista de archivos cargados
      setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, file]);
    } catch (error) {
      setError(true);
      console.error("Error al subir archivos:", error);
    }
  };

  //elimina el archivo YA CARGADO de la lista, pero no de la bdd..
  const handleDelete = (index) => {
    // Eliminar el archivo de la lista de archivos seleccionados
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
    // Eliminar el progreso del archivo
    // setFileUploadProgress((prevProgress) => {
    //   const { [selectedFiles[index].name]: deletedProgress, ...rest } = prevProgress;
    //   return rest;
    // });
  };

  const handleCancel = (index) => {
    const updatedFiles = [...selectedFiles];
    selectedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    // Eliminar el progreso del archivo
    setFileUploadProgress((prevProgress) => {
      const { [selectedFiles[index].name]: deletedProgress, ...rest } =
        prevProgress;
      return rest;
    });
  };

  console.log(
    "archivos cargados",
    uploadedFiles,
    "SELECTED FILES",
    selectedFiles
  );

  return (
    <div className="p-6 bg-white rounded-[10px] shadow flex-col justify-start items-center gap-5 inline-flex">
      <section className="flex flex-row justify-between w-full">
        <div className="flex flex-row items-center">
          <div className="h-[30]">{uploadArroWIcon}</div>
          <p className="ml-3 text-indigo-950 text-2xl font-bold font-Lato leading-loose">
            Agregar multimedia
          </p>
        </div>
        <div
          className="w-8 h-8 items-start cursor-pointer mb-4"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          {closeCard}
        </div>
      </section>
      <section>
        <p className="text-indigo-950 text-normal font-Lato leading-normal">
          Arrastrá tus{" "}
          <span className="text-indigo-950 text-sm font-bold font-Lato leading-tight">
            fotos y videos{" "}
          </span>
          para cargar los datos automáticamente, o haz click.
        </p>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleFileUploadClick} // Agregado para manejar la carga al hacer clic
          className="cursor-pointer border rounded-xl w-full mt-3 flex flex-col justify-center items-center gap-2 pb-2"
        >
          <div className="mt-5">{driveUploadIcon}</div>
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <p className="text-indigo-950 text-sm font-normal font-Lato leading-tight">
            Hacé <span className="font-semibold">click</span> para subir, o{" "}
            <span className="font-semibold">arrastrá y soltá</span>.
          </p>
          <p className=" text-zinc-500 text-xs font-normal font-Lato leading-[18px]">
            Fotos y videos.
          </p>
        </div>

        <div className="w-full min-h-[50px] max-h-[300px] overflow-y-scroll mt-4">
          {/* renderiza los archivos en carga */}
          {selectedFiles &&
            selectedFiles?.map((file, index) => {
              // console.log('file prog', fileUploadProgress[file.name])
              return (
                <div
                  key={index}
                  className={`card bg-white border rounded p-4 mt-4 mr-3 ${
                    error ? "border-red-500 bg-red-100" : ""
                  }`}
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                      <div className="rounded-full bg-indigo-50 p-2 mr-3 ">
                        {IconFileModal}
                      </div>
                      <p
                        className={`text-indigo-950 mr-10 ${
                          error ? "text-red-500" : ""
                        }`}
                      >
                        {file.name}
                      </p>
                    </div>

                    <div className="">
                      {error ? (
                        <button
                          className="cursor-pointer"
                          onClick={() => handleCancel(index)}
                        >
                          {IconTrashModal}
                        </button>
                      ) : (
                        <>
                          {fileUploadProgress[file.name] === 100 && (
                            <div className="cursor-pointer bg-black p-1 rounded-full">
                              {IconCheckModal}
                            </div>
                          )}
                          {fileUploadProgress[file.name] > 0 && <Spinner />}

                          {fileUploadProgress[file.name] === undefined && (
                            <button
                              className="cursor-pointer"
                              onClick={() => handleCancel(index)}
                            >
                              {IconTrashModal}
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {error ? (
                    <div className="flex items-center">
                      <p
                        className="text-red-500 ml-11 text-sm underline cursor-pointer"
                        onClick={() => handleRetry(index)}
                      >
                        Volver a intentar
                      </p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {fileUploadProgress[file.name] > 0 && !error && (
                    <>
                      <p className="text-gray-500 font-light text-sm ml-11">
                        {formatBytes(file.size)} -{" "}
                        {fileUploadProgress[file.name]}% cargando
                      </p>
                    </>
                  )}
                  {fileUploadProgress[file.name] === undefined && !error && (
                    <>
                      <p className="text-gray-500 font-light text-sm ml-11">
                        En espera...
                      </p>
                    </>
                  )}
                </div>
              );
            })}

          {/* renderiza los archivos ya cargados */}
          {uploadedFiles.length &&
            uploadedFiles.map((uploadedFile, index) => {
              return (
                <div
                  key={index}
                  className="card bg-white border rounded p-4 mt-4 mr-3"
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                      <div className="rounded-full bg-indigo-50 p-2 mr-3 ">
                        {IconFileModal}
                      </div>
                      <p
                        className={`text-indigo-950 mr-10 ${
                          error && "text-red-500"
                        }`}
                      >
                        {uploadedFile.name}
                      </p>
                    </div>

                    <button
                      className="cursor-pointer"
                      onClick={() => handleDelete(index)}
                    >
                      {IconTrashModal}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <div className="w-full flex justify-end">
        <section className="flex flex-row gap-3 h-11 bottom-0  w-[40%]">
          <Button
            variant={"primary-alt"}
            descripcion={"Cancelar"}
            action={() => {
              setModalOpen(false);
            }}
            customStyle={
              "w-[120px] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-semibold font-Lato leading-normal"
            }
          ></Button>
          <Button
            disabled={!uploadedFiles.length ? true : false}
            descripcion={"Siguiente"}
            customStyle={`w-[120px] px-4 py-2.5 rounded justify-center items-center gap-2 inline-flex text-sm font-normal font-Lato leading-normal ${
              !uploadedFiles.length
                ? "bg-gray-300 text-white border-none cursor-not-allowed"
                : "bg-indigo-950 text-white cursor-pointer"
            }`}
            action={udploadFiles}
          ></Button>
        </section>
      </div>
    </div>
  );
};

export default ModalCargaFotos;
