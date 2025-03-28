import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import one from "../assets/one.png";

const AboutSection = () => {
  return (
    <div className="flex font-urbanist relative flex-col md:flex-row items-center min-h-screen p-8 md:p-5">
      {/* Image Section */}
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={one}
          alt="Vaibhav Setiya"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-0 px-4 md:px-0" // Added padding for mobile
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="md:text-5xl text-3xl leading-[50px] md:text-start text-center font-medium text-black mb-4">
          Who is Vaibhav Setiya?
        </h2>
        <p className="text-gray-700 leading-custom text-center md:text-start">
          Vaibhav Setiya is more than just a real estate expert—he’s a trusted partner for
          anyone navigating the fast-paced world of Dubai property. As the founder of Treysta,
          a name that stands for trust, Vaibhav has built a reputation not just for his expertise,
          but for his unwavering commitment to putting his clients first.
        </p>
        <br />
        <p className="text-gray-700 leading-custom text-center md:text-start">
          With a background as a civil engineer and over a decade of experience in real estate,
          Vaibhav has managed a portfolio worth over 100 million dirhams and closed deals exceeding
          500 million dirhams. But his journey is not defined by numbers alone. It’s driven by a deep
          passion for helping people make informed, confident decisions that will positively impact
          their lives for years to come.
        </p>
        <br />
        <p className="text-gray-700 leading-custom text-center md:text-start">
          For Vaibhav, real estate isn’t just about transactions—it’s about relationships. He listens,
          understands, and provides clear, honest advice that empowers his clients. Whether it’s
          helping a family find their dream home or guiding an investor toward smart opportunities,
          Vaibhav’s approach is grounded in transparency, integrity, and a genuine desire to help
          others succeed.
        </p>
      </motion.div>

      {/* Scroll Down Animation (Visible Only on Tablets and Desktop) */}
      <div className="absolute font-sans -bottom-[10px] w-full overflow-hidden py-10 hidden md:block">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"], // Moves continuously from 0% to -100%
          }}
          transition={{
            ease: "linear",
            duration: 12, // Adjust speed as needed
            repeat: Infinity,
          }}
        >
          {/* Duplicating content for seamless looping */}
          {[...Array(10)].map((_, index) => (
            <p
              key={index}
              className="text-[100px] md:text-[130px] font-bold text-transparent text-center px-10"
              style={{
                WebkitTextStroke: "1px #000000",
                letterSpacing: "2px",
              }}
            >
              SCROLL DOWN
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
