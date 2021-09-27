import { useState } from "react";
import ProfileAbout from "components/profile/about";
import ProfileHeader from "components/profile/header";
import ProfileTabs from "components/profile/tabs";
import { FlexColumn, FlexRow, VerticalGap } from "styles/globals";
import { ProfileTabsEnum } from "types/enums";
import ProfileSkills from "components/profile/skills";
import NavbarV2 from "components/navbar-new";
import { sidebarData } from "store/slices/sidebarSlice";
import { useAppSelector } from "hooks/rtk";
import SidebarV2 from "components/sidebar-new";

const ProfilePage = () => {

    const [activeTab, setActiveTab] = useState<ProfileTabsEnum>(ProfileTabsEnum.about);

    const sidebar = useAppSelector(sidebarData);

    return (
        <>
            <NavbarV2 pageName='Profile' />
            <VerticalGap gap={30} />
            <FlexRow style={{ height: '80vh', justifyContent: 'space-evenly' }}>
                {sidebar.visible && <SidebarV2 />}
                <FlexColumn style={{
                    flex: 0.7,
                    height: '99.5%'
                }}>
                    <ProfileHeader />
                    <VerticalGap gap={30} />
                    <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                    {activeTab === ProfileTabsEnum.about && <ProfileAbout />}
                    {activeTab === ProfileTabsEnum.skills && <ProfileSkills />}

                </FlexColumn>
            </FlexRow>
        </>
    );
};

export default ProfilePage;