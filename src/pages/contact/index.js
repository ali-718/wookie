import Head from "next/head";
import {Fragment} from "react";
import GoogleMap from "@components/map";
import {Container} from "react-bootstrap";
import Breadcrumb from "@components/breadcrumb";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ContactMethod, ContactForm} from "@components/contact";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const PageContact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header navbarAlignment="left"/>
            <ContentWrapper>
                <Breadcrumb/>

                <div className="content-indent">
                    <Container>
                        <GoogleMap
                            latitude={37.338832}
                            longitude={-87.5069334}
                        />

                        <ContactMethod
                            className="mt-5"
                        />

                        <ContactForm
                            className="mt-5"
                        />
                    </Container>
                </div>
            </ContentWrapper>
            <Footer newsletter={true}/>
        </Fragment>
    );
};

export default PageContact;