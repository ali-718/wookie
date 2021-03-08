import {DesktopNav} from "@components/nav";

const Navbar = ({className, hoverClass}) => {
    return (
        <div className={`tt-desktop-parent-menu tt-parent-box ${className ? className : ''}`}>
            <div className={`tt-desktop-menu ${hoverClass ? hoverClass : ''}`}>
                <DesktopNav/>
            </div>
        </div>
    );
};

export default Navbar;