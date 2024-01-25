import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import Button from '../reusableComponents/Button'

const FreeTrialSectionAlt = () => {
    const { t } = useTranslation('pricing/pricing-title');

    return (
        <div className="w-full max-w-[1280px] p-8 flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-16 flex-wrap bg-zinc-100 rounded-2xl flex justify-between">
                <div className="flex-col justify-start items-start gap-4 flex pb-3">
                    <p className={`text-indigo-950 text-[28px] font-bold font-['Lato'] leading-9 ${styles["text-font-lato"]}`}>{ t('free-trial-title') }</p>
                    <p className={`text-indigo-950 text-xl font-normal ${styles["text-font-lato"]} leading-[30px]`}>{ t('free-trial-subtitle') }</p>
                </div>
                <div className="justify-start items-start gap-3 flex flex-wrap">
                    <Button variant='secondary-alt' px='px-3.5' py='py-2' rounded='rounded' customStyle="bg-transparent" >
                        <p>{ t('learn-more') }</p>
                    </Button>
                    <Button variant='primary' px='px-3.5' py='py-2' rounded='rounded'>
                        <p>{ t('get-started') }</p>  
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FreeTrialSectionAlt
