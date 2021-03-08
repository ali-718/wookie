import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderFive as DesktopHeader} from "@components/header/desktop";

const HeaderSeven = ({containerFluid, navbarAlignment}) => {
    return (
        <HeaderLayout
            hoverClass="tt-hover-03"
            containerFluid={containerFluid}
            className="headertype3 headertype3-bottom"
        >
            <DesktopHeader
                navbarAlignment={navbarAlignment}
            />
        </HeaderLayout>
    );
};

export default HeaderSeven;