const Footer = (props) => {
  return (
    <section className="block md:flex justify-between text-white text-center md:text-left px-3 sm:px-16 lg:px-32 py-16 footer">
      <a href="/" className="mr-3 w-1/5 lg:w-1/3">
        <h6 className="font-extrabold text-xl sm:text-3xl">Shortly</h6>
      </a>
      <div className="flex-1 mr-2 mt-7 md:mt-0">
        <span className="font-semibold">Features</span>
        <ul className="footer-nav mt-5">
          <li className="mt-2">
            <a href="/#">Link Shortening</a>
          </li>
          <li className="mt-2">
            <a href="/#">Branded Links</a>
          </li>
          <li className="mt-2">
            <a href="/#">Analytics</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 mr-2 mt-10 md:mt-0">
        <span className="font-semibold">Resources</span>
        <ul className="footer-nav mt-5">
          <li className="mt-2">
            <a href="/#">Blog</a>
          </li>
          <li className="mt-2">
            <a href="/#">Developers</a>
          </li>
          <li className="mt-2">
            <a href="/#">Support</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 mr-2 mt-10 md:mt-0">
        <span className="font-semibold">Company</span>
        <ul className="footer-nav mt-5">
          <li className="mt-2">
            <a href="/#">About</a>
          </li>
          <li className="mt-2">
            <a href="/#">Our Team</a>
          </li>
          <li className="mt-2">
            <a href="/#">Careers</a>
          </li>
          <li className="mt-2">
            <a href="/#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center md:justify-between  mt-16 md:mt-0 footer-nav-icons">
        <a href="/#" className="mx-5 md:mx-0">
          <img
            src={"/images/icon-facebook.svg"}
            alt="fb-icon"
            className="h-6 w-6"
            onMouseOver={(e) =>
              (e.currentTarget.src = "/images/facebook-active.svg")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = "/images/icon-facebook.svg")
            }
          />
        </a>
        <a href="/#" className="mx-5 md:mx-0">
          <img
            src={"/images/icon-twitter.svg"}
            alt="tt-icon"
            className="h-6 w-6"
            onMouseOver={(e) =>
              (e.currentTarget.src = "/images/twitter-active.svg")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = "/images/icon-twitter.svg")
            }
          />
        </a>
        <a href="/#" className="mx-5 md:mx-0">
          <img
            src={"/images/icon-pinterest.svg"}
            alt="pi-icon"
            className="h-6 w-6"
            onMouseOver={(e) =>
              (e.currentTarget.src = "/images/pinterest-active.svg")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = "/images/icon-pinterest.svg")
            }
          />
        </a>
        <a href="/#" className="mx-5 md:mx-0">
          <img
            src={"/images/icon-instagram.svg"}
            alt="ig-icon"
            className="h-6 w-6"
            onMouseOver={(e) =>
              (e.currentTarget.src = "/images/instagram-active.svg")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = "/images/icon-instagram.svg")
            }
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
