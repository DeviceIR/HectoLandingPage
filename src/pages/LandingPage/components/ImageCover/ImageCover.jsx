const ImageCover = ({ imageUrl, children, minHeight = "400px" }) => {
  return (
    <div
      className="image-cover-section"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: "20px",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Image Container - Top */}
      <div
        className="image-container"
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          backgroundColor: "#ffffff",
        }}
      >
        <img
          src={imageUrl}
          alt="Branch"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Content Container - Bottom */}
      <div
        className="image-cover-content"
        style={{
          flex: "1",
          padding: "20px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ImageCover;

