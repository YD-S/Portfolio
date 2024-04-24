import { PinContainer } from "../ui/3d-pin";

export default function Project({projectLink, title, description, image}) {

    return (
        <PinContainer
            title={title}
            href={projectLink}
        >
            <div
                className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    {description}
                                </span>
                </div>
                <div
                    className="flex flex-1 w-full rounded-lg mt-4 bg-transparent">
                    <img src={image}
                         className="object-contain object-center w-full h-full" alt={"Github Project"}/>
                </div>
            </div>
        </PinContainer>
    );
}
