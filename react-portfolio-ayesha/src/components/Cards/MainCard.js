import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SkillBox from '../Boxes/SkillBox';
import ProjectBox from '../Boxes/ProjectBox';
import ExperienceBox from '../Boxes/ExperienceBox';
function MainCard(props) {
  const {
    cardTitle,
    cardDescription,
    cardBgColor,
    roundedByBottom,
    roundedByTop,
  } = props;

  const skills = [
    {
      skillName: "Web Development",
      skillPercentage: 80,
    },
    {
      skillName: "UI/UX Design",
      skillPercentage: 95,
    },
    {
      skillName: "Database Design and Visualization",
      skillPercentage: 75,
    },
    {
      skillName: "Machine Learning and AI",
      skillPercentage: 60,
    },
    {
      skillName: "Graphic Designing",
      skillPercentage: 75,
    },
  ];
  const projects = [
    {
      projectID: 1,
      projectName: "Townary Dubios 2.0",
      projectDescription:
        "A work collaboration platform where people can join and interact with each other through work-chambers",
      projectLevel: "Industrial Level",
      projectTechnologies:
        "MERN, Redux, Knex Migrations, MongoDB/SQL/Redis, Stripe and Socket.io",
      projectContribution:
        "Created UI using Vuexy Themes. Worked on Events, Chamber, Jobs and Profile Module. Integrated Stripe Payment and Subscriptions. Created migrations and relational tables for performing CRUD operations",
    },

    {
      projectID: 2,
      projectName: "Payment Grid 1.0",
      projectDescription:
        "A payment platform like Payoneer to support all types of payment methods all around the world ",
      projectLevel: "Industrial Level",
      projectTechnologies: "MERN, RTK, FlexiBlocks",
      projectContribution:
        "Created landing pages for the project. Applied customizations in the project theme, Flexiblocks, for UI. ",
    },
    {
      projectID: 3,
      projectName: "Dr. Kamil Project",
      projectDescription:
        "Medical application that supports doctor-patient collaboration for appointment booking",
      projectLevel: "Industrial Level",
      projectTechnologies: "MERN,MongoDB/SQL/Redis, ",
      projectContribution:
        "API Integration at the backend. Training project for self-learning and testing of skills",
    },
    {
      projectID: 4,
      projectName: "SOP Violation Detection in Fenceless Areas ",
      projectDescription:
        "The proposed system based on the computer vision and deep learning techniques has eased the manual effort of realization of these SOPs,using the existing low-resolution technology of CCTV",
      projectLevel: "Team-Level",
      projectTechnologies:
        "TensorFlow, OpenCV, and YOLOv3/v4, StreamLit, Python",
      projectContribution:
        "Completed Data Pre-processing. Trained ML-Models for Face Mask Detection. Created web interface for system in StreamLit",
    },
    {
      projectID: 5,
      projectName: "Voyage Traveling Website",
      projectDescription:
        "Voyage, is a “travel-guide” website, allowing the curious tourists to the visit the notable places of Pakistan in organized way.",
      projectLevel: "Team-Level",
      projectTechnologies: "HTML, CSS 3, Jquery, Bootstrap, JS, PHP",
      projectContribution:
        "Created Dashboards for Agent and Travelers, Applied JS for dynamic content rendering",
    },
    {
      projectID: 6,
      projectName: "Pulse Rate (BPM) Monitor ",
      projectDescription:
        "Heartbeat/Pulse/BPM Rate Monitor using Arduino & Pulse Sensor",
      projectLevel: "Team Level",
      projectTechnologies: "Arduino,Pulse Sensor, LEDs,  ",
      projectContribution: "Learned Firebase Connection with Arduino for live data listing, Team Collaboration",
    },
  ];
  const companies = [
    {
      companyName: "Dark Army Studios",
      companyDuration: "2022-Present",
      companyPosition: "MERN Stack Developer",
    },
    {
      companyName: "Fiverr and Upwork",
      companyDuration: "2020-2022",
      companyPosition: "Software Designer and Database Administrator ",
    },
    {
      companyName: "Techlogix",
      companyDuration: "2019",
      companyPosition: "Web Developer Intern ",
    },
  ];
  return (
    <div
      className={`box-border max-[1100px]:w-[700px] max-[800px]:w-[500px] ${
        cardTitle === "Projects" ? "h-[820px] " : "h-[450px]"
      }  w-[384px] p-4 place-self-end rounded-${roundedByBottom} bg-${cardBgColor} shadow-lg hover:shadow-indigo-500/40 drop-shadow-2xl bg-opacity-10 rounded-${roundedByTop} pl-8 pt-8`}
    >
      <h1 className="text-white text-2xl justify-between gap-16 font-Dosis font-semibold">
        {cardTitle}
      </h1>
      <h4 className="text-white justify-between gap-16 font-Dosis text-md font-normal">
        {cardDescription}
      </h4>
      {cardTitle === "My Skills" ? (
        <>
          {skills.map((skill, i) => {
            return (
              <SkillBox
                skillName={skill.skillName}
                skillPercentage={skill.skillPercentage}
              />
            );
          })}
        </>
      ) : null}
      {cardTitle === "Projects" ? (
        <>
          {projects.map((project, i) => {
            return (
              <motion.div className="flex flex-col gap-y-4">
                <ProjectBox
                  projectID={project.projectID}
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectLevel={project.projectLevel}
                  projectTechnologies={project.projectTechnologies}
                  projectContribution={project.projectContribution}
                />
              </motion.div>
            );
          })}
        </>
      ) : null}
      {cardTitle === "Experience" ? (
        <>
        
          {companies.map((company, i) => {
            return(
               <motion.div className="flex flex-col gap-y-4">
              <ExperienceBox
                companyName={company.companyName}
                companyDuration={company.companyDuration}
                companyPosition={company.companyPosition}
              />
            </motion.div>
            )
           
          })}
        </>
      ) : null}
    </div>
  );
}

export default MainCard