
export default function TimelineContent({children, year, id}) {
    let classes = "pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:absolute before:rounded-full before:left-[58px]"
    if (id !== 1)
        classes += " mt-24"
    return (
        <div
            className={classes}>
            <h3 className="absolute left-0 text-lg font-semibold">{year}</h3>
            <p className={"break-words"}>
                {children}
            </p>
        </div>);
}