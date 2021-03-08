import { Col, Container, Row } from "react-bootstrap";
import { PromoOne as Promo } from "@components/promo";
import { CategoryOne as Category } from "@components/category";

const CategoriesTwo = ({ className }) => {
  return (
    <div className={`container-indent0 ${className ? className : ""}`}>
      {/* <Container> */}
      <Row className="flex-sm-row-reverse tt-layout-promo-box">
        <Col md={6}>
          <Row>
            <Col sm={6}>
              <Category
                category="Women"
                thumb="/assets/images/categories/women.jpg"
              />
            </Col>

            <Col sm={6}>
              <Category
                category="Unisex"
                thumb="/assets/images/categories/unisex.jpg"
              />
            </Col>

            <Col>
              <Promo
                heading="Kids"
                thumb="/assets/images/categories/kids.jpg"
                link="/shop"
              />
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Promo
            heading="Men"
            thumb="/assets/images/categories/men.jpg"
            link="/shop"
          />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default CategoriesTwo;
