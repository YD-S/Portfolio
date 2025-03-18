import IconGen from "../ui/IconGen.jsx";
import {HeaderData} from "../../Data/HeaderData.jsx";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-20" id="home">
            <div className="container mx-auto px-2 py-6 max-w-full sm:max-w-4xl bg-black/40 backdrop-blur">
                <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                    <a href="#"><h1 className="font-bold text-2xl hover-grad-txt">Yash's Portfolio</h1></a>
                    <ul className="flex flex-wrap gap-4 justify-center">
                        {HeaderData.map((element, index) => (
                            <li key={index}>
                                <a href={element.link} className="text-gray-200 cursor-pointer hover-grad-txt p-1 sm:p-2">{element.name}</a>
                            </li>
                        ))}
                        <IconGen />
                    </ul>
                </div>
            </div>
        </header>
    );
}