import Image from "next/image";
import Router from "next/router";
// import logo from "../../public/images1/logo.jpg";
import styles from "../styles/Home.module.css"

const Header = () => {
  return (
    <header id="header" role="banner">
      {/* <div
        className="topbar"
        // style="background:#00B0B9; font-size:14px; color:#fff; padding:5px; margin-bottom:10px; text-align:center;"
      >
        <strong>GIVINGTUESDAY:</strong> HELP US RAISE $200K.{" "}
        <a
          href="/givingtuesday"
          //  style="color:#fff;"
        >
          <u>DONATE TODAY</u>
        </a>
      </div>
      <a id="skipnav" href="#body-content">
        Skip to Main Content
      </a> */}
      <div className="wrap flex">
        <div >
         
          <Image src="/logo.png" height={70} width={70} style={{height:70, width:70, borderRadius:35}}/>
        </div>


        <nav>
          {/* <ul id="utility-nav" className="">
            <li
              id="menu-item-458"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-458"
            >
              <a href="https://www.shantibhavanchildren.org/donate/">Donate</a>
            </li>
            <li
              id="menu-item-704"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-704"
            >
              <a href="https://www.shantibhavanchildren.org/netflix/">
                Daughters of Destiny Netflix Documentary
              </a>
            </li>
          </ul> */}
          <ul id="main-nav" className="">
            <li
              id="menu-item-443"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-443"
            >
              <a onClick={() => Router.push("/")}>Home</a>
            </li>


            <li
              id="menu-item-81"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"
            >
              {/* <a onClick={() => Router.push("blog")}>Blog</a> */}
              <a >Blog</a>
            </li>
            <li
              id="menu-item-445"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-445"
            >
              {/* <a onClick={() => Router.push("contactus")}>
                Contact
              </a> */}
              <a >
                Contact
              </a>
            </li>
            <li
              id="menu-item-446"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-446"
            >
              {/* <a  onClick={() => Router.push("aboutus")}>About</a> */}
              <a  >About</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-nav-container">
          <span className="mobile-nav-toggle">
            <span></span>
          </span>
          <nav className="rounded">
            <ul id="mobile-nav" className="">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-446">
                <a href="https://www.shantibhavanchildren.org/about-us/">
                  About
                </a>
                <span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-447">
                    <a href="https://www.shantibhavanchildren.org/about-us/">
                      Overview
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-448">
                    <a href="https://www.shantibhavanchildren.org/team/">
                      Team
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-450">
                    <a href="https://www.shantibhavanchildren.org/press/">
                      Press
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-449">
                    <a href="https://www.shantibhavanchildren.org/frequently-asked-questions/">
                      Frequently Asked Questions
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-451">
                    <a href="https://www.shantibhavanchildren.org/our-school/">
                      Our School
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-770">
                    <a href="https://www.shantibhavanchildren.org/children/">
                      Our Children
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-901">
                    <a href="https://www.shantibhavanchildren.org/photo-gallery/">
                      Photo Gallery
                    </a>
                    <span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-443">
                <a href="https://www.shantibhavanchildren.org/impact/">
                  Impact
                </a>
                <span></span>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-455">
                <a href="https://www.shantibhavanchildren.org/get-involved/">
                  Get Involved
                </a>
                <span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-454">
                    <a href="https://www.shantibhavanchildren.org/get-involved/">
                      Ways to Get Involved
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-456">
                    <a href="https://www.shantibhavanchildren.org/donate/">
                      How to Donate
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-680">
                    <a href="https://www.shantibhavanchildren.org/sponsorship/">
                      Sponsor a Child
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-457">
                    <a href="https://www.shantibhavanchildren.org/volunteer/">
                      Volunteer at Shanti Bhavan
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1315">
                    <a href="https://www.shantibhavanchildren.org/shanti-bhavan-student-alliance-sbsa/">
                      Shanti Bhavan Student Alliance (SBSA)
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-840">
                    <a href="https://www.shantibhavanchildren.org/partners/">
                      Partners
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-677">
                    <a href="https://www.shantibhavanchildren.org/career-opportunities/">
                      Career Opportunities
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-801">
                    <a href="https://www.shantibhavanchildren.org/our_newsletter/">
                      Our Newsletter
                    </a>
                    <span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-579">
                <a href="https://www.shantibhavanchildren.org/shanti-bhavan-2/">
                  Home Page
                </a>
                <span></span>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-452">
                    <a href="https://www.shantibhavanchildren.org/shanti-bhavan-2/">
                      Overview
                    </a>
                    <span></span>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-453">
                    <a href="https://www.shantibhavanchildren.org/sb2_founding_donors/">
                      Founding Donors
                    </a>
                    <span></span>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-81">
                <a href="https://www.shantibhavanchildren.org/blog/">Blog</a>
                <span></span>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-445">
                <a href="https://www.shantibhavanchildren.org/contact/">
                  Contact
                </a>
                <span></span>
              </li>
            </ul>
            <ul id="mobile-utility-nav" className="">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-458">
                <a href="https://www.shantibhavanchildren.org/donate/">
                  Donate
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-704">
                <a href="https://www.shantibhavanchildren.org/netflix/">
                  Daughters of Destiny Netflix Documentary
                </a>
              </li>
            </ul>
            <div className="mobile-menu-footer flex">
              <a className="mobile-logo">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/themes/jrd-shanti-bhavan/ui/svg/logo_icon.svg"
                  alt="Shanti Bhavan Children&#039;s Project"
                />
              </a>
              <div className="social">
                <a
                  href="https://www.facebook.com/ShantiBhavan/"
                  target="_blank"
                >
                  {/* <svg>
                  <use xlink:href="https://www.shantibhavanchildren.org/wp-content/themes/jrd-shanti-bhavan/ui/svg/sprites.svg#social_facebook"></use>
                </svg> */}
                </a>
                <a href="https://twitter.com/ShantiBhavan" target="_blank">
                  {/* <svg>
                  <use xlink:href="https://www.shantibhavanchildren.org/wp-content/themes/jrd-shanti-bhavan/ui/svg/sprites.svg#social_twitter"></use>
                </svg> */}
                </a>
                <a
                  href="https://www.youtube.com/user/ShantiBhavanSchool"
                  target="_blank"
                >
                  {/* <svg>
                  <use xlink:href="https://www.shantibhavanchildren.org/wp-content/themes/jrd-shanti-bhavan/ui/svg/sprites.svg#social_youtube"></use>
                </svg> */}
                </a>
                <a
                  href="https://www.instagram.com/shanti_bhavan/"
                  target="_blank"
                >
                  {/* <svg>
                  <use xlink:href="https://www.shantibhavanchildren.org/wp-content/themes/jrd-shanti-bhavan/ui/svg/sprites.svg#social_instagram"></use>
                </svg> */}
                </a>
                <a
                  href="https://www.linkedin.com/company/shanti-bhavan-children's-project/?viewAsMember=true"
                  target="_blank"
                >
                  {/* <svg>
                  <use xlink:href="https://www.shantibhavanchildren.org/wp-content/themes/jrd-shanti-bhavan/ui/svg/sprites.svg#social_linkedin"></use>
                </svg> */}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;



