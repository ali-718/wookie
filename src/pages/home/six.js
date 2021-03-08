import Head from "next/head";
import {Fragment} from "react";
import Services from "@components/services";
import sliderData from "@data/slider/home-six.json";
import {BrandsTwo as Brands} from "@components/brands";
import {FooterOne as Footer} from "@components/footer";
import {HeaderTwo as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {HomeSixProductsTab as Products} from "@components/products";
import {CategoriesFour as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeSix = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 06 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header/>
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-4"
                />
                <Categories/>
                <Products/>
                <Brands/>
                <Services/>
            </ContentWrapper>
            <Footer newsletter={true}/>
        </Fragment>
    )
}
export default HomeSix;