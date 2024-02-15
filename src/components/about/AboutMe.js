import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <p className="text-base leading-6 ">
            As a skilled software engineer, I have experience in Full Stack
            Development | Mean/Mern Stack development for over two years. Strong
            in design and integration problem-solving skills. Developing
            business plans, requirements specifications, user documentation, and
            architectural systems research. Interested in a challenging technical
            track career in an application development environment.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          {/* <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            28
          </li> */}
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Deira
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Remotely : On-site</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Dubai, UAE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
