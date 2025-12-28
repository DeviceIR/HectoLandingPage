const Services = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>خدمات</h2>
        <p>
          مجموعه‌ای از خدمات و قابلیت ها در که اختیار سطوح مختلف کاربری قرار
          میگرد
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="0">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-palette"></i>
              </div>
              <h4>رابط کاربری بهینه و متعامل</h4>
              <p>
                با کمترین پیچیدگی‌، در فضای کاربری منحصر به فرد تجربه یادگیری و
                مدیریت متفاوتی داشته باشید.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-layout-text-window-reverse"></i>
              </div>
              <h4>دستیار هوش مصنوعی</h4>
              <p>
                طراحی و ساخت مسیر‌های اختصاصی یادگیری،آموزش و مدیریت به کمک
                دستیار های هوش مصنوعی.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <h4>گزارش گیری و مانیتورینگ</h4>
              <p>
                آنلایز و بررسی دقیق داده های آموزشی و تحلیل رفتار و عملکرد
                کاربران در فضاهای کاری.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-phone"></i>
              </div>
              <h4>یادگیری عمیق و اشتراکی</h4>
              <p>
                از طریق فرآیند سازی و یادگیری بهینه و عمیق٬ سطح آموزه ها و دانش
                خود را به حداکثر برسانید.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-megaphone"></i>
              </div>
              <h4>مدیریت هوشمند محتوا</h4>
              <p>
                با کمترین کلیک و به کمک هوش مصنوعی محتواهای نامحدود به اشتراک
                بگذارید.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="bi bi-search"></i>
              </div>
              <h4>مدیریت چند لایه ای کاربران</h4>
              <p>
                فضاهای کاری و گروه های تفکیک شده بسازید هر کدام را در بالاترین
                سطح ممکن مدیریت کنید.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="row mt-5">
          <div
            className="col-12 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="services-cta">
              <h3>آماده‌ای تجربه یادگیری خود را متحول کنی؟</h3>
              <p>بیایید با هم مسیر آموزش هوشمند را آغاز کنیم</p>
              <Link to="/login" className="btn btn-primary">
                شروع کنید
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;

