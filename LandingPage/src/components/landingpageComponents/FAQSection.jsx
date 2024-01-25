import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import Button from "../reusableComponents/Button"
import FAQuestion from "./FAQuestion"


const FAQSection = () => {
    const { t } = useTranslation('FAQ');

    const questions = [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') },
        { q: t('q4'), a: t('a4') },
        { q: t('q5'), a: t('a5') }
    ]

    return (
        <>
            <div className={`w-full max-w-[1280px] px-8 pt-24 flex-col justify-start items-start gap-8 inline-flex`}>
                <div className="self-stretch flex-col justify-start items-center gap-12 flex">
                    <div className="flex-col justify-start items-center gap-5 flex">
                        <h3 className={`self-stretch text-center text-indigo-950 ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]} leading-[42px]`}>{t('title')}</h3>
                        <p className={`self-stretch text-center text-slate-600 ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]} leading-[30px]`}>{t('subtitle')}</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-center gap-16 inline-flex">
                <div className=" w-full max-w-[768px] flex-col justify-start items-start gap-8 inline-flex">
                    {/* Questions */}
                    {
                        questions.map((ele, i) => {
                            return <FAQuestion key={i} q={ele.q} a={ele.a} />
                        })

                    }
                </div>
            </div>

            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full p-8 bg-zinc-100 rounded-2xl flex-col justify-start items-center gap-8 inline-flex">
                    {/* <div className="w-[120px] h-14 relative">
                        <img className="w-12 h-12 left-[72px] top-[7px] absolute rounded-[200px] border border-white" src="/img/avatar3.png" />
                        <img className="w-12 h-12 left-0 top-[7px] absolute rounded-[200px] border border-white" src="/img/avatar2.png" />
                        <img className="w-14 h-14 left-[32px] top-[-1px] absolute rounded-[200px] border border-white" src="/img/avatar1.png" />
                        
                    </div> */}
                    <div className={`w-12 h-12 bg-slate-600 rounded-[28px] border-8 border-slate-500 justify-center items-center inline-flex`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="users-group">
                                <path id="users-group_2" d="M15.553 21.75H8.448C6.243 21.75 5.02795 20.542 5.02795 18.35C5.02795 15.946 6.38802 13.139 10.223 13.139H13.778C17.613 13.139 18.973 15.946 18.973 18.35C18.973 20.542 17.758 21.75 15.553 21.75ZM10.223 14.639C6.79402 14.639 6.52795 17.479 6.52795 18.35C6.52795 19.7 7.085 20.25 8.448 20.25H15.553C16.916 20.25 17.473 19.699 17.473 18.35C17.473 17.479 17.206 14.639 13.778 14.639H10.223ZM12.0081 11.762C9.93706 11.762 8.25195 10.077 8.25195 8.00598C8.25195 5.93498 9.93706 4.25 12.0081 4.25C14.0791 4.25 15.765 5.93498 15.765 8.00598C15.765 10.077 14.0791 11.762 12.0081 11.762ZM12.0081 5.75C10.7641 5.75 9.75195 6.76198 9.75195 8.00598C9.75195 9.24998 10.7641 10.262 12.0081 10.262C13.2521 10.262 14.265 9.24998 14.265 8.00598C14.265 6.76198 13.2521 5.75 12.0081 5.75ZM22.75 12.65C22.75 10.674 21.525 8.68005 18.79 8.68005H17.8199C17.4059 8.68005 17.0699 9.01605 17.0699 9.43005C17.0699 9.84405 17.4059 10.1801 17.8199 10.1801H18.79C21.011 10.1801 21.25 11.907 21.25 12.65C21.25 13.514 20.9409 13.8199 20.0699 13.8199H19.71C19.296 13.8199 18.96 14.1559 18.96 14.5699C18.96 14.9839 19.296 15.3199 19.71 15.3199H20.0699C21.7729 15.3199 22.75 14.347 22.75 12.65ZM18.099 8.03503C19.45 7.76303 20.4301 6.55704 20.4301 5.17004C20.4301 3.56004 19.12 2.25 17.51 2.25C16.749 2.25 16.041 2.53197 15.517 3.04297C15.22 3.33197 15.2141 3.807 15.5031 4.104C15.7911 4.401 16.268 4.40704 16.564 4.11804C16.807 3.88104 17.143 3.75098 17.51 3.75098C18.293 3.75098 18.9301 4.38802 18.9301 5.17102C18.9301 5.84702 18.455 6.43404 17.802 6.56604C17.396 6.64804 17.133 7.04395 17.215 7.44995C17.287 7.80595 17.6 8.052 17.949 8.052C17.999 8.05 18.049 8.04503 18.099 8.03503ZM5.03003 14.5699C5.03003 14.1559 4.69403 13.8199 4.28003 13.8199H3.92896C3.05796 13.8199 2.74902 13.514 2.74902 12.65C2.74902 11.907 2.98798 10.1801 5.20898 10.1801H6.19897C6.61297 10.1801 6.94897 9.84405 6.94897 9.43005C6.94897 9.01605 6.61297 8.68005 6.19897 8.68005H5.20898C2.28598 8.68005 1.24902 10.819 1.24902 12.65C1.24902 14.347 2.22596 15.3199 3.92896 15.3199H4.28003C4.69403 15.3199 5.03003 14.9839 5.03003 14.5699ZM6.80603 7.448C6.88803 7.042 6.62499 6.64596 6.21899 6.56396C5.55899 6.43096 5.07996 5.84495 5.07996 5.16895C5.07996 4.38595 5.72201 3.74902 6.51001 3.74902C6.87001 3.74902 7.20894 3.88202 7.46594 4.12402C7.76694 4.40902 8.241 4.39499 8.526 4.09399C8.811 3.79299 8.79697 3.31806 8.49597 3.03406C7.96097 2.52806 7.25599 2.24902 6.51099 2.24902C4.89599 2.24902 3.58105 3.55895 3.58105 5.16895C3.58105 6.55495 4.56597 7.76006 5.92297 8.03406C5.97297 8.04406 6.02302 8.04895 6.07202 8.04895C6.42102 8.04995 6.73303 7.804 6.80603 7.448Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div className=" flex-col justify-start items-center gap-2 flex">
                        <p className={`self-stretch text-center text-indigo-950 text-xl font-bold ${styles["text-font-lato"]}`}>{t('below-title')}</p>
                        <p className={` text-center text-slate-600 text-lg font-normal ${styles["text-font-lato"]} leading-7`}>{t('below-subtitle')}</p>
                    </div>
                    <Button variant='secondary' px='px-[18px]' py='py-2.5' rounded='rounded'>
                        {t('below-button')}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default FAQSection
