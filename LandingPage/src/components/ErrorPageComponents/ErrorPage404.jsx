import { useTranslation } from "next-i18next";
import { Footer } from "../landingReusableComponents/Footer"
import { Header } from "../landingReusableComponents/Header"
import Button from "../reusableComponents/Button";
import styles from "../../styles/404.module.css"
import FreeTrialSection from "../landingpageComponents/FreeTrialSection";

const ErrorPage404 = () => {
    const { t } = useTranslation('404/page-not-found')

    return (
        <>
            <Header variant='fixed' />
                <div className={`flex w-full bg-white justify-center items-center gap-0 p-0 ${styles['container-general']}`}>
                    <div className={`w-full flex justify-end ${styles['container-error-404']}`}>
                        <div className={`max-w-[650px] flex flex-col items-start justify-start px-8 gap-12 ${styles['container-title-error']}`}>
                            <div className={`flex flex-col gap-6`}>
                                <h2 className={`text-custom-color text-[58px] font-bold leading-[70px] ${styles['title-error']}`}>
                                    {t('title') }
                                </h2>
                                <p className={`text-custom-gray-2 text-start text-xl font-normal leading-[30px] ${styles['subtitle-error']}`}>
                                    {t('subtitle')}
                                </p>
                            </div>

                            <div className="justify-start w-full">
                                <div className={`flex justify-start gap-4 ${styles['container-search-input']}`}>
                                    <div className={`flex w-[360px] h-full px-3.5 py-2.5 bg-white border rounded gap-2 ${styles['container-input']}`}>
                                        <input
                                            type='text'
                                            placeholder={t('inputText')}
                                            className="w-full outline-0"
                                        />
                                    </ div>
                                    <div className={`h-12 rounded justify-start items-start flex ${styles['container-button-search']}`}>
                                        <Button variant='primary' px='px-[18px]' py='py-2.5' rounded='rounded'>
                                            { t('search') }
                                        </Button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`flex items-end w-full ${styles['image-horse']}`}>
                        <img className={`bg-blue-950 bg-opacity-60 `} src="/img/horse-404.png" alt="Image of Horse" />
                    </div>
                </div>
            <section className="w-full pt-[72px] pb-24 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex">
                <FreeTrialSection />
            </section>
            <Footer />
        </>
    )
}

export default ErrorPage404;