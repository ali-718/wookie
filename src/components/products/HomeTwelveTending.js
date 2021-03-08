import {useContext} from "react";
import {Container} from "react-bootstrap";
import {getProducts} from "@utils/product";
import Masonry from "react-masonry-component";
import SectionTitle from "@components/section-title";
import {ProductsContext} from "@global/ProductsContext";
import {ProductThree as Product} from "@components/product";

const HomeTwelveTending = () => {
    const {products} = useContext(ProductsContext);
    const tendingProducts = getProducts(products, 'tending', 10);

    return (
        <div className="container-indent">
            <Container fluid className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="TENDING"
                    content="TOP VIEW IN THIS WEEK"
                />

                <div className="tt-product-listing-masonry">
                    <Masonry className="tt-product-init tt-add-item">
                        {tendingProducts.map((product, i) => (
                            <div key={product.id} className={`element-item ${i === 2 || i === 5 ? 'double-size' : ''}`}>
                                <Product product={product} page="home"/>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Container>
        </div>
    );
};

export default HomeTwelveTending;