import Head from "next/head";
import {Fragment} from "react";
import {HeaderTwo as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {HeroBannerOne as HeroBanner} from "@components/hero-banners";
import {PromoBannerTwo as PromoBanners} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";


const HomeTwo = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 02 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header/>
            <ContentWrapper>
                <HeroBanner/>
                <PromoBanners/>
            </ContentWrapper>
            <Footer newsletter={false}/>
        </Fragment>
    )
}
export default HomeTwo;