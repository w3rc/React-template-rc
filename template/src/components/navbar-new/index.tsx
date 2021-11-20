import { FlexRow, HorizontalGap } from "styles/globals";
import { MdNotifications } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Avatar } from "@material-ui/core";
import { useRouter } from "hooks/useRouter";
import { useAppDispatch, useAppSelector } from "hooks/rtk";
import { setSidebarVisibility, sidebarData } from "store/slices/sidebarSlice";
import { NavbarStyled } from "styles/shared/shared.styled";
import { navbarVariant } from "animations/navbar";

const NavbarV2 = ({ pageName }: { pageName: string; }) => {
    const router = useRouter();

    const sidebar = useAppSelector(sidebarData);
    const dispatch = useAppDispatch();

    return (
        <FlexRow style={{ display: 'flex', justifyContent: 'center' }}>
            <NavbarStyled variants={navbarVariant} initial="hidden" animate="visible">
                <FlexRow style={{ alignItems: 'center' }}>
                    <GiHamburgerMenu size={30} style={{ cursor: 'pointer', marginRight: 15 }}
                        onClick={() => dispatch(setSidebarVisibility(!sidebar.visible))} />
                    <span style={{ fontSize: 18 }}>{pageName}</span>
                </FlexRow>
                <h3 style={{ fontSize: '1.5em', letterSpacing: 1.5 }}>APPNAME</h3>
                <FlexRow style={{ alignItems: 'center' }}>

                    <HorizontalGap gap={15} />
                    <MdNotifications size={30} />
                    <HorizontalGap gap={15} />
                    <Avatar src="https://avatars.dicebear.com/api/miniavs/jonas.svg" style={{ backgroundColor: '#666', width: 40, height: 40 }} onClick={() => { router.push('/profile'); }} />
                </FlexRow>
            </NavbarStyled>
        </FlexRow>
    );
};


export default NavbarV2;