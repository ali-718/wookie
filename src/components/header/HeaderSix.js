import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderFour as DesktopHeader} from "@components/header/desktop";
import {NotificationBarThree as NotificationBar} from "@components/notification-bar";

const HeaderSix = ({navbarAlignment, logoAlignment, containerFluid}) => {
    return (
        <HeaderLayout
            hoverClass="tt-hover-03"
            containerFluid={containerFluid}
        >
            <NotificationBar containerFluid={containerFluid}/>
            <DesktopHeader
                navbarAlignment={navbarAlignment}
                logoAlignment={logoAlignment}
                containerFluid={containerFluid}
            />
        </HeaderLayout>
    );
};

export default HeaderSix;