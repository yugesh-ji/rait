import { instructorType } from "@/interFace/interFace";
import imageOne from "../../public/assets/img/teacher/teacger-1.jpg";
import imageTwo from "../../public/assets/img/teacher/teacher-2.jpg";
import imageThree from "../../public/assets/img/teacher/teacher-3.jpg";
import imageFour from "../../public/assets/img/teacher/teacher-5.jpg";
import imageFive from "../../public/assets/img/teacher/teacher-4.jpg";
import imageSix from "../../public/assets/img/teacher/teacher-6.jpg";

const instructor_data: instructorType[] = [
  {
    id: 1,
    image: imageOne,
    title: "Pawan Sir",
    category: "Principal & Founder",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://linkedin.com/", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    id: 2,
    image: imageTwo,
    title: "Yugesh Sir",
    category: "Senior IT Trainer",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://linkedin.com/", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    id: 3,
    image: imageThree,
    title: "Manoj Sir",
    category: "Programming Expert",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://linkedin.com/", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    id: 4,
    image: imageFour,
    title: "Pawan Sir",
    category: "Cloud Computing",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://linkedin.com/", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    id: 5,
    image: imageFive,
    title: "Yugesh Sir",
    category: "Web Development",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://linkedin.com/", icon: "fab fa-linkedin-in" },
    ],
  },
  {
    id: 6,
    image: imageSix,
    title: "Manoj Sir",
    category: "Data Science",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://linkedin.com/", icon: "fab fa-linkedin-in" },
    ],
  },
];

export default instructor_data;
