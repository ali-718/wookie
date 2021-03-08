import Head from "next/head";
import {Fragment} from "react";
import {getBlogPosts} from "@utils/blog";
import Breadcrumb from "@components/breadcrumb";
import {BlogMasonry} from "@components/blog-page";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ContentWrapperOne as ContentWrapper} from "@components/content-wrapper";

const PageBlogFullWidth = ({blogs}) => {
    return (
        <Fragment>
            <Head>
                <title>Blog Full Width - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header navbarAlignment="left"/>
            <ContentWrapper>
                <Breadcrumb/>
                <BlogMasonry
                    title="THE BLOG"
                    blogs={blogs}
                    fluid={true}
                />
            </ContentWrapper>
            <Footer newsletter={true}/>
        </Fragment>
    );
};

export async function getStaticProps() {
    const blogs = getBlogPosts([
        'title',
        'excerpt',
        'date',
        'author',
        'thumb',
        'slug',
        'categories'
    ], -1);// -1 means query all post

    return {
        props: {
            blogs: blogs
        }
    }
}

export default PageBlogFullWidth;