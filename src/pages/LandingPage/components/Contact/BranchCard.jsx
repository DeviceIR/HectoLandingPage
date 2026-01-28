import PropTypes from "prop-types";

/**
 * BranchCard component displays branch information
 * @param {Object} props - Component props
 * @param {Object} props.branchData - Branch data object
 * @param {string} props.branchData.image - Branch image URL
 * @param {string} props.branchData.title - Branch title
 * @param {Array} props.branchData.contactInfo - Array of contact information objects
 */
const BranchCard = ({ branchData, onLocationClick }) => {
  const { image, title, contactInfo, buttonColor } = branchData;

  return (
    <div className="branch-card-container">
      <div className="branch-card-wrapper">
        <div
          className="branch-card"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="branch-body">
            <h3>{title}</h3>
            <div className="branch-meta">
              {contactInfo.map((info, index) => (
                <p
                  key={index}
                  style={{ marginBottom: "0px", fontSize: "16px" }}
                >
                  <i className={info.icon}></i>
                  {info.text}
                </p>
              ))}
            </div>
            {/* <button
              type="button"
              className="branch-location-btn"
              style={{ backgroundColor: buttonColor }}
              aria-label={`دریافت لوکیشن ${title}`}
              onClick={() => onLocationClick?.(branchData)}
            >
              دریافت لوکیشن
            </button> */}
          </div>
          <div
            className="branch-image"
            style={{ width: "180px", height: "180px" }}
          >
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

BranchCard.propTypes = {
  branchData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    mapLink: PropTypes.string.isRequired,
    contactInfo: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  onLocationClick: PropTypes.func,
};

export default BranchCard;
