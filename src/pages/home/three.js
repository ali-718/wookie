import Head from "next/head";
import {Fragment} from "react";
import {HeaderOne as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {HeroBannerTwo as HeroBanner} from "@components/hero-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeThree = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 03 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header navbarAlignment="right"/>
            <ContentWrapper>
                <HeroBanner/>
            </ContentWrapper>
            <Footer className="nomargin" dark={false}/>
        </Fragment>
    )
}
export default HomeThree;