import FooterLinksColumn from "./FooterLinksColumn"
import styles from "../../styles/Footer.module.css"
import { useTranslation } from "next-i18next"
import Logo from "../reusableComponents/Logo"
import Link from "next/link"

export const Footer = () => {
  const { t } = useTranslation('footer')

  const linkColumns = [
    {
      title: t('a'),
      links: [
        {
          name: t('a1'),
          new: true,
          link: '/'
        },
        {
          name: t('a2'),
          new: false,
          link: '/'
        },
        {
          name: t('a3'),
          new: false,
          link: '/'
        },
        {
          name: t('a4'),
          new: false,
          link: '/'
        },
        {
          name: t('a5'),
          new: false,
          link: '/'
        },
        {
          name: t('a6'),
          new: true,
          link: '/'
        },
      ]
    },
    {
      title: t('b'),
      links: [
        {
          name: t('b1'),
          new: false,
          link: '/'
        },
        {
          name: t('b2'),
          new: false,
          link: '/'
        },
        {
          name: t('b3'),
          new: false,
          link: '/'
        },
        {
          name: t('b4'),
          new: false,
          link: '/'
        },
        {
          name: t('b5'),
          new: false,
          link: '/'
        },
        {
          name: t('b6'),
          new: false,
          link: '/'
        },
      ]
    },
    {
      title: t('c'),
      links: [
        {
          name: t('c1'),
          new: false,
          link: '/'
        },
        {
          name: t('c2'),
          new: false,
          link: '/'
        },
        {
          name: t('c3'),
          new: false,
          link: '/'
        },
        {
          name: t('c4'),
          new: false,
          link: '/'
        },
        {
          name: t('c5'),
          new: false,
          link: '/'
        },
        {
          name: t('c6'),
          new: false,
          link: '/'
        },
      ]
    },
    {
      title: t('d'),
      links: [
        {
          name: t('d1'),
          new: false,
          link: '/'
        },
        {
          name: t('d2'),
          new: false,
          link: '/'
        },
        {
          name: t('d3'),
          new: false,
          link: '/'
        },
        {
          name: t('d4'),
          new: false,
          link: '/'
        },
        {
          name: t('d5'),
          new: false,
          link: '/'
        },
        {
          name: t('d6'),
          new: false,
          link: '/'
        },
      ]
    },
    {
      title: t('e'),
      links: [
        {
          name: t('e1'),
          new: true,
          link: '/about/#team'
        },
        {
          name: t('e2'),
          new: true,
          link: '/about/#about-sponsors'
        },
        {
          name: t('e3'),
          new: true,
          link: '/about/#propuestas-trabajo'
        },
        {
          name: t('e4'),
          new: true,
          link: 'https://www.instagram.com/thehorses_house/',
          targetBlank: true
        },
        {
          name: t('e5'),
          new: false,
          link: '/'
        },
        {
          name: t('e6'),
          new: false,
          link: '/'
        },
      ]
    },
    {
      title: t('f'),
      links: [
        {
          name: t('f1'),
          new: false,
          link: '/'
        },
        {
          name: t('f2'),
          new: false,
          link: '/'
        },
        {
          name: t('f3'),
          new: false,
          link: '/'
        },
        {
          name: t('f4'),
          new: false,
          link: '/'
        },
        {
          name: t('f5'),
          new: true,
          link: '/'
        }
      ]
    },
  ]

  return (
    <footer className="w-full pt-16 pb-12 flex-col justify-start items-center gap-16 inline-flex">

      <div className={`max-w-[1280px] px-8 flex-col justify-start items-start gap-12 inline-flex ${styles['container-section-columns']}`}>
        <div className={`flex flex-wrap self-stretch justify-start items-start gap-8 ${styles['container-columns']}`}>
          {

            linkColumns.map((ele, i) => {
              return (<FooterLinksColumn key={i} title={ele.title} links={ele.links} />)
            })
          }
        </div>
      </div>


      <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-px bg-stone-300" />
        <div className="self-stretch flex flex-wrap justify-between items-center">
          <Logo />
          <Link href={"https://www.blackstallion.com.ar/"} target="_blank"><p className="w-full max-w-64 py-8 text-slate-500 text-base font-normal font-lato leading-normal">2023 Black Stallion - Product Design</p></Link>
        </div>
      </div>
    </footer>
  )
}
