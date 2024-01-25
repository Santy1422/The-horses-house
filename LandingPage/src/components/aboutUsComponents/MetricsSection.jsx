import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import MetricsItem from "../landingReusableComponents/MetricsItem"

const MetricsSection = () => {
    const { t } = useTranslation('about/about-metrics')

    const metrics = [
        {
            number: t('number-1'),
            text: t('text-1'),
            // supporting: 'Hemos ayudado a más de 4,000 increíbles empresas globales.'
        },
        {
            number: t('number-2'),
            text: t('text-2'),
            // supporting: 'Nuestros clientes han informado de un promedio de ~600% ROI'
        },
        {
            number: t('number-3'),
            text: t('text-3'),
            // supporting: 'Nuestra aplicación ha sido descargada más de 10,000 veces.'
        },
        {
            number: t('number-4'),
            text: t('text-4'),
            // supporting: 'Estamos orgullosos de nuestra calificación de 5 estrellas con más de 200 reseñas.'
        },
    ]

    return (
        <>
            <div className="w-full max-w-[1280px] px-8 justify-start items-center inline-flex">
                <div className="w-full flex flex-wrap justify-center items-center gap-24">
                    <img className="w-full max-w-[560px] h-auto relative" src="/img/horse-main-about.jpg" />
                    <div className="w-full max-w-[560px] flex flex-col gap-12">
                        <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                            <p className={`self-stretch text-custom-violet tracking-wide text-[17px] font-bold ${styles["text-font-lato"]}`}>{ t('chip') }</p>
                            <h3 className={`text-indigo-950 text-[46px] leading-[58px] font-bold ${styles["text-font-lato"]}`}>{ t('title') }</h3>
                        </div>
                        <div className="w-full max-w-[560px] flex flex-wrap justify-center items-center gap-16">
                            {
                                metrics.map((metric, i) => {
                                    return <MetricsItem key={i} number={metric.number} text={metric.text} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MetricsSection
