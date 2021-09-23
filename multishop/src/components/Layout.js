import { Component } from "react"

class Layout extends Component{
    render(){
        return (
            <div id="page" className="site">
                <div className="container-fluid page-styling site-header-before">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="links_list links_list-align-left align-center-desktop topbar-social">
                                <li>
                                    <p className="links_list-value">
                                        <a href="http://facebook.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-value">
                                        <a href="mailto:email@email.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-paper-plane"></i>
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-value">
                                        <a href="http://pinterest.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-pinterest-p"></i>
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-value">
                                        <a href="http://youtube.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-youtube-play"></i>
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-value">
                                        <a href="http://twitter.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-value">
                                        <a href="http://google.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-value">
                                        <a href="http://instagram.com" target="_blank" rel="nofollow">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <ul className="links_list links_list-align-right align-center-desktop topbar-contacts">
                                <li>
                                    <p className="links_list-label">
                                        Our Address
                                    </p>
                                    <p className="links_list-value">
                                        <a href="http://maps.google.com" target="_blank" rel="nofollow">15th Street, Miami, USA</a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-label">
                                        Contact Us
                                    </p>
                                    <p className="links_list-value">
                                        <a href="mailto:support@email.com">Support@Email.com</a>
                                    </p>
                                </li>
                                <li>
                                    <p className="links_list-label">
                                        Phone
                                    </p>
                                    <p className="links_list-value">
                                        <a href="tel:4785929899">(478)-592-9899</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="site-header">

                    <p className="h-logo">
                        <a href="index.html"><img src="img/logo.png" alt="MultiShop"/></a>
                    </p><div className="h-shop">

                    <form method="get" action="#" className="h-search" id="h-search">
                        alt=""/> placeholder="Search..."/>
                        <button type="submit"><i className="ion-search"></i></button>
                    </form>

                    <ul className="h-shop-links">
                        <li className="h-search-btn" id="h-search-btn"><i className="ion-search"></i></li>
                        <li className="h-shop-icon h-wishlist">
                            <a title="Wishlist" href="wishlist.html">
                                <i className="ion-heart"></i>
                                <span>5</span>
                            </a>
                        </li>
                        <li className="h-shop-icon h-compare">
                            <a title="Compare List" href="compare.html">
                                <i className="ion-arrow-swap"></i>
                                <span>2</span>
                            </a>
                        </li>
                        <li className="h-shop-icon h-profile">
                            <a href="auth.html" title="My Account">
                                <i className="ion-android-person"></i>
                            </a>
                            <ul className="h-profile-links">
                                <li><a href="auth.html">Login / Registration</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="compare.html">Compare</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                        </li>

                        <li className="h-cart">
                            <a className="cart-contents" href="cart.html">
                                <p className="h-cart-icon">
                                    <i className="ion-android-cart"></i>
                                    <span>3</span>
                                </p>
                                <p className="h-cart-total">$510.00</p>
                            </a>
                            <div className="widget_shopping_cart">
                                <div className="widget_shopping_cart_content">
                                    <ul className="cart_list">
                                        <li>
                                            <a href="#" className="remove">&times;</a>
                                            <a href="#">
                                                <img src="http://placehold.it/100x67" alt=""/>
                                                Pneumatic Coil Hose
                                            </a>
                                            <span className="quantity">1 &times; $180.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="remove">&times;</a>
                                            <a href="#">
                                                <img src="http://placehold.it/100x89" alt=""/>
                                                Drill Tool Kit
                                            </a>
                                            <span className="quantity">1 &times; $115.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="remove">&times;</a>
                                            <a href="#">
                                                <img src="http://placehold.it/100x89" alt=""/>
                                                Searchlight Portable
                                            </a>
                                            <span className="quantity">1 &times; $150.00</span>
                                        </li>
                                    </ul>
                                    <p className="total"><b>Subtotal:</b> $510.00</p>
                                    <p className="buttons">
                                        <a href="cart.html" className="button">View cart</a>
                                        <a href="checkout.html" className="button">Checkout</a>
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="h-menu-btn" id="h-menu-btn">
                            <i className="ion-navicon"></i> Menu
                        </li>
                    </ul>
                </div><div className="mainmenu">

                    <nav id="h-menu" className="h-menu">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="index.html">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Home 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children active">
                                <a href="catalog-gallery.html">Shop</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="catalog-gallery.html">Catalog - Gallery</a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">Catalog - List</a>
                                    </li>
                                    <li className="active">
                                        <a href="catalog-gallery-full.html">Catalog - No Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Product Page</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="cart.html">Shop Pages</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="cart.html">Cart</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="compare.html">Compare</a>
                                            </li>
                                            <li>
                                                <a href="auth.html">Login</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="elements.html">Elements</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="blog.html">Blog</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog.html">Blog Posts</a>
                                    </li>
                                    <li>
                                        <a href="post.html">Standard Post</a>
                                    </li>
                                    <li>
                                        <a href="post-slider.html">Slider Post</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="about.html">Pages</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="contacts.html">Contacts</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="404.html">Error 404</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div></div>


                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main">
                            <div className="cont maincont">

                                <div className="section-top">

                                    <h1 className="maincont-ttl">Shop</h1>
                                    <ul className="b-crumbs">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Catalog - Gallery</li>
                                    </ul>
                                    <div className="section-top-sort">
                                        <div className="section-view">
                                            <p>View</p>
                                            <div className="dropdown-wrap">
                                                <p className="dropdown-title section-view-ttl">Gallery</p>
                                                <ul className="dropdown-list">
                                                    <li>
                                                        <a href="catalog-list.html">List</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="catalog-gallery.html">Gallery</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="section-sort">
                                            <p>Sort</p>
                                            <div className="dropdown-wrap">
                                                <p className="dropdown-title section-sort-ttl">Newness</p>
                                                <ul className="dropdown-list">
                                                    <li>
                                                        <a href="#">Popularity</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Average rating</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="#">Newness</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Price: low to high</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Price: high to low</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form method="post" className="products-per-page">
                                            <p>Per Page</p>
                                            <select>
                                                <option value="12" selected="selected">12</option>
                                                <option value="24">24</option>
                                                <option value="48">48</option>
                                                <option value="-1">All</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="row prod-items prod-items-3">
                                    <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                        <div className="sectgl prod-i">
                                            <div className="prod-i-top">
                                                <a className="prod-i-img" href="product.html">
                                                    <img src="http://placehold.it/290x258" alt=""/>
                                                </a>
                                                <div className="prod-i-actions">
                                                    <div className="prod-i-actions-in">
                                                        <div className="prod-li-favorites">
                                                            <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                        </div>
                                                        <p className="prod-quickview">
                                                            <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                        </p>
                                                        <p className="prod-i-cart">
                                                            <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                        </p>
                                                        <p className="prod-li-compare">
                                                            <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="prod-i-bot">
                                                <div className="prod-i-info">
                                                    <p className="prod-i-price">$120.00</p>
                                                    <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                                                </div>
                                                <h3 className="prod-i-ttl"><a href="product.html">Searchlight Portable</a></h3>
                                            </div>
                                        </div>
                                    </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$120.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Searchlight Portable</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x195" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$120.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Searchlight Portable</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$120.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Searchlight Portable</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price"><del>$15.00</del> $20.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Other</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Flooring</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$18.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Other</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Pneumatic Coil Hose</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$45.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Other</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Door Hinge Metal</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="prod-i-badge"><span>Sale</span></p>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$70.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Electricity</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Universal Plug</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price"><del>$12.00</del> $22.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Tools</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Drill Tool Kit</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$24.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Pipes</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Metal-Plastic Pipes</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x233" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$31.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Electricity</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">LED Lamp</a></h3>
                                        </div>
                                    </div>
                                </article>            <article className="cf-sm-6 cf-md-4 cf-lg-4 col-xs-6 col-sm-6 col-md-4 col-lg-4 sectgl-item">
                                    <div className="sectgl prod-i">
                                        <div className="prod-i-top">
                                            <a className="prod-i-img" href="product.html">
                                                <img src="http://placehold.it/290x258" alt=""/>
                                            </a>
                                            <div className="prod-i-actions">
                                                <div className="prod-i-actions-in">
                                                    <div className="prod-li-favorites">
                                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                                    </div>
                                                    <p className="prod-quickview">
                                                        <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                                    </p>
                                                    <p className="prod-i-cart">
                                                        <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                                    </p>
                                                    <p className="prod-li-compare">
                                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="prod-i-badge"><span className="badge-1">Top seller</span></p>
                                        </div>
                                        <div className="prod-i-bot">
                                            <div className="prod-i-info">
                                                <p className="prod-i-price">$10.00</p>
                                                <p className="prod-i-categ"><a href="catalog-gallery.html">Electricity</a></p>
                                            </div>
                                            <h3 className="prod-i-ttl"><a href="product.html">Power Socket</a></h3>
                                        </div>
                                    </div>
                                </article>        </div>
                                <ul className="page-numbers">
                                    <li><span className="page-numbers current">1</span></li>
                                    <li><a className="page-numbers" href="#">2</a></li>
                                    <li><a className="page-numbers" href="#">3</a></li>
                                    <li><a className="page-numbers" href="#">4</a></li>
                                    <li><a className="next page-numbers" href="#"><i className="fa fa-angle-right"></i></a></li>
                                </ul></div>
                        </main>
                    </div>

                </div>

                <div className="container-fluid blog-sb-widgets page-styling site-footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 widget align-center-tablet f-logo-wrap">
                            <a href="index.html" className="f-logo">
                                <img src="img/logo.png" alt=""/>
                            </a>
                            <p>Modern eCommerce HTML Template</p>
                            <button className="btn callback">Contact Us</button>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
                            <h3 className="widgettitle">Company</h3>
                            <ul className="menu">
                                <li>
                                    <a href="index.html">Front Page</a>
                                </li>
                                <li>
                                    <a href="about.html">About Us</a>
                                </li>
                                <li>
                                    <a href="contacts.html">Contacts</a>
                                </li>
                                <li>
                                    <a href="index.html">Gallery</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
                            <h3 className="widgettitle">Shop</h3>
                            <ul className="menu">
                                <li>
                                    <a href="catalog-list.html">Electricity</a>
                                </li>
                                <li>
                                    <a href="catalog-gallery.html">Fasteners</a>
                                </li>
                                <li>
                                    <a href="catalog-gallery-full.html">Lighting</a>
                                </li>
                                <li>
                                    <a href="catalog-gallery.html">Pipes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
                            <h3 className="widgettitle">Account</h3>
                            <ul className="menu">
                                <li>
                                    <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                    <a href="compare.html">Compare</a>
                                </li>
                                <li>
                                    <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                    <a href="auth.html">My Account</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
                            <h3 className="widgettitle">Blog</h3>
                            <ul className="menu">
                                <li>
                                    <a href="blog.html">All Posts</a>
                                </li>
                                <li>
                                    <a href="post.html">News</a>
                                </li>
                                <li>
                                    <a href="post-slider.html">Articles</a>
                                </li>
                                <li>
                                    <a href="blog.html">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="form-validate modal-form" id="modal-form">
                    <form action="#" method="POST" className="form-validate">
                        <h4>Contact Us</h4>
                        <input type="text" placeholder="Your name" data-required="text" name="name"/>
                        <input type="text" placeholder="Your phone" data-required="text" name="phone"/>
                        <input type="text" placeholder="Your email" data-required="text" data-required-email="email" name="email"/>
                        <input className="btn1" type="submit" value="Send"/>
                    </form>
                </div>

                <div className="cont maincont quick-view-modal">
                    <article>
                        <div className="prod">
                            <div className="prod-slider-wrap prod-slider-shown">
                                <div className="flexslider prod-slider" id="prod-slider">
                                    <ul className="slides">
                                        <li>
                                            <a data-fancybox-group="prod" className="fancy-img" href="http://placehold.it/1000x1000">
                                                <img src="http://placehold.it/550x550" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-fancybox-group="prod" className="fancy-img" href="http://placehold.it/1000x1000">
                                                <img src="http://placehold.it/550x550" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-fancybox-group="prod" className="fancy-img" href="http://placehold.it/1000x1000">
                                                <img  src="http://placehold.it/550x550" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="prod-slider-count"><p><span className="count-cur">1</span> / <span className="count-all">3</span></p><p className="hover-label prod-slider-zoom"><i className="icon ion-search"></i><span>Zoom In</span></p></div>
                                </div>
                                <div className="flexslider prod-thumbs" id="prod-thumbs">
                                    <ul className="slides">
                                        <li>
                                            <img src="http://placehold.it/550x550" alt=""/>
                                        </li>
                                        <li>
                                            <img src="http://placehold.it/550x550" alt=""/>
                                        </li>
                                        <li>
                                            <img src="http://placehold.it/550x550" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="prod-cont">
                                <div className="prod-rating-wrap">
                                    <p data-rating="4" className="prod-rating">
                                        <i className="rating-ico" title="1"></i><i className="rating-ico" title="2"></i><i className="rating-ico" title="3"></i><i className="rating-ico" title="4"></i><i className="rating-ico" title="5"></i>
                                    </p>
                                    <p className="prod-rating-count">7</p>
                                </div>
                                <p className="prod-categs"><a href="#">Lighting</a>, <a href="#">Tools</a></p>
                                <h2>Belt Sanders</h2>
                                <p className="prod-price">$25.00</p>
                                <p className="stock in-stock">7 in stock</p>
                                <p className="prod-excerpt">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...</p>
                                <div className="prod-add">
                                    <button type="submit"
                                            className="button"><i className="icon ion-android-cart"></i> Add to cart
                                    </button>
                                    <p className="qnt-wrap prod-li-qnt">
                                        <a href="#" className="qnt-plus prod-li-plus"><i className="icon ion-arrow-up-b"></i></a>
                                        alt=""/> value="1"/>
                                        <a href="#" className="qnt-minus prod-li-minus"><i className="icon ion-arrow-down-b"></i></a>
                                    </p>
                                    <div className="prod-li-favorites">
                                        <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                    </div>
                                    <p className="prod-li-compare">
                                        <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Layout