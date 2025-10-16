import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboubt";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhatsappButton from "./components/custom/WhatsappButton";
import PrivacyPolicy from "./pages/Privacypolicy";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <WhatsappButton />
      </BrowserRouter>
    </>
  );
};

export default App;
