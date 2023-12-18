/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About P2P" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-justify text-secondary-white">
        <span className="font-extrabold text-white">Welcome to Pet 2 Place, </span>{" "}
        where passion meets pet care! We understand that your pets are not just animals; they are cherished members of your family. At Pet 2 Place, we are dedicated to providing top-notch pet care services, innovative rental solutions, and quality pet products to enhance the well-being of your furry friends.
        <span className="font-extrabold text-white">
        &nbsp;At Pet 2 Place,
        </span>{" "}
         we believe that every pet deserves the best care, and we're excited to embark on this journey with you. Join our community of pet lovers, explore our innovative services, and let's make a positive impact on the lives of our beloved pets together.
      
        <span className="font-extrabold text-white">Thank you for choosing Pet 2 Place – where your pets' happiness is our priority!</span>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
