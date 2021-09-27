
import { profile } from 'data/profile';
import { Category } from 'types/enums';

import { Sidebar, SidebarItem } from 'styles/home/home.styled';
import { Dispatch, SetStateAction } from 'react';


const SidebarComponent = (
    { setCategory }: { setCategory: Dispatch<SetStateAction<Category>>; }
) => {

    return <Sidebar>
        {
            profile.map((item: any) => {
                return (
                    <SidebarItem key={item.name} onClick={() => { setCategory(item.name); }}>
                        <item.icon fontSize={20} />
                        <h3 style={{ marginLeft: 15 }} key={item.name}>{item.name}</h3>
                    </SidebarItem>
                );
            })
        }
    </Sidebar>;
};
export default SidebarComponent;