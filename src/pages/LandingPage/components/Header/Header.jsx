import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Mobile menu toggle functionality
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navmenu = document.querySelector("#navmenu");

    if (mobileNavToggle && navmenu) {
      const handleToggle = () => {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        mobileNavToggle.classList.toggle("bi-list");
        mobileNavToggle.classList.toggle("bi-x");
      };

      mobileNavToggle.addEventListener("click", handleToggle);

      // Hide mobile nav on same-page/hash links
      document.querySelectorAll("#navmenu a").forEach((link) => {
        link.addEventListener("click", () => {
          if (document.querySelector(".mobile-nav-active")) {
            handleToggle();
          }
        });
      });

      return () => {
        mobileNavToggle.removeEventListener("click", handleToggle);
      };
    }
  }, []);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#") && href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  useEffect(() => {
    // Scroll spy functionality to update active navigation link
    const sections = [
      "hero",
      "services",
      "tutorial",
      "financial",
      "about",
      "contact",
    ];
    const headerHeight = document.querySelector("#header")?.offsetHeight || 0;
    const offset = headerHeight + 50; // Offset to account for header and some padding

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let currentSection = "hero";

      // Find the section currently in view
      // Check from bottom to top to get the most relevant section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(`#${sections[i]}`);
        if (section) {
          const sectionTop = section.offsetTop;

          // If we've scrolled past the start of this section, it's the active one
          if (scrollPosition >= sectionTop) {
            currentSection = sections[i];
            break;
          }
        }
      }

      // If scrolled to top, set hero as active
      if (window.scrollY < 50) {
        currentSection = "hero";
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-xl-0">
          <h1 className="sitename">
            <img src={logoImg} alt="logo" />
          </h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <i className="mobile-nav-toggle d-lg-none bi bi-list"></i>
          <ul>
            <li>
              <a
                href="#hero"
                className={activeSection === "hero" ? "active" : ""}
              >
                خانه
              </a>
            </li>

            <li>
              <a
                href="#tutorial"
                className={activeSection === "tutorial" ? "active" : ""}
              >
                آموزش
              </a>
            </li>
            <li>
              <a
                href="#financial"
                className={activeSection === "financial" ? "active" : ""}
              >
                پلن های مالی
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeSection === "services" ? "active" : ""}
              >
                خدمات
              </a>
            </li>
            {/* <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                درباره ما
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                تماس
              </a>
            </li>
          </ul>
        </nav>

        <Link className="btn-getstarted" to="/login">
          ثبت نام / ورود
        </Link>
      </div>
    </header>
  );
};

export default Header;
