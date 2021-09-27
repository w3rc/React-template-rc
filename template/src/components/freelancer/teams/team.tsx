import { Button, FlexColumn, FlexRow, ListTile, VerticalGap } from "styles/globals";

interface TeamTileInterface {
    name: string;
    description: string;
    requiredSkills: Array<string>;
}

const TeamTile = ({ name, description, requiredSkills }: TeamTileInterface) => {
    return (
        <ListTile>
            <FlexRow style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <FlexColumn>
                    <VerticalGap gap={5} />

                    <span style={{ fontSize: '1.2em', fontWeight: 480 }}>{name}</span>
                    <VerticalGap gap={20} />

                    <span style={{ fontSize: '0.9em', fontWeight: 440 }}>{description}</span>
                    <VerticalGap gap={20} />

                    <span>Required Skills: {requiredSkills.map((skill) => <>{skill}, </>)}</span>
                    <VerticalGap gap={5} />
                </FlexColumn>
                <Button style={{ height: '3em' }}>Join Team</Button>
            </FlexRow>
        </ListTile>
    );
};

export default TeamTile;