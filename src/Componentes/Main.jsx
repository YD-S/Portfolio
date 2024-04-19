import Section from "./Section.jsx";
import PorfilePic from "../assets/Photo.png";
import Projects from "./Projects";
import DynamicTechBars from "./DynamicTechBars";
import JointAboutContent from "./JointAboutContent";
import { AdditionalSkillsData } from "./AdditionalSkillsData.js";
import AdditionalSkills from "./AdditionalSkills.jsx";
import Intro from "./Intro.jsx";

export default function Main() {

    return (
        <main className="relative mt-28">
            {/* Intro/Banner section */}
            <Section>
                <div
                    className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                    <Intro />
                    <div className="relative">
                        <div
                            className="after:bg-[url('/large-long.png')]
                            after:bg-contain after:block after:bg-no-repeat
                            after:w-[420px] after:h-[320px] after:absolute after:top-0
                            after:-left-20 sm:after:-left-40 before:bg-[url('/small.png')]
                            before:bg-contain before:block before:bg-no-repeat before:w-[220px]
                            before:h-[220px] before:absolute before:bottom-0 before:-right-10"
                        >
                            <img src={PorfilePic} className="relative z-10 w-[280px] m-auto sm:w-[650px]" alt={"ProfilePic"}/>
                        </div>
                    </div>
                </div>
            </Section>
            {/* Projects section */}
            <Section id="projects">
                <Projects />
            </Section>
            {/* Technoglies section */}
            <Section className="py-10" id="technologies">
                <div className="container m-auto px-4">
                    <h2 className="text-2xl font-semibold">Technologies</h2>
                    <div className="mt-14">
                        <DynamicTechBars />
                    </div>
                </div>
            </Section>
            {/* Additional skills section */}
            <Section>
                <div className="container m-auto px-4 py-14">
                    <h2 className="text-2xl font-semibold">
                        Additional technologies and skills
                    </h2>
                    <div className="max-sm:flex">
                    <AdditionalSkills data={AdditionalSkillsData[0]}/>
                    <AdditionalSkills data={AdditionalSkillsData[1]}/>
                    </div>
                </div>
            </Section>
            <Section className="py-8" id="aboutme">
                <div className="container m-auto px-4">
                    <h2 className="text-2xl font-semibold">About me</h2>
                    <div
                        className="mt-12 relative before:absolute before:top-0 before:left-16 
                        before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white"
                        >
                        <JointAboutContent />
                    </div>
                </div>
            </Section>
        </main>
    )
}