
export default function Header({scrolling}) {

    const elements = [
        {
            name: "Projects",
            link: "#projects"
        },
        {
            name: "Technologies",
            link: "#technologies"
        },
        {
            name: "About me",
            link: "#aboutme"
        }
    ]

  return (
      <header className={`${scrolling ? 'border-b border-black' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
          <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
              <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                  <a href={"#"}><h1 className="font-bold text-2xl">Yash's Portfolio</h1></a>
                      <ul className="flex gap-4">
                          {elements.map((element, index) => (
                              <li key={index}>
                              <a href={element.link} className={"text-gray-200 hover:text-blue-500 cursor-pointer"}>{element.name}</a>
                              </li>
                              ))}
                      </ul>
              </div>
          </div>
      </header>
  );
}