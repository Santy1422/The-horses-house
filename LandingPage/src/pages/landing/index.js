import { Landing } from "@/components/landingpageComponents/Landing"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const LandingPage = () => {
    return(
        <>
        
        <Landing />
        </>
    )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'landing-main',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default LandingPage