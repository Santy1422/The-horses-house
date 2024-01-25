import Link from 'next/link'
import styles from "../../styles/Landing.module.css"
import stylesFooter from "../../styles/Footer.module.css"
import { useTranslation } from 'next-i18next'

const FooterLinksColumn = ({ title, links }) => {
    const { t } = useTranslation('upcoming')
    return (
        <div className={`w-full max-w-[280px] flex-col justify-start items-start gap-4 inline-flex ${stylesFooter['container-column-general']}`}>
            <p className={`text-gray-400 text-sm flex font-bold ${stylesFooter['column-title']} ${styles["text-font-lato"]} leading-tight`}>{title}</p>
            <div className={`self-stretch flex-col justify-start items-start gap-3 flex ${stylesFooter['container-links']}`}>
                {

                    links.map((link, i) => {
                        return (
                            <div key={i} className='w-full flex justify-between items-center'>
                                {
                                    link.targetBlank ?
                                        <Link className={`${styles["text-font-lato"]} ${stylesFooter['link-column']}`} href={link.link} target="_blank" >{link.name}</Link>
                                        :
                                        <Link className={`${styles["text-font-lato"]} ${stylesFooter['link-column']}`} href={link.link} >{link.name}</Link>
                                }

                                {!link.new && (
                                    <div className="ml-1 w-[117px] h-6 px-2.5 py-0.5 bg-black rounded-2xl justify-center items-center inline-flex opacity-70">
                                        <div className="text-center text-white text-sm font-small">{t('upcoming')}</div>
                                    </div>
                                )}
                            </div>)
                    })



                }
            </div>
        </div>
    )
}

export default FooterLinksColumn
