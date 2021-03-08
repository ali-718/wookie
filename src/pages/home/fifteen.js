import Head from "next/head";
import {Fragment} from "react";
import {HeaderFour as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {InstagramProducts} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const HomeFifteen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 15 - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                dark={false}
                navbarAlignment="center"
                showNotificationBar={false}
            />

            <ContentWrapper>
                <InstagramProducts
                    className="nomargin"
                />
            </ContentWrapper>

            <Footer
                newsletter={false}
                className="nomargin"
            />
        </Fragment>
    )
}

export default HomeFifteen;