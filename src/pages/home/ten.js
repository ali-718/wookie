import Head from "next/head";
import {Fragment} from "react";
import sliderData from "@data/slider/home-ten.json";
import {SliderOne as Slider} from "@components/slider";
import {HeaderFive as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {CategoriesSeven as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeTen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 10 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
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
                <Categories/>
            </ContentWrapper>
            <Footer
                dark={true}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeTen;