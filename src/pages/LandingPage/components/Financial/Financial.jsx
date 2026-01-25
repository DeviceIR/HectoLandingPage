import { useEffect, useState, useCallback, useMemo } from "react";
import { BREAKPOINTS } from "@/utils/constants";
import tomanImg from "../../assets/images/toman.png";

const plans = [
  {
    badge: "رایگان",
    name: "پلن عادی",
    priceLabel: "اشتراک بدون هزینه",
    features: [
      "5 کاربر (۱ مالک + ۴ عادی)",
      "فضای ذخیره‌سازی ۵۰۰ مگابایت برای هر کاربر",
      "ایجاد 1 فضای کار",
      "ساخت 1 گروه کاری",
    ],
    keyFeatures: ["تست پلتفرم", "آمار شخصی", "بدون تحلیل‌های پیشرفته/AI"],
  },
  {
    badge: "استاندارد",
    name: "پلن پایه",
    price: "189,000",
    features: [
      "تا ۲۰ کاربر",
      "فضای ذخیره‌سازی ۲ گیگابایت برای هر کاربر",
      "ایجاد 3 فضای کار",
      "ساخت 5 گروه کاری",
    ],
    keyFeatures: [
      "آمار پایه تسک و محتوا",
      "صادرات گزارش محدود",
      "پشتیبانی ایمیلی",
    ],
  },
  {
    badge: "منتخب",
    name: "پلن پیشرفته",
    price: "389,000",
    highlight: true,
    features: [
      "تا ۵۰ کاربر",
      "فضای ذخیره‌سازی ۵ گیگابایت برای هر کاربر",
      "ایجاد 7 فضای کار",
      "ساخت 15 گروه کاری",
    ],
    keyFeatures: [
      "تمام آمارهای تحلیلی",
      "رتبه‌بندی پیشرفته",
      "نمودار حرارتی",
      "یکپارچه‌سازی با ابزارهای بیرونی",
    ],
  },
  {
    badge: "سازمانی",
    name: "پلن سفارشی/سازمانی",
    price: "989,000",
    features: [
      "کاربران نامحدود",
      "فضای ذخیره‌سازی ۱۰ گیگابایت برای هر کاربر",
      "فضاهای کار نامحدود",
      "ساخت گروه نامحدود",
    ],
    keyFeatures: [
      "همه قابلیت‌ها + AI سفارشی",
      "API و SSO",
      "گزارش‌های سفارشی BI",
      "SLA و پشتیبانی ۲۴/۷",
    ],
  },
];

/**
 * Calculates number of slides to display based on viewport width
 * @param {number} width - Viewport width in pixels
 * @returns {number} Number of slides to display
 */
const getSlidesPerView = (width = 1440) => {
  if (width < BREAKPOINTS.MD) return 1;
  if (width < BREAKPOINTS.XL) return 2;
  return 4;
};

/**
 * Get button text based on plan name
 * @param {string} planName - Name of the plan
 * @returns {string} Button text
 */
const getButtonText = (planName) => {
  switch (planName) {
    case "پلن عادی":
      return "همین حالا شروع کنید";
    case "پلن سفارشی/سازمانی":
      return "تماس بگیرید";
    default:
      return "اشتراک تهیه کنید";
  }
};

/**
 * Get button href based on plan name
 * @param {string} planName - Name of the plan
 * @returns {string} Button href
 */
const getButtonHref = (planName) => {
  return planName === "پلن سفارشی/سازمانی" ? "#contact" : "#signup";
};

const Financial = () => {
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window !== "undefined" ? getSlidesPerView(window.innerWidth) : 4,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    // Throttle resize events for better performance
    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", throttledResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [slidesPerView]);

  const maxIndex = useMemo(
    () => Math.max(plans.length - slidesPerView, 0),
    [plans.length, slidesPerView],
  );

  const goToSlide = useCallback(
    (index) => setActiveIndex(Math.min(Math.max(index, 0), maxIndex)),
    [maxIndex],
  );

  const handleNext = useCallback(() => {
    goToSlide(activeIndex >= maxIndex ? 0 : activeIndex + 1);
  }, [activeIndex, maxIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(activeIndex === 0 ? maxIndex : activeIndex - 1);
  }, [activeIndex, maxIndex, goToSlide]);

  return (
    <section
      id="financial"
      className="financial section"
      style={{ overflow: "visible" }}
    >
      {/* Section Title */}
      <div className="container section-title">
        <h2>پلن های مالی</h2>
        <p>
          راهکارهای آموزشی و ویژگی های ما در قالب پلن‌های متنوع، آماده پاسخ گویی
          به نیاز های شماستر
        </p>
      </div>

      <div className="container">
        <div
          className="financial-slider"
          style={{ "--slides-per-view": slidesPerView }}
        >
          <div
            className="financial-track"
            style={{
              transform: `translateX(-${(100 / slidesPerView) * activeIndex}%)`,
              transition: "transform 0.3s ease",
            }}
          >
            {plans.map((plan, index) => (
              <div className="financial-slide" key={plan.name}>
                <div
                  className={`financial-card${plan.highlight ? " specialPlane" : ""}`}
                >
                  {plan.badge && <div className="badge">{plan.badge}</div>}

                  <div className="financial-title">
                    <h4 className="name mb-0">{plan.name}</h4>
                    <div className="d-flex plane-price align-items-center gap-1">
                      {plan.price ? (
                        <>
                          <p className="price mb-0">{plan.price}</p>
                          <div className="toman">
                            <img src={tomanImg} alt="تومان" />
                          </div>
                          <span className="price-period">/ماه</span>
                        </>
                      ) : (
                        <p className="price mb-0">{plan.priceLabel}</p>
                      )}
                    </div>
                  </div>

                  <hr className="divider m-0" />

                  <div className="financial-features">
                    <ul className="features-list">
                      {plan.features.map((feature, idx) => (
                        <li
                          className="features-item"
                          key={`${index}-feature-${idx}`}
                        >
                          <div className="icon-wrapper">
                            <i className="bi bi-patch-check"></i>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="divider m-0" />

                  <div className="financial-features">
                    <div className="d-flex align-items-center gap-1 mb-3">
                      <h6 className="fw-bold m-0">ویژگی های کلیدی</h6>
                    </div>
                    <ul className="features-list">
                      {plan.keyFeatures.map((feature, idx) => (
                        <li
                          className="features-item"
                          key={`${index}-key-feature-${idx}`}
                        >
                          <div className="icon-wrapper">
                            <i className="bi bi-patch-check-fill"></i>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="financial-actions mt-auto">
                    <a
                      href={getButtonHref(plan.name)}
                      className={`btn ${plan.highlight ? "btn-primary" : "btn-outline-primary"}`}
                      aria-label={`تهیه اشتراک ${plan.name}`}
                    >
                      {getButtonText(plan.name)}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {maxIndex > 0 && (
            <div className="financial-nav">
              <button
                type="button"
                className="financial-nav-btn"
                onClick={handlePrev}
                aria-label="پلن قبلی"
              >
                <i className="bi bi-chevron-left" />
              </button>

              <div className="financial-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`financial-dot ${idx === activeIndex ? "is-active" : ""}`}
                    aria-label={`رفتن به اسلاید ${idx + 1}`}
                    onClick={() => goToSlide(idx)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="financial-nav-btn"
                onClick={handleNext}
                aria-label="پلن بعدی"
              >
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Financial;
