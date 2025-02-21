import PropTypes from "prop-types";

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-container">
      <progress value={value} max="1" />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ProgressBar;
