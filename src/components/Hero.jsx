import { HERO_CONTENT } from "../constants";
import isz from "../assets/isz.png";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (delay) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: delay,
    },
  }),
};

const item = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
};

const imageAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 1.2 } },
  // hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } },
};

const Hero = () => {
  return (
    <div className="pt-20 border-b border-neutral-900 pb-6 lg:mb-35">
      <div className="pt-16 flex flex-wrap">
        <div className="pl-6 w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            custom={0}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1
              variants={item}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
            >
              Intan Zaki
            </motion.h1>
            
            <motion.span
              variants={item}
              className="block text-center lg:text-left bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Computer Science (Software Engineering) Graduate
            </motion.span>
            
            <motion.p
              variants={item}
              className="block text-center lg:text-left my-2 max-w-xl py-4 font-extralight tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8 flex justify-center lg:justify-start">
          <div className="flex justify-center">
            <motion.img
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={imageAnimation}
              src={isz}
              alt="Intan Zaki"
              className="w-full max-w-xs lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
