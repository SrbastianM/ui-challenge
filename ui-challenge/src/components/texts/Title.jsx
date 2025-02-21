import PropTypes from "prop-types";

const Title = ({ title, optionalText }) => {
  return (
    <div className="title-container">
      <h3 className="title-text">{title}</h3>
      <h4 className="optional-text"> {optionalText} </h4>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  optionalText: PropTypes.string,
};

export default Title;
