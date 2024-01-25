import ErrorPage404 from "@/components/ErrorPageComponents/ErrorPage404"
import Pricing from "@/components/PricingComponents/Pricing"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PricingPage = () => {


    return(
        <>
        <ErrorPage404 />
        {/* <Pricing /> */}
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
        'pricing/pricing-features',
        'pricing/pricing-title',
        'footer',
        'landing-free-trial',
        'FAQ',
        'upcoming',
        '404/page-not-found'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default PricingPage