
import Pdf from "../../assets/CV.pdf";

export default function Intro() {
    return (
        <div>
            <h2 className="font-bold text-4xl">Hello, I'm Yash,</h2>
            <div>
                <h2 className="font-bold text-4xl mt-3 gradiant-text anim-typewriter">FullStack developer</h2>
            </div>
            <div>
                <p className="mt-4 text-gray-200">
                    I am a system administrator and an aspiring <strong className={"gradiant-text-about"}>FullStack developer</strong> with a passion for creating and developing web applications.
                    I am a quick learner and always eager to learn new technologies and frameworks.
                </p>
                <button
                    className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-r from-purple-500 rounded-full to-blue-500 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => window.open(Pdf)}
                >
                    View/Download Resume
                </button>
            </div>
        </div>
    )
}