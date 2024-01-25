import styles from "../../styles/Landing.module.css"

const Button = ({variant, action = () => {}, children, px, py, rounded, customStyle = ''}) => {
    let variantStyle = ''
    if (variant === 'primary') {
        variantStyle = 'border-indigo-950 bg-indigo-950 text-white'
    } else if (variant === 'primary-alt') {
        variantStyle = 'border-indigo-950 bg-white text-indigo-950'
    } else if (variant === 'secondary') {
        variantStyle = 'border-indigo-800 bg-indigo-800 text-white'
    } else if (variant === 'secondary-alt') {
        variantStyle = 'border-indigo-800 bg-white text-indigo-800'
    } else if (variant === 'other-style') {
        variantStyle = 'bg-transparent border-none text-indigo-950'
    } else if (variant === 'other-style-alt') {
        variantStyle = 'bg-transparent border-none text-white'
    } else if (variant === 'other-style-alt-2') {
        variantStyle = 'bg-transparent border-black border-opacity-20 text-indigo-950'
    }

    return (
        <button onClick={action} className={` ${px} ${py} ${rounded} grow shrink text-center flex items-center gap-2 justify-center tracking-wide text-lg font-normal ${styles["text-font-lato"]} border ${variantStyle} ${customStyle}`}>
            {children}
        </button>
    )
}

export default Button
