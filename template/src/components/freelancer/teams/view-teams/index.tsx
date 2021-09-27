import { FlexColumn, VerticalGap } from "styles/globals";
import TeamTile from "../team";

const ViewTeams = () => {
    return (
        <FlexColumn style={{ flex: 0.7 }}>
            <h2>View All Teams</h2>
            <VerticalGap gap={20} />

            <TeamTile name="My Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />
            <VerticalGap gap={30} />

            <TeamTile name=" My Project B" description="ProjectA desc" requiredSkills={["Typescript"]} />
            <VerticalGap gap={30} />

            <TeamTile name="Project A" description="ProjectA desc" requiredSkills={["Typescript"]} />

        </FlexColumn>
    );
};

export default ViewTeams;