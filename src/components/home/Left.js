import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsCalendarRange   } from "react-icons/bs";
import {  FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/FULL_STACK_DEVELOPER.pdf";
import CL from "../../assets/Full_stack_developer_Cover_Letter.pdf";

import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "Mean/Mern Stack Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
<div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
  <div className="w-full h-1/3 flex items-center justify-center mt-12 sm:mt-8 xs:mt-8">
  <img
    className="max-w-xs sm:max-w-[34%] xs:max-w-[34%] h-auto max-h-full object-cover rounded-2xl sm:rounded-full xs:rounded-full"
    src={bannerImg}
    loading="priority"
    alt="bannerImage"
  />
  </div>







 <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
    <div className="flex flex-col items-center gap-2 py-10">
      <h1 className="text-textColor text-4xl font-semibold">Mobeen Sheikh</h1>
      <p className="text-base text-designColor tracking-wide">
        {text}
        <Cursor cursorBlinking="false" cursorStyle="|" />
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
          <a href="https://www.linkedin.com/in/mobeen-sheikh/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </span>
      
        <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
       
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"><FiMail /></a>
        </span>
      </div>
    </div>
    <div className="flex h-14">
      <a
        href={CV}
        target="_blank"
        className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
        rel="noreferrer"
      >
        <button className="w-full h-full flex justify-center items-center gap-2">
          Download CV <BsCloudLightningFill />
        </button>
      </a>
      <a
        href={CL}
        target="_blank"
        className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
        rel="noreferrer"
      >
        <button className="w-full h-full flex justify-center items-center gap-2">
          Cover Letter< BsCalendarRange  />
        </button>
      </a>
      {/* <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
        Contact me <FiSend />
      </button> */}
    </div>
  </div> 
</div>

  );
};

export default Left;
