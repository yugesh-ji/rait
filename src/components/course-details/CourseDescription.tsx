import Link from "next/link";
import React from "react";
import AuthorImgOne from "../../../public/assets/img/course/teacher/teacher-3.jpg";
import AuthorImgTwo from "../../../public/assets/img/course/teacher/teacher-2.jpg";
import AuthorImgThree from "../../../public/assets/img/course/teacher/teacher-1.jpg";
import Image from "next/image";

const CourseDescription = () => {
  return (
    <>
      <div className="course__description">
        <h3>Course Overview</h3>
        <p>
          This comprehensive course is designed to provide students with in-depth knowledge and hands-on experience in modern web development. Through a carefully structured curriculum, you'll master both front-end and back-end technologies, learning to build responsive, scalable, and secure web applications. Our expert-led training combines theoretical foundations with practical projects, ensuring you gain real-world skills that are in high demand in today's tech industry.
        </p>
        <p>
          Whether you're a beginner looking to start a career in web development or an experienced developer aiming to upgrade your skills, this course offers valuable insights and practical knowledge. You'll work with the latest tools and frameworks, collaborate on team projects, and build a professional portfolio that showcases your abilities to potential employers.
        </p>

        <div className="course__tag-2 mb-35 mt-35">
          <i className="fa-solid fa-tag"></i>
          <Link href="#">Web Development,</Link>
          <Link href="#">Full Stack,</Link>
          <Link href="#">MERN Stack</Link>
        </div>
        <div className="course__description-list mb-45">
          <h4>Who Should Take This Course?</h4>
          <ul>
            <li>
              <i className="icon_check"></i> Aspiring web developers looking to build a strong foundation
            </li>
            <li>
              <i className="icon_check"></i> IT professionals seeking to transition into web development
            </li>
            <li>
              <i className="icon_check"></i> Computer science students wanting practical development experience
            </li>
            <li>
              <i className="icon_check"></i> Entrepreneurs aiming to build their own web applications
            </li>
            <li>
              <i className="icon_check"></i> Freelancers looking to expand their service offerings
            </li>
          </ul>
        </div>
        {/* <div className="course__instructor mb-45">
          <h3>Other Instructors</h3>
          <div className="course__instructor-wrapper d-md-flex align-items-center">
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgOne}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Eleanor Fant</h3>
                <p>Instructor</p>
              </div>
            </div>
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgTwo}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Lauren Stamps</h3>
                <p>Teacher</p>
              </div>
            </div>
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgThree}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Jonquil Von</h3>
                <p>Associate</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CourseDescription;
