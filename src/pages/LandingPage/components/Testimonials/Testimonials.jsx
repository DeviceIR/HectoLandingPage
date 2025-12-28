import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import personF12 from '../../assets/images/person/person-f-12.webp';
import personM11 from '../../assets/images/person/person-m-11.webp';
import personF8 from '../../assets/images/person/person-f-8.webp';
import personM14 from '../../assets/images/person/person-m-14.webp';
import personF5 from '../../assets/images/person/person-f-5.webp';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          className="testimonials-slider"
        >
          <SwiperSlide>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="testimonial-header">
                <div className="user-avatar">
                  <img src={personF12} alt="Profile Image" />
                </div>
                <div className="user-info">
                  <h3>Jennifer Martinez</h3>
                  <span className="user-role">Product Designer</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.</p>
              </div>
              <div className="testimonial-footer">
                <div className="company-badge">
                  <i className="bi bi-building"></i>
                  <span>TechCorp</span>
                </div>
                <div className="verified-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="testimonial-header">
                <div className="user-avatar">
                  <img src={personM11} alt="Profile Image" />
                </div>
                <div className="user-info">
                  <h3>Alexander Chen</h3>
                  <span className="user-role">Frontend Engineer</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
              <div className="testimonial-footer">
                <div className="company-badge">
                  <i className="bi bi-building"></i>
                  <span>InnovateLab</span>
                </div>
                <div className="verified-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="testimonial-header">
                <div className="user-avatar">
                  <img src={personF8} alt="Profile Image" />
                </div>
                <div className="user-info">
                  <h3>Rachel Taylor</h3>
                  <span className="user-role">Marketing Lead</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="testimonial-footer">
                <div className="company-badge">
                  <i className="bi bi-building"></i>
                  <span>GrowthCo</span>
                </div>
                <div className="verified-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="testimonial-header">
                <div className="user-avatar">
                  <img src={personM14} alt="Profile Image" />
                </div>
                <div className="user-info">
                  <h3>Christopher Lee</h3>
                  <span className="user-role">VP Engineering</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
              </div>
              <div className="testimonial-footer">
                <div className="company-badge">
                  <i className="bi bi-building"></i>
                  <span>DevStream</span>
                </div>
                <div className="verified-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="testimonial-header">
                <div className="user-avatar">
                  <img src={personF5} alt="Profile Image" />
                </div>
                <div className="user-info">
                  <h3>Amanda Rodriguez</h3>
                  <span className="user-role">UX Researcher</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">
                  <i className="bi bi-quote"></i>
                </div>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
              </div>
              <div className="testimonial-footer">
                <div className="company-badge">
                  <i className="bi bi-building"></i>
                  <span>UserFirst</span>
                </div>
                <div className="verified-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

