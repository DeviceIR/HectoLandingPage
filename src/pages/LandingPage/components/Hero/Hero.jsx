import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import heroAnimation from "../../assets/animations/hero.json";

const Hero = () => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    if (lottieContainerRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: heroAnimation,
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="hero-content">
              <h1>سفر جدید, دیدگاه جدید</h1>
              <p>
                هکتو یه پلتفرم هوشمنده برای مدیریت و بهینه‌سازی آموزش آنلاین. با
                کمک ابزارهای تحلیلی و دستیار هوش مصنوعی، بهت کمک می‌کنیم عملکرد
                آموزش رو دقیق ببینی و تجربه یادگیری بهتری برای خودت یا تیمت
                بسازی.
              </p>
              <div className="hero-buttons">
                <Link to="/login" className="btn btn-primary">
                  شروع کنید
                </Link>
                {/* <a href="#about" className="btn btn-outline">
                  درباره ما
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-visual">
              <div className="hero-image">
                <div className="hero-illustration">
                  <div
                    ref={lottieContainerRef}
                    id="lottie-container"
                    className="hero-lottie"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
