import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import hiringAnimation from '../../assets/animations/We are hiring.json';

const WhyUs = () => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    if (lottieContainerRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: hiringAnimation
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Initialize PureCounter for stats animation
    const counters = document.querySelectorAll('[data-purecounter]');
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-purecounter-end'));
      const duration = parseInt(counter.getAttribute('data-purecounter-duration') || 2000);
      const start = parseInt(counter.getAttribute('data-purecounter-start') || 0);
      const increment = target / (duration / 16);
      let current = start;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : '');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (counter.textContent.includes('%') ? '%' : '');
        }
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !counter.classList.contains('counted')) {
            counter.classList.add('counted');
            updateCounter();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(counter);
    };

    counters.forEach(animateCounter);
  }, []);

  return (
    <section id="why-us" className="why-us section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>چرا هکتو؟</h2>
        <p>راهکاری مطمئن برای تحول در یادگیری و توسعه مهارت‌های تیمی و فردی</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="bi bi-palette-fill"></i>
              </div>
              <h4>صرفه‌جویی در زمان و هزینه</h4>
              <p>حذف محدودیت‌های کلاس حضوری و کاهش هزینه‌های آموزش.</p>
              <div className="feature-stats">
                <span className="stat-number" data-purecounter-start="0" data-purecounter-end="60" data-purecounter-duration="2">60%</span>
                <span className="stat-label">کاهش هزینه‌های آموزشی</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>پیشرفت مرحله به مرحله</h4>
              <p>دوره‌ها به‌گونه‌ای طراحی شده‌اند که قدم‌به‌قدم شما را جلو ببرند.</p>
              <div className="feature-stats">
                <span className="stat-number" data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2">85%</span>
                <span className="stat-label">سرعت یادگیری افزایش یافته</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-card">
              <div className="icon-wrapper">
                <i className="bi bi-award-fill"></i>
              </div>
              <h4>افزایش بهره‌وری تیم</h4>
              <p>بهینه سازی فرآیند یادگیری و همچنین افزایش بازده و عملکرد تیم ها برای رشد سازمانی و موسسات آموزشی.</p>
              <div className="feature-stats">
                <span className="stat-number" data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2">65%</span>
                <span className="stat-label">افزایش عملکرد تیمی</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="feature-showcase">
              <div ref={lottieContainerRef} id="lottie-why-us" style={{ width: '500px', height: '500px', margin: 'auto' }}></div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="feature-content">
              <h3>Why Leading Brands Choose Us</h3>
              <p className="lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>

              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    <h5>Strategic Thinking</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    <h5>Data-Driven Approach</h5>
                    <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    <h5>24/7 Support</h5>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                  </div>
                </div>
              </div>

              <div className="cta-wrapper">
                <a href="#" className="btn btn-primary">Start Your Project</a>
                <a href="#" className="btn btn-outline">View Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

