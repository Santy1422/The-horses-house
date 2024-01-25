import styles from "../../styles/Landing.module.css"
import MainSection from './MainSection'
import { Header } from '../landingReusableComponents/Header'
import { Footer } from '../landingReusableComponents/Footer'
import MetricsSection from "./MetricsSection"
import SocialProofSection from "../landingReusableComponents/SocialProofSection"
import TeamSection from "./TeamSection"
import FeaturesSection from "./FeaturesSection"
import CareersSection from "./CareersSection"
import FreeTrialSection from "../landingpageComponents/FreeTrialSection"

const AboutUs = () => {
  return (
    <>
      <Header />
      <div>
        <section className={`${styles["main-section-background"]} w-full pt-24 flex-col justify-start items-center gap-16 inline-flex`} style={{backgroundImage: "url('/img/about-background.jpeg')", backgroundPosition: "right bottom"}}>
          <MainSection />
        </section>

        <section className="w-full py-24 flex-col bg-zinc-100 justify-start items-center gap-16 inline-flex">
          <MetricsSection />
        </section>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex" id="about-sponsors">
          <SocialProofSection text={'From startups to the world’s largest companies'} />
        </section>

        <div className={`${styles["divider"]}`}></div>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex" id="team">
          <TeamSection />
        </section>

        <section className="w-full py-24 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex">
          <FeaturesSection />
        </section>

        <section className="w-full py-24 flex-col justify-start items-center gap-16 inline-flex">
          <CareersSection />
        </section>

        <section className="w-full py-24 bg-zinc-100 flex-col justify-start items-center gap-16 inline-flex">
          <FreeTrialSection />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
