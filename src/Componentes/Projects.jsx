import Project from "./Project.jsx";
import {useEffect, useState} from "react";

export default function Projects() {

    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        getAllNodes();
    }, []);

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer MWLSOxuqCmelnh1mKn54Aj65yYNY7K"
        },
        body: JSON.stringify( {
            "api": "$res:u/ysingh/github_graphql"
        }),
    };

    const getAllNodes = () => {
        fetch("https://windmill.koltserver.net/api/w/app-pipelines/jobs/run_wait_result/p/u/ysingh/get_github_projects", requestOptions)
            .then(r => r.json())
            .then(data => {
                    setNodes(data.user.pinnedItems.nodes);
                    console.log(data);
                }
            );
    }


    return (
        <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-3 sm:flex-row gap-10 mt-11 max-sm:grid-cols-1 max-md:grid-cols-2">
                {nodes.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            projectLink={project.url}
                            description={project.description}
                            image={project.openGraphImageUrl}
                            title={project.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}