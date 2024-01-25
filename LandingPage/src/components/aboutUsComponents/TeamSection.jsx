import { useTranslation } from "next-i18next"
import styles from "../../styles/Landing.module.css"
import TeammateCard from "./TeammateCard"



const TeamSection = () => {

    const { t } = useTranslation('about/about-team')

    const teammates = [
        {
            img: '/img/avatar1.png',
            name: 'Marcos Defensa',
            position: "Founder - Product Manager",
            bio: t('bio-1')
        },
        {
            img: '/img/avatar3.png',
            name: 'Mariana Roig',
            position: "Lead Marketing",
            bio: t('bio-2')
        },
        // {
        //     img: '/img/avatar2.png',
        //     name: 'Florencia Ben',
        //     position: "Customer Sucess / Fund raising",
        //     bio: t('bio-3')
        // },
        {
            img: '/img/avatar-about-2.png',
            name: 'Santiago Garcia',
            position: "Back End Developer",
            bio: t('bio-4')
        },
        // {
        //     img: '/img/fede.png',
        //     name: 'Federico Orefici',
        //     position: "Senior UX/UI Designer",
        //     bio: t('bio-5')
        // },
        {
            img: '/img/avatar-about-3.png',
            name: 'Sabrina Graterol',
            position: "Junior UX/UI Designer",
            bio: t('bio-6')
        },
        // {
        //     img: '/img/avatar-about-4.png',
        //     name: 'Agustina Corbalan',
        //     position: "Junior UX/UI Designer",
        //     bio: t('bio-7')
        // },
        {
            img: '/img/moira.png',
            name: 'Moira Brun',
            position: "Front End Developer",
            bio: t('bio-8')
        },
        {
            img: '/img/avatar-about-6.png',
            name: 'Leandro Carrizo',
            position: "Front End Developer",
            bio: t('bio-9')
        },
        {
            img: '/img/avatar-about-7.png',
            name: 'Ramiro Alvarez',
            position: "Full Stack Developer",
            bio: t('bio-10')
        },
        {
            img: '/img/avatar-about-8.png',
            name: 'Santiago Sosa',
            position: "Branding Development",
            bio: t('bio-11')
        },
        {
            img: '/img/lucas.png',
            name: 'Lucas Luna',
            position: "Video Maker",
            bio: t('bio-12')
        },
    ]

    return (
        <>
            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-10 flex">
                    <div className="flex-col justify-start items-center gap-5 flex">
                        <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                            <h4 className={`self-stretch text-center text-custom-violet text-[17px] tracking-wide font-bold ${styles["text-font-lato"]}`}>{ t('chip') }</h4>
                            <h3 className={`self-stretch text-center text-indigo-950 font-bold text-[46px] ${styles["text-font-lato"]}`}>{ t('title') } </h3>
                        </div>
                        <div className="w-full max-w-[768px]">
                        <p className={`self-stretch text-center text-neutral-400 text-xl font-normal ${styles["text-font-lato"]}`}>{ t('subtitle') }</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1280px] px-8 flex-col justify-start items-start inline-flex">
                <div className="w-full mas-w-[1216px] flex flex-wrap justify-center items-start gap-8">
                    {
                        teammates.map((tm, i) => {
                            return <TeammateCard key={i} img={tm.img} name={tm.name} position={tm.position} bio={tm.bio} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TeamSection
