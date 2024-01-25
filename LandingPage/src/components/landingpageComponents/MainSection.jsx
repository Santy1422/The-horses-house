import styles from "../../styles/Landing.module.css"
import { useTranslation } from 'next-i18next'
import ButtonAppStore from "../reusableComponents/ButtonAppStore"
import ButtonPlayStore from "../reusableComponents/ButtonPlayStore"
import Link from "next/link"

const MainSection = () => {
    const { t } = useTranslation('landing-main')
  return (
    <div className="w-full px-8 justify-center items-center inline-flex z-10 mt-20">

        <div className="w-full max-w-[1216px] flex flex-col justify-center items-center">

            <div className="w-full max-w-[1124px] flex-col justify-center items-center gap-y-6 flex">

                {/* Toast */}
                <div className="w-full max-w-[440px] pl-1 pr-3 py-1 bg-custom-gray overflow-hidden rounded-2xl justify-start items-center gap-3 inline-flex">
                    <div className={`px-3 py-1 bg-indigo-950 rounded-2xl justify-center items-center gap-1.5 flex ${styles["new-feature-badge"]}`}>
                        <span className={`text-center tracking-wide text-gray-300 text-sm font-bold ${styles["text-font-lato"]} leading-tight`}>{t('badgeBase')}</span>
                    </div>
                    <span className={`text-slate-50 min-w-[350px] font-light ${styles["text-font-lato"]} ${styles['span-on-title']}`}>{t('badgeMessage')}</span>
                </div>

                {/* Heading */}
                <h1 className={`max-w-[1024px] text-center text-white ${styles["title-font-size"]} font-[700] ${styles["text-font-lato"]}`}>{t('title')}</h1>

                {/* Supporting text */}
                <p className={`w-full max-w-[768px] tracking-wide text-center text-white text-xl ${styles["subtitle-font-size"]} font-light ${styles["text-font-lato"]}`}>{t('supporting')}</p>

            </div>

            {/* Actions */}
            <div className="w-full flex justify-center mt-14">
                <div className=" flex flex-wrap justify-center gap-3">
                    <Link href={"https://apps.apple.com/ar/app/the-horses-houses/id6473753703?l=en-GB"} target="_blank" className={`h-[52px] flex items-center justify-center rounded border border-white ${styles['container-button-dowload']}`} style={{backgroundColor: 'rgba(255, 255, 255, 0.15)'}}>
                        <ButtonAppStore />
                    </Link>
                    <Link href={"https://play.google.com/store/apps/details?id=com.thehorseshouses"} target="_blank" className={`h-[52px] flex items-center justify-center rounded border border-white ${styles['container-button-dowload']}`}  style={{backgroundColor: 'rgba(255, 255, 255, 0.15)'}}>
                        <ButtonPlayStore />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection
