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
    desc: "Learn how to create stunning and responsive websites using HTML and CSS from scratch.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: HTML Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Introduction to HTML",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "HTML Structure and Tags",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Creating Basic Web Pages",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Personal Web Page Creation",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: CSS Styling and Layout",
        contents: [
          {
            type: "Video",
            title: "CSS Selectors and Properties",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Box Model and Positioning",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Advanced CSS Techniques",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Styling a Complete Website",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Create dynamic and interactive web pages with JavaScript at Rashm Academy.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: JavaScript Basics",
        contents: [
          {
            type: "Reading",
            title: "JavaScript Introduction",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Variables and Data Types",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Functions and Control Flow",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Interactive Calculator",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: DOM Manipulation",
        contents: [
          {
            type: "Video",
            title: "DOM Selection and Modification",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Event Handling",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Form Validation with JavaScript",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Dynamic Web Application",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Step-by-step learning of Python from basics to small projects, suitable for all students.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Python Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Python Introduction and Setup",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Variables and Data Types in Python",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Control Structures",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Number Guessing Game",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Functions and Data Structures",
        contents: [
          {
            type: "Video",
            title: "Functions and Modules",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Lists, Tuples and Dictionaries",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "File Handling",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Student Record Management System",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Get a solid foundation in logic and programming concepts using C language.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: C Programming Basics",
        contents: [
          {
            type: "Reading",
            title: "Introduction to C Programming",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Data Types and Variables",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Input/Output Operations",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Simple Calculator in C",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Control Structures",
        contents: [
          {
            type: "Video",
            title: "Loops and Conditional Statements",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Functions in C",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Arrays and Strings",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Student Database Management",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Master object-oriented programming with real examples using C++.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: C++ Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "C++ vs C Programming",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "C++ Syntax and Basic Concepts",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Pointers and Memory Management",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Bank Account System",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Object Oriented Programming",
        contents: [
          {
            type: "Video",
            title: "Classes and Objects",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Inheritance and Polymorphism",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Exception Handling",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Library Management System",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Understand the core concepts of Java and start building applications with confidence.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Java Basics",
        contents: [
          {
            type: "Reading",
            title: "Java Platform and Setup",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Java Syntax and Data Types",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Control Flow and Arrays",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Simple Java Applications",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Object Oriented Concepts",
        contents: [
          {
            type: "Video",
            title: "Classes, Objects and Methods",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Inheritance and Interfaces",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Collections Framework",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Employee Management System",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Automate Excel with Visual Basic for Applications (VBA) easily.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Excel VBA Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Introduction to VBA",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Recording and Running Macros",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "VBA Editor and Basic Syntax",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Automated Data Entry Form",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Advanced VBA Programming",
        contents: [
          {
            type: "Video",
            title: "Variables and Data Types in VBA",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Loops and Conditional Statements",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Working with Excel Objects",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Financial Report Generator",
            duration: "4 hours"
          }
        ]
      }
    ]
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
    desc: "Design and layout documents like certificates, books, and flyers with PageMaker.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: PageMaker Basics",
        contents: [
          {
            type: "Reading",
            title: "Introduction to Desktop Publishing",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "PageMaker Interface and Tools",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Creating and Formatting Text",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Business Card Design",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Advanced Layout Techniques",
        contents: [
          {
            type: "Video",
            title: "Working with Graphics and Images",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Color Management and Typography",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Master Pages and Templates",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Certificate and Brochure Design",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 19,
    image: CourseImgTwo,
    category: "Accounting",
    lesson: 20,
    ratingAve: 4.7,
    ratingCount: 26,
    ratings: 5,
    title: "Tally with GST",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "a-CEyHSNrx0",
    desc: "Accounting software training with Goods and Services Tax implementation.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Tally Basics",
        contents: [
          {
            type: "Reading",
            title: "Introduction to Tally ERP 9",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Company Creation and Basic Accounting",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Vouchers and Ledgers",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Basic Accounting Entries",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: GST Implementation",
        contents: [
          {
            type: "Video",
            title: "GST Concepts and Taxation",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "GST Compliance in Tally",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "GST Reports and Filing",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "GST Enabled Business Accounts",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 20,
    image: CourseImgOne,
    category: "Computer Course",
    lesson: 40,
    ratingAve: 4.8,
    ratingCount: 35,
    ratings: 5,
    title: "DCA & ADCA",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "w0eeQ0Tgk7E",
    desc: "Diploma in Computer Applications & Advanced Diploma in Computer Applications - Basic to advanced computer skills course.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Computer Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Introduction to Computers",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Hardware and Software Concepts",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Operating System Basics",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "System Setup and Configuration",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Office Automation",
        contents: [
          {
            type: "Video",
            title: "MS Office Suite Overview",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Advanced Word Processing",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Spreadsheet and Presentation Skills",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Business Document Creation",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  // {
  //   id: 22,
  //   image: CourseImgThree,
  //   category: "Accounting",
  //   lesson: 45,
  //   ratingAve: 4.9,
  //   ratingCount: 42,
  //   ratings: 5,
  //   title: "Tally with GST",
  //   tutorImg: TeacherImg,
  //   author: "Yugesh Sir",
  //   price: 0,
  //   oldPrice: 0,
  //   quantity: 0,
  //   videoUrl: "NDa3AGPobS4",
  //   desc: "Accounting software training with Goods and Services Tax implementation."
  // },
  {
    id: 23,
    image: CourseImgThree,
    category: "Design",
    lesson: 60,
    ratingAve: 4.8,
    ratingCount: 50,
    ratings: 5,
    title: "Graphic Design",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "BGjTboXjH28",
    desc: "Learn graphic design using industry-standard tools like Photoshop, Illustrator.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Design Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Principles of Graphic Design",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Color Theory and Typography",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Layout and Composition",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Logo Design Project",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Adobe Creative Suite",
        contents: [
          {
            type: "Video",
            title: "Photoshop Essentials",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Illustrator Basics",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Advanced Design Techniques",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Complete Branding Package",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 24,
    image: CourseImgFour,
    category: "Web Development",
    lesson: 80,
    ratingAve: 4.9,
    ratingCount: 55,
    ratings: 5,
    title: "Web Development",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "a-CEyHSNrx0",
    desc: "Complete web development course covering HTML, CSS, JavaScript, and more.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Frontend Development",
        contents: [
          {
            type: "Reading",
            title: "Web Development Overview",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "HTML5 and CSS3 Advanced",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "JavaScript Frameworks",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Responsive Website Creation",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Backend Development",
        contents: [
          {
            type: "Video",
            title: "Server-side Programming",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Database Integration",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "API Development",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Full Stack Web Application",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 25,
    image: CourseImgFive,
    category: "Programming",
    lesson: 40,
    ratingAve: 4.7,
    ratingCount: 38,
    ratings: 5,
    title: "Full Stack Development",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "ChAWdmplhwY",
    desc: "Become a full stack developer mastering both frontend and backend technologies.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Frontend Technologies",
        contents: [
          {
            type: "Reading",
            title: "Frontend Development Fundamentals",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "React and Component Architecture",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "State Management and Routing",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Interactive UI Components",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Backend and Database",
        contents: [
          {
            type: "Video",
            title: "Node.js and Express Framework",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "MongoDB and Database Design",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Authentication and Security",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Complete Full Stack Application",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 26,
    image: CourseImgSix,
    category: "Marketing",
    lesson: 30,
    ratingAve: 4.6,
    ratingCount: 25,
    ratings: 5,
    title: "Digital Marketing",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "hh7V878lAIY",
    desc: "Master online marketing strategies including SEO, social media, and advertising.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Digital Marketing Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Introduction to Digital Marketing",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "SEO and Content Marketing",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Social Media Strategy",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "SEO Audit and Optimization",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Advanced Marketing Techniques",
        contents: [
          {
            type: "Video",
            title: "Google Ads and Analytics",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Email Marketing Campaigns",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Marketing Automation",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Complete Digital Marketing Campaign",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 27,
    image: CourseImgNine,
    category: "Design",
    lesson: 35,
    ratingAve: 4.8,
    ratingCount: 30,
    ratings: 5,
    title: "DFA",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "lvYM9tHRz0M",
    desc: "Diploma in Fine Arts - Traditional and digital art techniques.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Traditional Art Techniques",
        contents: [
          {
            type: "Reading",
            title: "Introduction to Fine Arts",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Drawing and Sketching Fundamentals",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Painting Techniques",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Portrait Drawing",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Digital Art",
        contents: [
          {
            type: "Video",
            title: "Digital Painting Tools",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Vector Art and Illustration",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "3D Design Basics",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Digital Art Portfolio",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 28,
    image: CourseImgNine,
    category: "Design",
    lesson: 40,
    ratingAve: 4.7,
    ratingCount: 35,
    ratings: 5,
    title: "ADFA",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "Egy-jJUNJ3A",
    desc: "Advanced Diploma in Fine Arts - Advanced design principles and techniques.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Advanced Design Principles",
        contents: [
          {
            type: "Reading",
            title: "Advanced Design Theory",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Advanced Color and Composition",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Design Psychology",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Conceptual Art Project",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Professional Design Practice",
        contents: [
          {
            type: "Video",
            title: "Design for Commercial Applications",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Client Interaction and Presentation",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Portfolio Development",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Professional Design Campaign",
            duration: "4 hours"
          }
        ]
      }
    ]
  },
  {
    id: 29,
    image: CourseImgNine,
    category: "Computer Course",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 40,
    ratings: 5,
    title: "DFA ADFA",
    tutorImg: TeacherImg,
    author: "Yugesh Sir",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    videoUrl: "NDa3AGPobS4",
    desc: "Complete computer course covering basic to advanced computer applications.",
    curriculum: [
      {
        moduleId: 1,
        title: "Module 1: Computer Applications Fundamentals",
        contents: [
          {
            type: "Reading",
            title: "Computer Applications Overview",
            duration: "30 minutes",
            additionalInfo: "2 questions"
          },
          {
            type: "Video",
            title: "Advanced MS Office Suite",
            duration: "1 hour"
          },
          {
            type: "Workshop",
            title: "Data Analysis and Presentation",
            duration: "2 hours",
            additionalInfo: "Practice Exercise"
          },
          {
            type: "Project",
            title: "Business Report Creation",
            duration: "3 hours"
          }
        ]
      },
      {
        moduleId: 2,
        title: "Module 2: Specialized Software Skills",
        contents: [
          {
            type: "Video",
            title: "Specialized Design Software",
            duration: "45 minutes"
          },
          {
            type: "Tutorial",
            title: "Multimedia Applications",
            duration: "1.5 hours"
          },
          {
            type: "Workshop",
            title: "Project Management Tools",
            duration: "2 hours",
            additionalInfo: "Code Challenge"
          },
          {
            type: "Project",
            title: "Integrated Business Solution",
            duration: "4 hours"
          }
        ]
      }
    ]
  }
  // Continue similar structure for courses 11 to 29 with unique ids, images, and titles.
  // Let me know if you want me to generate the rest of the 19 courses here.
];

export default courses_data;
