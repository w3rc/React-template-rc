import { Avatar } from "@material-ui/core";
import { FlexColumn, FlexRow, Button, Status, HorizontalGap, VerticalGap } from "styles/globals";
import { ProfileHeaderBorder } from "styles/profile/profile.styled";

const ProfileHeader = () => {
    return (
        <ProfileHeaderBorder>
            <FlexRow style={{ alignItems: 'center' }}>
                <Avatar src="https://avatars.dicebear.com/api/miniavs/jonas.svg" alt="" style={{ backgroundColor: '#666', width: 90, height: 90 }} />
                <HorizontalGap gap={15} />
                <FlexColumn>
                    <FlexRow style={{ alignItems: "center" }}>
                        <span style={{ fontSize: '1.2em', fontWeight: 450 }}>John Doe</span>
                        <Status color="red" style={{ marginLeft: 15 }} />
                    </FlexRow>
                    <VerticalGap gap={10} />
                    <span style={{ fontSize: '1.2em', fontWeight: 450 }}>@johnDoe</span>
                </FlexColumn>
                <div style={{ flex: 1 }} />
                <Button>Edit Profile</Button>
            </FlexRow>
        </ProfileHeaderBorder>
    );
};

export default ProfileHeader;