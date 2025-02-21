import PropTypes from "prop-types";

const Span = ({ spanText, className = "", onClick }) => {
  return (
    <div className={`span-container ${className}`} onClick={onClick}>
      <span className="span-text">{spanText}</span>
    </div>
  );
};

Span.propTypes = {
  spanText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Span;
