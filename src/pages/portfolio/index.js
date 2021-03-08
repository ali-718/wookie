import Head from "next/head";
import {Fragment} from "react";
import {Container} from "react-bootstrap";
import portfolioData from "@data/portfolio";
import Masonry from "react-masonry-component";
import Breadcrumb from "@components/breadcrumb";
import {LightgalleryProvider} from 'react-lightgallery'
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";
import Portfolio from "@components/portfolio";

const PagePortfolio = ({fluid}) => {
    return (
        <Fragment>
            <Head>
                <title>Portfolios - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header navbarAlignment="left"/>
            <ContentWrapper>
                <Breadcrumb/>

                <div className="content-indent">
                    <Container fluid={fluid}>
                        <h1 className="tt-title-subpages noborder">PORTFOLIOS</h1>


                        <div className="tt-portfolio-masonry">
                            <LightgalleryProvider>
                                <Masonry
                                    className="tt-portfolio-content layout-default tt-grid-col-3 tt-add-item tt-show">
                                    {portfolioData.map(portfolio => (
                                        <Portfolio
                                            group="group1"
                                            key={portfolio.id}
                                            thumb={portfolio.thumb}
                                            title={portfolio.title}
                                            excerpt={portfolio.excerpt}
                                        />
                                    ))}
                                </Masonry>
                            </LightgalleryProvider>
                        </div>
                    </Container>
                </div>
            </ContentWrapper>
            <Footer newsletter={true}/>
        </Fragment>
    );
};

export default PagePortfolio;