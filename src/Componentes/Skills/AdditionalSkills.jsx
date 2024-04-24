
export default function AdditionalSkills({data}) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
            {data.map((item, index) => (
                    <p key = {index} className={ `font-bold before:w-4 before:h-4 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5 `}>
                        {item.skill}
                    </p>
            ))}
        </div>
        )
}