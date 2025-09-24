import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <motion.a
      href="https://wa.me/916304430996"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative group">
        {/* Glowing ring effect */}
        {/* <span className="absolute animate-ping rounded-full h-12 w-12 bg-green-400 opacity-75 top-[-10px] left-[-15px] z-0" /> */}
        {/* WhatsApp Icon Container */}
        <div className="relative z-10 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl group-hover:scale-110 transition-all duration-300 ease-in-out">
          <FaWhatsapp className="text-3xl drop-shadow-md" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsappButton;
