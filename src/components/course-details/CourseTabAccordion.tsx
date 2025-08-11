import AccordionIconFour from "@/svg/accordion-icon-four";
import AccordionIconThree from "@/svg/accordion-icon-three";
import AccordionIconTwo from "@/svg/accordion-icon-two";
import AccordionIconOne from "@/svg/accordior-icon-one";
import React from "react";
import { curriculumModuleType } from "@/interFace/interFace";

interface CourseTabAccordionProps {
  curriculum?: curriculumModuleType[];
}

const CourseTabAccordion = ({ curriculum }: CourseTabAccordionProps) => {
  // Fallback to default curriculum if none provided
  const modules = curriculum || [
    {
      moduleId: 1,
      title: "Module 1: Web Development Fundamentals",
      contents: [
        {
          type: "Reading",
          title: "Introduction to Web Technologies",
          duration: "30 minutes",
          additionalInfo: "2 questions"
        },
        {
          type: "Video",
          title: "HTML5 & CSS3 Fundamentals",
          duration: "1 hour"
        },
        {
          type: "Workshop",
          title: "Building Responsive Layouts",
          duration: "2 hours",
          additionalInfo: "Practice Exercise"
        },
        {
          type: "Project",
          title: "Personal Portfolio Website",
          duration: "3 hours"
        }
      ]
    },
    {
      moduleId: 2,
      title: "Module 2: JavaScript & DOM Manipulation",
      contents: [
        {
          type: "Video",
          title: "JavaScript Fundamentals",
          duration: "45 minutes"
        },
        {
          type: "Tutorial",
          title: "DOM Manipulation",
          duration: "1.5 hours"
        },
        {
          type: "Workshop",
          title: "Building Interactive Web Elements",
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
  ];

  return (
    <div className="course__curriculum">
      {modules.map((module, index) => (
        <div className="accordion" id={`course__accordion-${index}`} key={module.moduleId}>
          <div className="accordion-item mb-50">
            <h2 className="accordion-header" id={`module-${module.moduleId}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#module-${module.moduleId}-content`}
                aria-expanded="true"
                aria-controls={`module-${module.moduleId}-content`}
              >
                {module.title}
              </button>
            </h2>
            <div
              id={`module-${module.moduleId}-content`}
              className="accordion-collapse collapse show"
              aria-labelledby={`module-${module.moduleId}`}
              data-bs-parent={`#course__accordion-${index}`}
            >
              <div className="accordion-body">
                {module.contents.map((content, contentIndex) => (
                  <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center" key={contentIndex}>
                    <div className="course__curriculum-info">
                      {content.type === "Reading" && <AccordionIconOne />}
                      {content.type === "Video" && <AccordionIconTwo />}
                      {content.type === "Workshop" && <AccordionIconThree />}
                      {content.type === "Project" && <AccordionIconFour />}
                      {content.type === "Tutorial" && <AccordionIconTwo />}
                      <h3>
                        <span>{content.type}:</span> {content.title}
                      </h3>
                    </div>
                    <div className="course__curriculum-meta">
                      <span className="time">
                        <i className="icon_clock_alt"></i> {content.duration}
                      </span>
                      {content.additionalInfo && (
                        <span className="question">{content.additionalInfo}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTabAccordion;