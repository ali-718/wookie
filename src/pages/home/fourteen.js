import Head from "next/head";
import {Fragment} from "react";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {SliderOne as Slider} from "@components/slider";
import sliderData from "@data/slider/home-fourteen.json";
import {BrandsThree as Brands} from "@components/brands";
import {HomeOneTending as Tending} from "@components/products";
import {CategoriesNine as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeFourteen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 14 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                dark={true}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                <Categories/>
                <Tending/>
                <Brands/>
            </ContentWrapper>

            <Footer newsletter={false }/>
        </Fragment>
    )
}

export default HomeFourteen;