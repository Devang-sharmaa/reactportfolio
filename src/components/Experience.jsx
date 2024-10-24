import React from "react";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>About Me</h1>
        <p className="about-text">
          I am a B. Tech Computer Science student with certifications in several NPTEL and Coursera courses in Programming. I am proficient in Software Development and Machine Learning. Dedicated to developing impactful software. I am seeking opportunities to apply my academic knowledge in an organization to improve and enhance my skills.
        </p>

        <h1>Skills & Expertise</h1>
        <p className="skills-text">
          I am proficient in multiple programming languages, including C, C++, Python, Java, XML, HTML, CSS, JavaScript, React, Node.js and Vue.js, allowing me to create diverse software solutions. My experience with MySQL enhances my ability to manage databases efficiently, ensuring effective data storage and retrieval. I am skilled in using tools such as Android Studio, VS Code, Canva, which assist me in developing and debugging applications, creating graphics, and securing local testing environments. Additionally, my expertise in libraries and frameworks like Material UI and Sklearn enables me to design intuitive user interfaces and implement robust machine learning models. This diverse skill set allows me to handle various aspects of software development, from conceptualization to deployment, with a comprehensive and integrated approach.
        </p>

        <h1>Experience</h1>
      

        <div className="ex-items text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
          <div className="left">
          {/* <img src="/assets/company/AICTE.png" alt="All India Council for Technical Education" /> */}
          </div>
          <div className="right">
            <h2>Data Science Intern</h2>
            <h4><span style={{ color: "yellowgreen" }}>During April-June 2024</span> <span style={{ color: "yellow" }}></span></h4>
            <p className="experience-text">
            During my internship at AICTE, I developed a sophisticated image recognition model using advanced machine learning techniques. The project involved training a neural network to accurately classify and recognize images across various categories, significantly enhancing the model’s accuracy through data augmentation and fine-tuning. I also implemented techniques to optimize the model’s performance, ensuring efficient processing and deployment. This experience deepened my expertise in computer vision and deep learning, allowing me to apply theoretical knowledge to solve real-world challenges and deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
