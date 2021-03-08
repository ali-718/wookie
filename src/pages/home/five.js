import Head from "next/head";
import {Fragment} from "react";
import Services from "@components/services";
import sliderData from "@data/slider/home-one.json";
import {FooterOne as Footer} from "@components/footer";
import {SliderOne as Slider} from "@components/slider";
import {HeaderFour as Header} from "@components/header";
import {CategoriesThree as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";
import {PromoBannerFour as PromoBanner, PromoBannerOne} from "@components/promo-banners";
import {
    HomeFiveTending as TendingProducts,
    HomeFiveSpecial as SpecialProducts,
    TypeWiseVertical
} from "@components/products";

const HomeFive = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 05 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header navbarAlignment="center"/>
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                <Categories/>
                <TendingProducts/>
                <PromoBanner/>
                <SpecialProducts/>
                <PromoBannerOne/>
                <TypeWiseVertical/>
                <Services/>
            </ContentWrapper>
            <Footer newsletter={false}/>
        </Fragment>
    )
}
export default HomeFive;