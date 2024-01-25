import { Footer } from "../landingReusableComponents/Footer"
import { Header } from "../landingReusableComponents/Header"
import styles from "../../styles/Landing.module.css"
import MainSection from "./MainSection"
import FeaturesSection from "./FeaturesSection"
import QuoteSection from "./QuoteSection"
import AdFeaturesSection from "./AdFeaturesSection"
import FAQSection from "./FAQSection"
import MetricsSection from "./MetricsSection"
import FreeTrialSection from "./FreeTrialSection"
import SocialProofSection from "../landingReusableComponents/SocialProofSection"
import VideoPlayer from "./VideoPlayer"

export const Landing = () => {
  return (
    <>
      <Header />
      <div>
        <section className={`${styles["main-section-background"]} overflow-hidden w-full rounded-b-[2rem] pt-24 flex-col justify-start items-center gap-16 inline-flex`}>

          <MainSection />

          <div className={`${styles["video-player-container"]} max-w-[1216px] z-10 px-6 py-6 rounded-t-[2rem] border-t-2 border-l-2 border-r-2 border-slate-800 bg-black`}>
            <VideoPlayer />
          </div>

        </section>

        <section className="w-full py-24 justify-center items-start inline-flex">
          <SocialProofSection text={'Contamos con el apoyo de nuestros sponsors ecuestres y de tecnología'} />
        </section>

        <div className={`${styles["divider"]}`} id="features-link"></div>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex">
          <FeaturesSection />
        </section>

        <section className="w-full py-24 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex">
          <QuoteSection />
        </section>

        <section className="w-full py-24 pb-0 flex-col justify-start items-center gap-16 inline-flex">
          <AdFeaturesSection />
        </section>

        <section className="w-full py-4 flex-col justify-start items-center gap-16 inline-flex">
          <FAQSection />
        </section>

        {/* <div className={`${styles["divider"]}`}></div> */}

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex">
          <MetricsSection />
        </section>

        <section className="w-full pt-[72px] pb-24 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex">
          <FreeTrialSection />
        </section>
      </div>
      <Footer />
    </>
  )
}
