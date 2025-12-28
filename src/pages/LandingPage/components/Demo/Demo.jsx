import phoneImage from "../../assets/images/phone.png";

const Demo = () => {
  return (
    <section id="demo" className="demo section" style={{ paddingTop: "80px" }}>
      <div className="container">
        {/* Main Container - Full width, half height */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "50vh",
            minHeight: "400px",
            overflow: "visible",
          }}
        >
          {/* Gray Background Container */}
          <div
            className="demo-bg"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "60%",
              background: "#D0D0D6",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              padding: "40px",
              overflow: "visible",
            }}
          >
            {/* Image Container - Left Side, Overflowing to Top */}
            <div
              className="demo-image-outer"
              style={{
                position: "relative",
                flex: "1.8",
                maxWidth: "65%",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                overflow: "visible",
              }}
            >
              <div
                className="demo-image-inner"
                style={{
                  position: "absolute",
                  bottom: "-100px",
                  left: "80px",
                  width: "100%",
                  height: "280%",
                  backgroundImage: `url(${phoneImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "bottom left",
                  backgroundRepeat: "no-repeat",
                  transform: "translateY(0)",
                }}
              />
            </div>

            {/* Text Container - Right Side */}
            <div
              className="demo-text"
              style={{
                flex: "1",
                maxWidth: "35%",
                paddingLeft: "40px",
              }}
            >
              <h3 className="text-dark mb-4">عنوان دمو</h3>
              <p className="text-dark" style={{ lineHeight: "1.6" }}>
                متن توضیحات دمو در اینجا قرار می‌گیرد. این بخش می‌تواند شامل
                اطلاعات بیشتر درباره محصول یا سرویس باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

