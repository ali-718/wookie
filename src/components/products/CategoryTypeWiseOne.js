import Slider from "react-slick";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ProductsContext } from "@global/ProductsContext";
import { Col, Container, Nav, Tab } from "react-bootstrap";
import { ProductOne as Product } from "@components/product";
import { getProductsByCategory, getProducts } from "@utils/product";

const CategoryTypeWiseOne = ({ className, category, containerFluid }) => {
  const [key, setKey] = useState("new_arrivals");

  const { products } = useContext(ProductsContext);
  const categoryProducts = getProductsByCategory(products, category);

  const tabData = [
    { key: "new_arrivals", title: "KIDS" },
    { key: "specials", title: "MEN" },
    { key: "best_seller", title: "WOMEN" },
    { key: "tending", title: "UNISEX" },
  ];

  const sliderOptions = {
    slidesToShow: containerFluid ? 6 : 4,
    adaptiveHeight: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`container-indent1 ${className ? className : ""}`}>
      <Container
        fluid={containerFluid}
        className="container-fluid-custom-mobile-padding"
      >
        <div className="tt-tab-wrapper">
          <Tab.Container
            id="products-tab"
            defaultActiveKey="new_arrivals"
            onSelect={(k) => setKey(k)}
          >
            <ul className="nav nav-tabs tt-tabs-default">
              {tabData.map((nav) => (
                <Nav.Item as="li" key={nav.key}>
                  <Nav.Link
                    eventKey={nav.key}
                    className={key === nav.key ? "active" : ""}
                  >
                    {nav.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </ul>

            <Tab.Content>
              {tabData.map((nav) => (
                <Tab.Pane eventKey={nav.key} key={nav.key}>
                  {nav.key === "new_arrivals" ? (
                    <Slider
                      {...sliderOptions}
                      className="row tt-carousel-products arrow-location-tab tt-alignment-img tt-layout-product-item slick-animated-show-js"
                    >
                      {categoryProducts.map((product) => (
                        <Col xs={12} key={product.id}>
                          <Product product={product} page="home" />
                        </Col>
                      ))}
                    </Slider>
                  ) : (
                    <Slider
                      {...sliderOptions}
                      className="row tt-carousel-products arrow-location-tab tt-alignment-img tt-layout-product-item slick-animated-show-js"
                    >
                      {getProducts(categoryProducts, key, 5).map((product) => (
                        <Col xs={12} key={product.id}>
                          <Product
                            page="home"
                            product={product}
                            showVariant={true}
                          />
                        </Col>
                      ))}
                    </Slider>
                  )}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

CategoryTypeWiseOne.propTypes = {
  category: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CategoryTypeWiseOne;
