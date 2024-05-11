import Project from "./Project.jsx";
import {useEffect, useState} from "react";


export default function Projects() {

    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    setLoading(false);
                }
            );
    }

    return (
        <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-2 gap-y-12 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1">
                {loading && <><Project /><Project /><Project /><Project /><Project /><Project /></>}
                {!loading && nodes.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            projectLink={project.url}
                            title={project.name}
                            description={project.description}
                            image={project.openGraphImageUrl}
                        />
                    );
                })}
            </div>
        </div>
    );

}