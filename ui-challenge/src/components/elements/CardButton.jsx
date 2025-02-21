import PropTypes from "prop-types";

const CardButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`button ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

CardButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func, // Función para manejar el clic
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Tipo de botón
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]), // Estilo del botón
  size: PropTypes.oneOf(["small", "medium", "large"]), // Tamaño del botón
  disabled: PropTypes.bool, // Estado deshabilitado
};

export default CardButton;
