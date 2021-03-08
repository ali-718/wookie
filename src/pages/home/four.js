import Head from "next/head";
import { Fragment } from "react";
import Services from "@components/services";
import { FooterOne as Footer } from "@components/footer";
import { BrandsOne as Brands } from "@components/brands";
import { HeaderThree as Header } from "@components/header";
import { TypeWiseVertical } from "@components/products";
import { CategoryTypeWiseOne as Products } from "@components/products";
import { CategoriesTwo as Categories } from "@components/categories";
import { PromoBannerThree as PromoBanner } from "@components/promo-banners";
import { ContentWrapperOne as ContentWrapper } from "@components/content-wrapper";

const HomeFour = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Home 04 - Wokiee :: React Next JS Multipurpose eCommerce Template
        </title>
      </Head>

      <Header />
      <ContentWrapper>
        <Services className="tt-offset-35" />
        <Categories />
        <Products category="women" />
        <Products category="men" />
        <PromoBanner />
        <TypeWiseVertical />
        <Brands />
      </ContentWrapper>
      <Footer />
    </Fragment>
  );
};
export default HomeFour;
