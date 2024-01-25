import { useEffect, useRef, useState } from "react";
import EmailInput from "../reusableComponents/EmailInput";
import PasswordInput from "../reusableComponents/PasswordInput";
import CheckboxWeb from "../reusableComponents/CheckboxWeb";
import Google from "./Google";
import Facebook from "./Facebook";
import Desloguearse from "./Desloguearse";
import EmailPassword from "./EmailPassword";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../../styles/Landing.module.css"
import Logo from "../reusableComponents/Logo";
import BackArrow from "../reusableComponents/BackArrow";
import Checkbox from "../reusableComponents/Checkbox";
import Link from "next/link";
import { LoginWithBack, realodadUser } from "../../../peticiones/auth";
import { authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import TextInput from "../reusableComponents/TextInput";
import {sendEmailVerificationBrevo, updateCode} from "../../../peticiones/register"

const Register = () => { 
    const router = useRouter()
    const [name, setName]= useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reconfirmPassword, setReconfirmPassword] = useState("")
    const [checkedList, setCheckedList] = useState([])
    const dispatch = useDispatch()
    const loadingAuth = useSelector((state) => state.reducerAuth)
    const [userDataOnboarding, setUserDataOnboarding] = useState({
        profesion:[],
        answers:[]
    })

    const [verification, setVerification] = useState(true)
    const [generateCode, setGenerateCode] = useState("")
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");
    const [errorCode, setErrorCode] = useState(false)
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    console.log(code1)
    const handleInputChange = (index, value) => {
      // Update the state based on the input index
      switch (index) {
        case 0:
          setCode1(value);
          break;
        case 1:
          setCode2(value);
          break;
        case 2:
          setCode3(value);
          break;
        case 3:
          setCode4(value);
          break;
        default:
          break;
      }
  
      // Move to the next input if the length of the current input is 1
      if (value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    };
  
    useEffect(() => {
        const storedData = localStorage.getItem('userData')

        if(storedData) {
            const parsedData = JSON.parse(storedData)
            setUserDataOnboarding({
                profesion: parsedData.profession,
                answers: parsedData.answers
            })
        }
        
    },[])
    console.log('puserdataonboard', userDataOnboarding)


    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token)  refreshToken(token)
      }, [])

        const refreshToken = async (token) => {
          try {
            await realodadUser({
              token,
              succes: async (v) => {
                dispatch(authSetUser(v.user))
                {loadingAuth.usuarioAuth.rol?.profesion === 'fotografo' && router.push('/dashboardPh')}
                {loadingAuth.usuarioAuth.rol?.profesion === 'videoMaker' && router.push('/dashboardPh')}
                {!loadingAuth.usuarioAuth.rol?.profesion && router.push("/dashboard")}
               
                // router.push("/dashboard")
              },
              error: (e) => console.log(e),
              loading: (l) => console.log(l)
            });
          } catch (error) {
            console.error('Error al iniciar sesión', error.message);
          }
        };

    const handleEmailPassword = () => {
        EmailPassword(name, lastName, email, password, dispatch, router, userDataOnboarding)
    }

    const sendVerificationCode = async ({ email }) => {
        try {
          setVerification(true);
          await sendEmailVerificationBrevo(email, (a) => {
            setGenerateCode(a);
            updateCode({
              code: a,
              succes: (a) => console.log(),
              loading: (a) => console.log(),
              error: (a) => console.error('Error en updateCode:', a),
            });
          });
        } catch (error) {
          console.error('Error en sendVerificationCode:', error);
        }
      };
    const succes= async() => {     
        await LoginWithBack({ //aca podes agregar la info a enviar al back con los datos del omboarding
          professions: [userDataOnboarding.profesion] || ["ninguna"],
          answers: userDataOnboarding.answers || null,
          name,
          lastName,
          code: lastName ? "sin Verificar" : "verificado",

          succes: async (v) => {
          //hacer peticion al back antes de redirigir completando datos en facebook igual
          await localStorage.setItem('token', v.newToken);
          dispatch(authSetUser(v.user))

          if (loginVisible || v.user.code !== "sin Verificar") {
            sendVerificationCode({ email: email });
          } else {
            if(v.user?.rol?.profesion === 'fotografo') router.push('/dashboardPh')
            if(v.user?.rol?.profesion === 'videoMaker') router.push('/dashboardPh')
            else router.push("/dashboard")          }
        
          // router.push("/dashboard")
      },
      error: (e) => console.log(e),
      loading: (l) => dispatch(authSetLoading()),
  })}

    const handleGoogle = () => {
        Google(succes)
    }

    const handleFacebook = () => {
        Facebook(succes)
    }

    return ( 
        <>

            {loadingAuth ?
                <>
                    {/* Desktop */}

                    <div className={`flex flex-row-reverse h-screen w-screen ${styles["login-desktop"]}`}>
                        <Link href="/" className="absolute top-[60px] left-[44px] w-11 h-11 bg-white rounded border border-gray-300 flex justify-center items-center">
                            <BackArrow size="small" />
                        </Link>
                        <div className={`w-[60vw] h-[100vh] ${styles['login-background-img']}`} style={{ backgroundImage: "url(/img/imagen_register.png)" }}></div>
                        {!verification &&

                        <div className={`flex flex-grow ${styles["login-form-container"]} justify-center`} style={{ overflowY: 'scroll' }}>
                            <div className="w-full h-full max-w-[327px] gap-y-[16px] flex flex-col justify-start items-center">
                            <div className="mt-[130px] mb-[34px]"><Logo size="large" /></div>

                            <div className={`text-center text-zinc-900 text-2xl font-light ${styles["text-font-lato"]}`}>Creá tu cuenta con nosotros</div>

                           <div className="w-full">

                            <TextInput value={name} setValue={setName} placeholder={"Escribí tu nombre"} label={"Nombre"}/>
                            </div>

                           <div className="mt-[-20px] mb-[-20px] w-full">
                            <TextInput value={lastName} setValue={setLastName} placeholder={"Escribí tu apellido"} label={"Apellido"}/>
                            </div>
                            <EmailInput label="Email" setValue={setEmail} />
                            <PasswordInput title="Contraseña" setValue={setPassword} hintText="Debe contener una mayúscula y un número."/>
                            <PasswordInput title="Repetir contraseña" reconfirm={true} setValue={setReconfirmPassword} passwordCheck={password} />
                            <CheckboxWeb setValue={setCheckedList} label={['Estoy de acuerdo con los Términos y condiciones.', 'No quiero recibir newsletter']} />

                            <button onClick={handleEmailPassword} disabled={!name || !lastName || !email || !password || !reconfirmPassword || checkedList == []} className="w-full rounded justify-start items-start inline-flex active:ring-2 active:ring-blue-700 active:ring-offset-2 ">
                                <div className={`grow shrink basis-0 h-11 px-3.5 py-2 hover:bg-black bg-indigo-950 rounded justify-center items-center gap-2 flex`}>
                                    <div className={`text-white text-sm font-bold ${styles["text-font-lato"]} focus:rin leading-tight`}>Registrarse</div>
                                </div>
                            </button>


                            <div className="flex w-full items-center gap-6 justify-between">
                                <div className="w-[113px] h-[0px] border border-stone-300"></div>
                                <div className={`text-center text-black text-lg font-normal ${styles["text-font-lato"]} tracking-tight`}>o</div>
                                <div className="w-[113px] h-[0px] border border-stone-300"></div>
                            </div>

                            <div disabled={!name || !lastName || !email || !password || !reconfirmPassword || checkedList == []} className="w-full h-[156px] flex-col justify-center items-center gap-3 inline-flex">
                                <button onClick={handleGoogle} className="self-stretch px-4 py-2.5 bg-white hover:bg-gray-200 active:border active:border-zinc-500 active:shadow-focus active:shadow-shadow-focus  rounded-lg shadow border border-gray-400 justify-center items-center gap-3 inline-flex">
                                    <img src="/img/Social_Icon_Google.png" className="w-6 h-6 relative " />
                                    <div className={`text-zinc-900 text-base font-semibold ${styles["text-font-lato"]} leading-normal`}>Registrarse con Google</div>
                                </button>
                                <button onClick={handleFacebook} className="self-stretch px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg shadow border border-gray-400 active:shadow-focus active:shadow-shadow-focus justify-center items-center gap-3 inline-flex">
                                    <img src="/img/Social_icon_Facebook.png" className="w-6 h-6 relative" />
                                    <div className={`text-white text-base font-semibold ${styles["text-font-lato"]} leading-normal`}>Registrarse con Facebook</div>
                                </button>
                                <button className="self-stretch px-4 py-2.5 bg-black hover:bg-zinc-900 rounded-lg shadow active:shadow-focus active:shadow-shadow-focus border border-gray-400 justify-center items-center gap-3 inline-flex">
                                    <img src="/img/Social_icon_Apple.png" className="w-6 h-6 relative" />
                                    <div className={`text-white text-base font-semibold ${styles["text-font-lato"]} leading-normal`}>Registrarse con Apple</div>
                                </button>
                            </div>

                            <div className="flex gap-1 w-full justify-center pb-4">
                                <div className={`text-black text-base font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿Ya tenés cuenta?</div>
                                <Link href="/"><div className={`w-[107px] h-5 text-blue-950 text-base font-bold ${styles["text-font-lato"]} hover:cursor-pointer`}>Iniciar sesión</div></Link>
                            </div>
                            </div>

                        </div> 
                        ||
                        <div className={`flex flex-grow ${styles["login-form-container"]} justify-center`} style={{ overflowY: 'scroll' }}>
                        <div className="w-full h-full max-w-[327px] gap-y-[16px] flex flex-col justify-start items-center">
                        <div className="mt-[130px] mb-[34px]"><Logo size="large" /></div>

                        <div className={`text-center text-zinc-900 text-2xl font-light ${styles["text-font-lato"]}`}>Verifica tu cuenta</div>
                        <div className={`text-black text-base font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>Escribe el codigo enviado a tu E-mail</div>

                        <div className="rounded h-[10%]  flex-row">
                    {inputRefs.map((inputRef, index) => (
                      <input
                        key={index}
                        ref={inputRef}
                        value={index === 0 ? code1 : index === 1 ? code2 : index === 2 ? code3 : code4}
                        onChangeText={(value) => handleInputChange(index, value)}
                        className="w-10 text-center font-bold text-2xl rounded bg-gray-300 mx-1 w-16 h-16"
                        maxLength={1}
                        keyboardType="default"
                      />
                    ))}
                  </div>
                  <div className="flex gap-1 w-full justify-center pb-4">
                            <div className={`text-black text-base font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿No has recibido el codigo?</div>
                        </div>
                        <button onClick={() => {
                             if (code1.toLocaleLowerCase() + code2.toLocaleLowerCase() + code3.toLocaleLowerCase() + code4.toLocaleLowerCase() === generateCode.toLocaleLowerCase() || user?.code === generateCode.toLocaleLowerCase()) {
                                updateCode({
                                  code: "verificado",
                                  succes: (a) => {
                                    if(v.user?.rol?.profesion === 'fotografo') router.push('/dashboardPh')
                                    if(v.user?.rol?.profesion === 'videoMaker') router.push('/dashboardPh')
                                    else router.push("/dashboard")      
                                  }
                                  ,
                                  loading: (a) => console.log(a),
                                  error: (a) => console.error('Error en updateCode:', a),
                                });
                              } else { setErrorCode(true) }
                        }} className="w-full rounded justify-start items-start inline-flex active:ring-2 active:ring-blue-700 active:ring-offset-2 ">
                            <div className={`grow shrink basis-0 h-11 px-3.5 py-2 hover:bg-black bg-indigo-950 rounded justify-center items-center gap-2 flex`}>
                                <div className={`text-white text-sm font-bold ${styles["text-font-lato"]} focus:rin leading-tight`}>Verificar cuenta</div>
                            </div>
                        </button>


               

                
                        </div>

                    </div>
                                        }

                    </div>
                    {/* Mobile */}
                    <div className={`w-full flex flex-col items-center ${styles["login-mobile"]}`}>
                        <Link href="/" className="absolute top-[48px] left-[24px] w-11 h-11 bg-white rounded border border-gray-300 flex justify-center items-center">
                            <BackArrow size="small" />
                        </Link>
                        <div className={`w-full h-full flex justify-center ${styles['login-background-img']}`}>
                            <div className={`relative top-[107px] flex w-full max-w-[327px] py-[24px] px-[18px] flex-col items-center gap-y-[20px] rounded-[10px] shadow ${styles["login-form-container"]}`}>
                                <Logo size="medium" />

                                <div class={`text-center text-black text-lg font-light ${styles["text-font-lato"]}`}>Crea tu cuenta con nosotros</div>

                                <div className="w-full flex flex-col gap-y-4">
                                    <EmailInput label="Email" setValue={setEmail} />
                                    <PasswordInput setValue={setPassword} />
                                    <PasswordInput reconfirm={true} setValue={setReconfirmPassword} title={'Re escribi tu password'} passwordCheck={password} />
                                    <CheckboxWeb setValue={setCheckedList} label={['Estoy de acuerdo con los Términos y condiciones.', 'No quiero recibir newsletter']} />
                                </div>

                                <button onClick={handleEmailPassword} disabled={!email || !password || !reconfirmPassword || checkedList == []} className="w-full h-9 mb-3 rounded justify-start items-start inline-flex active:ring-2 active:ring-blue-700 active:ring-offset-2 ">
                                    <div className="grow shrink basis-0 h-11 px-3.5 py-2 hover:bg-black bg-indigo-950 rounded justify-center items-center gap-2 flex">
                                        <div className={`text-white text-sm font-bold ${styles["text-font-lato"]} focus:rin leading-tight`}>Registrarse</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col w-full max-w-[327px]">
                            <div className="flex mt-[130px] items-center gap-6 justify-center">
                                <div className="flex flex-grow h-[0px] border border-stone-300"></div>
                                <div className={`text-center text-black text-base font-normal ${styles["text-font-lato"]} tracking-tight`}>o continuar con</div>
                                <div className="flex flex-grow h-[0px] border border-stone-300"></div>
                            </div>

                            <div className="flex my-[32px] justify-between items-center gap-x-3">
                                <button onClick={handleGoogle} className="w-[101px] self-stretch px-4 py-2.5 bg-white hover:bg-gray-200 active:border active:border-zinc-500 active:shadow-focus active:shadow-shadow-focus  rounded-lg shadow border border-gray-400 justify-center items-center gap-3 inline-flex">
                                    <img src="/img/Social_Icon_Google.png" className="w-6 h-6 relative " />
                                </button>
                                <button onClick={handleFacebook} className="w-[101px] self-stretch px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg shadow border border-gray-400 active:shadow-focus active:shadow-shadow-focus justify-center items-center gap-3 inline-flex">
                                    <img src="/img/Social_icon_Facebook.png" className="w-6 h-6 relative" />
                                </button>
                                <button className="w-[101px] self-stretch px-4 py-2.5 bg-black hover:bg-zinc-900 rounded-lg shadow active:shadow-focus active:shadow-shadow-focus border border-gray-400 justify-center items-center gap-3 inline-flex">
                                    <img src="/img/Social_icon_Apple.png" className="w-6 h-6 relative" />
                                </button>
                            </div>

                            <div className=" flex gap-1 w-full justify-center pb-4">
                                <div className={`text-black text-sm font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿Ya tenés cuenta?</div>
                                <Link href="/">  <div className={`w-[107px] h-5 text-blue-950 text-sm font-bold ${styles["text-font-lato"]} hover:cursor-pointer`}>Iniciar sesión</div></Link>
                            </div>
                        </div>
                    </div>

                </>
                :
                <div className="w-full h-full flex justify-center items-center"><p>Cargando...</p></div>
            }
        </>

    )
}

export default Register;
