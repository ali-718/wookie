import {useContext} from "react";
import {getProducts} from "@utils/product";
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "@components/section-title";
import {ProductsContext} from "@global/ProductsContext";
import {ProductOne as Product} from "@components/product";

const BestSelling = () => {
    const {products} = useContext(ProductsContext);
    const tendingProducts = getProducts(products, 'best-seller', 8);

    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="BEST SELLER"
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

export default BestSelling;