
import { useInView } from "react-intersection-observer"

export default function TecBar({ h2, p, width = "w-full"}) {

    const [ref, inView] = useInView({ threshold: 0.5 })

    return (
        <>
            <div className="mt-8 flex justify-between items-center">
                <h2 className="font-semibold">{h2}</h2>
                <p className="text-gray-500">{p}</p>
            </div>
            <span className={`${width} ${inView ? "animateBars" : ""} h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md animateBars` }>
                <style>
                    {`
                    @keyframes slide {
                        0% { width: 0; }
                        100% { width: {width} }
                    }
                    .animateBars {
                        animation: slide 2.5s ease-in-out;
                    }
                    `
                    }
                </style>
            </span>
        </>
    );
}