import { FlexColumn, VerticalGap } from "styles/globals";
import { useQuery } from "@apollo/client";
import { LOAD_PROJECT } from "../../../apollo/mutations/addProject";
import ProjectTile from "../project";
import { useEffect } from "react";

const AllProjects = () => {
    const { data } = useQuery(LOAD_PROJECT);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <FlexColumn style={{ flex: 0.7 }}>
            <h2>View All Projects</h2>
            <VerticalGap gap={20} />

            <ProjectTile name="Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />
            <VerticalGap gap={30} />

            <ProjectTile name="Project A" description="ProjectB desc" requiredSkills={["Typescript"]} />
            <VerticalGap gap={30} />

            <ProjectTile name="Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />

        </FlexColumn>
    );
};

export default AllProjects;