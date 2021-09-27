import { MdMyLocation, MdWork } from "react-icons/md";
import { FlexRow, VerticalGap } from "styles/globals";
import { ProfileHeaderBorder } from "styles/profile/profile.styled";

const ProfileAboutIntro = () => {
    return (
        <ProfileHeaderBorder>
            <h2 style={{ marginTop: -5 }}>Intro</h2>
            <VerticalGap gap={10} />    
            <FlexRow style={{ alignItems: 'center' }}>
                <MdWork />
                <span style={{ marginLeft: 10 }}>Software Engineer</span>
            </FlexRow>
            <VerticalGap gap={10} />
            <FlexRow style={{ alignItems: 'center' }}>
                <MdMyLocation />
                <span style={{ marginLeft: 10 }}>Kolkata</span>
            </FlexRow>
            <VerticalGap gap={10} />
        </ProfileHeaderBorder>
    );
};

export default ProfileAboutIntro;