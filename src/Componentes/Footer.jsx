import LinkedIn from "../assets/linkedin.svg";
import Email from "../assets/Email.svg";

export default function Footer() {

    const data = [
        {
            img : LinkedIn,
            alt : "LinkedIn",
            href : "https://www.linkedin.com/in/yashdev-singh/"
        },
        {
            img : Email,
            alt : "Email",
            href : "mailto:amanseehra672@gmail.com"
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
                                    <img src={item.img} alt={item.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
            </div>
        </footer>
    );
}