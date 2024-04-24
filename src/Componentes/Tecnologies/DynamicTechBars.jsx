
import TecBar from "./TecBar.jsx";
import { DynamicTechBarData } from "../../Data/DynamicTechBarData.jsx"

export default function DynamicTechBars() {
    return (
        <>
        {DynamicTechBarData.map((element, index) => (
            <TecBar key={index} h2={element.name} p={element.para} width={element.width} />
        ))}
    </>
    )
}