import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data, index) => (
            <div
              className="item"
              key={data.id}
              data-aos="fade-up-right"
              data-aos-duration={500}
              data-aos-delay={index * 50} // Stagger animation delay for each item
            >
              <img src={data.imageSrc} alt={data.title} />
              <h3>{data.title}</h3>

              {/* Progress bar container */}
             

              {/* <p>{data.percentage}% Proficiency</p> Display the percentage */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
