import { useTranslation } from "next-i18next";
import styles from "../../styles/Landing.module.css"
import MetricsItem from "../landingReusableComponents/MetricsItem"

const MetricsSection = () => {
    const { t } = useTranslation('metrics-landing');

    const metrics = [
        {
            number: t('number-1'),
            text: t('text-1'),
            supporting: t('supporting-1')
        },
        {
            number: t('number-2'),
            text: t('text-2'),
            supporting: t('supporting-2')
        },
        {
            number: t('number-3'),
            text: t('text-3'),
            supporting: t('supporting-3')
        },
        {
            number: t('number-4'),
            text: t('text-4'),
            supporting: t('supporting-4')
        }
    ]

    return (
        <>
            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-12 flex">
                    <div className="max-w-[768px] flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                            <p className={`self-stretch text-violet-900 text-base font-bold ${styles["text-font-lato"]}`}>{t('chip')}</p>
                            <h3 className={`self-stretch text-indigo-950 ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]}`}>{t('title')}</h3>
                        </div>
                        <p className={`self-stretch text-slate-600 ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]}`}>{t('subtitle')}</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1280px] px-8 justify-start items-center gap-24 inline-flex">
                <div className="w-full flex flex-wrap justify-center items-center gap-16">
                    <div className="w-full max-w-[560px] flex flex-wrap justify-center items-center gap-16">
                    {


                        metrics.map((metric, i) => {

                            return <MetricsItem key={i} number={metric.number} text={metric.text} supportingOn={true} supporting={metric.supporting} />
                        })
                    }
                    </div>
                    <img className="w-full max-w-[560px] h-auto relative" src="/img/stats-img.png" />
                </div>
            </div>
        </>
    )
}

export default MetricsSection
