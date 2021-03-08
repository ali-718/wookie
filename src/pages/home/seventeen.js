import Head from "next/head";
import {Fragment} from "react";
import {SliderOne as Slider} from "@components/slider";
import {FooterFour as Footer} from "@components/footer";
import {HeaderFive as Header} from "@components/header";
import sliderData from "@data/slider/home-seventeen.json";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeSeventeen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 17 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                containerFluid={true}
                logoAlignment="left"
                navbarAlignment="center"
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-5"
                />
            </ContentWrapper>
            <Footer
                dark={true}
                newsletter={false}
                className="nomargin"
            />
        </Fragment>
    )
}
export default HomeSeventeen;