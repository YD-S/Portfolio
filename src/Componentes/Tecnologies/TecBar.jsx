import handleViewport from "react-in-viewport";

const Block = ({ inViewport, forwardedRef, enterCount, h2, p, width }) => {
    if (inViewport && enterCount === 1) {
        return(
            <>
                <div className="mt-8 flex justify-between items-center" ref={forwardedRef}>
                    <h2 className="font-semibold">{h2}</h2>
                    <p className="text-gray-200">{p}</p>
                </div>
                <span className={`${width} h-[12px] mt-2 bg-gradient-to-r from-purple-500 to-blue-500 block rounded-md animateBars` }>
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
        return (
            <>
                <div className="mt-8 flex justify-between items-center" ref={forwardedRef}>
                    <h2 className="font-semibold">{h2}</h2>
                    <p className="text-gray-200">{p}</p>
                </div>
                <span className={`${width} h-[12px] mt-2 bg-gradient-to-r from-purple-500 to-blue-500 block rounded-md` }>
                </span>
            </>
        );
}

const ViewportBlock = handleViewport(Block, {}, {} );
export default function TecBar({ h2, p, width = "w-full"}) {
    return (
    <ViewportBlock
        h2={h2}
        p={p}
        width={width}/>
    );
}