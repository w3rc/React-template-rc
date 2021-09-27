import { Button, FlexColumn, VerticalGap } from "styles/globals";
import { Input, TextArea } from "styles/shared/shared.styled";

const CreateTeam = () => {
    return (
        <FlexColumn style={{ flex: 0.7 }}>
            <VerticalGap gap={20} />

            <h2>Create Team</h2>
            <VerticalGap gap={10} />

            <form>
                <h3>Name</h3>
                <Input type="text" />

                <VerticalGap gap={20} />
                <h3>Description</h3>
                <TextArea />

                <VerticalGap gap={20} />
                <h3>Members</h3>
                <Button>Add Member</Button>

                <VerticalGap gap={20} />
                <h3>Team Privacy</h3>
                {/* Anyone can join, invite only, private */}

                
                <VerticalGap gap={20} />
                <h3>Required Skills</h3>
                <Input type="text" />
                {/* dropdown */}

                

                <VerticalGap gap={30} />
                <Button>Add Team</Button>
            </form>
        </FlexColumn>
    );
};

export default CreateTeam;