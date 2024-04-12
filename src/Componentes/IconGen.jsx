import {useState} from "react";
import LinkedIn from "../assets/linkedin.svg";
import LinkedInHover from "../assets/Linkedin-hover.svg";
import Email from "../assets/Email.svg";
import EmailHover from "../assets/Email-hover.svg";

export default function IconGen() {
    const [hoveredElement, setHoveredElement] = useState(null);

    const data = [
        {
            id : 1,
            img : LinkedIn,
            alt : "LinkedIn",
            href : "https://www.linkedin.com/in/yashdev-singh/",
            hover : LinkedInHover
        },
        {
            id : 2,
            img : Email,
            alt : "Email",
            href : "mailto:amanseehra672@gmail.com",
            hover : EmailHover
        }
    ]

    return (
        <>
            {data.map((item, index) => (
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