import Head from "next/head";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const PageShop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <Fragment>
            <Head>
                <title>Shop - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header navbarAlignment="left"/>
            <ContentWrapper>
                <Breadcrumb/>

                <ShopGrid
                    sidebar={false}
                    products={products}
                    containerFluid={false}
                />
            </ContentWrapper>
            <Footer newsletter={true}/>
        </Fragment>
    );
};

export default PageShop;