import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FlexRow } from "styles/globals";

const SidebarV2Category = ({ category, setCollapse, isCollapsed }: { category: string; setCollapse: Dispatch<SetStateAction<boolean>>; isCollapsed: boolean; }) => {
    return (
        <FlexRow style={{ justifyContent: 'space-between', alignItems: 'center', padding: '25px 20px', cursor: 'pointer' }} onClick={() => setCollapse(!isCollapsed)}>
            <span style={{ fontSize: 20, cursor: 'pointer', fontWeight: 500 }}>{category}</span>
            {
                isCollapsed ? <IoIosArrowDown style={{ fontSize: 20, cursor: 'pointer' }} onClick={() => setCollapse(!isCollapsed)} /> : <IoIosArrowUp style={{ fontSize: 20 }} />
            }
        </FlexRow>
    );
};

export default SidebarV2Category;