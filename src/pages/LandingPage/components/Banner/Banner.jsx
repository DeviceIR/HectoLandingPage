import bannerImage from "../../assets/images/banner/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner" className="banner section">
      <div className="container">
        <div
          className="banner-wrapper"
          data-aos="fade-up"
          data-aos-delay="50"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="banner-content">
            <p className="banner-eyebrow">یک پلتفرم، چندین ابزار آموزشی</p>
            <h3 className="banner-title">با ترکیب هوش مصنوعی و ابزارهای نوین،</h3>
            <h3 className="banner-title">
              هر مدل از یادگیری را{" "}
              <span className="banner-highlight">هوشمندتر و شخصی‌تر</span> کن.
            </h3>
            <h3 className="banner-title">پلتفرم یکپارچه و تعاملی برای مدیریت و یادگیری.</h3>

            <div className="banner-actions">
              <a className="banner-link primary" href="#hero">
                آخرین بروزرسانی
                <i className="bi bi-arrow-left-short" aria-hidden="true"></i>
              </a>
              <a className="banner-link" href="#services">
                تمام ابزارهای پلتفرم
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

