import {useNavigate} from "react-router-dom";

export default function Project({projectLink, title, description, image}) {

    const handleClick = () => {
        window.location.href = projectLink;
    };

    return (
        <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={image} className="w-full h-auto"/>
            <h3 className="text-2xl font-semibold mt-8">{title}</h3>
            <p className="text-gray-400 text-sm mt-2">{description}</p>
            <div className="flex mt-12 gap-2">
                <button
                    className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
                    onClick={handleClick}>
                    Checkout github
                </button>
            </div>
        </div>
    );
}
