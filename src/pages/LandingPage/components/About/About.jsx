import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import businessmanAnimation from '../../assets/animations/Businessman looks through the telescope on a rocket.json';

const About = () => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    if (lottieContainerRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: businessmanAnimation
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="content">
              <h6 className="subtitle">مسیر سفر ما</h6>
              <h2>راهکار های خلاقانه هوشمند برای آموزش نسل جدید</h2>
              <p>
                ما به دنبال ساختن دنیایی هستیم که با ترکیب فناوری و خلاقیت. یادگیری و آموزش پیچیده را به
                تجربه‌ای ساده و الهام‌بخش تبدیل کنیم و باعث ارتقای سطح کیفیت یادگیری دیجیتال در هر مقیاس و
                زمانی شویم .
              </p>

              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>در دسترس برای همه – برای تیم ها با افراد کم یا سازمان های بزرگ، راهکار ما پاسخگوی شماست.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>امنیت پیشرفته – حفاظت کامل از داده‌ها و اطلاعات آموزشی شما.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>توسعه مداوم – به‌روزرسانی‌های منظم برای پاسخگویی به نیازهای آینده.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="image-composition">
              <div ref={lottieContainerRef} id="lottie-financial" style={{ width: '500px', height: '500px', margin: 'auto' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

