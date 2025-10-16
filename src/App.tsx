import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboubt";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WhatsappButton from "./components/custom/WhatsappButton";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/termsofservice" element={<Terms />} />
      </Routes>
      <WhatsappButton />
    </BrowserRouter>
  );
};

export default App;
