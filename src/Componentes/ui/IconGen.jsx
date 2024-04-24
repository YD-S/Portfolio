import {useState} from "react";
import { IconGenData } from "../../Data/IconGenData.jsx"

export default function IconGen() {
    const [hoveredElement, setHoveredElement] = useState(null);

    return (
        <>
            {IconGenData.map((item, index) => (
                <li key={index}>
                    <a href={item.href} target={"_blank"}>
                        <img src={hoveredElement === item.id ? item.hover : item.img} alt={item.alt}
                             onMouseEnter={() => setHoveredElement(item.id)}
                             onMouseLeave={() => setHoveredElement(null)}
                        />
                    </a>
                </li>
            ))}
        </>
    )
}