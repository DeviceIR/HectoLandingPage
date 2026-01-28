import { useEffect, useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

const servicesLinks = [
  { href: "#services", label: "طراحی مسیر یادگیری" },
  { href: "#services", label: "دستیار هوش مصنوعی" },
  { href: "#services", label: "تحلیل و گزارش‌گیری" },
  { href: "#services", label: "مدیریت محتوا" },
  { href: "#services", label: "یادگیری اشتراکی" },
];

const quickLinks = [
  { href: "#hero", label: "خانه" },
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#financial", label: "پلن‌های مالی" },
  { href: "#contact", label: "تماس با ما" },
];

const certificateIds = [1, 2, 3];

const Footer = () => {
  const scrollTopRef = useRef(null);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const rafIdRef = useRef(null);

  const handleScrollTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const SCROLL_THRESHOLD = 100;

    const toggleScrollTop = () => {
      const shouldShow = window.scrollY > SCROLL_THRESHOLD;
      setIsScrollTopVisible(shouldShow);
    };

    const handleScroll = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(toggleScrollTop);
    };

    // Check initial scroll position
    toggleScrollTop();

    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollTopElement = scrollTopRef.current;
    if (scrollTopElement) {
      scrollTopElement.addEventListener("click", handleScrollTop);
      return () => {
        scrollTopElement.removeEventListener("click", handleScrollTop);
      };
    }
  }, [handleScrollTop]);

  return (
    <>
      <footer
        id="footer"
        className="footer position-relative dark-background rtl-footer"
      >
        <div className="container footer-top">
          <div className="footer-grid">
            {/* 1 - Logo & certificates */}
            <div className="footer-section footer-about footer-brand">
              <h4>مجوزها</h4>
              <div
                className="certificates"
                aria-label="گواهی‌ها و نمادهای اعتماد"
              >
                <div>
                  <a
                    referrerpolicy="origin"
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=700526&Code=IZIZPnIpJiYn1W9WVtmBWaYAfoPHZBRP"
                  >
                    <img
                      referrerpolicy="origin"
                      src="https://trustseal.enamad.ir/logo.aspx?id=700526&Code=IZIZPnIpJiYn1W9WVtmBWaYAfoPHZBRP"
                      alt="نماد الکترونیکی ای نماد"
                      style={{ cursor: "pointer" }}
                      code="IZIZPnIpJiYn1W9WVtmBWaYAfoPHZBRP"
                    />
                  </a>
                </div>
                {certificateIds.map((idx) => (
                  <a
                    key={idx}
                    className="cert-logo"
                    // href="https://enamad.ir"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="نماد اعتماد الکترونیکی"
                  >
                    <svg viewBox="0 0 64 80" role="img" aria-hidden="true">
                      <defs>
                        <linearGradient
                          id={`enamadGrad${idx}`}
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#5a32a3" />
                          <stop offset="100%" stopColor="#7b5cf6" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M32 4c-1.6 0-3.1.7-4.1 1.9L12 22.4c-.7.9-1.1 2-1.1 3.1v20.8c0 8.9 7.3 16.1 16.2 16.1h9.8c8.9 0 16.2-7.2 16.2-16.1V25.5c0-1.1-.4-2.2-1.1-3.1L36.1 5.9C35.1 4.7 33.6 4 32 4Z"
                        fill={`url(#enamadGrad${idx})`}
                        stroke="#6f42c1"
                        strokeWidth="1"
                      />
                      <path
                        d="M22 44c3.2-2.6 6.4-5.1 9.5-7.7 2.1-1.8 4.6-3.8 7.1-4 2.9-.2 4.4 1.8 4.4 4.1 0 2.9-2.1 5.9-4.6 7.4-2 .9-4.1 1.2-6.3 1.4-1.8.1-3.7.3-5.6.3-2.9 0-4.7-1.5-4.5-3.4z"
                        fill="#ffffff"
                        opacity="0.92"
                      />
                      <path
                        d="M26.8 31.5c2.4 2.8 3.7 5.5 3.7 8 0 1.6-.8 3.2-1.8 4.6-.9 1.1-2.1 2.2-3.5 3.2"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="23.5" cy="28" r="3.5" fill="#ffffff" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* 2 - Services */}
            <div className="footer-section footer-services">
              <h4>خدمات</h4>
              <div className="footer-links">
                <ul>
                  {servicesLinks.map(({ href, label }) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 - Quick access */}
            <div className="footer-section footer-quick-access">
              <h4>دسترسی‌های سریع</h4>
              <div className="footer-links">
                <ul>
                  {quickLinks.map(({ href, label }) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 - Company info */}
            <div className="footer-section footer-company-info">
              <h4>هکتو</h4>
              <p className="footer-tagline">
                پلتفرم یادگیری هوشمند برای تیم‌ها و سازمان‌های پیشرو
              </p>
              <div className="footer-contact">
                <p>تهران، خیابان مثال، پلاک ۱۰۸</p>
                <p>کد پستی ۱۱۲۲۳۴۵۶۷۸</p>
                <p className="mt-3">
                  <strong>تلفن:</strong> <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </p>
                <p>
                  <strong>ایمیل:</strong> <span>info@hecto.ir</span>
                </p>
              </div>
              <div className="social-links d-flex mt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="توییتر"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="فیسبوک"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="اینستاگرام"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="لینکدین"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <strong className="px-1 sitename">هکتو</strong> تمامی حقوق محفوظ
            است
          </p>
          <div className="credits">طراحی شده توسط تیم هکتو</div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        ref={scrollTopRef}
        href="#"
        className={`scroll-top d-flex align-items-center justify-content-center ${isScrollTopVisible ? "active" : ""}`}
        aria-label="بازگشت به بالا"
        onClick={handleScrollTop}
      >
        <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default Footer;
