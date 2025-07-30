import thum1 from "../../public/assets/img/slider/slider-4.jpg";
import thum2 from "../../public/assets/img/slider/slider-1.jpg";
import thum3 from "../../public/assets/img/slider/slider-2.jpg";
import thum4 from "../../public/assets/img/slider/slider-3.jpg";
import thum5 from "../../public/assets/img/slider/nav/slider-nav-4.jpg";
import thum6 from "../../public/assets/img/slider/nav/slider-nav-1.jpg";
import thum7 from "../../public/assets/img/slider/nav/slider-nav-2.jpg";
import thum8 from "../../public/assets/img/slider/nav/slider-nav-3.jpg";
import YellowBg from "../../public/assets/img/shape/yellow-bg.png";
import { heroSliderType } from "@/interFace/interFace";

const hero_slider_data: heroSliderType[] = [
  {
    id: 1,
    image: thum1,
    title: "Welcome to",
    wrapperClass: "yellow-bg",
    YellowBg: YellowBg,
    info: "Excellence in IT Education",
    titleCategory: "RAIT",
    titleInfo: "Academy",
    desc: "Empowering future tech leaders with industry-relevant skills and knowledge in information technology.",
    sliderBtn: "Explore Our Programs",
  },
  {
    id: 2,
    image: thum2,
    title: "Master in-demand",
    wrapperClass: "blue-bg",
    YellowBg: YellowBg,
    info: "Cutting-Edge Curriculum",
    titleCategory: "Tech Skills",
    titleInfo: "Today",
    desc: "Learn from industry experts and gain hands-on experience with the latest technologies and tools.",
    sliderBtn: "View Courses",
  },
  {
    id: 3,
    image: thum3,
    title: "Build Your Career in",
    wrapperClass: "pink-bg",
    YellowBg: YellowBg,
    info: "Career-Focused Programs",
    titleCategory: "Information",
    titleInfo: "Technology",
    desc: "Join our community of successful IT professionals and transform your passion into a rewarding career.",
    sliderBtn: "Join Now",
  },
  {
    id: 4,
    image: thum4,
    title: "Industry-Recognized",
    wrapperClass: "green-bg",
    YellowBg: YellowBg,
    info: "Professional Certification",
    titleCategory: "IT",
    titleInfo: "Certifications",
    desc: "Earn globally recognized certifications and boost your career prospects in the tech industry.",
    sliderBtn: "Get Certified",
  },
  //slider two data
  {
    id: 5,
    image: thum5,
    title: "Programming & Development",
    info: "12+ Courses",
    wrapperClass: "slider__nav-item orange-bg",
  },
  {
    id: 6,
    image: thum6,
    title: "Cloud Computing",
    info: "8+ Courses",
    wrapperClass: "slider__nav-item blue-bg",
  },
  {
    id: 7,
    image: thum7,
    title: "Cybersecurity",
    info: "6+ Courses",
    wrapperClass: "slider__nav-item pink-bg",
  },
  {
    id: 8,
    image: thum8,
    title: "Data Science & AI",
    info: "10+ Courses",
    wrapperClass: "slider__nav-item green-bg",
  },
];

export default hero_slider_data;
