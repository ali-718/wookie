import brandData from "@data/brand";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/section-title";
import { BrandOne as Brand } from "@components/brand";

const brands = [
  {
    id: 1,
    logo: "/assets/images/brand/Adidas.jpg",
    thumb: "/assets/images/promo/index06-promo-img-06.jpg",
    link: "/",
  },
  {
    id: 2,
    logo: "/assets/images/brand/Nike.jpg",
    thumb: "/assets/images/promo/index06-promo-img-06.jpg",
    link: "/",
  },
  {
    id: 3,
    logo: "/assets/images/brand/converse.jpg",
    thumb: "/assets/images/promo/index06-promo-img-06.jpg",
    link: "/",
  },
];

const BrandsOne = () => {
  return (
    <div className="container-indent">
      <Container className="container-fluid-custom-mobile-padding">
        <SectionTitle title="POPULAR" content="BRANDS" />

        <Row className="tt-img-box-listing">
          {brands.map((brand) => (
            <Col xs={6} sm={4} md={4} key={brand.id}>
              <Brand logo={brand.logo} link={brand.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BrandsOne;
