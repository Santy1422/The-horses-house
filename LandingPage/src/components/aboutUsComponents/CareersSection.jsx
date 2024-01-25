import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import Button from "../reusableComponents/Button"
import JobPositionCard from "./JobPositionCard"
import Link from "next/link"



const CareersSection = () => {
    const { t } = useTranslation('about/about-carrers')

    const design = [
        {
            position: 'Product Designer',
            description: 'product-designer',
            salary: 'salary',
            hours: 'Full-time'
        },
        {
            position: 'UX Designer',
            description: 'ux-designer',
            salary: 'salary',
            hours: 'Full-time'
        }
    ]

    const software = [
        {
            position: 'Engineering Manager',
            description: 'engineering-manager',
            salary: 'salary',
            hours: 'Full-time'
        },
        {
            position: 'Frontend Developer',
            description: 'frontend-developer',
            salary: 'salary',
            hours: 'Full-time'
        },
        {
            position: 'Backend Developer',
            description: 'backend-developer',
            salary: 'salary',
            hours: 'Full-time'
        },
    ]

    const customerSuccess = [
        {
            position: 'Customer Success Manager',
            description: 'customer-success-manager',
            salary: 'salary',
            hours: 'Full-time'
        }
    ]

    return (
        <>
            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-12 flex">
                    <div className="flex-col justify-start items-center gap-5 flex">
                        <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                            <div className="mix-blend-multiply justify-start items-start inline-flex">
                                <div className="px-3 py-1 bg-purple-50 rounded-2xl justify-center items-center flex">
                                    <p className={`text-center text-custom-violet text-sm font-normal tracking-wide ${styles["text-font-lato"]} leading-tight`}>{t('chip')}</p>
                                </div>
                            </div>
                            <h3 className={`self-stretch text-center text-gray-900 ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]} leading-[42px]`}>{t('title')}</h3>
                        </div>
                        <h4 className={`self-stretch text-center text-zinc-600 tracking-wide ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]} leading-[30px]`}>{t('subtitle')}</h4>
                    </div>
                    <div className="flex flex-row flex-wrap gap-7 items-center justify-center">
                        <Link href={"https://www.linkedin.com/company/black-stallion-product-design/"} target="_blank">
                            <Button variant='primary-alt' rounded='rounded' px='px-[18px]' py='py-2.5' customStyle="min-w-[179px]">
                                {t('button-text-1')}
                            </Button>
                        </Link>
                        <Link href="/about/#propuestas-trabajo">
                            <Button variant='primary' rounded='rounded' px='px-[18px]' py='py-2.5' customStyle="min-w-[179px]">
                                {t('button-text-2')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                <img className="w-full max-w-[1216px] bg-slate-800 bg-opacity-20" src="/img/carrer-img.jpg" />
            </div>

            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-center gap-8 inline-flex" id="propuestas-trabajo">

                <div className="w-full max-w-[768px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className={`self-stretch text-gray-900 text-xl font-semibold ${styles["text-font-lato"]}`}>Diseño</div>
                    {
                        design.map((job, i) => {
                            return <JobPositionCard key={i} position={job.position} description={job.description} salary={job.salary} hours={job.hours} />
                        })
                    }
                </div>

                <div className="w-full max-w-[768px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className={`self-stretch text-gray-900 text-xl font-semibold ${styles["text-font-lato"]}`}>Desarrollo</div>
                    {
                        software.map((job, i )=> {
                            return <JobPositionCard key={i} iposition={job.position} description={job.description} salary={job.salary} hours={job.hours} />
                        })
                    }
                </div>

                <div className="w-full max-w-[768px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className={`self-stretch text-gray-900 text-xl font-semibold ${styles["text-font-lato"]}`}>Customer Success</div>
                    {
                        customerSuccess.map((job, i) => {
                            return <JobPositionCard key={i} position={job.position} description={job.description} salary={job.salary} hours={job.hours} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CareersSection
