import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"

const FeatureAlt = ({svg, text, supporting, ifMore, width}) => {
    const { t } = useTranslation('landing-features')
    return (
        <div className={` flex-col justify-start items-center gap-4 inline-flex`} style={{width: width}}>
            <div className={`w-12 h-12 bg-custom-slate-alt rounded-[28px] justify-center items-center inline-flex`}>
                {svg}
            </div>
            <div className="self-stretch flex-col justify-start items-center gap-2 flex">
                <p className={`self-stretch text-center text-indigo-800 text-xl font-bold ${styles["text-font-lato"]} leading-[30px]`}>{t(`${text}`)}</p>
                <p className={`self-stretch text-center text-custom-gray-2 text-[17px] tracking-wide font-normal ${styles["text-font-lato"]} leading-normal`}>{t(`${supporting}`)}</p>
            </div>
            {
                ifMore &&
                <div className="justify-start items-start inline-flex">
                    <button className={`text-indigo-800 text-base font-bold ${styles["text-font-lato"]} leading-normal justify-center items-center gap-2 flex`}>{t('seeMore')}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow-right">
                                <path id="arrow-right_2" d="M18.0885 10.5902L12.2559 16.4227C12.0934 16.5852 11.8801 16.6668 11.6667 16.6668C11.4534 16.6668 11.2401 16.5852 11.0776 16.4227C10.7517 16.0968 10.7517 15.5701 11.0776 15.2443L15.4884 10.8335H2.50008C2.03925 10.8335 1.66675 10.4602 1.66675 10.0002C1.66675 9.54015 2.03925 9.16682 2.50008 9.16682H15.4884L11.0776 4.75601C10.7517 4.43018 10.7517 3.90346 11.0776 3.57763C11.4034 3.25179 11.9301 3.25179 12.2559 3.57763L18.0885 9.41015C18.166 9.48765 18.2268 9.57925 18.2693 9.68175C18.3535 9.88509 18.3535 10.1152 18.2693 10.3186C18.2268 10.4211 18.166 10.5127 18.0885 10.5902Z" fill="#4949A9"/>
                            </g>
                        </svg>
                    </button>
                </div>
            }
        </div>
    )
}

export default FeatureAlt