import React from "react";
// Import your icons - adjust the paths based on your actual file structure
import OptimizedUI from "@/pages/LandingPage/assets/icons/optimized-ui.svg"; // برای "رابط کاربری بهینه و متعامل"
import AIAssistant from "@/pages/LandingPage/assets/icons/ai-assistant.svg"; // برای "دستیار هوش مصنوعی"
import Analytics from "@/pages/LandingPage/assets/icons/analytics.svg"; // برای "گزارش گیری و مانیتورینگ"
import DeepLearning from "@/pages/LandingPage/assets/icons/deep-learning.svg"; // برای "یادگیری عمیق و اشتراکی"
import ContentManagement from "@/pages/LandingPage/assets/icons/content-management.svg"; // برای "مدیریت هوشمند محتوا"
import UserManagement from "@/pages/LandingPage/assets/icons/user-management.svg"; // برای "مدیریت چند لایه ای کاربران"

const Services = () => {
  const services = [
    {
      id: 1,
      icon: OptimizedUI,
      title: "رابط کاربری بهینه و متعامل",
      description:
        "با کمترین پیچیدگی‌، در فضای کاربری منحصر به فرد تجربه یادگیری و مدیریت متفاوتی داشته باشید.",
      delay: "0",
    },
    {
      id: 2,
      icon: AIAssistant,
      title: "دستیار هوش مصنوعی",
      description:
        "طراحی و ساخت مسیر‌های اختصاصی یادگیری،آموزش و مدیریت به کمک دستیار های هوش مصنوعی.",
      delay: "50",
    },
    {
      id: 3,
      icon: Analytics,
      title: "گزارش گیری و مانیتورینگ",
      description:
        "آنلایز و بررسی دقیق داده های آموزشی و تحلیل رفتار و عملکرد کاربران در فضاهای کاری.",
      delay: "100",
    },
    {
      id: 4,
      icon: DeepLearning,
      title: "یادگیری عمیق و اشتراکی",
      description:
        "از طریق فرآیند سازی و یادگیری بهینه و عمیق٬ سطح آموزه ها و دانش خود را به حداکثر برسانید.",
      delay: "150",
    },
    {
      id: 5,
      icon: ContentManagement,
      title: "مدیریت هوشمند محتوا",
      description:
        "با کمترین کلیک و به کمک هوش مصنوعی محتواهای نامحدود به اشتراک بگذارید.",
      delay: "50",
    },
    {
      id: 6,
      icon: UserManagement,
      title: "مدیریت چند لایه ای کاربران",
      description:
        "فضاهای کاری و گروه های تفکیک شده بسازید هر کدام را در بالاترین سطح ممکن مدیریت کنید.",
      delay: "100",
    },
  ];

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
          {services.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-card">
                <div
                  className="service-icon"
                  style={{ backgroundColor: "#fff" }}
                >
                  {/* Using SVG icon */}
                  <img src={service.icon} alt={service.title} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
