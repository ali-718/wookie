import { Fragment } from "react";
import Head from "next/head";
import products from "@data/products";
import Breadcrumb from "@components/breadcrumb";
import SocialShare from "@components/social-share";
import { RelatedProducts } from "@components/products";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import ProductDetails from "@components/product-details";
import { ContentWrapperOne as ContentWrapper } from "@components/content-wrapper";

const PageProductDetails = ({ product }) => {
  const { categories, excerpt, name, tags } = product;
  const slug = `/shop/${name.toLowerCase().split(" ").join("-")}`;

  return (
    <Fragment>
      <Head>
        <title>
          {name + " - Wokiee :: React Next JS Multipurpose eCommerce Template"}
        </title>
        <meta name="description" content={excerpt} />
      </Head>

      <Header navbarAlignment="left" />
      <ContentWrapper>
        <Breadcrumb />

        <ProductDetails product={product} />

        <SocialShare url={slug} content={name} />

        {/* <RelatedProducts categories={categories} tags={tags}/> */}
      </ContentWrapper>
      <Footer />
    </Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  const product = products.find(
    (product) => product.name.toLowerCase().split(" ").join("-") === params.slug
  );
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((product) => {
      return {
        params: {
          slug: product.name.toLowerCase().split(" ").join("-"),
        },
      };
    }),
    fallback: false,
  };
};

export default PageProductDetails;
