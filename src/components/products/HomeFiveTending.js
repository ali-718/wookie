import {useContext} from "react";
import Slider from "react-slick";
import {getProducts} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/section-title";
import {ProductsContext} from "@global/ProductsContext";
import {ProductOne as Product} from "@components/product";

const HomeFiveTending = () => {
    const {products} = useContext(ProductsContext);
    const tendingProducts = getProducts(products, 'tending', 6);

    const sliderOptions = {
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="TENDING"
                    content="TOP VIEW IN THIS WEEK"
                />

                <Slider
                    {...sliderOptions}
                    className="tt-carousel-products arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
                >
                    {tendingProducts.map(product => (
                        <Col key={product.id}>
                            <Product
                                page="home"
                                product={product}
                                showVariant={true}
                            />
                        </Col>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default HomeFiveTending;