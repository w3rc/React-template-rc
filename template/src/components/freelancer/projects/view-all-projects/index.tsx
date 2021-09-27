import { FlexColumn, VerticalGap } from "styles/globals";
import ProjectTile from "../project";

const ViewAllProjects = () => {
    return (
        <FlexColumn style={{ flex: 0.7 }}>
            <h2>View All Projects</h2>
            <VerticalGap gap={20} />

            <ProjectTile name="Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />
            <VerticalGap gap={30} />

            <ProjectTile name="Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />
            <VerticalGap gap={30} />

            <ProjectTile name="Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />

        </FlexColumn>
    );
};

export default ViewAllProjects;