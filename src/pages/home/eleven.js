import Head from "next/head";
import {Fragment} from "react";
import {HeaderFour as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {HeroBannerThree as HeroBanner} from "@components/hero-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeEleven = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 11 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                navbarAlignment="center"
                showNotificationBar={false}
            />
            <ContentWrapper>
                <HeroBanner/>
            </ContentWrapper>
            <Footer className="nomargin" dark={false}/>
        </Fragment>
    )
}
export default HomeEleven;