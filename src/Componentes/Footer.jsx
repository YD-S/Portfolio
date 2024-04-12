import IconGen from "./IconGen.jsx";

export default function Footer() {

    return (
        <footer>
            <div className="container m-auto flex justify-between px-4 py-6">
                <p className="text-gray-300 text-md">Copyright @ 2024</p>
                    <ul className="flex gap-4">
                        <IconGen />
                    </ul>
            </div>
        </footer>
    );
}