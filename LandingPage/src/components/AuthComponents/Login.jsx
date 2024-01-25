import { useEffect, useState } from "react";
import EmailInput from "../reusableComponents/EmailInput";
import PasswordInput from "../reusableComponents/PasswordInput";
import Google from "./Google";
import Facebook from "./Facebook";
import EmailPasswordLogin from "./EmailPasswordLogin";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from "../../styles/Landing.module.css"
import Logo from "../reusableComponents/Logo";
import BackArrow from "../reusableComponents/BackArrow";
import Checkbox from "../reusableComponents/Checkbox";
import { authSetUser } from "@/redux/reducer/reducerAuth";
import { realodadUser } from "../../../peticiones/auth";


export const Login = () => {
    const [rememberPassword, setRememberPassword] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const router = useRouter()
    const loadingAuth = useSelector((state) => state.reducerAuth)

    const handlerEmailPasswordLogin = () => {
        EmailPasswordLogin(email, password, dispatch, router)
    }

    const handleGoogle = () => {
        Google(dispatch, router)
    }

    const handleFacebook = () => {
        Facebook(dispatch, router)
    }
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
                router.push("/dashboard")
              },
              error: (e) => console.log(e),
              loading: (l) => console.log(l)
            });
          } catch (error) {
            console.error('Error al iniciar sesión', error.message);
          }
        };
    return (
        <>
            {loadingAuth ?
                <>
                    {/* Desktop */}
                    <div className={`flex flex-row-reverse h-screen w-screen ${styles["login-desktop"]}`}>
                        <Link href="/" className="absolute top-[60px] left-[44px] w-11 h-11 bg-white rounded border border-gray-300 flex justify-center items-center">
                            <BackArrow size="small" />
                        </Link>
                        <div className={`w-[60vw] h-[100vh] ${styles['login-background-img']}`}></div>

                        <div className={`flex flex-grow ${styles["login-form-container"]} justify-center`} style={{ overflowY: 'scroll' }}>
                            <div className="w-full max-w-[327px] gap-y-[16px] h-full flex flex-col justify-start items-start">
                                <div className="mt-[160px] mb-[34px]"><Logo size="medium" /></div>


                                <div className={`text-center text-zinc-900 text-2xl font-light ${styles["text-font-lato"]}`}>Iniciá sesión con tu cuenta</div>
                                <EmailInput label="Email" setValue={setEmail} />
                                <PasswordInput title="Contraseña" setValue={setPassword} />

                                <button onClick={handlerEmailPasswordLogin} className="w-full h-9 mb-3 rounded justify-start items-start inline-flex active:ring-2 active:ring-blue-700 active:ring-offset-2 ">
                                    <div className="grow shrink basis-0 h-11 px-3.5 py-2 hover:bg-black bg-indigo-950 rounded justify-center items-center gap-2 flex">
                                        <div className={`text-white text-sm font-bold ${styles["text-font-lato"]} focus:rin leading-tight`}>Iniciar sesión</div>
                                    </div>
                                </button>

                                <div className=" flex gap-1 w-full justify-start">
                                    <div className={`text-black text-base font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿Olvidaste tu contraseña?</div>
                                    <div className={`h-5 text-blue-950 text-base font-bold ${styles["text-font-lato"]} hover:cursor-pointer`}>Hace click acá</div>
                                </div>

                                <div className="flex w-full items-center gap-6 justify-between">
                                    <div className="w-[113px] h-[0px] border border-stone-300"></div>
                                    <div className={`text-center text-black text-lg font-normal ${styles["text-font-lato"]} tracking-tight`}>o</div>
                                    <div className="w-[113px] h-[0px] border border-stone-300"></div>
                                </div>

                                <div className="w-full h-[156px] flex-col justify-center items-center gap-3 inline-flex">
                                    <button onClick={handleGoogle} className="self-stretch px-4 py-2.5 bg-white hover:bg-gray-200 active:border active:border-zinc-500 active:shadow-focus active:shadow-shadow-focus  rounded-lg shadow border border-gray-400 justify-center items-center gap-3 inline-flex">
                                        <img src="/img/Social_Icon_Google.png" className="w-6 h-6 relative " />
                                        <div className={`text-zinc-900 text-base font-semibold ${styles["text-font-lato"]} leading-normal`}>Continuar con Google</div>
                                    </button>
                                    <button onClick={handleFacebook} className="self-stretch px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg shadow border border-gray-400 active:shadow-focus active:shadow-shadow-focus justify-center items-center gap-3 inline-flex">
                                        <img src="/img/Social_icon_Facebook.png" className="w-6 h-6 relative" />
                                        <div className={`text-white text-base font-semibold ${styles["text-font-lato"]} leading-normal`}>Continuar con Facebook</div>
                                    </button>
                                    <button className="self-stretch px-4 py-2.5 bg-black hover:bg-zinc-900 rounded-lg shadow active:shadow-focus active:shadow-shadow-focus border border-gray-400 justify-center items-center gap-3 inline-flex">
                                        <img src="/img/Social_icon_Apple.png" className="w-6 h-6 relative" />
                                        <div className={`text-white text-base font-semibold ${styles["text-font-lato"]} leading-normal`}>Continuar con Apple</div>
                                    </button>
                                </div>

                                <div className=" flex gap-1 w-full justify-center pb-4">
                                    <div className={`text-black text-base font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿No tenés cuenta?</div>
                                    <Link href="/register">  <div className={`w-[107px] h-5 text-blue-950 text-base font-bold ${styles["text-font-lato"]} hover:cursor-pointer`}>Registrarse</div></Link>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* Mobile */}
                    <div className={`w-full flex flex-col items-center ${styles["login-mobile"]}`}>
                        <Link href="/" className="absolute top-[48px] left-[24px] w-11 h-11 bg-white rounded border border-gray-300 flex justify-center items-center">
                            <BackArrow size="small" />
                        </Link>
                        <div className={`w-full h-full flex justify-center ${styles['login-background-img']}`}>
                            <div className={`relative top-[107px] flex w-full max-w-[327px] py-[24px] px-[18px] flex-col items-center gap-y-[20px] rounded-[10px] shadow ${styles["login-form-container"]}`}>
                                <Logo size="medium" />

                                <div class={`text-center text-black text-lg font-light ${styles["text-font-lato"]}`}>Iniciá sesión con tu cuenta</div>

                                <div className="w-full flex flex-col gap-y-4">
                                    <EmailInput label="Email" setValue={setEmail} />
                                    <PasswordInput setValue={setPassword} />
                                    <Checkbox label="Recordar Contraseña" value={rememberPassword} setValue={setRememberPassword} />
                                </div>

                                <button onClick={handlerEmailPasswordLogin} className="w-full h-9 mb-3 rounded justify-start items-start inline-flex active:ring-2 active:ring-blue-700 active:ring-offset-2 ">
                                    <div className="grow shrink basis-0 h-11 px-3.5 py-2 hover:bg-black bg-indigo-950 rounded justify-center items-center gap-2 flex">
                                        <div className={`text-white text-sm font-bold ${styles["text-font-lato"]} focus:rin leading-tight`}>Iniciar sesión</div>
                                    </div>
                                </button>
                                <div className=" flex gap-1 w-full justify-center">
                                    <p className={`text-black text-sm font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿Olvidaste tu contraseña?</p>
                                    <p className={`h-5 text-blue-950 text-sm font-bold ${styles["text-font-lato"]} hover:cursor-pointer`}>Hace click acá</p>
                                </div>
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
                                <div className={`text-black text-sm font-normal ${styles["text-font-lato"]} leading-normal tracking-tight`}>¿No tenés cuenta?</div>
                                <Link href="/register">  <div className={`w-[107px] h-5 text-blue-950 text-sm font-bold ${styles["text-font-lato"]} hover:cursor-pointer`}>Registrarse</div></Link>
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