import Head from "next/head";
import {Fragment} from "react";
import {AboutTwo as About} from "@components/about";
import {HeaderSix as Header} from "@components/header";
import {BrandsThree as Brands} from "@components/brands";
import {FooterThree as Footer} from "@components/footer";
import {CategoriesSix as Categories} from "@components/categories";
import {HomeSixProductsTab as Products} from "@components/products";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeNine = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 09 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                containerFluid={false}
                logoAlignment="center"
                navbarAlignment="center"
            />
            <ContentWrapper>
                <Categories
                    className="nomargin"
                />
                <About/>
                <Products/>
                <Testimonials/>
                <Brands/>
            </ContentWrapper>
            <Footer
                dark={false}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeNine;