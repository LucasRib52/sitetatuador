// hero data
import { heroData } from '../data';
// framer motion
import { motion } from 'framer-motion';
// import React-Icons for WhatsApp icon
import { FaWhatsapp } from 'react-icons/fa';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeInQuick = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

export default function Hero() {
  const { title, subtitle } = heroData;

  return (
    <section
      id="home"
      className="bg-center bg-cover bg-hero min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto min-h-[40vh] lg:h-full flex flex-col items-center justify-center lg:justify-start lg:flex-row"
      >
        {/* content */}
        <div className="text-center text-white lg:text-left lg:max-w-[640px] lg:mr-8 mb-8 lg:mb-0">
          <motion.h1 variants={fadeInQuick('down', 0.1)} className="h1">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInQuick('down', 0.2)}
            className="max-w-lg mb-8 leading-relaxed lg:mb-16"
          >
            {subtitle}
          </motion.p>
          {/* WhatsApp Button */}
          <motion.a 
            href="https://wa.me/5512965077687" 
            className="inline-flex items-center px-12 py-6 bg-green-500 text-white text-3xl rounded-lg hover:bg-green-600 transition"
            variants={fadeInQuick('down', 0.3)}
          >
            <FaWhatsapp className="mr-2" /> Faça já seu orçamento
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
