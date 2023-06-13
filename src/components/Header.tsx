export function Header() {
    return (
        <header className="site-header site-header--menu-center zuzu-header-section" id="sticky-menu">
            <div className="container-fluid">
                <nav className="navbar site-navbar">
                    <div className="brand-logo">
                        <a href="index.html">
                            <img src="assets/images/logo/logo-black.svg" alt="" className="light-version-logo" />
                        </a>
                    </div>
                    <div className="menu-block-wrapper">
                        <div className="menu-overlay"></div>
                        <nav className="menu-block" id="append-menu-header">
                            <div className="mobile-menu-head">
                                <div className="go-back">
                                    <i className="fa fa-angle-left"></i>
                                </div>
                                <div className="current-menu-title"></div>
                                <div className="mobile-menu-close">&times;</div>
                            </div>
                            <ul className="site-menu-main">
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" className="nav-link-item drop-trigger">Demo <i className="fas fa-angle-down"></i></a>
                                    <ul className="sub-menu" id="submenu-1">
                                        <li className="sub-menu--item">
                                            <a href="index.html">Crypto Card</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="index-02.html">NFT Platform</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="index-03.html">Blockchain</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="index-04.html">NFT Project launch</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="index-05.html">Metaverse</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="about-light.html" className="nav-link-item">About Us</a>
                                </li>
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" className="nav-link-item drop-trigger">Pages <i className="fas fa-angle-down"></i></a>
                                    <ul className="sub-menu" id="submenu-2">
                                        <li className="sub-menu--item nav-item-has-children">
                                            <a href="#" data-menu-get="h3" className="drop-trigger">About <i className="fas fa-angle-down"></i></a>
                                            <ul className="sub-menu shape-none" id="submenu-3">
                                                <li className="sub-menu--item">
                                                    <a href="about-light.html">About light</a>
                                                </li>
                                                <li className="sub-menu--item">
                                                    <a href="about-dark.html">About dark</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu--item nav-item-has-children">
                                            <a href="#" data-menu-get="h3" className="drop-trigger">blog light <i className="fas fa-angle-down"></i></a>
                                            <ul className="sub-menu shape-none" id="submenu-4">
                                                <li className="sub-menu--item">
                                                    <a href="blog-light.html">blog light</a>
                                                </li>
                                                <li className="sub-menu--item">
                                                    <a href="single-light-blog.html">blog light details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu--item nav-item-has-children">
                                            <a href="#" data-menu-get="h3" className="drop-trigger">blog dark <i className="fas fa-angle-down"></i></a>
                                            <ul className="sub-menu shape-none" id="submenu-5">
                                                <li className="sub-menu--item">
                                                    <a href="blog-dark.html">blog dark</a>
                                                </li>
                                                <li className="sub-menu--item">
                                                    <a href="single-dark-blog.html">blog dark details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu--item nav-item-has-children">
                                            <a href="#" data-menu-get="h3" className="drop-trigger">Team<i className="fas fa-angle-down"></i>
                                            </a>
                                            <ul className="sub-menu shape-none" id="submenu-6">
                                                <li className="sub-menu--item">
                                                    <a href="team-light.html">Team light</a>
                                                </li>
                                                <li className="sub-menu--item">
                                                    <a href="team-dark.html">Team dark</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" className="nav-link-item drop-trigger">Blog <i
                                        className="fas fa-angle-down"></i></a>
                                    <ul className="sub-menu" id="submenu-7">
                                        <li className="sub-menu--item">
                                            <a href="blog-light.html">blog light</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="single-light-blog.html">blog light details</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="blog-dark.html">blog dark</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="single-dark-blog.html">blog dark details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" className="nav-link-item drop-trigger">Contact Us <i className="fas fa-angle-down"></i></a>
                                    <ul className="sub-menu" id="submenu-8">
                                        <li className="sub-menu--item nav-item-has-children">
                                            <a href="#" data-menu-get="h3" className="drop-trigger">Contact Light <i className="fas fa-angle-down"></i></a>
                                            <ul className="sub-menu shape-none" id="submenu-9">
                                                <li className="sub-menu--item">
                                                    <a href="contact-light.html">contact light</a>
                                                </li>
                                                <li className="sub-menu--item">
                                                    <a href="contact-light-02.html">contact light map</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu--item nav-item-has-children">
                                            <a href="#" data-menu-get="h3" className="drop-trigger">contact dark <i className="fas fa-angle-down"></i></a>
                                            <ul className="sub-menu shape-none" id="submenu-10">
                                                <li className="sub-menu--item">
                                                    <a href="contact-dark.html">contact dark</a>
                                                </li>
                                                <li className="sub-menu--item">
                                                    <a href="contact-dark-02.html">contact dark map</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-btn header-btn-l1 zuzu-responsive-btn">
                                    <a className="zuzu-btn zuzu-header-btn rounded-pill black" href="contact-light.html">
                                        Get Started
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                        <a className="zuzu-btn zuzu-header-btn rounded-pill blue" href="contact-light.html">
                            Get Started
                        </a>
                    </div>
                    <div className="mobile-menu-trigger">
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}