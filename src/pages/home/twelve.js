import Head from "next/head";
import {Fragment} from "react";
import Services from "@components/services";
import sliderData from "@data/slider/home-twelve.json";
import {SliderOne as Slider} from "@components/slider";
import {HeaderSix as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {HomeTwelveTending as Products} from "@components/products";
import {CategoriesEight as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeTwelve = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 12 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                containerFluid={false}
                logoAlignment="center"
                navbarAlignment="center"
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-3"
                />
                <Categories
                    className="nomargin"
                />
                <Products/>
                <Services/>
            </ContentWrapper>
            <Footer
                dark={false}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeTwelve;