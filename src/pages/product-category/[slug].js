import Head from "next/head";
import {Fragment, useContext} from "react";
import products from "@data/products";
import Breadcrumb from "@components/breadcrumb";
import {toCapitalize} from "@utils/toCapitalize";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {getProductsByCategory, getProductsUniqueCategories} from "@utils/product";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";
import ShopGrid from "@components/shop/ShopGrid";

const PageProductCategory = ({category}) => {
    const {products} = useContext(ProductsContext);
    const categoryProducts = getProductsByCategory(products, category, -1);

    return (
        <Fragment>
            <Head>
                <title>{toCapitalize(category)} Archives - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header navbarAlignment="left"/>
            <ContentWrapper>
                <Breadcrumb/>
                <ShopGrid
                    sidebar={true}
                    sidebarPosition="left"
                    containerFluid={false}
                    products={categoryProducts}
                    pageTitle={toCapitalize(category)}
                />
            </ContentWrapper>
            <Footer newsletter={true}/>
        </Fragment>
    );
};

export const getStaticProps = async ({params}) => {
    return {
        props: {
            category: params.slug
        }
    }
}

export const getStaticPaths = async () => {
    const categories = getProductsUniqueCategories(products, -1);
    return {
        paths: categories.map(category => {
            return {
                params: {
                    slug: category
                }
            }
        }),
        fallback: false
    }
}

export default PageProductCategory;