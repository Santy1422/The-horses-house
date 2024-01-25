import ErrorPage404 from '@/components/ErrorPageComponents/ErrorPage404';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ErrorPage = () => {

    return(
        <>

        <ErrorPage404 />
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'navigation',
          '404/page-not-found',
          'landing-free-trial',
          'footer'
        ])),
        // Will be passed to the page component as props
      },
    }
  }

export default ErrorPage;
