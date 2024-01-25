import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"

const QuoteSection = () => {
    const { t } = useTranslation('landing-quote')
    return (
        <div className="max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-8 inline-flex">
                <h3 className={`self-stretch text-center text-indigo-950 ${styles["quote-title-size"]} font-bold ${styles["text-font-lato"]}`}>{t('quote')}</h3>
                <div className="self-stretch h-[134px] flex-col justify-start items-center gap-4 flex">
                    <img className="w-16 h-16 rounded-[200px] border border-white" src="/img/albarracin.png" />
                    <div className="h-[54px] flex-col justify-start items-center gap-1 flex">
                        <p className={`self-stretch text-center text-indigo-950 text-lg font-bold ${styles["text-font-lato"]} leading-relaxed`}>Matías Albarracin</p>
                        <p className={`self-stretch max-w-[700px] text-center text-slate-600 text-base font-normal ${styles["text-font-lato"]} leading-normal`}>{t('subheading')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteSection
