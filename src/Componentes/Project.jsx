
export default function Project({projectLink, title, description, image}) {

    const handleClick = () => {
        window.open(projectLink, "_blank");
    };

    return (
        <div className="p-5 flex-1 backdrop-blur cardBorder" >
            <img src={image} className="w-full h-auto" alt={"ProjectImg"}/>
            <h3 className="text-2xl font-semibold mt-8">{title}</h3>
            <p className="text-gray-400 text-sm mt-2">{description}</p>
            <div className="flex mt-12 gap-2 align-bottom">
                <button
                    className="flex-1 text-sm py-3 border rounded-xl hover:border-blue-500 hover:text-blue-500"
                    onClick={handleClick}>
                    Checkout github
                </button>
            </div>
        </div>
    );
}
