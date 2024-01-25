import styles from "../../styles/Landing.module.css"
import Button from '../reusableComponents/Button'

const PricingPlanCard = ({title, price, checklist, icon}) => {
    return (
        <div className="grow shrink basis-0 max-w-[384px] min-w-[280px] bg-white rounded-2xl shadow-xl border border-gray-200 flex-col justify-between items-start inline-flex">
            <>
            <div className="self-stretch px-8 pt-8 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch flex-col justify-start items-center gap-2 flex">
                    <div className="self-stretch flex-col justify-start items-center gap-5 flex">
                        <div className={`w-12 h-12 bg-slate-600 rounded-[28px] border-8 border-slate-500 justify-center items-center inline-flex`}>
                            {icon}
                        </div>
                        <h3 className={`self-stretch text-center text-indigo-950 text-xl font-semibold ${styles["text-font-lato"]}  leading-[30px]`}>{title}</h3>
                    </div>
                    <p className={`self-stretch text-center text-gray-900 text-5xl font-semibold ${styles["text-font-lato"]} leading-[60px]`}>{price}</p>
                    <p className="text-center text-indigo-950 text-base font-normal font-['Inter'] leading-normal">Billed per specific content.</p>
                </div>
            </div>
            <div className="self-stretch p-8 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                    {
                        checklist.map((text, i) => {
                            return (
                                <div key={i}className="self-stretch justify-start items-start gap-3 inline-flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Check icon">
                                        <rect width="24" height="24" rx="12" fill="#F3F2F2"/>
                                        <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M17.096 7.39004L9.93602 14.3L8.03602 12.27C7.68602 11.94 7.13602 11.92 6.73602 12.2C6.34602 12.49 6.23602 13 6.47602 13.41L8.72602 17.07C8.94602 17.41 9.32601 17.62 9.75601 17.62C10.166 17.62 10.556 17.41 10.776 17.07C11.136 16.6 18.006 8.41004 18.006 8.41004C18.906 7.49004 17.816 6.68004 17.096 7.38004V7.39004Z" fill="#494949"/>
                                        </g>
                                    </svg>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <p className={`self-stretch text-gray-500 text-base font-normal ${styles["text-font-lato"]} leading-normal`}>{text}</p>
                                    </div>
                                </div>
                            )
                        })
                        }
                         
                </div>
            </div>
            </>
            <div className="self-stretch p-8 flex-col bg-gray-50 justify-center rounded-b-2xl w-full items-center gap-6 flex">
                <div className="self-stretch w-full">
                    <Button variant='primary' px='px-3.5' py='py-2' rounded='rounded' customStyle="w-full" >
                        <p className={`self-stretch text-white text-base font-normal ${styles["text-font-lato"]} leading-normal`}>Get started</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PricingPlanCard
