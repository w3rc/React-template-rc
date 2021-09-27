import { Dispatch, SetStateAction } from "react";
import { FlexRow } from "styles/globals";
import { Tab } from "styles/profile/profile.styled";
import { ProfileTabsEnum } from "types/enums";

const ProfileTabs = ({ activeTab, setActiveTab }:
    { activeTab: ProfileTabsEnum, setActiveTab: Dispatch<SetStateAction<ProfileTabsEnum>>; }) => {

    return (
        <FlexRow>
            <Tab active={activeTab === ProfileTabsEnum.about ? true : false}
                onClick={() => setActiveTab(ProfileTabsEnum.about)}>{ProfileTabsEnum.about}
            </Tab>
            <Tab active={activeTab === ProfileTabsEnum.projects ? true : false}
                onClick={() => setActiveTab(ProfileTabsEnum.projects)}>{ProfileTabsEnum.projects}
            </Tab>
            <Tab active={activeTab === ProfileTabsEnum.skills ? true : false}
                onClick={() => setActiveTab(ProfileTabsEnum.skills)}>{ProfileTabsEnum.skills}
            </Tab>
            <Tab active={activeTab === ProfileTabsEnum.qualifications ? true : false}
                onClick={() => setActiveTab(ProfileTabsEnum.qualifications)}>{ProfileTabsEnum.qualifications}
            </Tab>
            <Tab active={activeTab === ProfileTabsEnum.experience ? true : false}
                onClick={() => setActiveTab(ProfileTabsEnum.experience)}>{ProfileTabsEnum.experience}
            </Tab>
            <Tab active={activeTab === ProfileTabsEnum.reviews ? true : false}
                onClick={() => setActiveTab(ProfileTabsEnum.reviews)}>{ProfileTabsEnum.reviews}
            </Tab>
        </FlexRow>
    );
};

export default ProfileTabs;