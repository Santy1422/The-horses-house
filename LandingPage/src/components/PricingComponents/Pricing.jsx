import styles from "../../styles/Landing.module.css"
import { Header } from "../landingReusableComponents/Header"
import { Footer } from "../landingReusableComponents/Footer"
import FAQSection from "../landingpageComponents/FAQSection"
import MainSection from "./MainSection"
import FeaturesSection from "./FeaturesSection"
import SocialProofSection from "../landingReusableComponents/SocialProofSection"
import FreeTrialSectionAlt from "./FreeTrialSectionAlt"
import PricingPlanCard from "./PricingPlanCard"
import FreeTrialSection from "../landingpageComponents/FreeTrialSection"
import { useTranslation } from "next-i18next"

const Pricing = () => {

  const { t } = useTranslation('pricing/pricing-title');

  const plans = [
    {
        title: t('plan-1'),
        price: `$1/${t('month')}`,
        desc:  t('plan-1-subtitle'),
        checklist: [
          t('p1-1'),
          t('p1-2'),
          t('p1-3'),
          t('p1-4'),
          t('p1-5')
        ],
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="zap">
        <path id="Icon" d="M10.8333 1.66663L2.5 11.6666H10L9.16667 18.3333L17.5 8.33329H10L10.8333 1.66663Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    },
    {
        title: t('plan-2'),
        price: `$10/${t('month')}`,
        desc: t('plan-1-subtitle'),
        checklist: [
          t('p2-1'),
          t('p2-2'),
          t('p2-3'), 
          t('p2-4'), 
          t('p2-5')
        ],
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="2-layers">
        <path id="Icon" d="M1.66602 12.0833L9.99935 16.25L18.3327 12.0833M9.99935 3.75L1.66602 7.91667L9.99935 12.0833L18.3327 7.91667L9.99935 3.75Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    },
    {
        title: t('plan-3'),
        price: `$25/${t('month')}`,
        desc:  t('plan-1-subtitle'),
        checklist: [
          t('p3-1'),
          t('p3-2'),
          t('p3-3'), 
          t('p3-4'), 
          t('p3-5')
        ],
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="3-layers" clip-path="url(#clip0_5574_48477)">
        <path id="Icon" d="M1.66602 14.1666L9.99935 18.3333L18.3327 14.1666M1.66602 9.99996L9.99935 14.1666L18.3327 9.99996M9.99935 1.66663L1.66602 5.83329L9.99935 9.99996L18.3327 5.83329L9.99935 1.66663Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_5574_48477">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    }
  ]

  return (
    <>
      <Header />
      <div>
        <section className={`${styles["main-section-background"]} w-full pt-24 flex-col justify-start items-center gap-16 inline-flex`} style={{backgroundImage: "url('/img/about-background.jpeg')", backgroundPosition: "right bottom"}}>
          <MainSection />
        </section>

        <section className="flex flex-row items-center justify-center gap-8 relative top-[-55px]">
          <div className="w-full gap-8 flex flex-wrap justify-center px-8 z-10">
                  {
                    plans.map((plan, i) => {
                        return <PricingPlanCard key={i} title={plan.title} price={plan.price} checklist={plan.checklist} icon={plan.icon}/>
                    })
                  }
          </div>
        </section>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex">
          <FreeTrialSectionAlt />
        </section>

        <section className="w-full pb-24 flex-col justify-start items-center gap-16 inline-flex">
          <FeaturesSection />
        </section>

        <section className="w-full pb-24 pt-16 flex-col justify-start items-center gap-16 inline-flex">
          <SocialProofSection text={'Join 4,000+ companies already growing'}/>
        </section>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex">
          <FAQSection />
        </section>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex">
          <FreeTrialSection />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Pricing
