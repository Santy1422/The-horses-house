import Card from "@material-tailwind/react/theme/components/card"

const CardImage = ({imagen}) => {
    return (
        <>
        <div>
            <img src={imagen} alt="w-100 h-100"/>
        </div>
        </>
    )
}
export default CardImage