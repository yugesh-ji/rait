import React from "react";
import CourseSidebarCategory from "./CourseSidebarCategory";
import CourseSidebarLan from "./CourseSidebarLan";
import SidebarPriceFIlter from "./SidebarPriceFIlter";
import SidebarSkillLevel from "./SidebarSkillLavel";
import SidebarRelatedCourse from "./SidebarRelatedCourse";

const SidebarSearch = () => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="course__sidebar pl-70">
        <div className="course__sidebar-search mb-50">
          <form action="#">
            <input type="text" placeholder="Search for courses..." />
            <button type="submit">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 584.4 584.4"
                enableBackground="new 0 0 584.4 584.4"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      className="st0"
                      d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z"
                    />
                    <path
                      className="st1"
                      d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </form>
        </div>
        <CourseSidebarCategory />
        <CourseSidebarLan />
        <SidebarPriceFIlter />
        <SidebarSkillLevel />
        <SidebarRelatedCourse />
      </div>
    </div>
  );
};

export default SidebarSearch;
