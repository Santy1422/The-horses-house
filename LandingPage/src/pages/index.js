import { Landing } from "@/components/landingpageComponents/Landing";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ErrorPage404 from "@/components/ErrorPageComponents/ErrorPage404";
// import { useEffect, useState } from "react";
// import LoadingComponent from "../components/landingReusableComponents/LoadingComponent"

const Home = () => {
  // const [isLandingLoaded, setIsLandingLoaded] = useState(false)

  return (
    <>
      <Landing />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'landing-main',
        'landing-sponsors',
        'navigation',
        'landing-features',
        'landing-quote',
        'landing-ad-features',
        'FAQ',
        'footer',
        'metrics-landing',
        'landing-free-trial',
        'about/about-main',
        'about/about-carrers',
        'about/about-features',
        'about/about-metrics',
        'about/about-team',
        'pricing/pricing-features',
        'pricing/pricing-title',
        'upcoming'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Home;
