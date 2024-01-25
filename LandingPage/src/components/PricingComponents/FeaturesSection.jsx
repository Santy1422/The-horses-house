import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import Feature from "../landingReusableComponents/Feature"

const FeaturesSection = () => {
    const { t } = useTranslation('pricing/pricing-features');

    const features = [
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="envelope">
            <path id="envelope_2" d="M18 20.75H6C3.582 20.75 2.25 19.418 2.25 17V8C2.25 5.582 3.582 4.25 6 4.25H18C20.418 4.25 21.75 5.582 21.75 8V17C21.75 19.418 20.418 20.75 18 20.75ZM6 5.75C4.423 5.75 3.75 6.423 3.75 8V17C3.75 18.577 4.423 19.25 6 19.25H18C19.577 19.25 20.25 18.577 20.25 17V8C20.25 6.423 19.577 5.75 18 5.75H6ZM13.0291 13.179L17.9409 9.60699C18.2759 9.36399 18.35 8.89401 18.106 8.55901C17.863 8.22501 17.3951 8.149 17.0581 8.394L12.146 11.966C12.058 12.03 11.941 12.03 11.853 11.966L6.94092 8.394C6.60292 8.149 6.13607 8.22601 5.89307 8.55901C5.64907 8.89401 5.72311 9.36299 6.05811 9.60699L10.97 13.18C11.278 13.404 11.639 13.515 11.999 13.515C12.359 13.515 12.7221 13.403 13.0291 13.179Z" fill="url(#paint0_linear_3227_620)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_3227_620" x1="12" y1="4.25" x2="12" y2="20.75" gradientUnits="userSpaceOnUse">
            <stop offset="0.585635" stop-color="#F9F8FD"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
            </svg>,
            text: t('f1-title'),
            supporting: t('f1-sub'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="bolt-alt">
            <path id="bolt-alt_2" d="M10 21.7498C9.91001 21.7498 9.81903 21.7338 9.73103 21.6998C9.44103 21.5888 9.25001 21.3098 9.25001 20.9998V13.7498H5.00001C4.70401 13.7498 4.43602 13.5758 4.31502 13.3048C4.19402 13.0338 4.24503 12.7178 4.44203 12.4978L13.442 2.4978C13.65 2.2668 13.978 2.1878 14.268 2.2998C14.558 2.4108 14.749 2.6898 14.749 2.9998V10.2498H19C19.296 10.2498 19.564 10.4238 19.685 10.6948C19.806 10.9658 19.755 11.2818 19.558 11.5018L10.558 21.5018C10.413 21.6628 10.208 21.7498 10 21.7498ZM6.68404 12.2498H10C10.414 12.2498 10.75 12.5858 10.75 12.9998V19.0458L17.316 11.7498H14C13.586 11.7498 13.25 11.4138 13.25 10.9998V4.95379L6.68404 12.2498Z" fill="white"/>
            </g>
            </svg>,
            text: t('f2-title'),
            supporting: t('f2-sub'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="chart-bar-alt">
            <path id="chart-bar-alt_2" d="M12.5 2.25H11.5C10.091 2.25 9.25 3.091 9.25 4.5V19.5C9.25 20.909 10.091 21.75 11.5 21.75H12.5C13.909 21.75 14.75 20.909 14.75 19.5V4.5C14.75 3.091 13.909 2.25 12.5 2.25ZM13.25 19.5C13.25 20.089 13.089 20.25 12.5 20.25H11.5C10.911 20.25 10.75 20.089 10.75 19.5V4.5C10.75 3.911 10.911 3.75 11.5 3.75H12.5C13.089 3.75 13.25 3.911 13.25 4.5V19.5ZM19.5 7.25H18.5C17.091 7.25 16.25 8.091 16.25 9.5V19.5C16.25 20.909 17.091 21.75 18.5 21.75H19.5C20.909 21.75 21.75 20.909 21.75 19.5V9.5C21.75 8.091 20.909 7.25 19.5 7.25ZM20.25 19.5C20.25 20.089 20.089 20.25 19.5 20.25H18.5C17.911 20.25 17.75 20.089 17.75 19.5V9.5C17.75 8.911 17.911 8.75 18.5 8.75H19.5C20.089 8.75 20.25 8.911 20.25 9.5V19.5ZM5.5 11.25H4.5C3.091 11.25 2.25 12.091 2.25 13.5V19.5C2.25 20.909 3.091 21.75 4.5 21.75H5.5C6.909 21.75 7.75 20.909 7.75 19.5V13.5C7.75 12.091 6.909 11.25 5.5 11.25ZM6.25 19.5C6.25 20.089 6.089 20.25 5.5 20.25H4.5C3.911 20.25 3.75 20.089 3.75 19.5V13.5C3.75 12.911 3.911 12.75 4.5 12.75H5.5C6.089 12.75 6.25 12.911 6.25 13.5V19.5Z" fill="white"/>
            </g>
            </svg>,
            text: t('f3-title'),
            supporting: t('f3-sub'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="users-group-alt">
            <path id="users-group-alt_2" d="M16.08 10.389C16.196 9.99204 16.611 9.764 17.011 9.88C17.102 9.907 17.209 9.92004 17.34 9.92004C18.211 9.92004 18.92 9.20696 18.92 8.32996C18.92 7.61296 18.436 6.98603 17.741 6.80603C17.34 6.70203 17.099 6.29199 17.204 5.89099C17.307 5.48999 17.714 5.25203 18.118 5.35303C19.473 5.70503 20.42 6.92898 20.42 8.32898C20.42 10.033 19.038 11.4189 17.34 11.4189C17.065 11.4189 16.819 11.386 16.589 11.319C16.191 11.203 15.964 10.787 16.08 10.389ZM18.897 11.931C18.887 11.931 18.878 11.931 18.87 11.931C18.468 11.931 18.135 12.2491 18.121 12.6541C18.105 13.0681 18.429 13.4151 18.843 13.4301C21.076 13.5111 21.25 15.425 21.25 16.01V18C21.25 18.414 21.586 18.75 22 18.75C22.414 18.75 22.75 18.414 22.75 18V16.01C22.75 14.192 21.741 12.033 18.897 11.931ZM6.67004 11.42C6.94504 11.42 7.19102 11.3869 7.42102 11.3199C7.81802 11.2029 8.04605 10.787 7.93005 10.389C7.81405 9.99204 7.39802 9.764 6.99902 9.88C6.90802 9.907 6.80104 9.92004 6.67004 9.92004C5.79904 9.92004 5.08997 9.20696 5.08997 8.32996C5.08997 7.60696 5.57795 6.97602 6.27795 6.79602C6.67795 6.69302 6.92102 6.28406 6.81702 5.88306C6.71302 5.48106 6.30295 5.23799 5.90295 5.34399C4.54195 5.69499 3.59094 6.92296 3.59094 8.32996C3.58994 10.034 4.97204 11.42 6.67004 11.42ZM5.85901 12.65C5.84201 12.236 5.50196 11.909 5.07996 11.931C2.25296 12.045 1.25 14.2 1.25 16.01V18C1.25 18.414 1.586 18.75 2 18.75C2.414 18.75 2.75 18.414 2.75 18V16.01C2.75 15.263 2.98299 13.5161 5.14099 13.4301C5.55499 13.4131 5.87601 13.064 5.85901 12.65ZM8.25806 7C8.25806 4.932 9.94106 3.25 12.0081 3.25C14.0751 3.25 15.7581 4.932 15.7581 7C15.7581 9.068 14.0751 10.75 12.0081 10.75C9.94106 10.75 8.25806 9.068 8.25806 7ZM9.75806 7C9.75806 8.241 10.7681 9.25 12.0081 9.25C13.2481 9.25 14.2581 8.241 14.2581 7C14.2581 5.759 13.2481 4.75 12.0081 4.75C10.7681 4.75 9.75806 5.759 9.75806 7ZM13.777 12.139H10.222C6.38705 12.139 5.02698 14.946 5.02698 17.35V20C5.02698 20.414 5.36298 20.75 5.77698 20.75C6.19098 20.75 6.52698 20.414 6.52698 20V17.35C6.52698 16.479 6.79405 13.639 10.222 13.639H13.777C17.206 13.639 17.472 16.479 17.472 17.35V20C17.472 20.414 17.808 20.75 18.222 20.75C18.636 20.75 18.972 20.414 18.972 20V17.35C18.973 14.946 17.612 12.139 13.777 12.139Z" fill="white"/>
            </g>
            </svg>,
            text: t('f4-title'),
            supporting: t('f4-sub'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="vector">
            <path id="vector_2" d="M21.751 5.5V4.5C21.751 3.091 20.91 2.25 19.501 2.25H18.501C17.18 2.25 16.368 2.996 16.27 4.25H7.73096C7.63396 2.996 6.821 2.25 5.5 2.25H4.5C3.091 2.25 2.25 3.091 2.25 4.5V5.5C2.25 6.821 2.996 7.63301 4.25 7.73001V16.269C2.996 16.366 2.25 17.178 2.25 18.499V19.499C2.25 20.908 3.091 21.749 4.5 21.749H5.5C6.821 21.749 7.63296 21.003 7.73096 19.749H16.27C16.367 21.003 17.18 21.749 18.501 21.749H19.501C20.91 21.749 21.751 20.908 21.751 19.499V18.499C21.751 17.178 21.005 16.366 19.751 16.269V7.73001C21.005 7.63301 21.751 6.821 21.751 5.5ZM17.751 4.5C17.751 3.911 17.912 3.75 18.501 3.75H19.501C20.09 3.75 20.251 3.911 20.251 4.5V5.5C20.251 6.089 20.09 6.25 19.501 6.25H18.501C17.912 6.25 17.751 6.089 17.751 5.5V4.5ZM16.27 18.25H7.73096C7.63996 17.08 6.921 16.36 5.75 16.27V7.73099C6.92 7.63999 7.63996 6.92101 7.73096 5.75101H16.27C16.361 6.92101 17.08 7.64099 18.251 7.73099V16.27C17.081 16.36 16.361 17.08 16.27 18.25ZM3.75098 5.5V4.5C3.75098 3.911 3.91198 3.75 4.50098 3.75H5.50098C6.08998 3.75 6.25098 3.911 6.25098 4.5V5.5C6.25098 6.089 6.08998 6.25 5.50098 6.25H4.50098C3.91198 6.25 3.75098 6.089 3.75098 5.5ZM6.25098 19.5C6.25098 20.089 6.08998 20.25 5.50098 20.25H4.50098C3.91198 20.25 3.75098 20.089 3.75098 19.5V18.5C3.75098 17.911 3.91198 17.75 4.50098 17.75H5.50098C6.08998 17.75 6.25098 17.911 6.25098 18.5V19.5ZM20.251 18.5V19.5C20.251 20.089 20.09 20.25 19.501 20.25H18.501C17.912 20.25 17.751 20.089 17.751 19.5V18.5C17.751 17.911 17.912 17.75 18.501 17.75H19.501C20.09 17.75 20.251 17.911 20.251 18.5Z" fill="white"/>
            </g>
            </svg>
            ,
            text: t('f5-title'),
            supporting: t('f5-sub'),
            working: true
        },
        {
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="comment">
            <path id="comment_2" d="M3.85693 21.75C3.71193 21.75 3.57111 21.748 3.43311 21.743C2.93311 21.731 2.49497 21.411 2.32397 20.928C2.15197 20.442 2.29408 19.9131 2.68408 19.5811C3.61608 18.8291 3.98892 17.997 4.13892 17.426C2.90192 15.947 2.24902 14.08 2.24902 12.001C2.24902 6.84798 6.25902 3.25 11.999 3.25C17.739 3.25 21.749 6.84898 21.749 12.001C21.749 17.153 17.739 20.752 11.999 20.752C10.812 20.752 9.67398 20.591 8.60498 20.2729C7.24198 21.4599 5.36393 21.75 3.85693 21.75ZM3.47803 20.243C3.48003 20.243 3.48189 20.243 3.48389 20.243C3.48089 20.244 3.47903 20.244 3.47803 20.243ZM12 4.75C7.143 4.75 3.75 7.73198 3.75 12.001C3.75 13.837 4.35498 15.463 5.50098 16.703C5.65598 16.871 5.72692 17.101 5.69092 17.328C5.52292 18.399 4.99511 19.412 4.18311 20.243C5.34311 20.201 6.90304 19.934 7.86304 18.91C8.06404 18.694 8.37503 18.617 8.65503 18.714C9.69003 19.072 10.815 19.2531 12 19.2531C16.857 19.2531 20.25 16.271 20.25 12.002C20.25 7.73295 16.857 4.75 12 4.75Z" fill="white"/>
            </g>
            </svg>,
            text: t('f6-title'),
            supporting: t('f6-sub'),
            working: true
        },
    ]


    return (
        <>
            {/* Primer container */}
            <div className="w-full max-w-[1280px] px-8 flex-col gap-8 flex items-start justify-start">
                <div className="w-full max-w-[768px] flex-col justify-start items-start gap-5 flex">
                        <div className="self-stretch flex-col gap-4 flex">
                            <div className="justify-start items-start inline-flex">
                                <p className={`text-violet-700 text-base font-semibold leading-tight`}>{ t('subheading') } </p>
                            </div>
                            <h3 className={`self-stretch text-indigo-950 ${styles["features-title-size"]} font-bold ${styles["text-font-lato"]}`}>{ t('title') }</h3>
                        </div>
                        <p className={`self-stretch text-gray-500 ${styles["features-subtitle-size"]} font-normal ${styles["text-font-lato"]}`}>{ t('subtitle') }</p>
                </div>
            </div>

            {/* Segundo container */}
            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-center gap-24 inline-flex">

                {/* Content features */}
                <div className="flex flex-wrap py-3 self-stretch justify-center items-start gap-8">
                    {
                        features.map((feature, i) => {
                            return <Feature key={i} svg={feature.svg} text={feature.text} supporting={feature.supporting} working={feature.working} ifMore={true} width={'384px'} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturesSection