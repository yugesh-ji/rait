"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import HeroSectionTwo from "./HeroSectionTwo";
import ServiceSection from "./ServiceSection";
import CourseSectionOne from "../common/Course/CourseSectionOne";
import SkillineSection from "./SkillineSection";
import WhyChoose from "./WhyChoose";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogSection";
import CtaSectionTwo from "./CtaSectionTwo";
import CounterSection from "../about/CounterSection";
import AboutSectionTwo from "../about/AboutSection";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HomeTwoMain = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <HeroSectionTwo />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <ServiceSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <AboutSectionTwo />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CourseSectionOne />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <SkillineSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <WhyChoose />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CounterSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <TestimonialSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <BlogSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CtaSectionTwo />
      </motion.div>
    </>
  );
};

export default HomeTwoMain;
