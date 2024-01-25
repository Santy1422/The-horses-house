import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"

const JobPositionCard = ({ position, description, salary, hours }) => {
    const { t } = useTranslation('about/about-carrers')
    return (
        <div className="w-full max-w-[768px] px-6 pt-6 pb-7 bg-white rounded-2xl border border-black border-opacity-10 flex-col justify-start items-center gap-6 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    <p className={`self-stretch text-gray-900 text-lg font-bold ${styles["text-font-lato"]}`}>{position}</p>
                    <p className={`self-stretch text-zinc-600 text-[17px] font-normal ${styles["text-font-lato"]} leading-normal` }>{t(description)}</p>
                </div>
                <div className="self-stretch flex-wrap justify-start items-center gap-6 inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="clock" clip-path="url(#clip0_3372_54700)">
                                <path id="Icon" d="M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3372_54700">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className={`text-gray-500 text-base font-medium ${styles["text-font-lato"]}`}>{hours}</span>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="dollar-sign">
                                <path id="Icon" d="M10 0.833496V19.1668M14.1667 4.16683H7.91667C7.14312 4.16683 6.40125 4.47412 5.85427 5.0211C5.30729 5.56808 5 6.30995 5 7.0835C5 7.85704 5.30729 8.59891 5.85427 9.14589C6.40125 9.69287 7.14312 10.0002 7.91667 10.0002H12.0833C12.8569 10.0002 13.5987 10.3075 14.1457 10.8544C14.6927 11.4014 15 12.1433 15 12.9168C15 13.6904 14.6927 14.4322 14.1457 14.9792C13.5987 15.5262 12.8569 15.8335 12.0833 15.8335H5" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <span className={`text-gray-500 text-base font-medium ${styles["text-font-lato"]}`}>{t(salary)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPositionCard
