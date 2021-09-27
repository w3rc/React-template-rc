import { sidebarVariant } from "animations/sidebar";
import { useAppDispatch, useAppSelector } from "hooks/rtk";
import { useRouter } from "hooks/useRouter";
import { useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { MdPowerSettingsNew } from "react-icons/md";
import { setScope, setSidebarCategory, sidebarData as scope } from "store/slices/sidebarSlice";
import { setLoggedIn } from "store/slices/userSlice";
import { FlexRow, HorizontalGap, VerticalGap } from "styles/globals";
import { SidebarV2Border } from "styles/shared/shared.styled";
import { UserRole } from "types/enums";
import SidebarV2Category from "./category";
import { sidebarData } from "./sidebarData";

const SidebarV2 = () => {
    const [projectsCollapsed, setProjectsCollapsed] = useState<boolean>(false);
    const [teamsCollapsed, setTeamsCollapsed] = useState<boolean>(false);
    const [freelancersCollapsed, setFreelancersCollapsed] = useState<boolean>(false);

    const router = useRouter();
    const sidebar = useAppSelector(scope);

    const dispatch = useAppDispatch();

    return (
        <SidebarV2Border variants={sidebarVariant} initial="hidden" animate="visible" style={{ flex: 0.15 }}>
            <FlexRow style={{ alignItems: 'center', justifyContent: 'space-evenly', width: '100%', boxShadow: '1px 1px 2px 1px #666', padding: '15px 20px', borderRadius: 10, cursor: 'pointer' }}
                onClick={() => {
                    localStorage.setItem('currentRole', sidebar.scope);
                    if (sidebar.scope === UserRole.freelancer) {
                        dispatch(setScope(UserRole.recruiter));
                        router.push('/recruiter');
                    } else {
                        dispatch(setScope(UserRole.freelancer));
                        router.push('/freelancer');
                    }

                }}
            >
                <HiOutlineSwitchHorizontal size={20} style={{ cursor: 'pointer' }} />
                <span>Switch to {sidebar.scope === UserRole.freelancer ? UserRole.recruiter : UserRole.freelancer}</span>
            </FlexRow>

            {sidebar.scope === UserRole.freelancer &&
                <>
                    <SidebarV2Category category="Projects" setCollapse={setProjectsCollapsed} isCollapsed={projectsCollapsed} />
                    {!projectsCollapsed &&
                        sidebarData.projects.map(project => <div key={project.id}>
                            <span style={{ padding: '6px 25px', cursor: 'pointer' }} onClick={() => dispatch(setSidebarCategory(project.name))}>{project.name}</span>
                            <VerticalGap gap={10} />
                        </div>)
                    }

                    <SidebarV2Category category="Team" setCollapse={setTeamsCollapsed} isCollapsed={teamsCollapsed} />
                    {!teamsCollapsed &&
                        sidebarData.teams.map(team => <div key={team.id}>
                            <span style={{ padding: '6px 25px', cursor: 'pointer' }} onClick={() => dispatch(setSidebarCategory(team.name))}>{team.name} </span>
                            <VerticalGap gap={10} />
                        </div>)
                    }
                </>
            }

            <SidebarV2Category category="Freelancer" setCollapse={setFreelancersCollapsed} isCollapsed={freelancersCollapsed} />
            {!freelancersCollapsed &&
                sidebarData.freelancers.map(freelancer => <div key={freelancer.id}>
                    <span style={{ padding: '6px 25px', cursor: 'pointer' }} onClick={() => dispatch(setSidebarCategory(freelancer.name))}>{freelancer.name} </span>
                    <VerticalGap gap={10} />
                </div>)
            }

            <div style={{ flex: 1 }} />

            <FlexRow key='settings' style={{ alignItems: 'center' }}>
                <HorizontalGap gap={15} />
                <FiSettings size={20} />
                <span style={{ padding: '6px 25px', cursor: 'pointer' }} onClick={() => { }}>Settings</span>
                <VerticalGap gap={10} />
            </FlexRow>
            <FlexRow key='Logout' style={{ alignItems: 'center' }}>
                <HorizontalGap gap={15} />
                <MdPowerSettingsNew size={20} />
                <span style={{ padding: '6px 25px', cursor: 'pointer' }} onClick={() => { localStorage.removeItem('token'); dispatch(setLoggedIn(false)); }}>Logout</span>
            </FlexRow>
            <VerticalGap gap={10} />
        </SidebarV2Border>
    );
};

export default SidebarV2;