import Head from "next/head";
import { Fragment } from "react";
import { getBlogPosts } from "@utils/blog";
import LatestBlog from "@components/blog";
import Services from "@components/services";
import sliderData from "@data/slider/home-one.json";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { SliderOne as Slider } from "@components/slider";
import { CategoriesOne as Categories } from "@components/categories";
import { PromoBannerOne as PromoBanners } from "@components/promo-banners";
import { BestSelling, HomeOneTending as Tending } from "@components/products";
import { ContentWrapperOne as ContentWrapper } from "@components/content-wrapper";
import HomeEight from "./home/eight";

const Home = ({ blogs }) => {
  return (
    <Fragment>
      {/* <Head>
        <title>Wokiee - React Next JS Multipurpose eCommerce Template</title>
      </Head>

      <Header dark={false} navbarAlignment="left" />
      <ContentWrapper>
        <Slider
          dots={true}
          arrows={true}
          data={sliderData}
          className="nomargin"
        />
        <Categories />
        <Tending />
        <PromoBanners />
        <BestSelling />
        <LatestBlog blogs={blogs} />
        <Services />
      </ContentWrapper>
      <Footer newsletter={true} /> */}
      <HomeEight />
    </Fragment>
  );
};

export async function getStaticProps() {
  const blogs = getBlogPosts(
    ["title", "excerpt", "date", "author", "thumb", "slug", "categories"],
    3
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}

export default Home;
