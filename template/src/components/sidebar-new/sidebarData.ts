import { FreelancerSidebarItems } from 'types/enums';
import { RecruiterSidebarItems } from 'types/enums';


export const sidebarData = {
	projects: [
		{
			id: 'viewAllProjects',
			name: FreelancerSidebarItems.viewAllProjects
		},
		{ id: 'viewMyProjects', name: FreelancerSidebarItems.viewMyProjects }
		// { name: 'View Long Term Contracts' }
	],
	project: [
		{
			id: 'Projects',
			name: RecruiterSidebarItems.viewAllProjects
		},
		{ id: 'viewMyProjects', name: RecruiterSidebarItems.viewMyProjects },
		{ id: 'CreateProjects', name: RecruiterSidebarItems.createProjects }
		// { name: 'View Long Term Contracts' }
	],
	teams: [
		{ id: 'createTeam', name: FreelancerSidebarItems.createTeam },
		{ id: 'viewMyTeams', name: FreelancerSidebarItems.viewMyTeams },
		{ id: 'viewAllTeams', name: FreelancerSidebarItems.viewAllTeams }
	],
	freelancers: [{ id: 'community', name: FreelancerSidebarItems.community }]
};
