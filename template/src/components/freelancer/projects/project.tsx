import { ListTile, VerticalGap } from "styles/globals";

interface ProjectTileInterface {
    name: string;
    description: string;
    requiredSkills: Array<string>;
}

const ProjectTile = ({ name, description, requiredSkills }: ProjectTileInterface) => {
    return (
        <ListTile>
            <VerticalGap gap={5} />

            <span style={{ fontSize: '1.2em', fontWeight: 480 }}>{name}</span>
            <VerticalGap gap={20} />

            <span style={{ fontSize: '0.9em', fontWeight: 440 }}>{description}</span>
            <VerticalGap gap={20} />

            <span>Required Skills: {requiredSkills.map((skill) => <>{skill}, </>)}</span>
            <VerticalGap gap={5} />

        </ListTile>
    );
};

export default ProjectTile;