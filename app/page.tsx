import Cards from "./components/card/Cards";
import Contact from "./components/contact";
import Header from "./components/header";
import About from "./components/image-text/About";
import BannerText from "./components/image-text/BannerText";
import LeftImageText from "./components/image-text/LeftImageText";
import RightImageText from "./components/image-text/RightImageText";
import ScrollUpButton from "./components/scroll";
import WhatsappButton from "./components/whatsapp";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Cards />
      <RightImageText />
      <BannerText />
      <LeftImageText />
      <Contact />

      <ScrollUpButton />
      <WhatsappButton />
    </div>
  );
}
