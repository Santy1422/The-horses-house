import styles from "../../styles/Landing.module.css"

const MetricsItem = ({number, text, supporting, supportingOn}) => {
  return (
    <div className="min-w-[43%] max-w-[248px] grow shrink basis-0 flex-col justify-start items-center gap-5 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
            <h4 className={`self-stretch text-indigo-800 text-[58px] text-center font-bold ${styles["text-font-lato"]}`}>{number}</h4>
            <div className="self-stretch flex-col justify-center items-center flex gap-3">
                <p className={`self-stretch text-custom-black text-xl text-center font-bold ${styles["text-font-lato"]}`}>{text}</p>
                {
                  supportingOn && <p className={`self-stretch text-center text-slate-600 text-base font-normal ${styles["text-font-lato"]}`}>{supporting}</p>
                }
            </div>
        </div>
    </div>
  )
}

export default MetricsItem
