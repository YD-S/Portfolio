import Project from "./Project.jsx";
import Project1 from "../assets/testing.jpg";
import Project2 from "../assets/testing.jpg";
import Project3 from "../assets/testing.jpg";
import Project4 from "../assets/testing.jpg";

export default function Projects() {
    return (
        <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
                <Project
                    projectLink={"https://www.google.com"}
                    description={"Responsive HTML/CSS layout for online furniture store. HTML5,\n" + "                  CSS3 (SCSS)"}
                    image={Project1}
                    title={"Furniture store landing page done in React.js"}
                />
                <Project
                    projectLink={"https://www.google.com"}
                    description={"Responsive HTML/CSS layout for online store of designer furniture. HTML5, CSS3 (SCSS)"}
                    image={Project2}
                    title={"Designer furniture store landing page"}
                />
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                <Project
                    projectLink={"https://www.google.com"}
                    description={"Responsive HTML/CSS layout for landing page for front-end developer. HTML5, CSS3 (SCSS)"}
                    image={Project3}
                    title={"Landing page for front-end developer"}
                />
                <Project
                    projectLink={"https://www.google.com"}
                    description={"Responsive HTML/CSS layout for landing page for front-end developer. HTML5, CSS3 (SCSS)"}
                    image={Project4}
                    title={"Website redesign for The Venus project"}
                />
            </div>
        </div>
    );
}