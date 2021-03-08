import Head from "next/head";
import {Fragment} from "react";
import {HeaderFour as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {PromoTwo as CategoryPromo} from "@components/promo";
import {CategoryTypeWiseOne as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeEighteen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 18 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                dark={false}
                navbarAlignment="center"
                showNotificationBar={false}
            />

            <ContentWrapper>
                <CategoryPromo
                    btn={true}
                    containerFluid={true}
                    className="nomargin"
                    btnLink="/product-category/women"
                    subtitle="<span class='tt-base-color'>Women’s</span>"
                    title="<span class='tt-white-color'>Sales<br>70% Off</span>"
                    thumb="/assets/images/promo/index18-promo-img-01.jpg"
                />
                <Products
                    category="women"
                    containerFluid={true}
                />

                <CategoryPromo
                    btn={true}
                    containerFluid={true}
                    btnLink="/product-category/men"
                    subtitle="<span class='tt-base-color'>Men’s</span>"
                    title="New<br>Arrival"
                    thumb="/assets/images/promo/index18-promo-img-02.jpg"
                />
                <Products
                    category="men"
                    containerFluid={true}
                />
            </ContentWrapper>

            <Footer
                newsletter={true}
            />
        </Fragment>
    )
}

export default HomeEighteen;