import { useEffect, useState } from "react";
import TextInputWithIcon from "../../reusableComponents/TextInputWithIcon";
import DropdownWeb from "../../reusableComponents/DropdownWeb";
import Button from "../../reusableComponents/Button";
import axios from "axios";
import { searchHorseByName} from "../../../../peticiones/event";
import Spinner from "@/components/reusableComponents/Spinner";
import Search from "@/components/reusableComponents/Search";
import clubesFederados from "../../../../clubesFederados";


const options = [
  "Primera",
  "Segunda",
  "Tercera",
  "Amateur",
  "Iniciados",
  "Ponys",
  "Escuela mayor",
  "Escuela menor",
  "Children",
  "CN1", "CN2", "CN3"
];

const ManualInscripted = ({ closeModal, pruebas }) => {
  // Jinete: req.body.jinete,
  // estadoPago: "pendiente",
  // clubRepresenta: req.body.club,
  // pruebaId: req.body.pruebaId,
  // nombreDelCaballo: req.body.caballoname,
  // jineteLastName: req.body.jineteLastName || "No proporciono apellido",
  // definicion: req.body.definicion,
  // categoria: req.body.categoria,
  // altura: req.body.altura

  //buscar nombre del caballo
  const [searchedHorseName, setSearchedHorseName] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [horseExists, setHorseExists] = useState(false)
  const [horseNotFound, setHorseNotFound] = useState(false)
  let searchTimer = null;
  const [agregarManual, setAgregarManual] = useState(false)


  const [apellido, setApellido] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [caballo, setCaballo] = useState(null);

  const [categoria, setCategoria] = useState("Seleccionar categoría");
  const [prueba, setPrueba] = useState("Seleccionar prueba");
  const [altura, setAltura] = useState("Seleccionar altura");
  const [pruebaId, setPruebaId] = useState(null);
  const [definicion, setDefinicion] = useState(null);
  const [club, setClub] = useState(null);
  const [inscripto, setInscripto] = useState({
    Jinete: null,
    estadoPago: "pendiente",
    clubRepresenta: null,
    pruebaId: null,
    nombreDelCaballo: null,
    jineteLastName: null,
    definicion: null,
    categoria: null,
    altura: null,
  });
  const [inscriptos, setInscriptos] = useState([]);

  useEffect(() => {
    setInscripto((prevState) => {
      const pruebaEncontrada = pruebas.categorias.find(
        (prue) => prue.nombre + " -- Altura " + prue.altura === prueba
      );

      return {
        ...prevState,
        Jinete: nombre,
        pruebaId: pruebaEncontrada ? pruebaEncontrada.id : null,
        nombreDelCaballo: caballo,
        jineteLastName: apellido,
        definicion: pruebaEncontrada ? pruebaEncontrada.definicion : null,
        categoria: categoria,
        altura: pruebaEncontrada ? pruebaEncontrada.altura : null,
        clubRepresenta: club,
      };
    });
  }, [nombre, apellido, categoria, caballo, prueba]);

   console.log('inscripto', inscripto)

  

// Search useEffect

useEffect(() => {
  if (searchedHorseName.length >= 2) {
      clearTimeout(searchTimer);
      setLoading(true);

      searchTimer = setTimeout(() => {
          searchHorseByName({
              horsesName: searchedHorseName,
              succes: ((s) => {
                  setResults(s)
                  setLoading(false);
                  setHorseNotFound(false)
              }),
              loading: (l) => setLoading(l),
              error: (e) => {
                  setResults([])
                  setHorseNotFound(true)
              }
          })
      }, 1000)
  } else {
      setLoading(false);
      setResults([])
  }

  return () => {
      clearTimeout(searchTimer);
  }
}, [searchedHorseName])

// Search function 
const handleSearch = async (e) => {
  setCaballo('')
  const searchTerms = e.target.value
  setSearchedHorseName(searchTerms)
}


// Select horse function
const handleSelectHorse = (name) => {
          setCaballo(name)        
          setHorseExists(true)
          setResults([])
          setSearchedHorseName('')
}
    
      
  
  const handleAgregarinscripto = () => {
    setInscriptos([...inscriptos, inscripto]);
    setNombre('');
    setApellido('')
    setCaballo('')
    setCategoria("Seleccionar categoría")
    setPrueba("Seleccionar prueba")
    setAltura("Seleccionar altura")
    setClub('')
    setHorseNotFound(false)
  };

  const handleQuitarInscripto = (e) => {
    setInscriptos(inscriptos.filter((_, i) => i !== e));
  };

  const handleGuardar = async () => {
    try {
      const token = await localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const respuestas = await Promise.all(
        inscriptos.map(async (inscripto) => {
          try {
            const response = await axios.post(
              "/event/inscribir",
              inscripto,
              config
            );

            if (response.status !== 200) {
              throw new Error(`Error en la petición: ${response.status}`);
            }

            return response.data;
          } catch (error) {
            console.error("Error en la petición del inscripto:", error.message);
            throw error;
          }
        })
      );

      console.log("Respuestas exitosas:", respuestas);

      closeModal(false);
    } catch (error) {
      console.error("Error en alguna de las peticiones:", error);
    }
  };

  return (
    <div className="main container">
      <div className="body p-6 flex flex-col w-[950px] border rounded-[10px] border-[#D1DADA]  ">
        <div className="titulo font-lato text-xl leading-[30px] font-bold text-[#23254C] mb-[28px] ">
          Agregar binomio
        </div>

        <div className="datos flex flex-row w-full gap-x-5">
          <div className="inputs flex flex-col w-1/2">
            <div className="inputNombre mb-5">
              <TextInputWithIcon
                label={"Nombre jinete"}
                placeholder={"Nombre jinete"}
                value={nombre}
                setValue={setNombre}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0088 8.95833C8.0555 8.95833 6.46716 7.36917 6.46716 5.41667C6.46716 3.46417 8.0555 1.875 10.0088 1.875C11.9622 1.875 13.5505 3.46417 13.5505 5.41667C13.5505 7.36917 11.9622 8.95833 10.0088 8.95833ZM10.0088 3.125C8.74466 3.125 7.71716 4.1525 7.71716 5.41667C7.71716 6.68083 8.74466 7.70833 10.0088 7.70833C11.273 7.70833 12.3005 6.68083 12.3005 5.41667C12.3005 4.1525 11.2722 3.125 10.0088 3.125ZM16.4596 17.5V15.0159C16.4596 12.7984 15.2046 10.2083 11.668 10.2083H8.33464C4.79797 10.2083 3.54297 12.7975 3.54297 15.0159V17.5C3.54297 17.845 3.82297 18.125 4.16797 18.125C4.51297 18.125 4.79297 17.845 4.79297 17.5V15.0159C4.79297 14.1817 5.0488 11.4583 8.33464 11.4583H11.668C14.9538 11.4583 15.2096 14.1809 15.2096 15.0159V17.5C15.2096 17.845 15.4896 18.125 15.8346 18.125C16.1796 18.125 16.4596 17.845 16.4596 17.5Z"
                      fill="#6D6E6D"
                    />
                  </svg>
                }
              />
            </div>
            <div className="inputApellido mb-5">
              <TextInputWithIcon
                label={"Apellido jinete"}
                placeholder={"Apellido jinete"}
                value={apellido}
                setValue={setApellido}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0088 8.95833C8.0555 8.95833 6.46716 7.36917 6.46716 5.41667C6.46716 3.46417 8.0555 1.875 10.0088 1.875C11.9622 1.875 13.5505 3.46417 13.5505 5.41667C13.5505 7.36917 11.9622 8.95833 10.0088 8.95833ZM10.0088 3.125C8.74466 3.125 7.71716 4.1525 7.71716 5.41667C7.71716 6.68083 8.74466 7.70833 10.0088 7.70833C11.273 7.70833 12.3005 6.68083 12.3005 5.41667C12.3005 4.1525 11.2722 3.125 10.0088 3.125ZM16.4596 17.5V15.0159C16.4596 12.7984 15.2046 10.2083 11.668 10.2083H8.33464C4.79797 10.2083 3.54297 12.7975 3.54297 15.0159V17.5C3.54297 17.845 3.82297 18.125 4.16797 18.125C4.51297 18.125 4.79297 17.845 4.79297 17.5V15.0159C4.79297 14.1817 5.0488 11.4583 8.33464 11.4583H11.668C14.9538 11.4583 15.2096 14.1809 15.2096 15.0159V17.5C15.2096 17.845 15.4896 18.125 15.8346 18.125C16.1796 18.125 16.4596 17.845 16.4596 17.5Z"
                      fill="#6D6E6D"
                    />
                  </svg>
                }
              />
            </div>


            <div className="inputCaballo mb-5">
            <label htmlFor="caballo" className="block font-lato text-base font-normal text-[#23254C]">Nombre caballo</label>
            <div className="flex flex-col">
            {horseNotFound && agregarManual ? 
            <input 
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:none "
            value={caballo}
            onChange={(e) => setCaballo(e.target.value)}
            ref={(input) => { if (input) input.focus(); }}
            />
          :
          <input 
            type="text"
            id="caballo"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:none "
            onChange={(e) => handleSearch(e)}
            value={caballo ? caballo : searchedHorseName}
          />
           
          
          }
  {horseNotFound && <p className="text-indigo-950 text-sm font-lato font-normal">{!agregarManual ? "Caballo no encontrado." : null} <span className="text-indigo-950 text-sm font-lato font-semibold cursor-pointer" onClick={!agregarManual ? () => setAgregarManual(true) : () => {setAgregarManual(false); setHorseNotFound(false)}}>{agregarManual ? "Deshacer" : "Haz click para ingresarlo manualmente."}</span></p>}

{!results.length && loading && (
  <div
  id="resultadoBusqueda"
  className="relative z-50 clubes flex flex-col items-center px-[14px] py-4 border border-gray-300 rounded mt-1 overflow-y-scroll max-h-[150px]"
>
  <Spinner />
  </div>
) }
      {results.length > 0 && (
        <div
          id="resultadoBusqueda"
          className="relative z-50 clubes flex flex-col px-[14px] border border-gray-300 rounded mt-1 overflow-y-scroll max-h-[150px]"
        >
          
          {results.map((caballo) => (
            <option key={caballo._id} value={caballo.name}
            onClick={() => handleSelectHorse(caballo.name)}
            className="hover:cursor-pointer flex items-center hover:bg-zinc-100 py-[20px] font-lato text-sm font-normal leading-5 text-[#23254C]">
              {caballo.name}
            </option>
          ))}
        </div>
      )}
      </div>
              
              {/* <TextInputWithIcon
                label={"Nombre caballo"}
                placeholder={"Nombre caballo"}
                value={caballo}
                setValue={(v) => handleSearch(v)}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.8313 -1C11.0195 -1 11.2081 -1 11.3964 -1C11.422 -0.988398 11.4463 -0.970781 11.4733 -0.966484C13.3837 -0.649805 14.6212 0.779766 14.6039 2.6923C14.6004 3.07645 14.7121 3.33254 14.9912 3.61227C16.6686 5.29492 18.3308 6.99219 19.9674 8.71352C20.7941 9.5832 21.1175 10.6501 20.9624 11.8421C20.6911 13.9256 18.4643 15.2551 16.4678 14.5293C15.7497 14.2685 15.1937 13.8066 14.7903 13.208C14.4361 13.4972 14.1188 13.8405 13.728 14.0524C13.3407 14.2621 13.229 14.5246 13.1768 14.9311C12.8221 17.6845 10.7482 20.0199 8.03931 20.737C7.58768 20.8565 7.11953 20.9141 6.65877 21H5.61553C5.35907 20.9596 5.10261 20.9218 4.84658 20.878C1.57822 20.3181 -0.943797 17.419 -0.985526 14.1452C-1.00726 12.4342 -1.00248 10.7227 -0.984657 9.01172C-0.971616 7.75832 -0.697768 6.55047 -0.140942 5.42383C1.32524 2.45898 3.70989 0.704141 7.01651 0.190664C7.37251 0.135234 7.38555 0.138672 7.37164 -0.214531C7.356 -0.599102 7.51552 -0.858203 7.87544 -1C8.06365 -1 8.25231 -1 8.44052 -1C8.47269 -0.987109 8.50399 -0.967344 8.53746 -0.962617C9.11167 -0.886133 9.63068 -0.671289 10.1062 -0.349023C10.1749 -0.302617 10.2414 -0.252773 10.3509 -0.17457C10.3044 -0.602539 10.4883 -0.852187 10.8313 -1ZM11.888 14.7455C11.5289 14.7248 11.1816 14.7231 10.8387 14.6823C8.83565 14.4425 7.18821 12.5648 7.22776 10.5784C7.23515 10.1972 7.51161 9.9132 7.87674 9.91148C8.24666 9.90934 8.50703 10.1805 8.53441 10.5685C8.55224 10.8168 8.57571 11.0704 8.64091 11.3097C8.97474 12.5313 10.0919 13.4079 11.3329 13.4388C12.6943 13.4727 13.8214 12.6864 14.2526 11.4021C14.39 10.9921 14.6282 10.8168 14.9933 10.8559C15.3215 10.8907 15.5354 11.1438 15.5662 11.5327C15.6445 12.5188 16.3682 13.2824 17.3619 13.4272C18.2778 13.5608 19.2445 12.9812 19.5605 12.0668C19.8983 11.0888 19.6231 10.2221 18.9276 9.49641C17.3432 7.84383 15.7419 6.20672 14.1374 4.57262C13.5089 3.93238 12.7399 3.5143 11.8675 3.28441C11.8028 3.26723 11.735 3.25992 11.6711 3.24875C11.6598 3.28699 11.6524 3.30031 11.6524 3.31406C11.6506 3.62215 11.6511 3.9298 11.6485 4.23789C11.645 4.67188 11.382 4.9675 10.9973 4.97137C10.6104 4.97566 10.347 4.68391 10.3453 4.2452C10.3436 3.69391 10.3588 3.14176 10.3414 2.5909C10.3096 1.5966 9.8328 0.882891 8.91389 0.466524C8.84695 0.436445 8.77305 0.421406 8.67873 0.391758V0.66332C8.67873 1.82348 8.67873 2.98363 8.67829 4.14379C8.67829 4.2366 8.67829 4.3307 8.66525 4.42223C8.62309 4.71785 8.3801 4.94258 8.08148 4.96965C7.78981 4.99586 7.50379 4.80894 7.40946 4.52793C7.38947 4.4682 7.37729 4.40547 7.3586 4.33285C6.574 4.46305 5.862 4.74965 5.22997 5.20941C3.77162 6.27074 3.0344 7.70461 3.02614 9.49512C3.01832 11.2066 3.0244 12.918 3.0244 14.6295C3.0244 15.2216 2.79402 15.4514 2.20199 15.4519C1.71645 15.4519 1.23134 15.4519 0.745807 15.4523C0.676692 15.4523 0.607143 15.4579 0.534552 15.4613C1.03183 17.5548 3.21523 19.8506 6.4123 19.7015C9.5407 19.5554 11.612 17.1169 11.888 14.7455ZM7.37295 1.43547C7.10562 1.47887 6.87567 1.5068 6.65007 1.55449C2.90747 2.34941 0.31895 5.51277 0.31243 9.29961C0.309822 10.8314 0.31243 12.3633 0.31243 13.8951V14.1486H1.7208C1.7208 14.0498 1.7208 13.9656 1.7208 13.8809C1.7208 12.4209 1.71341 10.9604 1.72253 9.50027C1.73601 7.34367 2.60276 5.59312 4.3254 4.2684C5.1752 3.61527 6.14671 3.22469 7.20646 3.04207C7.26688 3.03176 7.36512 2.9673 7.36643 2.92605C7.37773 2.44137 7.37295 1.95625 7.37295 1.43547ZM11.6585 0.409375V1.87805C12.2105 2.05035 12.7486 2.21836 13.2846 2.38551C13.2598 1.50164 12.4991 0.564922 11.6585 0.409375Z"
                      fill="#6D6E6D"
                    />
                    <path
                      d="M12.65 7.09139C12.65 6.89116 12.6457 6.69092 12.6513 6.49112C12.6609 6.1319 12.9248 5.86077 13.2738 5.84444C13.6111 5.82854 13.9276 6.08979 13.9454 6.44213C13.9667 6.8701 13.9662 7.30022 13.9463 7.72819C13.9289 8.09342 13.6155 8.3478 13.2586 8.32803C12.9113 8.30827 12.6583 8.03713 12.6509 7.67061C12.647 7.47768 12.65 7.28475 12.6505 7.09139H12.65Z"
                      fill="#6D6E6D"
                    />
                  </svg>
                }
              /> */}
            </div>

            <div className="inputClub mb-5">
              <Search label={"Club que representa"} placeholder={"Nombre club"} value={club} setValue={setClub} itemsAbuscar={clubesFederados}/>
              {/* <TextInputWithIcon
                label={"Club que representa"}
                placeholder={"Nombre club"}
                value={club}
                setValue={setClub}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0088 8.95833C8.0555 8.95833 6.46716 7.36917 6.46716 5.41667C6.46716 3.46417 8.0555 1.875 10.0088 1.875C11.9622 1.875 13.5505 3.46417 13.5505 5.41667C13.5505 7.36917 11.9622 8.95833 10.0088 8.95833ZM10.0088 3.125C8.74466 3.125 7.71716 4.1525 7.71716 5.41667C7.71716 6.68083 8.74466 7.70833 10.0088 7.70833C11.273 7.70833 12.3005 6.68083 12.3005 5.41667C12.3005 4.1525 11.2722 3.125 10.0088 3.125ZM16.4596 17.5V15.0159C16.4596 12.7984 15.2046 10.2083 11.668 10.2083H8.33464C4.79797 10.2083 3.54297 12.7975 3.54297 15.0159V17.5C3.54297 17.845 3.82297 18.125 4.16797 18.125C4.51297 18.125 4.79297 17.845 4.79297 17.5V15.0159C4.79297 14.1817 5.0488 11.4583 8.33464 11.4583H11.668C14.9538 11.4583 15.2096 14.1809 15.2096 15.0159V17.5C15.2096 17.845 15.4896 18.125 15.8346 18.125C16.1796 18.125 16.4596 17.845 16.4596 17.5Z"
                      fill="#6D6E6D"
                    />
                  </svg>
                }
              /> */}
            </div>
          </div>

          <div className="inputs flex flex-col w-1/2">
            <div className="categoria mb-5 " onClick={() => setPrueba(null)}>
              <DropdownWeb
                options={options}
                selectedOption={categoria}
                onSelect={setCategoria}
                label={"Categoría del binomio"}
              />
            </div>
            <div className="pruebaTipo mb-5">
              <DropdownWeb
                options={pruebas.categorias.map((cat) => {
                  return cat.nombre + " -- Altura " + cat.altura;
                })}
                selectedOption={prueba}
                onSelect={(elejida) => setPrueba(elejida)}
                label={"Pruebas disponibles para binomio según categoría"}
              />
            </div>

            <div className="botoninscripto  flex flex-row-reverse">
              <Button
                variant={"primary-alt"}
                customStyle="w-[124px] rounded border-[#23254C] h-11 grow-0 shrink-0 text-sm font-semibold"
                action={handleAgregarinscripto}
                descripcion={"Agregar"}
              />
               

            </div>

            <div className="inscriptosprecargados font-lato text-base font-normal text-[#23254C] ">
              Inscriptos precargados
            </div>
            <div className="warning font-lato text-xs text-opacity-70 font-normal text-[#23254C] mb-2">
              Haz click sobre el nombre del inscripto para quitarlo.
            </div>
            <div className="inscriptos w-full border border-[#D1DADA] h-full mb-5 rounded p-4 ">
              <div className="contenedorInscriptos flex flex-row gap-3 overflow-scroll">
                {inscriptos.map((inscripto, index) => {
                  return (
                    <div
                      key={index}
                      index={index}
                      onClick={() => handleQuitarInscripto(index)}
                      className="inscripto hover:cursor-pointer  mb-2 font-lato text-xs border border-[#D1DADA] rounded-full px-2.5 h-8 min-w-fit flex items-center"
                    >
                      <span className="pr-1">
                        {inscripto.Jinete} {inscripto.jineteLastName}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 13 12"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.61305 3.11351C3.75949 2.96707 3.99693 2.96707 4.14338 3.11351L6.49953 5.46967L8.85569 3.11351C9.00214 2.96707 9.23957 2.96707 9.38602 3.11351C9.53247 3.25996 9.53247 3.4974 9.38602 3.64384L7.02986 6L9.38602 8.35616C9.53247 8.5026 9.53247 8.74004 9.38602 8.88649C9.23957 9.03293 9.00214 9.03293 8.85569 8.88649L6.49953 6.53033L4.14338 8.88649C3.99693 9.03293 3.75949 9.03293 3.61305 8.88649C3.4666 8.74004 3.4666 8.5026 3.61305 8.35616L5.9692 6L3.61305 3.64384C3.4666 3.4974 3.4666 3.25996 3.61305 3.11351Z"
                          fill="#251431"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="botones flex flex-row gap-x-6 h-11 justify-end  ">
          <div className="contenedorBotones flex flex-row gap-x-6 ">
            <Button
              variant={"primary-alt"}
              customStyle="w-[124px] rounded border-[#23254C] h-11 grow-0 shrink-0 text-sm "
              action={() => closeModal(false)}
              descripcion={"Cerrar"}
            >
             
            </Button>
            <Button
                       />
                         <Button
              variant={"primary"}
              customStyle="w-[124px] rounded text-sm"
              action={() => handleGuardar()}
              descripcion={"Guardar"}
            />
                         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualInscripted;
