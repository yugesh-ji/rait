import CourseImgOne from "../../public/assets/img/course/course-1.jpg";
import CourseImgTwo from "../../public/assets/img/course/course-2.jpg";
import CourseImgThree from "../../public/assets/img/course/course-3.jpg";
import CourseImgFour from "../../public/assets/img/course/course-4.jpg";
import CourseImgFive from "../../public/assets/img/course/course-5.jpg";
import CourseImgSix from "../../public/assets/img/course/course-6.jpg";
import CourseImgSeven from "../../public/assets/img/course/course-9.jpg";
import CourseImgEight from "../../public/assets/img/course/course-10.jpg";
// import CourseImgEight from "../../public/assets/img/course/home-3/course-2.jpg";
import CourseImgNine from "../../public/assets/img/course/course-7.jpg";
import CourseImgTen from "../../public/assets/img/course/course-8.jpg";
import CourseImgEleven from "../../public/assets/img/course/course-9.jpg";
import ListCourseOne from "../../public/assets/img/course/list/course-1.jpg";
import ListCourseTwo from "../../public/assets/img/course/list/course-2.jpg";
import ListCourseThree from "../../public/assets/img/course/list/course-3.jpg";
import ListCourseFour from "../../public/assets/img/course/list/course-4.jpg";
import ListCourseFive from "../../public/assets/img/course/list/course-5.jpg";
import ListCourseSix from "../../public/assets/img/course/list/course-6.jpg";
import TeacherImg from "../../public/assets/img/course/teacher/teacher-1.jpg";
import CourseSm from "../../public/assets/img/course/sm/course-sm-1.jpg";
import CourseSmTwo from "../../public/assets/img/course/sm/course-sm-2.jpg";
import CourseSmThree from "../../public/assets/img/course/sm/course-sm-3.jpg";

import { coursesType } from "@/interFace/interFace";

const description = "यह कोर्स Rashm Academy of Information Technology द्वारा विशेष रूप से डिज़ाइन किया गया है ताकि छात्र व्यावसायिक और तकनीकी कौशल में निपुण हो सकें।";

const courses_data: coursesType[] = [
  {
    id: 11,
    image: CourseImgEleven,
    category: "HTML & CSS",
    lesson: 40,
    ratingAve: 4.8,
    ratingCount: 35,
    ratings: 5,
    title: "Website Design with HTML & CSS",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "w0eeQ0Tgk7E",
    desc: "Learn how to create stunning and responsive websites using HTML and CSS from scratch."
  },
  {
    id: 12,
    image: ListCourseOne,
    category: "JavaScript",
    lesson: 35,
    ratingAve: 4.7,
    ratingCount: 30,
    ratings: 5,
    title: "Interactive Web Development with JavaScript",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "KzlwvKX_P6k",
    desc: "Create dynamic and interactive web pages with JavaScript at Rashm Academy."
  },
  {
    id: 13,
    image: ListCourseTwo,
    category: "Python Programming",
    lesson: 45,
    ratingAve: 4.9,
    ratingCount: 42,
    ratings: 5,
    title: "Python Programming for Beginners",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "NDa3AGPobS4",
    desc: "Step-by-step learning of Python from basics to small projects, suitable for all students."
  },
  {
    id: 14,
    image: ListCourseThree,
    category: "C Programming",
    lesson: 30,
    ratingAve: 4.6,
    ratingCount: 29,
    ratings: 5,
    title: "Learn C Programming Language Practically",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "BGjTboXjH28",
    desc: "Get a solid foundation in logic and programming concepts using C language."
  },
  {
    id: 15,
    image: ListCourseFour,
    category: "C++ Programming",
    lesson: 32,
    ratingAve: 4.5,
    ratingCount: 28,
    ratings: 5,
    title: "C++ with Object Oriented Concepts",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "ChAWdmplhwY",
    desc: "Master object-oriented programming with real examples using C++."
  },
  {
    id: 16,
    image: ListCourseFive,
    category: "Java Programming",
    lesson: 36,
    ratingAve: 4.8,
    ratingCount: 33,
    ratings: 5,
    title: "Java Programming Essentials",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "hh7V878lAIY",
    desc: "Understand the core concepts of Java and start building applications with confidence."
  },
  {
    id: 17,
    image: ListCourseSix,
    category: "VBA & Excel Automation",
    lesson: 25,
    ratingAve: 4.7,
    ratingCount: 28,
    ratings: 5,
    title: "Excel VBA for Beginners",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "lvYM9tHRz0M",
    desc: "Automate Excel with Visual Basic for Applications (VBA) easily."
  },
  {
    id: 18,
    image: CourseSm,
    category: "PageMaker",
    lesson: 18,
    ratingAve: 4.5,
    ratingCount: 22,
    ratings: 5,
    title: "Desktop Publishing with PageMaker",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "Egy-jJUNJ3A",
    desc: "Design and layout documents like certificates, books, and flyers with PageMaker."
  },
  {
    id: 19,
    image: CourseSmTwo,
    category: "Accounting",
    lesson: 20,
    ratingAve: 4.7,
    ratingCount: 26,
    ratings: 5,
    title: "Accounting Fundamentals with Practical Ledger",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "a-CEyHSNrx0",
    desc: "Basic to advanced manual and computerized accounting concepts made easy."
  },
  {
    id: 20,
    image: CourseSmThree,
    category: "Spoken English",
    lesson: 45,
    ratingAve: 4.9,
    ratingCount: 50,
    ratings: 5,
    title: "60-Day Spoken English Practice Course",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "ChAWdmplhwY",
    desc: "Daily sentence practice, grammar, and fluency-building exercises."
  },
  {
    id: 21,
    image: CourseImgOne,
    category: "Live Projects",
    lesson: 25,
    ratingAve: 5.0,
    ratingCount: 40,
    ratings: 5,
    title: "Build Portfolio with Live Projects",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "BGjTboXjH28",
    desc: "Work on real-time web, design, and automation projects guided by experts."
  },
  {
    id: 22,
    image: CourseImgTwo,
    category: "Hardware & Networking",
    lesson: 40,
    ratingAve: 4.8,
    ratingCount: 32,
    ratings: 5,
    title: "PC Hardware and Network Setup",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "NDa3AGPobS4",
    desc: "Learn assembling, repairing, and setting up networks for homes and offices."
  },
  {
    id: 23,
    image: CourseImgThree,
    category: "Website Hosting",
    lesson: 15,
    ratingAve: 4.7,
    ratingCount: 28,
    ratings: 5,
    title: "Host Your Website with Domain & Hosting",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "hh7V878lAIY",
    desc: "Learn to buy domain, connect hosting, and deploy websites practically."
  },
  {
    id: 24,
    image: CourseImgFour,
    category: "Canva",
    lesson: 20,
    ratingAve: 4.9,
    ratingCount: 40,
    ratings: 5,
    title: "Create Graphics & Posters in Canva",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "KzlwvKX_P6k",
    desc: "Design stunning posters, resumes, and presentations using Canva tools."
  },
  {
    id: 25,
    image: CourseImgFive,
    category: "YouTube",
    lesson: 25,
    ratingAve: 4.8,
    ratingCount: 32,
    ratings: 5,
    title: "Create and Grow a YouTube Channel",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "ChAWdmplhwY",
    desc: "From channel creation to monetization – step-by-step guide to succeed."
  },
  {
    id: 26,
    image: CourseImgSix,
    category: "Facebook Marketing",
    lesson: 18,
    ratingAve: 4.6,
    ratingCount: 30,
    ratings: 5,
    title: "Facebook Ads & Page Management",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "w0eeQ0Tgk7E",
    desc: "Run effective ad campaigns and manage business pages professionally."
  },
  {
    id: 27,
    image: CourseImgSeven,
    category: "Google Tools",
    lesson: 15,
    ratingAve: 4.8,
    ratingCount: 28,
    ratings: 5,
    title: "Gmail, Drive, Docs & More",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "NDa3AGPobS4",
    desc: "Master all Google applications used in business and education."
  },
  {
    id: 28,
    image: CourseImgEight,
    category: "Digital Marketing",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 55,
    ratings: 5,
    title: "Complete Digital Marketing Course",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "a-CEyHSNrx0",
    desc: "SEO, social media, content, email, and video marketing all in one course."
  },
  {
    id: 29,
    image: CourseImgNine,
    category: "DaVinci Resolve",
    lesson: 30,
    ratingAve: 4.8,
    ratingCount: 36,
    ratings: 5,
    title: "Video Editing with DaVinci Resolve",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "BGjTboXjH28",
    desc: "Edit videos professionally for YouTube and business with DaVinci tools."
  }
  // Continue similar structure for courses 11 to 29 with unique ids, images, and titles.
  // Let me know if you want me to generate the rest of the 19 courses here.
];

export default courses_data;
