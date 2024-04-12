import Project from "./Project.jsx";
import {gql, useQuery} from "@apollo/client";

export default function Projects() {

    const GET_PROJECTS = gql`
        query {
              user(login: "YD-S") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      url
                      description
                      openGraphImageUrl
                    }
                  }
                }
              }
            }
    `;

    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const PinnedItems = data.user.pinnedItems.nodes;



    return (
        <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-3 sm:flex-row gap-10 mt-11 max-sm:grid-cols-1 max-md:grid-cols-2">
                {PinnedItems.map((project, index) => {
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