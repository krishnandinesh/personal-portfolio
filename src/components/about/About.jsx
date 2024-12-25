import React from "react";
import "./about.css";

import ME from "../../assets/me.jpg";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 Years of Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am an aspiring Front-End Developer with experience in Technical
            Writing, Project Management, and as a Junior Designer. While my
            background has primarily been in Writing and Project Management, I
            have worked with Designers to improve UI/UX and collaborate on web
            projects. I am eager to develop my skills in Front-End Development,
            learn new technologies, and contribute to building functional user
            interfaces. My experience has strengthened my ability to communicate
            complex concepts clearly and work effectively with cross-functional
            teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
