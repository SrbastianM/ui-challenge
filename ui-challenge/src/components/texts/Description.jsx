import PropTypes from "prop-types";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Description = ({ icon, text, tooltip }) => {
  return (
    <div className="description-container">
      <div>{icon}</div>
      {/* <div className="description-text">{text}</div> */}
      <div className="description-text">
        {text}
        {tooltip && (
          <div className="tooltip-container">
            <IoIosHelpCircleOutline className="tooltip-icon" />
            <div className="tooltip">
              {tooltip}
              <div className="tooltip-arrow" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Description.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};

export default Description;
