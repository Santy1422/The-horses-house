import AboutUs from '@/components/aboutUsComponents/AboutUs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const AboutUsPage = () => {


    return(
        <>
        
        <AboutUs />
        </>
    )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'pricing-main',
        'landing-sponsors',
        'navigation',
        'landing-features',
        'about/about-main',
        'about/about-carrers',
        'about/about-features',
        'about/about-metrics',
        'about/about-team',
        'landing-free-trial',
        'footer',
        'upcoming'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default AboutUsPage