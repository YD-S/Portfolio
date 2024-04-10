
import TecBar from "./TecBar.jsx";

export default function DynamicTechBars() {
    const elements = [
        {
            name : "HTML5",
            para  : "Advanced",
            width : "w-full"
        },
        {
            name : "CSS, Tailwind & Bootstrap",
            para  : "Advanced",
            width : "w-full"
        },
        {
            name : "JavaScript, TypeScript",
            para  : "Advanced",
            width : "w-[90%]"
        },
        {
            name : "React",
            para  : "High",
            width : "w-[75%]"
        },
        {
            name : "C/C++",
            para  : "High",
            width : "w-[65%]"
        },
        {
            name : "UI design",
            para  : "Medium",
            width : "w-[50%]"
        }
    ]

    return (
        <>
        {elements.map((element, index) => (
            <TecBar key={index} h2={element.name} p={element.para} width={element.width} />
        ))}
    </>
    )
}