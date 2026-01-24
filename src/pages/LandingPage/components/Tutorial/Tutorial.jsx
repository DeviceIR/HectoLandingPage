import { useEffect, useRef } from "react";
import video01 from "./Video/01-Ai text generator.mp4";
import video02 from "./Video/02-Ai file generator.mp4";
import video03 from "./Video/03-Course generation with Ai.mp4";
import video04 from "./Video/04-Do To 3D.mp4";
import video05 from "./Video/05-Chat To Do.mp4";
import video06 from "./Video/06-Analytics.mp4";

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8.5 12.5L11 15L15.5 9.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const steps = [
  {
    title: "تولید دوره با چند جمله ساده!",
    description: [
      "کافیه فقط ایده‌ت رو تایپش کنی.",
      "هوش مصنوعی ما خودش برات یه دوره کامل، آماده‌ی انتشار می‌سازه",
      "علاوه بر اون می‌تونی هر بخش رو به دلخواه ویرایش کنی تا نتیجه‌ی نهایی دقیقاً شبیه نیاز شما باشه.",
    ],
    highlights: [
      { bold: "کافیه فقط ایده‌ت رو تایپ کنی", text: " و خروجی رو تحویل بگیر." },
      {
        bold: "دوره کامل و آماده‌ی انتشار",
        text: " بدون درگیری با جزئیات فنی.",
      },
      {
        bold: "هر بخش رو سفارشی کن",
        text: " تا نتیجه دقیقاً مطابق نیازت باشه.",
      },
    ],
    video: video01,
  },
  {
    title: "ساخت محتوا با فایل‌های شخصی",
    description: [
      "پلتفرم هکتو با استفاده از فایل‌های شما به‌صورت خودکار، ساختار و چهارچوب قابل ویرایشی رو",
      "برای محتوا ایجاد می‌کنه و شما تصمیم می‌گیری محتوای نهایی رو چه کسی ببینه.",
    ],
    highlights: [
      {
        bold: "فایل‌هات رو آپلود کن",
        text: " و ساختار درسی خودکار تحویل بگیر.",
      },
      { bold: "خروجی قابل ویرایش", text: " و قابل اشتراک در محیط آموزشی." },
    ],
    video: video02,
  },
  {
    title: "دستیار هوش مصنوعی",
    description: [
      "یه همراه واقعی دقیق در مسیر یادگیری و آموزش که کمک میکنه به تحلیل داده‌های عملکرد کاربران،",
      "مدیریت و ساخت تسک‌های هوشمند، پیشنهاد دوره‌های مناسب که با هر تعامل، دقیق‌تر به تو کمک میکنه.",
    ],
    video: video03,
  },
  {
    title: "مدیریت کارهای فردی و گروهی",
    description: [
      "همه‌ی وظایف شخصی یا مربوط به تیم‌ت رو یکجا ببین و مدیریت کن.",
      "برای هر تسک عنوان، توضیح، اولویت، تاریخ و برچسب تعیین کن و در فضای گفت‌وگوی هر تسک",
      "مطمئن شو که هیچ کاری از قلم نمیوفته.",
    ],
    highlights: [
      { bold: "نمای کلی تمام تسک‌ها", text: " شخصی و تیمی در یک صفحه." },
      { bold: "اطلاعات کامل هر تسک", text: " عنوان، اولویت، تاریخ و برچسب." },
    ],
    video: video04,
  },
  // {
  //   title: "فضای چت مخصوص هر تسک",
  //   description: [
  //     "با هر تسک، یه گفت‌وگوی جدا داری.",
  //     "در فضای چت اختصاصی هر تسک، ردِ انجام کار رو دنبال کن و با هماهنگی",
  //     "با اعضای تیم‌ت راندمان و سرعت کارهارو بیشتر کن",
  //   ],
  //   highlights: [
  //     { bold: "چت اختصاصی هر تسک", text: " هماهنگی و پیگیری سریع‌تر." },
  //     { bold: "تاریخچه شفاف", text: " رد انجام کار همیشه جلوی چشمته." },
  //   ],
  //   video: video05,
  // },
  {
    title: "آمارها و تحلیل‌ها",
    description: [
      "آدرس: بخش گزارش عملکرد",
      "هدف: نمایش داده‌های عملکردی و ارزش آن برای هوش مصنوعی",
      "وضع فعلی:",
      "",
      "آمار دقیق، تحلیل‌های هوشمند",
      "همه‌ی فعالیت‌های کاربران از انجام تسک‌ها تا پیشرفت در دوره‌ها، به‌صورت گرافیکی و دقیق نمایش داده می‌شن.",
      "این داده‌ها به دستیار هوشمند کمک می‌کنن راهکارهای دقیق‌تری ارائه بده.",
    ],
    video: video06,
  },
];

const Tutorial = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.muted = true;
            video.play?.().catch(() => {});
          } else {
            video.pause?.();
          }
        });
      },
      { threshold: 0.45 },
    );

    videoRefs.current.forEach((videoEl) => {
      if (videoEl) observer.observe(videoEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tutorial" className="tutorial section">
      {/* <div className="container section-title" data-aos="fade-up">
        <h2>آموزش گام‌به‌گام</h2>
        <p>مروری سریع بر قابلیت‌های اصلی؛ هر گام یک ویدئو و یک توضیح کوتاه.</p>
      </div> */}

      <div className="container">
        {steps.map((step, index) => {
          const isTextFirst = index % 2 === 0;
          const textColClass = `col-lg-6 ${isTextFirst ? "" : "order-lg-2"}`;
          const videoColClass = `col-lg-6 ${isTextFirst ? "" : "order-lg-1"}`;

          return (
            <div
              className="tutorial-step row  align-items-center "
              style={{
                borderRadius: "24px",
                gap: "20px",
                flexWrap: "unset",
                backgroundColor: "#fff",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={step.title}
            >
              <div
                className={textColClass}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "24px",
                  // border: "1px solid #e0e0e0",
                  // boxShadow: "0 0px 50px rgba(0, 0, 0, 0.05)", // subtle shadow
                  height: "500px",
                }}
              >
                <div className="tutorial-text">
                  {/* <span className="step-badge">گام {index + 1}</span> */}
                  <h3>{step.title}</h3>
                  <p className="tutorial-description">
                    {Array.isArray(step.description)
                      ? step.description.map((line, lineIdx) => (
                          <span
                            key={lineIdx}
                            className={
                              "tutorial-description-line" +
                              (lineIdx >= 2
                                ? " tutorial-description-line--offset"
                                : "")
                            }
                          >
                            {line}
                          </span>
                        ))
                      : step.description}
                  </p>

                  {step.highlights?.length > 0 && (
                    <ul className="tutorial-highlight-list">
                      {step.highlights.map((item, itemIdx) => (
                        <li
                          className="tutorial-highlight-item"
                          key={`${item.bold}-${itemIdx}`}
                        >
                          <span className="tutorial-highlight-icon">
                            <CheckIcon />
                          </span>
                          <span className="tutorial-highlight-text">
                            {item.bold && <strong>{item.bold}</strong>}
                            {item.text ? ` ${item.text}` : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div
                className={videoColClass}
                style={{
                  // padding: "24px",
                  // width: "50%",
                  backgroundColor: "#f5f5f5",
                  padding: "48px",
                  borderRadius: "24px",
                  // border: "1px solid #e0e0e0",
                  // boxShadow: "0 0px 50px rgba(0, 0, 0, 0.05)", // subtle shadow
                  height: "500px",
                }}
              >
                <div className="tutorial-video" style={{ height: "404px" }}>
                  <div className="video-wrapper" style={{ height: "404px" }}>
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={step.video}
                      playsInline
                      preload="metadata"
                      muted
                      loop // 👈 THIS
                      controls={false}
                      controlsList="nodownload nofullscreen noremoteplayback"
                      disablePictureInPicture
                      style={{
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tutorial;
//steps
