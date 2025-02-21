import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";
import { SiProtonvpn, SiProton } from "react-icons/si";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";

function App() {
  const iconColors = "aquamarine";
  const firstCardData = {
    title: "Proton Unlimited",
    optionalText: "US$9.99 /mes",
    gigasText: "15.50 de 500.00 GB",
    percentage: 0.04,
    descriptions: [
      {
        icon: <LuUsersRound size={18} color={iconColors} />,
        text: "1 usuario",
      },
      {
        icon: <MdOutlineEmail size={18} color={iconColors} />,
        text: "1 de 15 direcciones de correo",
      },
      {
        icon: <AiOutlineGlobal size={18} color={iconColors} />,
        text: "0 de 3 dominios personalizados",
      },
      {
        icon: <BsCalendar2Check size={18} color={iconColors} />,
        text: "25 calendarios",
      },
      {
        icon: <SiProtonvpn size={18} color={iconColors} />,
        text: "10 conexiones VPN de alta velocidad",
      },
      {
        icon: <SiProton size={18} color={iconColors} />,
        text: "Proton Pass con alias hide-my-email ilimitados",
      },
      {
        icon: <FiShield size={18} color={iconColors} />,
        text: "Programa Proton Sentinel",
        tooltip:
          "Sistema avanzado de monitoreo y protección contra amenazas de seguridad",
      },
    ],
    buttonText: "Editar el ciclo de Facturación",
    spanText: "Editar otros planes de Proton",
  };

  const secondCardData = {
    title: "Proton Duo",
    description:
      "Privacidad ilimitada y mas almacenamiento para hasta 2 personas.",
    legend: "Recomendado",
    descriptions: [
      {
        icon: <LuUsersRound size={18} color={iconColors} />,
        text: "1 TB de almacenamiento",
        tooltip: "Mucho almacenamiento que chimba, una tera es mucho",
      },
      {
        icon: <MdOutlineEmail size={18} color={iconColors} />,
        text: "Hasta 2 usuarios",
      },
      {
        icon: <AiOutlineGlobal size={18} color={iconColors} />,
        text: "30 direccoines/alias de correo electronico",
        tooltip: "Omaga puedes tener 30 formas de que te llame osea wtf",
      },
      {
        icon: <BsCalendar2Check size={18} color={iconColors} />,
        text: "25 calendarios",
      },
      {
        icon: <SiProtonvpn size={18} color={iconColors} />,
        text: "10 conexiones VPN de alta velocidad",
      },
      {
        icon: <SiProton size={18} color={iconColors} />,
        text: "Proton Pass con alias hide-my-email ilimitados",
      },
      {
        icon: <FiShield size={18} color={iconColors} />,
        text: "Programa Proton Sentinel",
        tooltip:
          "Sistema avanzado de monitoreo y protección contra amenazas de seguridad",
      },
      {
        icon: <FaWandMagicSparkles size={18} color={iconColors} />,
        text: "Asistente de escritura Proton Scribe",
      },
    ],
    buttonText: "Desde US$14/99 /mes",
  };
  const thirdCardData = {
    title: "Proton Family",
    description:
      "Protege la privacidad de tu familia con todos los servicios combinados de Proton.",
    descriptions: [
      {
        icon: <LuUsersRound size={18} color={iconColors} />,
        text: "1 usuario",
      },
      {
        icon: <MdOutlineEmail size={18} color={iconColors} />,
        text: "1 de 15 direcciones de correo",
      },
      {
        icon: <AiOutlineGlobal size={18} color={iconColors} />,
        text: "0 de 3 dominios personalizados",
      },
      {
        icon: <BsCalendar2Check size={18} color="" />,
        text: "25 calendarios",
      },
      {
        icon: <SiProtonvpn size={18} color={iconColors} />,
        text: "10 conexiones VPN de alta velocidad",
      },
      {
        icon: <SiProton size={18} color={iconColors} />,
        text: "Proton Pass con alias hide-my-email ilimitados",
      },
      {
        icon: <FiShield size={18} color={iconColors} />,
        text: "Programa Proton Sentinel",
        tooltip:
          "Sistema avanzado de monitoreo y protección contra amenazas de seguridad",
      },
    ],
    buttonText: "Desde US$23.99 /mes",
  };
  return (
    <main>
      <Header />
      <div className="cards-container">
        <Card {...firstCardData} />
        <Card {...secondCardData} />
        <Card {...thirdCardData} />
      </div>
    </main>
  );
}

export default App;
