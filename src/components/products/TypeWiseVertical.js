import {useContext} from "react";
import {getProducts} from "@utils/product";
import {Container, Row, Col} from "react-bootstrap";
import {ProductsContext} from "@global/ProductsContext";
import {ProductTwo as Product} from "@components/product";

const TypeWiseVertical = () => {
    const {products} = useContext(ProductsContext);
    const specialProducts = getProducts(products, 'specials', 3);
    const featuredProducts = getProducts(products, 'featured', 3);

    return (
        <div className="container-indent">
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <h6 className="tt-title-sub">NEW PRODUCTS</h6>
                        <div className="tt-layout-vertical-listing">
                            {products.slice(0, 3).map(product => (
                                <Product product={product} key={product.id}/>
                            ))}
                        </div>
                    </Col>
                    <div className="divider visible-xs"/>
                    <Col md={4} sm={6}>
                        <h6 className="tt-title-sub">SPECIAL PRODUCTS</h6>
                        <div className="tt-layout-vertical-listing">
                            {specialProducts.map(product => (
                                <Product product={product} key={product.id}/>
                            ))}
                        </div>
                    </Col>
                    <div className="divider visible-sm visible-xs"/>
                    <Col md={4} sm={6}>
                        <h6 className="tt-title-sub">FEATURED PRODUCTS</h6>
                        <div className="tt-layout-vertical-listing">
                            {featuredProducts.map(product => (
                                <Product product={product} key={product.id}/>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TypeWiseVertical;