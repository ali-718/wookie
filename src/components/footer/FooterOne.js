import {WidgetsOne as Widgets} from "./elements/widgets";
import {NewsletterOne as Newsletter} from "@components/newsletter";
import {CopyrightOne as Copyright} from "@components/footer/elements/copyright";

const FooterOne = ({className, newsletter}) => {
    return (
        <footer id="tt-footer" className={className ? className : ''}>
            {newsletter && <Newsletter/>}
            <Widgets/>
            <Copyright/>
        </footer>
    );
};

FooterOne.defaultProps = {
    newsletter: true
}

export default FooterOne;