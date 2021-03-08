import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderTwo as DesktopHeader} from "@components/header/desktop";

const HeaderTwo = () => {
    return (
        <HeaderLayout hoverClass="tt-hover-02">
            <DesktopHeader/>
        </HeaderLayout>
    );
};

export default HeaderTwo;