import Head from "next/head";
import {Fragment} from "react";
import {HeaderFour as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";
import LookbookProducts from "@components/products/LookbookProducts";

const HomeThirteen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 13 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                logoAlignment="left"
                navbarAlignment="left"
            />
            <ContentWrapper>
                <LookbookProducts className="nomargin"/>
            </ContentWrapper>
            <Footer
                dark={false}
                newsletter={false}
                className="nomargin"
            />
        </Fragment>
    )
}
export default HomeThirteen;