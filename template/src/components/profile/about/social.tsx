import { VerticalGap } from "styles/globals";
import { ProfileHeaderBorder } from "styles/profile/profile.styled";

const ProfileAboutSocial = () => {
    return (
        <ProfileHeaderBorder>
            <h2 style={{ marginTop: -5 }}>Social</h2>
            <VerticalGap gap={10} />
            <span>Portfolio - </span>
            <span>Blog - </span>
            <span>Youtube - </span>
            <span>Facebook - </span>
        </ProfileHeaderBorder>
    );
};

export default ProfileAboutSocial;