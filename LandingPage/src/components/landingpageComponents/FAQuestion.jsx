import { useState } from "react"
import styles from "../../styles/Landing.module.css"

const FAQuestion = ({q, a}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="w-full flex-col justify-start items-center gap-6 inline-flex">
        <div className="self-stretch justify-start items-start pt-8 border-t-2 border-t-stone-300 gap-6 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <p className={`self-stretch text-indigo-950 text-lg font-bold ${styles["text-font-lato"]} leading-relaxed`}>{q}</p>
                <p className={`self-stretch text-slate-600 text-base font-normal ${styles["text-font-lato"]} ${styles["question"]} ${isOpen ? `${styles["active"]}` : ''} leading-normal`}>{a}</p>
            </div>

            {
                isOpen ? 
                <button className="pt-0.5 flex-col justify-start items-start inline-flex"  onClick={toggleIsOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="minus-circle">
                            <path id="minus-circle_2" d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.25 12C16.25 12.414 15.914 12.75 15.5 12.75H8.5C8.086 12.75 7.75 12.414 7.75 12C7.75 11.586 8.086 11.25 8.5 11.25H15.5C15.914 11.25 16.25 11.586 16.25 12Z" fill="#4949A9"/>
                        </g>
                    </svg>
                </button>
                :
                <button className="pt-0.5 flex-col justify-start items-start inline-flex" onClick={toggleIsOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="plus-circle">
                            <path id="plus-circle_2" d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.25 12C16.25 12.414 15.914 12.75 15.5 12.75H12.75V15.5C12.75 15.914 12.414 16.25 12 16.25C11.586 16.25 11.25 15.914 11.25 15.5V12.75H8.5C8.086 12.75 7.75 12.414 7.75 12C7.75 11.586 8.086 11.25 8.5 11.25H11.25V8.5C11.25 8.086 11.586 7.75 12 7.75C12.414 7.75 12.75 8.086 12.75 8.5V11.25H15.5C15.914 11.25 16.25 11.586 16.25 12Z" fill="#4949A9"/>
                        </g>
                    </svg>
                </button>
            }

        </div>
    </div>
  )
}

export default FAQuestion
