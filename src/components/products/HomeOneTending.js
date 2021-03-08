import {useContext} from "react";
import {getProducts} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/section-title";
import {ProductsContext} from "@global/ProductsContext";
import {ProductOne as Product} from "@components/product";

const HomeOneTending = () => {
    const {products} = useContext(ProductsContext);
    const tendingProducts = getProducts(products, 'tending', 8);

    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="TENDING"
                    content="TOP VIEW IN THIS WEEK"
                />

                <Row className="tt-layout-product-item">
                    {tendingProducts.map(product => (
                        <Col key={product.id} sm={6} md={4} lg={3}>
                            <Product
                                page="home"
                                product={product}
                                showVariant={true}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomeOneTending;