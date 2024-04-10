import LinkedIn from "../assets/linkedin.svg";
import LinkedInHover from "../assets/Linkedin-hover.svg";
import Email from "../assets/Email.svg";
import EmailHover from "../assets/Email-hover.svg";
import { useState } from "react";

export default function Footer() {

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
        <footer>
            <div className="container m-auto flex justify-between px-4 py-6">
                <p className="text-gray-300 text-sm">Copyright @ 2023</p>
                    <ul className="flex gap-4">
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
                    </ul>
            </div>
        </footer>
    );
}