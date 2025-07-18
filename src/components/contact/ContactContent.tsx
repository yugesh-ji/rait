import Image from "next/image";
import Link from "next/link";
import React from "react";
import shape1 from "../../../public/assets/img/contact/contact-shape-5.png";
import shape2 from "../../../public/assets/img/contact/contact-shape-4.png";

const ContactContent = () => {
  return (
    <section className="contact__area grey-bg-2 pt-120 pb-90 p-relative fix">
      <div className="contact__shape">
        <Image
          className="contact-shape-5"
          src={shape1}
          style={{ width: "auto", height: "auto" }}
          alt="img not found"
        />
        <Image
          className="contact-shape-4"
          src={shape2}
          style={{ width: "auto", height: "auto" }}
          alt="img not found"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6">
            <div className="contact__item text-center mb-30 transition-3 white-bg">
              <div className="contact__icon d-flex justify-content-center align-items-end">
                <svg viewBox="0 0 24 24">
                  <circle className="st0" cx="12" cy="12" r="10" />
                  <path className="st0" d="M8,14c0,0,1.5,2,4,2s4-2,4-2" />
                  <line className="st0" x1="9" y1="9" x2="9" y2="9" />
                  <line className="st0" x1="15" y1="9" x2="15" y2="9" />
                </svg>
              </div>
              <div className="contact__content">
                <h3 className="contact__title">Student Helpdesk</h3>
                <p>
                  Notes, syllabus ya kisi bhi query ke liye aap hamari knowledge base ka use kar sakte hain.
                </p>
                <Link href="/support-docs" className="e-btn e-btn-border">
                  Visit Knowledge Base
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
            <div className="contact__item text-center mb-30 transition-3 white-bg">
              <div className="contact__icon d-flex justify-content-center align-items-end">
                <svg viewBox="0 0 24 24">
                  <path
                    className="st0"
                    d="M21,10.8c0,1.3-0.3,2.6-0.9,3.8c-1.4,2.9-4.4,4.7-7.6,4.7c-1.3,0-2.6-0.3-3.8-0.9L3,20.3l1.9-5.7  C4.3,13.4,4,12.1,4,10.8c0-3.2,1.8-6.2,4.7-7.6c1.2-0.6,2.5-0.9,3.8-0.9H13c4.3,0.2,7.8,3.7,8,8V10.8z"
                  />
                  <g>
                    <circle className="st1" cx="9.3" cy="10.5" r="0.5" />
                    <circle className="st1" cx="12.5" cy="10.5" r="0.5" />
                    <circle className="st1" cx="15.7" cy="10.5" r="0.5" />
                  </g>
                </svg>
              </div>
              <div className="contact__content">
                <h3 className="contact__title">Get in Touch</h3>
                <p>
                  Admission, course details ya job support se judi queries ke liye humse direct baat karein.
                </p>
                <Link href="/contact" className="e-btn e-btn-border">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
