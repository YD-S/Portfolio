
export default function Intro() {
    return (
        <div>
            <h2 className="font-bold text-4xl">Hello, I'm Yash,</h2>
            <div>
                <h2 className="font-bold text-4xl mt-5 gradiant-text">FullStack developer</h2>
            </div>
            <div>
                <p className="mt-4 text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et faucibus tellus, eu viverra augue. Donec iaculis maximus tincidunt.
                </p>
                <button
                    className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-r from-purple-500 rounded-full to-blue-500 hover:from-blue-700 hover:to-cyan-700">
                    Download resume
                </button>
            </div>
        </div>
    )
}