import Head from "next/head";
import Breadcrumb from "@components/breadcrumb";
import React, {Fragment, useContext} from "react";
import {CompareContext} from "@global/CompareContext";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import EmptyCompare from "@components/compare/EmptyCompare";
import CompareWrapper from "@components/compare/CompareWrapper";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const ComparePage = () => {
    const {compareList} = useContext(CompareContext);

    return (
        <Fragment>
            <Head>
                <title>Compare - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header navbarAlignment="left"/>

            <ContentWrapper>
                <Breadcrumb/>

                <div className="page-compare-wrapper container-indent">
                    {compareList.length > 0 && <CompareWrapper/>}
                </div>

                {compareList.length <= 0 && (
                    <div className="empty-compare-wrapper content-indent">
                        <EmptyCompare/>
                    </div>
                )}
            </ContentWrapper>

            <Footer/>
        </Fragment>
    );
};

export default ComparePage;