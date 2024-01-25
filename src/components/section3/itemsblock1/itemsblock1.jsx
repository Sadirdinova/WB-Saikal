import './itemsblock1.scss'
import { PiCheckFat } from "react-icons/pi";

export const Itemsblock1 = ({text}) => {
    return (
        <div className='itemsblock1'>
            <PiCheckFat size={20} /> <p>{text}</p>
        </div>
    )
}