import Link from "next/link";
import React from "react";
import CommentImg from "../../../public/assets/img/course/comment/course-comment-1.jpg";
import CommentImgTwo from "../../../public/assets/img/course/comment/course-comment-2.jpg";
import Image from "next/image";

const CourseComment = () => {
  return (
    <ul>
      {/* Review 1 */}
      <li>
        <div className="course__comment-box">
          <div className="course__comment-thumb float-start">
            <Image
              src={CommentImg}
              style={{ width: "100%", height: "auto" }}
              alt="student profile"
            />
          </div>
          <div className="course__comment-content">
            <div className="course__comment-wrapper ml-70 fix">
              <div className="course__comment-info float-start">
                <h4>Rohan Jain</h4>
                <span>March 15, 2025 • Web Development Course</span>
              </div>
              <div className="course__comment-rating float-start float-sm-end">
                <ul>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="course__comment-text ml-70">
              <p>
                "Sir's teaching style is very good, I was zero in coding but now I can make websites! The way they explain each concept with real-life examples is superb. Only thing is sometimes internet speed was slow, but overall best experience. 5 stars from my side!"
              </p>
            </div>
          </div>
        </div>
      </li>

      {/* Review 2 */}
      <li>
        <div className="course__comment-box">
          <div className="course__comment-thumb float-start">
            <Image
              src={CommentImgTwo}
              style={{ width: "100%", height: "auto" }}
              alt="student profile"
            />
          </div>
          <div className="course__comment-content">
            <div className="course__comment-wrapper ml-70 fix">
              <div className="course__comment-info float-start">
                <h4>Aisha Khan</h4>
                <span>April 02, 2025 • Data Science Course</span>
              </div>
              <div className="course__comment-rating float-start float-sm-end">
                <ul>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="course__comment-text ml-70">
              <p>
                "Maine pehle data science ka koi experience nahi tha, but yahan ke teachers ne itna achha samjhaya ke ab main confidently projects bana leti hoon. Practical knowledge ke liye bahut acha hai. Just ek suggestion - thoda aur practice material milta to aur acha hota."
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CourseComment;
