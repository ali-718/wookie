import Link from "next/link";
import {useRouter} from "next/router";
import {Fragment, useContext} from "react";
import {useFilter, useWindowSize} from "@hooks";
import {toCapitalize} from "@utils/toCapitalize";
import SortBy from "@components/shop/elements/SortBy";
import {ProductsContext} from "@global/ProductsContext";
import ShopWidget from "@components/shop/elements/ShopWidget";
import {arrSortByCharacter, getClosest, range} from "@utils/method";
import ProductPerPage from "@components/shop/elements/ProductPerPage";
import {
    getProductsUniqueTags,
    getProductsUniquePrices,
    getProductsUniqueSizes,
    getProductsUniqueColors,
    getProductsUniqueVendor,
    getProductsUniqueCategories
} from "@utils/product";

const ShopFilters = (props) => {
    const {
        sidebar,
        onSortHandler,
        getFilterParam,
        productPerPage,
        filterPanelHandler,
        onProductPerPageHandler,
    } = props;
    const {query: {slug}} = useRouter();
    const [windowSize] = useWindowSize();
    const {products} = useContext(ProductsContext);
    const {filterBySize} = useFilter(products);
    const sizes = getProductsUniqueSizes(products);
    const colors = getProductsUniqueColors(products);
    const vendors = getProductsUniqueVendor(products);
    const prices = getProductsUniquePrices(products);
    const maxPrice = Math.max.apply(Math, prices);
    let priceRange = range(0, maxPrice, 50);
    const tags = getProductsUniqueTags(products, 20);
    const cats = getProductsUniqueCategories(products, -1);
    const categories = arrSortByCharacter(cats);

    const filterByHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const closest = getClosest(target, 'UL').childNodes;
        closest.forEach(elem => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active')
                target.parentNode.classList.add('active')
            } else {
                target.parentNode.classList.add('active')
            }
        })
        getFilterParam(target.dataset.filtertype, target.dataset.filtervalue);
    }

    return (
        <Fragment>
            {!sidebar && (
                <div className="tt-btn-col-close">
                    <a
                        href="/"
                        onClick={(event => {
                            event.preventDefault();
                            filterPanelHandler()
                        })}
                    >
                        Close
                    </a>
                </div>
            )}

            {windowSize < 1025 && sidebar && (
                <Fragment>
                    <div className="tt-btn-col-close">
                        <a
                            href="/"
                            onClick={(event => {
                                event.preventDefault();
                                filterPanelHandler()
                            })}
                        >
                            Close
                        </a>
                    </div>

                    <ShopWidget>
                        <div className="tt-filter-detach-option">
                            <div className="filters-mobile">
                                <div className="filters-row-select">
                                    <SortBy onSortHandler={onSortHandler}/>

                                    <ProductPerPage
                                        productPerPage={productPerPage}
                                        onProductPerPageHandler={onProductPerPageHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </ShopWidget>
                </Fragment>
            )}

            <ShopWidget title="PRODUCT CATEGORIES">
                <ul className="tt-list-row">
                    {categories.map(cat => (
                        <li key={cat} className={cat === slug ? 'active' : ''}>
                            <Link href={`/product-category/${cat}`}>{toCapitalize(cat)}</Link>
                        </li>
                    ))}
                </ul>
            </ShopWidget>

            <ShopWidget title="FILTER BY PRICE">
                <ul className="tt-list-row">
                    {priceRange.map((range, idx) => (
                        <li key={idx}>
                            <a
                                href="/"
                                data-filtertype="price"
                                data-filtervalue={range}
                                onClick={event => filterByHandler(event)}
                            >
                                {`TK ${range}`}
                            </a>
                        </li>
                    ))}
                </ul>
            </ShopWidget>

            <ShopWidget title="FILTER BY SIZE">
                <ul className="tt-options-swatch options-middle on-filter">
                    {sizes.map(size => (
                        <li key={size} className={filterBySize === size ? 'active' : ''}>
                            <a href="/"
                               data-filtertype="size"
                               data-filtervalue={size}
                               onClick={event => filterByHandler(event)}
                            >
                                {size.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </ShopWidget>

            <ShopWidget title="FILTER BY COLOR">
                <ul className="tt-options-swatch options-middle on-filter">
                    {colors.map(color => (
                        <li key={color.name}>
                            <a
                                href="#"
                                className="options-color tt-border"
                                style={{backgroundColor: color.code}}
                                data-filtertype="color"
                                data-filtervalue={color.name}
                                onClick={event => filterByHandler(event)}
                            />
                        </li>
                    ))}
                </ul>
            </ShopWidget>

            <ShopWidget title="VENDOR">
                <ul className="tt-list-row">
                    {vendors.map(vendor => (
                        <li key={vendor.toLowerCase()}>
                            <a href="/"
                               data-filtertype="vendor"
                               data-filtervalue={vendor}
                               onClick={event => filterByHandler(event)}
                            >
                                {vendor}
                            </a>
                        </li>
                    ))}
                </ul>
            </ShopWidget>

            <ShopWidget title="TAGS">
                <ul className="tt-list-inline">
                    {tags.map(tag => (
                        <li key={tag}>
                            <a href="/"
                               data-filtertype="tag"
                               data-filtervalue={tag}
                               onClick={event => filterByHandler(event)}
                            >
                                {tag}
                            </a>
                        </li>
                    ))}
                </ul>
            </ShopWidget>
        </Fragment>
    );
};

export default ShopFilters;