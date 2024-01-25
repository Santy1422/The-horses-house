import styles from "../../styles/Landing.module.css"
import ButtonAppStore from "../reusableComponents/ButtonAppStore"
import ButtonPlayStore from "../reusableComponents/ButtonPlayStore"

const FreeTrialSection = () => {
    return (
        <div className="max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch flex flex-wrap justify-between gap-10 items-start">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                    <h3 className={`self-stretch text-indigo-950 ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]}`}>Start your free trial</h3>
                    <p className={`self-stretch text-slate-600 ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]}`}>Join over 4,000+ startups already growing with Untitled.</p>
                </div>
                <div className="flex flex-wrap-reverse justify-center w-full items-start gap-3">
                    <div className={`bg-white flex items-center justify-center rounded-sm border-2 border-custom-gray-3 ${styles['container-button-dowload']}`}>
                        <ButtonAppStore />
                    </div>
                    <div className={`bg-black flex items-center justify-center rounded-sm w-full border-custom-gray-3 ${styles['container-button-dowload']}`}>
                        <ButtonPlayStore />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTrialSection
