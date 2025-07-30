import AccordionIconFour from "@/svg/accordion-icon-four";
import AccordionIconThree from "@/svg/accordion-icon-three";
import AccordionIconTwo from "@/svg/accordion-icon-two";
import AccordionIconOne from "@/svg/accordior-icon-one";
import React from "react";
// ... (previous imports remain the same)

const CourseTabAccordion = () => {
  return (
    <div className="course__curriculum">
      {/* Module 1: Web Development Fundamentals */}
      <div className="accordion" id="course__accordion">
        <div className="accordion-item mb-50">
          <h2 className="accordion-header" id="module-01">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#module-01-content"
              aria-expanded="true"
              aria-controls="module-01-content"
            >
              Module 1: Web Development Fundamentals
            </button>
          </h2>
          <div
            id="module-01-content"
            className="accordion-collapse collapse show"
            aria-labelledby="module-01"
            data-bs-parent="#course__accordion"
          >
            <div className="accordion-body">
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconOne />
                  <h3>
                    <span>Reading:</span> Introduction to Web Technologies
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 30 minutes
                  </span>
                  <span className="question">2 questions</span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconTwo />
                  <h3>
                    <span>Video: </span> HTML5 & CSS3 Fundamentals
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 1 hour
                  </span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconThree />
                  <h3>
                    <span>Workshop:</span> Building Responsive Layouts
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 2 hours
                  </span>
                  <span className="question">Practice Exercise</span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconFour />
                  <h3>
                    <span>Project: </span> Personal Portfolio Website
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 3 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 2: JavaScript & DOM Manipulation */}
      <div className="accordion" id="course__accordion-2">
        <div className="accordion-item mb-50">
          <h2 className="accordion-header" id="module-02">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#module-02-content"
              aria-expanded="true"
              aria-controls="module-02-content"
            >
              Module 2: JavaScript & DOM Manipulation
            </button>
          </h2>
          <div
            id="module-02-content"
            className="accordion-collapse collapse show"
            aria-labelledby="module-02"
            data-bs-parent="#course__accordion-2"
          >
            <div className="accordion-body">
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconOne />
                  <h3>
                    <span>Video:</span> JavaScript Fundamentals
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 45 minutes
                  </span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconTwo />
                  <h3>
                    <span>Tutorial: </span> DOM Manipulation
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 1.5 hours
                  </span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconThree />
                  <h3>
                    <span>Workshop:</span> Building Interactive Web Elements
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 2 hours
                  </span>
                  <span className="question">Code Challenge</span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconFour />
                  <h3>
                    <span>Project: </span> Dynamic Web Application
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    <i className="icon_clock_alt"></i> 4 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTabAccordion;