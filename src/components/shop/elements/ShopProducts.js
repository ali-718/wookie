import {Col, Row} from "react-bootstrap";
import {EmptyProducts} from "@components/products";
import {ProductOne as Product} from "@components/product";

const ShopProducts = ({products, layout, productPerPage}) => {
    return (
        <Row className={`tt-product-listing ${layout}`}>
            {products.length > 0 ? products.slice(0, productPerPage).map(product => (
                <Col
                    key={product.id}
                    className="tt-col-item"
                >
                    <Product product={product} page={"shop"}/>
                </Col>
            )) : (
                <EmptyProducts/>
            )}
        </Row>
    );
};

export default ShopProducts;