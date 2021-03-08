import HeaderLayout from "@components/header/layouts";
import { DesktopHeaderThree as DesktopHeader } from "@components/header/desktop";
import { NotificationBarOne as NotificationBar } from "@components/notification-bar";

const HeaderThree = () => {
  return (
    <HeaderLayout hoverClass="tt-hover-03">
      <NotificationBar />
      <DesktopHeader navbarAlignment="left" />
    </HeaderLayout>
  );
};

export default HeaderThree;
