import Head from "next/head";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/breadcrumb";
import {WishlistContext} from "@global/WishlistContext";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import EmptyWishlist from "@components/wishlist/EmptyWishlist";
import WishlistProducts from "@components/wishlist/WishlistProducts";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";


const WishlistPage = () => {

    const {wishlist} = useContext(WishlistContext);

    return (
        <Fragment>
            <Head>
                <title>Wishlist - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header navbarAlignment="left"/>
            <ContentWrapper>
                <Breadcrumb/>

                <div className="wishlist-page-content content-indent">
                    {wishlist.length > 0 && <WishlistProducts/>}
                </div>

                {wishlist.length === 0 && (
                    <div className="empty-wishlist-wrapper">
                        <EmptyWishlist/>
                    </div>
                )}
            </ContentWrapper>
            <Footer/>
        </Fragment>
    );
};

export default WishlistPage;