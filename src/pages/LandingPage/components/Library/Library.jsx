import { useEffect } from 'react';
import library4 from '../../assets/images/library/library-4.png';
import library5 from '../../assets/images/library/library-5.png';
import library6 from '../../assets/images/library/library-6.png';
import library7 from '../../assets/images/library/library-7.png';
import library8 from '../../assets/images/library/library-8.png';
import library9 from '../../assets/images/library/library-9.png';
import starIcon from '../../assets/icons/star.svg';

const Library = () => {
  useEffect(() => {
    // Load vendor scripts dynamically if needed
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Initialize Isotope if available
    const initIsotope = async () => {
      try {
        // Try to use Isotope if it's loaded via script tag
        if (typeof window.Isotope !== 'undefined' && typeof window.imagesLoaded !== 'undefined') {
          const isotopeItem = document.querySelector('.isotope-layout');
          if (isotopeItem) {
            const layout = isotopeItem.getAttribute('data-layout') || 'masonry';
            const filter = isotopeItem.getAttribute('data-default-filter') || '*';
            const container = isotopeItem.querySelector('.isotope-container');

            if (container) {
              window.imagesLoaded(container, function() {
                const iso = new window.Isotope(container, {
                  itemSelector: '.isotope-item',
                  layoutMode: layout,
                  filter: filter
                });

                // Filter buttons
                isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filterBtn) {
                  filterBtn.addEventListener('click', function() {
                    isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
                    this.classList.add('filter-active');
                    iso.arrange({
                      filter: this.getAttribute('data-filter')
                    });
                  }, false);
                });
              });
            }
          }
        }
      } catch (error) {
        console.warn('Isotope not available:', error);
      }
    };

    // Initialize GLightbox if available
    const initGLightbox = () => {
      try {
        if (typeof window.GLightbox !== 'undefined') {
          window.GLightbox({
            selector: '.glightbox'
          });
        }
      } catch (error) {
        console.warn('GLightbox not available:', error);
      }
    };

    // Simple filter functionality as fallback
    const initSimpleFilter = () => {
      const isotopeItem = document.querySelector('.isotope-layout');
      if (!isotopeItem) return;

      const filterButtons = isotopeItem.querySelectorAll('.isotope-filters li');
      const items = isotopeItem.querySelectorAll('.isotope-item');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // Update active button
          isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');

          // Filter items
          items.forEach(item => {
            if (filter === '*' || item.classList.contains(filter.replace('.', ''))) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    };

    // Try advanced first, fallback to simple
    initIsotope();
    initGLightbox();
    initSimpleFilter();
  }, []);

  return (
    <section id="library" className="library section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>کتابخانه</h2>
        <p>از یادگیری تا آموزش در بستری تعاملی مبتی بر هوش مصنوعی که به کاربران امکان ایجاد محتوا و دسترسی به آموزش های نامحدود را میدهد</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="library-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
            <li data-filter="*" className="filter-active">همه</li>
            <li data-filter=".filter-story">داستان</li>
            <li data-filter=".filter-education">آموزشی</li>
            <li data-filter=".filter-psychology">روانشناسی</li>
            <li data-filter=".filter-story">رمان</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
            <div className="col-xl-4 col-lg-6 library-item isotope-item filter-story">
              <div className="library-wrapper">
                <div className="library-image">
                  <img src={library4} alt="Creative Book" className="img-fluid" loading="lazy" />
                  <div className="library-hover">
                    <div className="library-actions">
                      <a href={library4} className="glightbox action-btn preview-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn details-btn" title="View Details">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="library-content">
                  <div className="library-title">
                    <h3 className="m-0">ملت عشق</h3>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="writer-title">نویسنده:</span>
                      <span className="writer">Elif Shafak</span>
                    </div>
                  </div>
                  <div className="book-desc">
                    <span className="desc-title">خلاصه داستان :</span>
                    <p className="ellipsis">الا روبینشتاین، زن خانه‌داری در دنیای امروز، هنگام ویرایش رمانی درباره‌ی مولانا و شمس تبریزی، درگیر تحول روحی و عشقی عمیق می‌شود.</p>
                  </div>
                  <div className="library-meta d-flex">
                    <div className="library-tech">
                      <span className="tech-badge">عاشقانه</span>
                      <span className="tech-badge">عرفانی</span>
                      <span className="tech-badge">فلسفی</span>
                    </div>
                    <div className="library-meta">
                      <div className="project-rating">
                        <i className="bi">
                          <img src={starIcon} alt="star" />
                        </i>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 library-item isotope-item filter-education">
              <div className="library-wrapper">
                <div className="library-image">
                  <img src={library5} alt="Creative Book" className="img-fluid" loading="lazy" />
                  <div className="library-hover">
                    <div className="library-actions">
                      <a href={library5} className="glightbox action-btn preview-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn details-btn" title="View Details">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="library-content">
                  <div className="library-title">
                    <h3 className="m-0">فرمول بیست فارسی دوازدهم (گاج)</h3>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="writer-title">نویسنده:</span>
                      <span className="writer">محمدرضا ملک محمدی</span>
                    </div>
                  </div>
                  <div className="book-desc">
                    <span className="desc-title">خلاصه:</span>
                    <p className="ellipsis">کتاب فرمول بیست فارسی دوازدهم گاج برای مرور سریع و نکات کنکوری است و شامل درس‌نامه، معنی، آرایه، دستور، قرابت، تست و جمع‌بندی می‌شود.</p>
                  </div>
                  <div className="library-meta d-flex">
                    <div className="library-tech">
                      <span className="tech-badge">آموزشی</span>
                      <span className="tech-badge">کمک‌درسی</span>
                      <span className="tech-badge">جمع‌بندی کنکور</span>
                      <span className="tech-badge">امتحان نهایی</span>
                    </div>
                    <div className="library-meta">
                      <div className="project-rating">
                        <i className="bi">
                          <img src={starIcon} alt="star" />
                        </i>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 library-item isotope-item filter-education">
              <div className="library-wrapper">
                <div className="library-image">
                  <img src={library6} alt="Creative Book" className="img-fluid" loading="lazy" />
                  <div className="library-hover">
                    <div className="library-actions">
                      <a href={library6} className="glightbox action-btn preview-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn details-btn" title="View Details">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="library-content">
                  <div className="library-title">
                    <h3 className="m-0">تاریخ کامل ایران</h3>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="writer-title">نویسنده:</span>
                      <span className="writer">حسن پیرنیا</span>
                      <span className="writer">عباس اقبال آشتیانی</span>
                    </div>
                  </div>
                  <div className="book-desc">
                    <span className="desc-title">خلاصه:</span>
                    <p className="ellipsis">این اثر به زبانی روان و مستند نوشته شده و تحولات سیاسی، اجتماعی و فرهنگی ایران را بر اساس منابع معتبر بررسی می‌کند</p>
                  </div>
                  <div className="library-meta d-flex">
                    <div className="library-tech">
                      <span className="tech-badge">سنت تاریخ‌نگاری</span>
                      <span className="tech-badge">ایران کلاسیک</span>
                    </div>
                    <div className="library-meta">
                      <div className="project-rating">
                        <i className="bi">
                          <img src={starIcon} alt="star" />
                        </i>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 library-item isotope-item filter-psychology">
              <div className="library-wrapper">
                <div className="library-image">
                  <img src={library7} alt="Creative Book" className="img-fluid" loading="lazy" />
                  <div className="library-hover">
                    <div className="library-actions">
                      <a href={library7} className="glightbox action-btn preview-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn details-btn" title="View Details">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="library-content">
                  <div className="library-title">
                    <h3 className="m-0">معجزه شکرگزاری(The Magic)</h3>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="writer-title">نویسنده:</span>
                      <span className="writer">روندا برن</span>
                    </div>
                  </div>
                  <div className="book-desc">
                    <span className="desc-title">خلاصه:</span>
                    <p className="ellipsis">کتاب یه برنامهٔ ۲۸ روزه ارائه می‌دهد که هر روز یک تمرین سادهٔ شکرگزاری دارد ، تمرکز بر جنبه‌های مختلف زندگی و در نهایت ایجاد نگرشی مثبت که بتواند کیفیت زندگی را بهبود دهد.</p>
                  </div>
                  <div className="library-meta d-flex">
                    <div className="library-tech">
                      <span className="tech-badge">خودیار</span>
                      <span className="tech-badge">روانشناسی</span>
                      <span className="tech-badge">رشد فردی</span>
                    </div>
                    <div className="library-meta">
                      <div className="project-rating">
                        <i className="bi">
                          <img src={starIcon} alt="star" />
                        </i>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 library-item isotope-item filter-story">
              <div className="library-wrapper">
                <div className="library-image">
                  <img src={library8} alt="Creative Book" className="img-fluid" loading="lazy" />
                  <div className="library-hover">
                    <div className="library-actions">
                      <a href={library8} className="glightbox action-btn preview-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn details-btn" title="View Details">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="library-content">
                  <div className="library-title">
                    <h3 className="m-0">بامداد خمار</h3>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="writer-title">نویسنده:</span>
                      <span className="writer">فتانه حاج سید جوادی</span>
                    </div>
                  </div>
                  <div className="book-desc">
                    <span className="desc-title">خلاصه:</span>
                    <p className="ellipsis">
                      داستان عاشقانه و اجتماعی درباره‌ی دختری از خانواده‌ای مرفه است که عاشق یک پسر فقیر می‌شود و به‌رغم مخالفت خانواده ازدواج می‌کند.
                    </p>
                  </div>
                  <div className="library-meta d-flex">
                    <div className="library-tech">
                      <span className="tech-badge">رمان اجتماعی</span>
                    </div>
                    <div className="library-meta">
                      <div className="project-rating">
                        <i className="bi">
                          <img src={starIcon} alt="star" />
                        </i>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 library-item isotope-item filter-education">
              <div className="library-wrapper">
                <div className="library-image">
                  <img src={library9} alt="Creative Book" className="img-fluid" loading="lazy" />
                  <div className="library-hover">
                    <div className="library-actions">
                      <a href={library9} className="glightbox action-btn preview-btn">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="action-btn details-btn" title="View Details">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="library-content">
                  <div className="library-title">
                    <h3 className="m-0">حساب دیفرانسیل و انتگرال و هندسه تحلیلی</h3>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="writer-title">نویسنده:</span>
                      <span className="writer">George B. Thomas Jr</span>
                    </div>
                  </div>
                  <div className="book-desc">
                    <span className="desc-title">خلاصه:</span>
                    <p className="ellipsis">
                      مرجع کلاسیک و پایه‌ای برای درس ریاضی عمومی ۱ و ۲. مباحث مشتق، انتگرال، توابع چندمتغیره و سری‌ها را به‌طور کامل پوشش می‌دهد
                    </p>
                  </div>
                  <div className="library-meta d-flex">
                    <div className="library-tech">
                      <span className="tech-badge">آموزشی</span>
                      <span className="tech-badge">دانشگاهی</span>
                    </div>
                    <div className="library-meta">
                      <div className="project-rating">
                        <i className="bi">
                          <img src={starIcon} alt="star" />
                        </i>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="library-cta text-center" data-aos="fade-up" data-aos-delay="400">
          <h4>دریافت دمو رایگان</h4>
          <p>بستر یادگیری و آموزش هوشمند, یکپارچه و کارآمد</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">دموی رایگان</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;

