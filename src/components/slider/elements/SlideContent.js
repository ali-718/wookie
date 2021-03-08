import {Fragment} from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import HTMLParser from "react-html-parser";

const SlideContent = ({data, className}) => {
    return (
        className ? (
            <div className={className}>
                {HTMLParser(data.subTitle)}
                {HTMLParser(data.title)}
                {HTMLParser(data.content)}
                <div className="tp-caption1-wd-4">
                    <Link href={data.btnLink}>
                        <a className={`btn btn-xl ${data.btnClass}`}>{data.btnText}</a>
                    </Link>
                </div>
            </div>
        ) : (
            <Fragment>
                {HTMLParser(data.subTitle)}
                {HTMLParser(data.title)}
                {HTMLParser(data.content)}
                <div className="tp-caption1-wd-4">
                    <Link href={data.btnLink}>
                        <a className={`btn btn-xl ${data.btnClass}`}>{data.btnText}</a>
                    </Link>
                </div>
            </Fragment>
        )
    );
};

SlideContent.propTypes = {
    data: PropTypes.object.isRequired
}

export default SlideContent;