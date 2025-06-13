import { motion } from "framer-motion";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const AboutMe = () => {
  return (
    <section className="bg-white w-full h-full">
      <Header />\{/* 👇 Add this section right after Header */}
      <section className="w-full py-15 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            About Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
            Passion. Innovation. Digital Excellence.
          </p>
        </motion.div>
      </section>
      <div className="py-10 px-5 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-2">
            About Our Presence
          </h2>
          <h3 className="text-xl text-gray-700 mb-6 font-medium">
            A Vision Rooted in Passion and Innovation
          </h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The founder of{" "}
            <span className="font-semibold text-blue-600">
              Pro Daddy Agency
            </span>
            . We started this journey with a deep passion to create digital
            products that make a difference. My dream has always been to bring
            ideas to life through technology, to craft digital solutions that
            are not only functional but also inspiring.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            With a strong foundation in full-stack web development and mobile
            app development, I’ve built this agency to provide end-to-end
            solutions — from designing seamless user interfaces to engineering
            powerful backend systems and scaling them with advanced DevOps and
            cloud architecture. I believe in writing clean, scalable, and
            maintainable code, and building systems that are made for the
            future.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            My vision is simple but powerful: to empower businesses with
            technology that’s intelligent, beautiful, and impactful. Whether
            it’s a startup looking for its first website or a big brand that
            wants to scale its tech stack, I treat every project with heart and
            intention.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At Pro Daddy Agency, we believe that innovation isn’t just about
            using the latest tools — it’s about solving problems creatively and
            meaningfully. We blend design, technology, and strategy to build
            digital products that deliver real value.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            I don’t just work for clients; I partner with dreamers, creators,
            and change-makers. Because your vision deserves more than just
            execution — it deserves commitment, innovation, and soul.
          </p>
          <p className="italic text-gray-500">
            “This isn’t just code — this is passion, vision, and impact. Welcome
            to the world of Pro Daddy.”
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Founder"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutMe;
