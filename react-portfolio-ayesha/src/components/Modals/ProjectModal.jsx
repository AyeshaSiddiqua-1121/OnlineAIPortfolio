import React from 'react'
import { FaCheckDouble, FaDev, FaFileAlt, FaGg, FaGraduationCap, FaIndustry, FaProjectDiagram, FaRegWindowClose, FaRegWindowMaximize, FaThinkPeaks, FaWindowMaximize } from 'react-icons/fa/index.esm';
function ProjectModal(props) {
  const { data,closeProjectModal } = props;
  return (
    <div>
      <div className=" bg-grey bg-opacity-50 text-white w-full fixed inset-0 z-10 overflow-y-auto flex flex-col items-center justify-center ">
        <div className="bg-yellow w-4/5 flex gap-72 md:gap-32 px-2 py-2">
          <p className="text-Dosis flex text-dark-purple text-xl  font-bold">
            {data.projectName}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeProjectModal();
            }}
          >
            <FaRegWindowClose size={25} />
          </button>
        </div>
        <div className="bg-white w-4/5 flex flex-col px-2 py-2">
          <p className="text-Dosis flex gap-4 text-dark-purple text-md font-bold">
            Project Details:
          </p>
          <p className="text-Dosis mt-4 ml-2 flex gap-2 text-dark-purple text-md font-normal">
            Description: {data.projectDescription}
          </p>
          <span class="mt-2 w-full p-[0.5px] bg-yellow lg:w-64"></span>

          <p className="text-Dosis mt-4 ml-4 flex gap-2 text-dark-purple text-md font-normal">
            Level: {data.projectLevel}
          </p>
          <span class="mt-2 w-full p-[0.5px] bg-yellow lg:w-64"></span>
          <p className="text-Dosis mt-4 ml-4 flex gap-2 text-dark-purple text-md font-normal">
            Technologies: {data.projectTechnologies}
          </p>
          <span class="mt-2 w-full p-[0.5px] bg-yellow lg:w-64"></span>
          <p className="text-Dosis mt-4 ml-4 flex gap-4 text-dark-purple text-md font-normal">
            Contributions: {data.projectContribution}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal