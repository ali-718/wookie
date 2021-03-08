import Head from "next/head";
import {Fragment} from "react";
import Services from "@components/services";
import {FooterOne as Footer} from "@components/footer";
import {HeaderFour as Header} from "@components/header";
import {BrandsThree as Brands} from "@components/brands";
import {HomeOneTending as Products} from "@components/products";
import {HeroBannerFour as HeroBanner} from "@components/hero-banners";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {PromoBannerFive as PromoBanners} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeNineteen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 19 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                dark={false}
                logoAlignment="left"
                navbarAlignment="left"
                containerFluid={false}
                showNotificationBar={true}
            />

            <ContentWrapper>
                <HeroBanner/>
                <PromoBanners
                    className="nomargin"
                />
                <Products/>
                <Brands/>
                <Testimonials
                    className="container-inner container-bg container-bg-01"
                />
                <Services/>
            </ContentWrapper>

            <Footer
                newsletter={false}
            />
        </Fragment>
    )
}

export default HomeNineteen;