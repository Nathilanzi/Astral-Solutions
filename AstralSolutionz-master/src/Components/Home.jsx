import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, Users, Target, Phone } from 'lucide-react';

const TaglineCarousel = () => {
  const taglines = [
    "Empowering Businesses with Innovation",
    "Your Partner in Digital Transformation",
    "Building Solutions for a Better Tomorrow",
    "Driving Efficiency Through Technology",
    "Collaboration for Positive Impact",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-24 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-2xl font-serif text-[#007AFF] tracking-wide">
              {taglines[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-[#2C3531] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-[#007AFF]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#007AFF] w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-[#007AFF] mb-2">{title}</h3>
    <p className="text-[#00FFAB]">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="home-page min-h-screen bg-gradient-to-tl from-[#1a1a1a] via-[#2c3531] to-[#004D47]">
      <TaglineCarousel />

      {/* Hero Section */}
      <motion.div
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img
          src="/images/MilkyWay.jpg"
          alt="Milky Way Galaxy"
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl relative z-20">
            <motion.h1
              className="text-5xl font-bold text-white mb-6 shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to Astral Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8 shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Empowering communities and businesses through innovation.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/about" // Ensure this links to the "about" route
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#007AFF] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <section id="about" className="bg-[#004D47] p-6 rounded-lg shadow-lg mt-12">
        <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">About Us</h2>
        <p className="text-[#00FFAB] mb-4">
          Astral Solutions is a forward-thinking enterprise founded by Nkosinathi Milanzi, dedicated to empowering communities and businesses through innovative technology solutions and impactful programs. The company focuses on bridging gaps in education, technology, and development by creating custom solutions that drive progress and inclusivity. 
          With a commitment to community growth, Astral Solutions undertakes projects that blend traditional frameworks with modern advancements, ensuring that stakeholders at every level benefit. By leveraging cutting-edge technologies like web development, database systems, and software engineering, the company aims to transform how communities, organizations, and individuals achieve their goals.
        </p>
      </section>

      {/* Vision Plan Section */}
      <section id="vision-plan" className="bg-[#2C3531] p-6 rounded-lg shadow-lg mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">Vision Plan</h2>
        <ul className="list-disc list-inside text-[#00FFAB] space-y-2">
          <li>Empowering Communities;</li>
          <p>
            Astral Solutions envisions a world where communities have access to tools and resources that enhance education, skills development, and opportunities.
          </p>
          <li>Driving Digital Transformation</li>
          <p>
            The company seeks to bring traditional structures online, such as transitioning the Office of Kgosana Koketso Rakhudu online, combining digital tools with community-based operations to create sustainable frameworks for resource sharing, reporting, and stakeholder collaboration.
          </p>
          <li>Fostering Innovation and Growth</li>
          <p>
            Astral Solutions aims to build innovative database and software solutions that streamline operations and increase accountability.
          </p>
          <li>Enhancing Youth and Business Opportunities</li>
          <p>
            Astral Solutions plans to foster entrepreneurship and employment by developing databases and admin portals that allow for better engagement with youth, businesses, and communities.
          </p>
          <li>Sustainability and Scalability</li>
          <p>
            Astral Solutions aspires to create scalable, sustainable models that can be replicated across regions, ensuring long-term impact in education, business development, and governance.
          </p>
          <li>Championing Inclusion and Equality</li>
          <p>
            Astral Solutions prioritizes inclusivity by designing solutions that address the needs of marginalized groups, ensuring equal access to education, technology, and opportunities.
          </p>
        </ul>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16 bg-[#004D47] mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Calendar}
            title="Digital Strategy"
            description="Tailored plans to achieve digital excellence for businesses and communities."
          />
          <FeatureCard
            icon={Users}
            title="Collaborative Development"
            description="Engaging with clients to co-create innovative solutions."
          />
          <FeatureCard
            icon={Target}
            title="Sustainable Growth"
            description="Focusing on long-term impact through technology-driven projects."
          />
          <FeatureCard
            icon={Phone}
            title="Continuous Support"
            description="Reliable assistance to ensure ongoing success."
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#2C3531] p-6 rounded-lg shadow-lg mt-12">
        <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-[#00FFAB] space-y-2">
          <li>Web Development</li>
          <li>Database Development</li>
          <li>Digital Transformation Strategies</li>
          <li>Custom Software Solutions</li>
          <li> Impact Management and Monitoring</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#004D47] p-6 rounded-lg shadow-lg mt-12">
        <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="p-6 bg-[#2C3531] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#007AFF] mb-4">Creating a Website for the Office Of Kgosana Koketso Rakhudu</h3>
            <p className="text-[#00FFAB] mb-4">
              This project involves building a website for the Office Of Kgosana Koketso Rakhudu. The site aims to streamline communication and enhance the digital presence of the office, focusing on efficient stakeholder management and resource allocation.
            </p>
            <a
              href="https://www.drkoketsorakhudu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007AFF] hover:text-[#20B2AA] transition-all duration-300"
            >
              Visit the website
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-[#2C3531] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#007AFF] mb-4">Culinary Haven - Recipe Store</h3>
            <p className="text-[#00FFAB] mb-4">
              Culinary Haven is a recipe store that displays a wide array of recipes and allows users to download them. The platform aims to inspire cooking enthusiasts with easy-to-follow recipes.
            </p>
            <a
              href="https://culinary-haven-a.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007AFF] hover:text-[#20B2AA] transition-all duration-300"
            >
              Explore Culinary Haven
            </a>
          </div>
        </div>
      </section>

      {/* Contact Card Section */}
<section id="contact" className="bg-[#2C3531] p-6 rounded-lg shadow-lg mt-12">
  <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">Contact Us</h2>
  <div className="space-y-6 text-[#00FFAB]">
    <div className="flex items-center gap-4">
      <Phone className="w-6 h-6 text-[#007AFF]" />
      <a
        href="tel:+27636873558"
        className="hover:underline"
      >
        +27 63 687 3558
      </a>
    </div>
    <div className="flex items-center gap-4">
      <Users className="w-6 h-6 text-[#007AFF]" />
      <a
        href="mailto:nathilanziv@gmail.com"
        className="hover:underline"
      >
        nathilanziv@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-4">
      <Calendar className="w-6 h-6 text-[#007AFF]" />
      <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
    </div>
    <div className="flex items-center gap-4">
      <Target className="w-6 h-6 text-[#007AFF]" />
      <a
        href="https://www.google.com/maps?q=25%C2%B034'35.3%22S+27%C2%B010'14.7%22E"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        1/61 Lenatong Section, Phokeng, Rustenburg 0300
      </a>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
