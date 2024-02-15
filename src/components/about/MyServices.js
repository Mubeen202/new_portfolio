import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { FaReact, FaAngular, FaNodeJs, FaLinux, FaDatabase } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<FaReact />}
        title="ReactJS"
        subTitle="Adequate Understanding about Class/Functional Components, Context Api, State Management(Redux Thunk/Saga/Toolkit), Props, Hook, Routing, Error Boundaries."
      />
      <ServicesCard
        icons={<FaAngular />}
        title="Angular"
        subTitle="Knowledge about Components, Directives, Services, Modules, Templates, Data Binding, Dependency Injection, Routing, HTTP Client, Forms, Testing."
      />
      <ServicesCard
        icons={<FaNodeJs />}
        title="NodeJS"
        subTitle="Achieve following tasks with using ExpressJS Passport JWT(Auth) & Session, AUth0, Node-mailer and Twillo, Multer, Coudinary, AWS S3 Bucket, Pinata, FTP, SFTP using for cloud, Payment Integrations(Stripe, Paypal), File Streaming, Web Sockets, Integration with WEB3.0 (NEAR/FLOW)"
      />
      <ServicesCard
        icons={<SiDjango />}
        title="Python Django"
        subTitle="In Django i have work on Model-View-Template (MVT) Architecture, ORM (Object-Relational Mapping), ORM (Object-Relational Mapping), Django Rest Framework, Passport JWT ( Authentication), Middlewares, FTP, SFTP and AWS S3 Bucket for media, Integration with SQL and NoSQl(MySQL, MongoDB) "
      />

      <ServicesCard
        icons={<FaDatabase />}
        title="Database"
        subTitle="I have worked on both SQL and noSQL(MySQL and MongoDB) work on Data Model, Query Language, Schema, Scaling, Transactions, Data Integrity and Community & Echo System"

      />

      <ServicesCard
        icons={<FaLinux/>}
        title="Linux Server"
        subTitle="Configured and managed Linux-based servers (Ubuntu, CentOS) for hosting Django projects, including setting up web servers ( Nginx), database servers ( MySQL), and deploying Django applications using tools like Gunicorn or uWSGI. "
      />
    </div>
  );
};

export default MyServices;
