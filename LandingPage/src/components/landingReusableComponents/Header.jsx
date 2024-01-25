import Link from "next/link"
import styles from "../../styles/Landing.module.css"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { useState } from "react"
import Button from "../reusableComponents/Button"
import Logo from "../reusableComponents/Logo"

export const Header = ({ variant = '' }) => {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation('navigation')
  const {locale, locales, push, pathname} = useRouter()
  
  const handleLangToggle = () => {
    setIsLangOpen(!isLangOpen)
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLang = l => () => {
    push(`${pathname}`, undefined, { locale: l })
    setIsLangOpen(!isLangOpen)
  }

  return (
    <header className={`bg-transparent ${variant === 'fixed' ? '' : 'absolute'} px-[45px] py-[18.3px] top-0 z-20 flex justify-center w-full border-b-[1px] ${ variant === 'fixed' ? 'border-none' : 'border-b-1 border-white'} `}>
      <div className={`w-[1360px] flex items-center ${styles["header-justify-content"]}`}>
        <div className="pr-[33px]">
            <Link href="/">
              <Logo variant={variant !== "fixed" && "secondary"} />
            </Link>
        </div>

        {/* Desktop links */}

        <div className="w-full flex justify-between items-center">
          <ul className={`flex gap-8 text-lg font-semibold ${styles["header-links"]}`}>
            <li className="flex items-center gap-2">
              <Link className={ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } href="/#features-link">{t('events')}</Link>
              {/* <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="angle-down" d="M6.87026 7.90739C6.71026 7.90739 6.55023 7.84658 6.42857 7.72408L0.595234 1.89075C0.351068 1.64658 0.351068 1.25072 0.595234 1.00655C0.839401 0.762384 1.23526 0.762384 1.47943 1.00655L6.87107 6.39819L12.2627 1.00655C12.5069 0.762384 12.9027 0.762384 13.1469 1.00655C13.3911 1.25072 13.3911 1.64658 13.1469 1.89075L7.31358 7.72408C7.19024 7.84658 7.03026 7.90739 6.87026 7.90739Z" fill={ variant === 'fixed' ? '#231d43' : '#fff' }/>
              </svg> */}
            </li>
            <li className="flex items-center gap-2">
              <Link className={ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } href="/#features-link">{t('services')}</Link>
              {/* <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="angle-down" d="M6.87026 7.90739C6.71026 7.90739 6.55023 7.84658 6.42857 7.72408L0.595234 1.89075C0.351068 1.64658 0.351068 1.25072 0.595234 1.00655C0.839401 0.762384 1.23526 0.762384 1.47943 1.00655L6.87107 6.39819L12.2627 1.00655C12.5069 0.762384 12.9027 0.762384 13.1469 1.00655C13.3911 1.25072 13.3911 1.64658 13.1469 1.89075L7.31358 7.72408C7.19024 7.84658 7.03026 7.90739 6.87026 7.90739Z" fill={ variant === 'fixed' ? '#231d43' : '#fff' }/>
              </svg> */}
            </li>
            <li className="flex items-center gap-2">
              <Link className={ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } href="/#features-link">{t('horses')}</Link>
              {/* <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="angle-down" d="M6.87026 7.90739C6.71026 7.90739 6.55023 7.84658 6.42857 7.72408L0.595234 1.89075C0.351068 1.64658 0.351068 1.25072 0.595234 1.00655C0.839401 0.762384 1.23526 0.762384 1.47943 1.00655L6.87107 6.39819L12.2627 1.00655C12.5069 0.762384 12.9027 0.762384 13.1469 1.00655C13.3911 1.25072 13.3911 1.64658 13.1469 1.89075L7.31358 7.72408C7.19024 7.84658 7.03026 7.90739 6.87026 7.90739Z" fill={ variant === 'fixed' ? '#231d43' : '#fff' }/>
              </svg> */}
            </li>
            <li className="flex items-center gap-2">
              <Link className={ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } href="/#features-link">{t('equipment')}</Link>
              {/* <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="angle-down" d="M6.87026 7.90739C6.71026 7.90739 6.55023 7.84658 6.42857 7.72408L0.595234 1.89075C0.351068 1.64658 0.351068 1.25072 0.595234 1.00655C0.839401 0.762384 1.23526 0.762384 1.47943 1.00655L6.87107 6.39819L12.2627 1.00655C12.5069 0.762384 12.9027 0.762384 13.1469 1.00655C13.3911 1.25072 13.3911 1.64658 13.1469 1.89075L7.31358 7.72408C7.19024 7.84658 7.03026 7.90739 6.87026 7.90739Z" fill={ variant === 'fixed' ? '#231d43' : '#fff' }/>
              </svg> */}
            </li>
            <li>
              <Link className={ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } locale={locale} href="/about">{t('aboutUs')}</Link>
            </li>
            {/* <li>
              <Link className={ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } locale={locale} href="/pricing">{t('pricing')}</Link>
              </li> */}
          </ul>

          <div className={`relative ${styles["header-links"]} px-6 h-9 items-center flex gap-3`}>

            <Button px='px-3.5' py='py-2' variant={`${variant === 'fixed' ? "other-style" : "other-style-alt"}`} action={() => push('https://dashboard.thehorseshouse.com/')}>{t('login')}</Button>
            
            <Button variant='primary' px='px-3.5' py='py-2' rounded='rounded-[4px]' action={() => push('https://dashboard.thehorseshouse.com/register/registerOnboarding')} >
              {t('signUp')}
            </Button>

            <button className="w-auto justify-start items-start inline-flex" onClick={handleLangToggle}>
              <div className={`flex pl-2.5 pr-2 py-0.5 items-center justify-center gap-2.5 rounded-2xl border ${ variant === 'fixed' ? 'border-indigo-950' : 'border-white'}`}>
                <p className={` ${ variant === 'fixed' ? 'text-indigo-950' : 'text-white' } text-base tracking-wide font-normal leading-normal ${styles["text-font-lato"]}`}>{ t('abbreviation') }</p>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="angle-down" d="M6.87026 7.90739C6.71026 7.90739 6.55023 7.84658 6.42857 7.72408L0.595234 1.89075C0.351068 1.64658 0.351068 1.25072 0.595234 1.00655C0.839401 0.762384 1.23526 0.762384 1.47943 1.00655L6.87107 6.39819L12.2627 1.00655C12.5069 0.762384 12.9027 0.762384 13.1469 1.00655C13.3911 1.25072 13.3911 1.64658 13.1469 1.89075L7.31358 7.72408C7.19024 7.84658 7.03026 7.90739 6.87026 7.90739Z" fill={ variant === 'fixed' ? '#231d43' : '#fff' }/>
                </svg>
              </div>
            </button>

            <ul className={`border max-w-[100px] border-stone-300 ${styles["header-lang-links"]} ${isLangOpen ? `${styles["open"]}` : ''}`}>
              {
                locales.map(l => {
                  return <li key={l}><button className="text-black" onClick={handleLang(l)}>{t(`${l}`)}</button></li>
                })
              }
            </ul>
          </div>

          
        </div>
        
        {/* Mobile links */}

        <div className={`${styles["menu-mobile"]}`}>
          <svg onClick={handleMenuToggle} width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="menu">
              <path id="menu_2" d="M2 6C2 5.448 2.448 5 3 5H21C21.552 5 22 5.448 22 6C22 6.552 21.552 7 21 7H3C2.448 7 2 6.552 2 6ZM21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17Z" fill={ variant === 'fixed' ? '#231d43' : '#fff' }/>
            </g>
          </svg>
        </div>
        {
          isMenuOpen && 
          
          <div className="fixed top-0 left-0 z-30 bg-indigo-950 h-[100vh] w-[100vw]">
            <div className="flex align-center justify-between px-4 py-2 border-b-[1px] border-b-white">
              <Logo variant="secondary" />
              <button className="text-white" onClick={handleMenuToggle}>Close</button>
            </div>

            <div className="">
              <ul className={`flex flex-col justify-between items-center h-[30vh] px-4 pt-4`}>
                <li><Link className="text-white hover:text-slate-300" href="/#features-link">{t('services')}</Link></li>
                <li><Link className="text-white hover:text-slate-300" href="/#features-link">{t('events')}</Link></li>
                <li><Link className="text-white hover:text-slate-300" href="/#features-link">{t('horses')}</Link></li>
                <li><Link className="text-white hover:text-slate-300" href="/#features-link">{t('equipment')}</Link></li>
                <li><Link className="text-white hover:text-slate-300" locale={locale} href="/about">{t('aboutUs')}</Link></li>
                {/* <li><Link className="text-white hover:text-slate-300" locale={locale} href="/pricing">{t('pricing')}</Link></li> */}
              </ul>
            </div>
            
          </div>
        }
        
      </div>
    </header>
  )
}
