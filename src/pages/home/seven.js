import Head from "next/head";
import {Fragment} from "react";
import sliderData from "@data/slider/home-seven.json";
import {SliderOne as Slider} from "@components/slider";
import {FooterThree as Footer} from "@components/footer";
import {HeaderFour as Header} from "@components/header";
import {CategoriesFive as Categories} from "@components/categories";
import {PromoBannerOne as PromoBanner} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";
import {HomeFiveTending as TendingProducts, TypeWiseVertical} from "@components/products";

const HomeSeven = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 07 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                logoAlignment="left"
                navbarAlignment="left"
            />
            <ContentWrapper>
                <Slider
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-4"
                />
                <Categories/>
                <TendingProducts/>
                <PromoBanner/>
                <TypeWiseVertical/>
            </ContentWrapper>
            <Footer
                dark={true}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeSeven;