import ViewAllProjects from "components/freelancer/projects/view-all-projects";
import ViewMyProjects from "components/freelancer/projects/view-my-projects";
import CreateTeam from "components/freelancer/teams/create-team";
import ViewTeams from "components/freelancer/teams/view-teams";
import NavbarV2 from "components/navbar-new";
import SidebarV2 from "components/sidebar-new";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "hooks/rtk";
import { useEffect } from "react";
import { setScope, sidebarData, } from "store/slices/sidebarSlice";
import { FlexRow, VerticalGap } from "styles/globals";
import { FreelancerSidebarItems, UserRole } from 'types/enums';

const FreelancerDashboard = () => {
    const sidebar = useAppSelector(sidebarData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorage.setItem('currentRole', UserRole.freelancer);
        dispatch(setScope(UserRole.freelancer));
    });

    return (
        <>
            <NavbarV2 pageName='Freelancer Dashboard' />
            <VerticalGap gap={30} />
            <FlexRow style={{ height: '80vh', justifyContent: 'space-evenly' }}>
                <AnimatePresence>
                    {sidebar.visible && <SidebarV2 />}
                </AnimatePresence>

                {sidebar.category === FreelancerSidebarItems.viewAllProjects && <ViewAllProjects />}
                {sidebar.category === FreelancerSidebarItems.viewMyProjects && <ViewMyProjects />}
                {sidebar.category === FreelancerSidebarItems.createTeam && <CreateTeam />}
                {sidebar.category === FreelancerSidebarItems.viewMyTeams && <ViewTeams />}
                {sidebar.category === FreelancerSidebarItems.viewAllTeams && <ViewTeams />}
            </FlexRow>
        </>
    );
};

export default FreelancerDashboard;