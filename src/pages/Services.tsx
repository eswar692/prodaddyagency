import { motion } from "framer-motion";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const services = [
  {
    title: "Custom Web Solutions",
    img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    desc: `We specialize in crafting custom web solutions tailored to your business needs. From sleek landing pages to robust enterprise platforms, our development process is focused on speed, scalability, and user experience. We utilize cutting-edge frameworks like React, Next.js, and cloud-native architecture to ensure your platform is future-ready.`,
  },
  {
    title: "Mobile App Excellence",
    img: "https://ideausher.com/wp-content/uploads/2022/04/covr-image-2_result.webp",
    desc: `Our mobile development team delivers stunning apps using React Native, Swift, and Java. We focus on performance, design consistency, and seamless functionality across iOS and Android. Whether it’s a startup MVP or a complex ecosystem, we build apps users love to use.`,
  },
  {
    title: "Performance Marketing",
    img: "https://www.digitalvidya.com/blog/wp-content/uploads/2019/06/social-marketing.jpg",
    desc: `Maximize your ROI with our performance-driven marketing strategies. From Google Ads to YouTube and Meta campaigns, we run data-backed ads that convert. We target precise audiences, optimize creatives, and fine-tune budgets to drive consistent results.`,
  },
  {
    title: "Creative Video Production",
    img: "https://cdn.pixabay.com/photo/2022/11/09/03/03/marketing-7579809_640.png",
    desc: `We produce impactful video content tailored to your brand’s voice. From storyboarding to editing, we bring your vision to life through reels, ads, explainers, and brand films. Each video is optimized for engagement across social platforms.`,
  },
  {
    title: "Social Media Growth",
    img: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063163.jpg",
    desc: `We grow your presence on platforms like Instagram, Twitter, Facebook, YouTube, LinkedIn, and Pinterest with viral strategies and strategic content. Whether it’s lead generation or brand building, we ensure you're always trending.`,
  },
  {
    title: "Content Strategy & SEO",
    img: "https://i.pinimg.com/736x/2f/5f/59/2f5f5994fc7ecaf09026537cfd7a61cc.jpg",
    desc: `From SEO blogs and newsletters to carousel posts and long-form videos, our content marketing services build authority, engage readers, and drive organic traffic. We help you become the go-to brand in your space.`,
  },
];

const Services = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />

      {/* Hero */}
      <section className="min-h-[70vh] bg-gradient-to-r from-purple-100 to-pink-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-purple-600">Services</span>
          </h1>
          <p className="text-[16px] md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of expert services tailored for digital
            growth, innovation, and success across web, mobile, content, video,
            and marketing.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.h2>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } items-center gap-10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full md:w-1/2 rounded-xl shadow-lg md:h-[450px] object-cover"
              />
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Services;
