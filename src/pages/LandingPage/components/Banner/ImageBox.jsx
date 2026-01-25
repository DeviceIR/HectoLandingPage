import React from "react";
import styles from "./ImageBox.module.css";

const ImageBox = ({
  src,
  alt = "Image description",
  ratio = "16 / 9",
  maxWidth = "100%",
  className = "",
}) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        maxWidth: maxWidth,
        aspectRatio: ratio,
      }}
    >
      <img src={src} alt={alt} className={styles.image} loading="lazy" />
    </div>
  );
};

export default ImageBox;
