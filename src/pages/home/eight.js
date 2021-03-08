import Head from "next/head";
import { Fragment } from "react";
import { AboutOne as About } from "@components/about";
import sliderData from "@data/slider/home-eight.json";
import { SliderOne as Slider } from "@components/slider";
import { HeaderFive as Header } from "@components/header";
import { FooterTwo as Footer } from "@components/footer";
import { CategoryTypeWiseOne as Products } from "@components/products";
import { ContentWrapperOne as ContentWrapper } from "@components/content-wrapper";
import { CategoriesTwo as Categories } from "@components/categories";
import { BrandsOne as Brands } from "@components/brands";

const data = [
  {
    id: 1,
    title:
      '<div class="tp-caption1-wd-2 tt-white-color">Find Products for<br>Shop Store</div>',
    subTitle: '<div class="tp-caption1-wd-1 tt-base-color">Oberlo</div>',
    content:
      '<p class="tt-white-color">Oberlo allows you to easily import drop shipped products directly into your ecommerce store</p>',
    btnText: "SHOP NOW!",
    btnLink: "/shop",
    bgImage: "/assets/images/slides/Slider1.jpg",
    extraClass: "",
  },
  {
    id: 2,
    title:
      "<div class='tp-caption1-wd-2 tt-white-color'>Use Unique <br/> Demos</div>",
    subTitle: "<span class='tp-caption1-wd-1 tt-white-color'>Ready to</span>",
    content:
      "<p class='tp-caption1-wd-3 tt-white-color'>Optimized for speed, website that sells</p>",
    btnText: "SHOP NOW!",
    btnLink: "/",
    bgImage: "/assets/images/slides/slider2.jpg",
    extraClass: "",
  },
  {
    id: 2,
    title:
      "<div class='tp-caption1-wd-2 tt-white-color'>Use Unique <br/> Demos</div>",
    subTitle: "<span class='tp-caption1-wd-1 tt-white-color'>Ready to</span>",
    content:
      "<p class='tp-caption1-wd-3 tt-white-color'>Optimized for speed, website that sells</p>",
    btnText: "SHOP NOW!",
    btnLink: "/",
    bgImage: "/assets/images/slides/slider3.jpg",
    extraClass: "",
  },
];

const HomeEight = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Home 08 - Wokiee :: React Next JS Multipurpose eCommerce Template
        </title>
      </Head>

      <Header
        containerFluid={true}
        logoAlignment="left"
        navbarAlignment="center"
      />
      <ContentWrapper>
        <Slider
          data={data}
          className="nomargin"
          sliderWrapper="slider-style-5"
        />
        <Categories />
        <Products category="women" />
        <Brands />
      </ContentWrapper>
      <Footer newsletter={false} dark={true} />
    </Fragment>
  );
};
export default HomeEight;
