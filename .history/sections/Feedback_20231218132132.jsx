/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative">
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Meet our Team
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          P2P UAE
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[18px] text-[14px] sm:leading-[45.6px] leading-[39.6px] text-white">
        At Pet 2 Place, our team is a passionate and dedicated group of individuals united by a common love for pets and a commitment to providing exceptional pet care services. Each member brings unique skills and expertise to the table, contributing to the success of our mission. Get to know the faces behind P2P.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        {/* <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]">
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
