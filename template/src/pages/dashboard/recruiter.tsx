import NavbarV2 from "components/navbar-new";
import CreateProject from "components/recruiter/create-project/createProjectForm";
import AllProjects from "components/recruiter/all-projects"
import SidebarV2 from "components/sidebar-new";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "hooks/rtk";
import { useEffect } from "react";
import { setScope, sidebarData } from "store/slices/sidebarSlice";
import { FlexRow, VerticalGap } from "styles/globals";
import { RecruiterSidebarItems,UserRole } from "types/enums";

const RecruiterDashboard = () => {
    const sidebar = useAppSelector(sidebarData);

    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorage.setItem('currentRole', UserRole.recruiter);
        dispatch(setScope(UserRole.recruiter));
    });
    return (
        <>
            <NavbarV2 pageName='Recruiter Dashboard' />
            <VerticalGap gap={30} />
            <FlexRow style={{ height: '80vh', justifyContent: 'space-evenly' }}>
                <AnimatePresence>
                    {sidebar.visible && <SidebarV2 />}
                </AnimatePresence>

                {sidebar.category === RecruiterSidebarItems.viewAllProjects && <AllProjects />}
                {sidebar.category === RecruiterSidebarItems.createProjects && <CreateProject />}
                
            </FlexRow>
        </>
    );
};

export default RecruiterDashboard;