import { FlexColumn, VerticalGap } from "styles/globals";
import ProfileAboutDetails from "./details";
import ProfileAboutIntro from "./intro";
import ProfileAboutSocial from "./social";

const ProfileAbout = () => {
    return (
        <FlexColumn style={{
            scrollbarWidth: 'none',
            overflowY: 'scroll',
        }}>
            <VerticalGap gap={30} />
            <ProfileAboutIntro />

            <VerticalGap gap={30} />
            <ProfileAboutDetails />

            <VerticalGap gap={30} />
            <ProfileAboutSocial />
            
            <VerticalGap gap={30} />
        </FlexColumn>
    );
};

export default ProfileAbout;