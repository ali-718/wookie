import Head from "next/head";
import {Fragment} from "react";
import Services from "@components/services";
import {FooterOne as Footer} from "@components/footer";
import {HeaderSeven as Header} from "@components/header";
import {CategoriesTen as Categories} from "@components/categories";
import {CategoryTypeWiseTwo as Products} from "@components/products";
import {HeroBannerFive as HeroBanner} from "@components/hero-banners";
import {PromoBannerTwo as PromoBanner} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeTwenty = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 20 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                containerFluid={false}
            />

            <ContentWrapper>
                <HeroBanner
                    className="tt-offset-20"
                />
                <Categories/>
                <Products
                    category="women"
                    heading="WINTER 2020/21 WOMEN"
                    headingThumb="/assets/images/promo/index20-promo-img-04.jpg"
                />
                <Products
                    category="men"
                    heading="WINTER 2020/21 MEN"
                    headingThumb="/assets/images/promo/index20-promo-img-03.jpg"
                />
                <PromoBanner/>
                <Services/>
            </ContentWrapper>

            <Footer
                newsletter={false}
            />
        </Fragment>
    )
}

export default HomeTwenty;