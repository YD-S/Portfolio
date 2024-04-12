import IconGen from "./IconGen.jsx";

export default function Header() {

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
      <header className={`fixed left-0 right-0 top-0 z-20 `} id="home">
          <div className="container m-auto px-4 py-6 max-w-4xl bg-black/40 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                  <a href={"#"}><h1 className="font-bold text-2xl hover-grad-txt">Yash's Portfolio</h1></a>
                      <ul className="flex gap-4">
                          {elements.map((element, index) => (
                              <li key={index}>
                              <a href={element.link} className={"text-gray-200 cursor-pointer hover-grad-txt p-[0.5rem]"}>{element.name}</a>
                              </li>
                              ))}
                          <IconGen />
                      </ul>
              </div>
          </div>
      </header>
  );
}