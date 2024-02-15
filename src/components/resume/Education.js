import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import ExperienceCard from "./ExperienceCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />


        <ExperienceCard
        badge="Oct 2023 - Jan 2024"
        title="Full Stack Developer"
        subTitle="Haqana Corporate Sector Est."
        des={[
          "Full Stack Developer with expertise in Node.js and microservices architecture",
          "Proficient in deploying applications on AWS Lambda",
          "Developing dynamic and responsive frontends using React.js"
          ]}
        />
       
        <ExperienceCard
        badge="July 2022 - Aug 2023"
        title="Full Stack Developer | Mern Stack Developer"
        subTitle="Troon Technologies, Canada"
        des={[
          "Working as a MERN developer at position with technologies Node js , React js , Express JS and Web3.0. FLow and NEAR blockchain integrate in application to get data and send transaction to the blockchain. Use Redux saga, Redux thunk and context api's for state management in applications.",
          " Use Node mailer and twillo for sending mail and SMS. Use Pinata, Cloudinary cloud storage in application. Use Multer for local storge in application",
          "Use JWT and Passport(JWT) authentication. Use Cookies sesion for store session of user in application. Use Postman for test Api's. Create and Use swagger for test Api's"
        ]}
        />
       <ExperienceCard
        badge="May 2021 - June 2022"
        title="Full Stack Developer"
        subTitle="NCRI Inc. Canada "
        des={[
          "As a Full Stack Developer. My expertise included AngularJS for the frontend and Python Django, along with Django Rest Framework, for the backend and MYSQL for the database management.",
          "Implemented secure user authentication using JWT and Passport (JWT).",
          "Utilizing FTP and SFTP for cloud file management, and imposing Amazon S3 bucket for efficient storage.",

          ]}
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ExperienceCard
          badge="2016 - 2021"
          title="International Islamic University"
          subTitle="Islamabad"
          des={["  the subjects typically studied in a Bachelor of Science in Computer Science program may include:", 

          "Programming Fundamentals", 
          "Data Structures and Algorithms", 
          "Computer Architecture", 
          "Operating Systems",  
          "Database Management Systems", 
          "Software Engineering", 
          "Object-Oriented Programming",
          "Web Development", 
          "Networking and Communication", 
          "Artificial Intelligence", 
          "Machine Learning", 
          "Mobile Application Development", 
          "Human-Computer Interaction",]}
          
          
    
        />
       
      </div>
    </div>
  );
};

export default Education;
