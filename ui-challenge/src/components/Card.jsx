import PropTypes from "prop-types";
import Title from "./texts/Title";
import Description from "./texts/Description";
import ProgressBar from "./elements/ProgressBar";
import CardButton from "./elements/CardButton";
import { CiDatabase } from "react-icons/ci";
import Span from "./texts/Span";

const Card = ({
  title,
  optionalText,
  gigasText,
  percentage,
  descriptions,
  description,
  buttonText,
  spanText,
  legend,
}) => {
  return (
    <div className="card-container">
      {legend && (
        <div className="card-legend">
          <p className="text-legend">{legend}</p>
        </div>
      )}
      <div className="card">
        <Title title={title} optionalText={optionalText} />

        {description && <p className="card-description">{description}</p>}

        {gigasText && (
          <Description
            icon={<CiDatabase size={18} color="green" />}
            text={gigasText}
          />
        )}
        {percentage && <ProgressBar value={percentage} />}

        {descriptions.map((desc, index) => (
          <Description
            key={index}
            icon={desc.icon}
            text={desc.text}
            tooltip={desc.tooltip}
          />
        ))}

        {buttonText && <CardButton size="medium">{buttonText}</CardButton>}
        {spanText && <Span spanText={spanText} className="" />}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired, // Título de la tarjeta
  optionalText: PropTypes.string, // Texto opcional (ej: precio)
  description: PropTypes.string, // Texto opcional : (Breve descripcion)
  gigasText: PropTypes.string, // Texto de gigas (ej: "15.50 de 500.00 GB")
  percentage: PropTypes.number, // Porcentaje para la barra de progreso
  descriptions: PropTypes.arrayOf(
    // Array de descripciones
    PropTypes.shape({
      icon: PropTypes.node.isRequired, // Ícono (React node)
      text: PropTypes.string.isRequired, // Texto de la descripción
      tooltip: PropTypes.string, // Tooltip (opcional)
    }),
  ).isRequired,
  buttonText: PropTypes.string, // Texto del botón (opcional)
  spanText: PropTypes.string, // Texto del span (opcional)
  legend: PropTypes.string,
};

export default Card;
