import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import FeatureAlt from "./FeatureAlt"

const FeaturesSection = () => {
    const { t } = useTranslation('about/about-features');

    const features = [
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="users">
            <path id="Icon" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>,
            text: t('text-1'),
            supporting: t('supporting-1'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="heart">
            <path id="Icon" d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>,
            text: t('text-2'),
            supporting: t('supporting-2'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="trending-up">
            <path id="Icon" d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>,
            text: t('text-3'),
            supporting: t('supporting-3'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="smile">
            <path id="Icon" d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>,
            text: t('text-4'),
            supporting: t('supporting-4'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="flag">
            <path id="Icon" d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>        
            ,
            text: t('text-5'),
            supporting: t('supporting-5'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="zap">
            <path id="Icon" d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>,
            text: t('text-6'),
            supporting: t('supporting-6'),
            working: true
        },
    ]

    return (
        <>
            {/* Primer container */}
            <div className="max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-center gap-12 inline-flex">
                <div className="max-w-[768px] flex-col justify-start items-center gap-5 inline-flex">
                    <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                        <div className="justify-start items-start inline-flex">
                            <div className="px-2.5 py-0.5 bg-transparent rounded-2xl justify-center items-center gap-1.5 flex">
                                <p className={`text-center text-custom-violet text-[17px] tracking-wide font-bold ${styles["text-font-lato"]} leading-tight`}>{ t('chip') }</p>
                            </div>
                        </div>
                        <h3 className={`self-stretch text-center text-indigo-950 ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]}`}>{ t('title') }</h3>
                    </div>
                    <p className={`self-stretch text-center text-gray-500 ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]}`}>{ t('subtitle') }</p>
                </div>
                </div>
            </div>

            {/* Segundo container */}
            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-center gap-24 inline-flex">

                {/* Content features */}
                <div className="flex flex-wrap self-stretch justify-center items-start gap-8">
                    {
                        features.map((feature, i) => {
                            return <FeatureAlt key={i} svg={feature.svg} text={feature.text} supporting={feature.supporting} ifMore={false} working={feature.working} width={'384px'} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturesSection