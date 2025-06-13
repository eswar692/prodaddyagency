import { motion } from "framer-motion";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Contact = () => {
  return (
    <section className="w-full h-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700">
      <Header />

      {/* Contact Title */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Get in Touch
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
          We’d love to hear from you. Let’s build something great together!
        </p>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="max-w-4xl  px-6 py-20  bg-white dark:bg-zinc-900 shadow-xl rounded-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Image */}

          <div className="flex gap-2">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid&w=740"
              alt="Contact Us"
              className="rounded-2xl w-40 h-50 object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex justify-center items-center">
              Contact Us
            </h2>
          </div>

          {/* Right side - Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                📧 Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                info@prodaddyagency.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                📞 Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +91 63044 30996
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                🕘 Working Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monday to Saturday – 10 AM to 7 PM IST
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </section>
  );
};

export default Contact;
