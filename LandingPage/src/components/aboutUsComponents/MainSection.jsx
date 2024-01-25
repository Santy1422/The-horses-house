import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"

const MainSection = () => {
    const { t } = useTranslation('about/about-main')

    return (
        <div className="w-full px-8 pb-8 justify-center items-center inline-flex z-10 my-20">

            <div className="w-full max-w-[1216px] flex flex-col justify-start items-center">

                <div className="flex-col justify-center items-center gap-3 inline-flex">

                    {/* Toast */}
                    <span className={`text-center text-white text-[17px] tracking-wide font-normal leading-normal ${styles["text-font-lato"]}`}>{ t('chip') }</span>


                    {/* Heading */}
                    <h1 className={`text-center text-white ${styles["title-font-size"]} font-bold ${styles["text-font-lato"]}`}>{ t('title') }</h1>

                    {/* Supporting text */}
                    <p className={`text-center text-white text-[18px] ${styles["subtitle-font-size"]} tracking-widest font-light ${styles["text-font-lato"]}`}>{ t('subtitle') }</p>

                </div>
            </div>

        </div>
    )
}

export default MainSection
