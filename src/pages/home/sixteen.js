import Head from "next/head";
import {Fragment} from "react";
import slideData from "@data/slider/home-sixteen.json"
import {SliderTwo as Slider} from "@components/slider";
import {HeaderTwo as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {BrandsTwo as BrandsLogo} from "@components/brands";
import {HomeSixProductsTab as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeSixteen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 16 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                dark={false}
                navbarAlignment="center"
                showNotificationBar={false}
            />

            <ContentWrapper>
                <Slider
                    className="tt-offset-small"
                    sliderWrapper="slider-style-2"
                    data={slideData}
                />
                <Products/>
                <BrandsLogo/>
            </ContentWrapper>

            <Footer
                newsletter={true}
            />
        </Fragment>
    )
}

export default HomeSixteen;