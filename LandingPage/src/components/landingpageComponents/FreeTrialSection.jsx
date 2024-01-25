import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import ButtonAppStore from "../reusableComponents/ButtonAppStore"
import ButtonPlayStore from "../reusableComponents/ButtonPlayStore"
import Link from "next/link"

const FreeTrialSection = () => {
  const { t } = useTranslation('landing-free-trial')
  return (
    <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-10 flex">
            <div className="flex-col justify-start items-center gap-5 flex">
                <h3 className={`self-stretch text-center text-indigo-950 text-[34px] ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]} leading-[42px]`}>{ t('title') }</h3>
                <p className={`self-stretch text-center text-slate-600 text-xl ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]} leading-[30px]`}>{ t('subtitle') }</p>
            </div>
            <div className="flex flex-wrap justify-center items-start gap-3">
            <Link href={"https://apps.apple.com/ar/app/the-horses-houses/id6473753703?l=en-GB"} target="_blank" className={`h-[52px] flex items-center bg-[#262626] justify-center rounded border border-[#262626] ${styles['container-button-dowload']}`}>
                <ButtonAppStore />
              </Link>
              <button className={`h-[52px] flex items-center bg-[#262626] justify-center rounded border border-[#262626] ${styles['container-button-dowload']}`}>
                <ButtonPlayStore />
              </button>
            </div>
        </div>
    </div>
  )
}

export default FreeTrialSection
