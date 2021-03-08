import Link from "next/link";
import Head from "next/head";
import {Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Breadcrumb from "@components/breadcrumb";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ContentWrapperOne as Wrapper} from "@components/content-wrapper";
import FAQItem from "@components/faq";

const Page404 = () => {
    return (
        <Fragment>
            <Head>
                <title>FAQ - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                navbarAlignment="left"
            />

            <Wrapper>
                <Breadcrumb/>

                <div className="container-indent">
                    <Container className="container-fluid-custom-mobile-padding">
                        <h1 className="tt-title-subpages">ANSWERS TO YOUR QUESTIONS</h1>

                        <div className="faq-group-wrap">
                            <div className="faq-topic-item">
                                <h2 className="tt-base-color small">Shopping Information</h2>
                                <div className="tt-box-faq-listing">
                                    <Row>
                                        <Col md={6}>
                                            <FAQItem
                                                title="WHAT SHIPPING METHODS ARE AVAILABLE?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="DO YOU SHIP INTERNATIONALLY?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="HOW LONG WILL IT TAKE TO GET MY PACKAGE?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="WHAT SHIPPING METHODS ARE AVAILABLE?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat pariatur.
                                            </FAQItem>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            <div className="faq-topic-item">
                                <h2 className="tt-base-color small">Payment Information</h2>
                                <div className="tt-box-faq-listing">
                                    <Row>
                                        <Col md={6}>
                                            <FAQItem
                                                title="WHAT PAYMENT METHODS ARE ACCEPTED?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="IS BUYING ON-LINE SAFE?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                            </FAQItem>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            <div className="faq-topic-item">
                                <h2 className="tt-base-color small">Orders and Returns</h2>
                                <div className="tt-box-faq-listing">
                                    <Row>
                                        <Col md={6}>
                                            <FAQItem
                                                title="HOW DO I PLACE AN ORDER?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="HOW CAN I CANCEL OR CHANGE MY ORDER?"
                                            >
                                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="DO I NEED AN ACCOUNT TO PLACE AN ORDER?"
                                            >
                                                Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </FAQItem>
                                        </Col>

                                        <Col md={6}>
                                            <FAQItem
                                                title="HOW DO I TRACK MY ORDER?"
                                            >
                                                Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </FAQItem>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
            <Footer
                newsletter={true}
            />
        </Fragment>
    );
};

export default Page404;