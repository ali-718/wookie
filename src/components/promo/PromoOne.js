import Link from "next/link";
import PropTypes from "prop-types";
import parse from "react-html-parser";

const PromoOne = ({className, thumb, title, heading, link, btn}) => {
    return (
        <Link href={link}>
            <a className={`tt-promo-box ${className ? className : ''}`}>
                <img src={thumb} alt={title}/>
                <div className="tt-description">
                    <div className="tt-description-wrapper">
                        <div className="tt-background"/>
                        <div className="tt-title-small">{parse(title)}</div>
                        <div className="tt-title-large">{parse(heading)}</div>
                        {btn && <Link href={link}><a className="btn btn-xl">SHOP NOW!</a></Link>}
                    </div>
                </div>
            </a>
        </Link>
    );
};

PromoOne.propTypes = {
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    btn: PropTypes.bool,
    className: PropTypes.string
}

export default PromoOne;