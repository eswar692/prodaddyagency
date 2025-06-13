import { motion } from "framer-motion";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const sections = [
  {
    title: "Web Development",
    img: "https://i.pinimg.com/736x/78/88/15/78881534bc83ec0438d7abff5b1839dd.jpg",
    desc: `Pro Daddy Agency is a dynamic and forward-thinking web development company, dedicated to crafting powerful and scalable digital experiences. With a team of passionate developers and creative designers, we specialize in building modern websites, real-time applications, and custom platforms tailored to each client’s unique needs. Our focus lies in delivering high-performance solutions using the latest technologies such as React, Node.js, MongoDB, and cloud infrastructure. At Pro Daddy Agency, we believe that great design meets functionality, ensuring every project is both visually stunning and technically sound. We work closely with startups, businesses, and creators to turn their ideas into successful digital products. Whether it’s an e-commerce store, a portfolio, or a large-scale web app, we bring clarity, speed, and quality to the table. Our commitment to clean code, responsive design, and secure architecture sets us apart. We don’t just build websites — we build digital success stories. Trust Pro Daddy Agency to elevate your online presence and take your business to the next level.`,
  },
  {
    title: "Mobile Development",
    img: "https://i.pinimg.com/736x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg",
    desc: `In addition to web development, we are highly skilled in mobile app development. Our team builds smooth, responsive, and high-performance apps using modern technologies like React Native and native platforms such as Swift and Java. Whether it’s a simple utility app or a complex real-time application, we focus on creating seamless user experiences across all devices. With a strong eye for design and deep technical expertise, we ensure that every app we build is powerful, scalable, and user-centric. From planning to publishing, we take care of the complete development cycle with precision and passion`,
  },
  {
    title: "Digital Marketing",
    img: "https://i.pinimg.com/736x/1b/93/36/1b9336a73cb9d8f8e9aab83ab7c64907.jpg",
    desc: `At Pro Daddy Agency, we specialize in result-driven digital marketing that elevates your brand across all major online platforms. From Google Ads to Facebook, Instagram, Twitter, YouTube, and LinkedIn, we craft strategic ad campaigns tailored to your business goals. Our expert team focuses on targeting the right audience, optimizing ad performance, and maximizing ROI to ensure every rupee you spend brings measurable growth. Whether you're looking to increase website traffic, generate quality leads, or boost sales, we use data-driven strategies and creative ad design to deliver higher results. With a deep understanding of platform algorithms and user behavior, we help your business stand out in a competitive digital landscape. Trust us to grow your brand visibility, reach more customers, and take your success to the next level — faster and smarter.

`,
  },
  {
    title: "Video Marketing",
    img: "https://increditors.com/wp-content/uploads/2022/01/7-Advantages-of-Hiring-the-Professional-Video-Editing-Services.png",
    desc: `We specialize in professional video editing and powerful video marketing strategies that capture attention and drive results. From corporate promos to social media reels, product showcases to storytelling content, we craft high-quality videos tailored to your brand’s voice. Our team uses industry-leading tools to deliver visually stunning, engaging, and impactful videos that connect with your audience. We don’t just edit — we bring stories to life. Combined with smart distribution across platforms like YouTube, Instagram, Facebook, and LinkedIn, our video marketing campaigns are designed to maximize reach, engagement, and conversions. Whether it’s for brand awareness, sales, or client retention, we turn your message into a powerful visual experience that boosts your growth.`,
  },
  {
    title: "Social Media Marketing",
    img: "https://i.pinimg.com/736x/03/a4/86/03a486d386a4c1b73f130d579722b86a.jpg",
    desc: `We run high-converting ad campaigns on all major platforms, including Facebook, Instagram, Twitter, YouTube, Google Ads, and Pinterest. As a top-performing digital marketing agency, we specialize in creating targeted ad strategies that deliver real, measurable results. From brand awareness to lead generation and sales growth, we know how to reach the right audience at the right time with the right message. Our expert team carefully analyzes audience behavior, platform algorithms, and ad performance to continuously optimize your campaigns. Whether it's visual storytelling on Instagram, powerful search ads on Google, or engaging videos on YouTube, we tailor each campaign to your goals. With creative content, strategic targeting, and smart budgeting, we help businesses grow faster, smarter, and stronger across every channel.`,
  },
  {
    title: "Content Marketing",
    img: "https://interruptmedia.com/wp-content/uploads/2022/02/content-marketing-g46ae4ee68_1920.jpg",
    desc: "we offer expert content marketing services designed to attract, engage, and convert your ideal audience. Content marketing is the strategic process of creating and sharing valuable, relevant, and consistent content to build trust, increase brand awareness, and drive profitable customer action. Instead of pushing products directly, we focus on delivering informative blogs, engaging videos, social media posts, reels, infographics, email newsletters, and more — all tailored to your brand and audience. Whether you're looking to educate your audience, improve SEO, grow your social media, or generate high-quality leads, our content marketing approach is built to deliver results. We turn your ideas and expertise into powerful digital assets that grow your business and position your brand as a leader in your industry.",
  },
];

const Home = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      {/* Hero */}
      <section className="min-h-[70vh] bg-gradient-to-r from-blue-100 to-purple-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to <span className="text-blue-600">Pro Daddy Agency</span>
          </h1>
          <p className="text-[16px] md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Pro Daddy Agency is your one-stop solution for digital success. We
            specialize in Digital Marketing, Web Development, Mobile App
            Development, and Video Marketing.
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
          Our Services
        </motion.h2>

        <div className="space-y-20">
          {sections.map((section, index) => (
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
                src={section.img}
                alt={section.title}
                className="w-full md:w-1/2 rounded-xl shadow-lg md:h-[450px]"
              />
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                  {section.desc}
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

export default Home;
