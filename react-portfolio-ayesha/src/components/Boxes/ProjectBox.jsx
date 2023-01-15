import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react'
import ProjectModal from '../Modals/ProjectModal';
function ProjectBox(props) {
    const{
 projectID,
 projectName,
                  projectDescription,
                  projectLevel,
                  projectTechnologies,
                  projectContribution,

    }=props
    
    const [projectModalData, setProjectModalData] = useState({
      show: false,
      data: null,
    });
    const handleOpenModal=()=>{
      setProjectModalData({
        show: true,
        data: {
          projectID:projectID,
          projectName:projectName,
          projectDescription:projectDescription,
          projectContribution:projectContribution,
          projectTechnologies:projectTechnologies,
          projectLevel:projectLevel
        },
      });
    }
    const handleCloseModal = () => {
      console.log('close clicked');
      setProjectModalData({
        show: false,
        data: null
      })
    };
  return (
    <div
      className="bg-light-yellow font-Dosis text-dark-purple p-2 w-72 h-26 rounded-lg mt-4 max-[1100px]:w-[600px] max-[1100px]:h-[100px] max-[800px]:w-[400px]"
      onClick={handleOpenModal}
    >
      <p className="font-bold text-md">{projectName}</p>
      <p className="font-normal text-sm mt-2">{projectDescription}</p>
      {projectModalData.data && projectModalData.show ? (
        <ProjectModal
          closeProjectModal={handleCloseModal}
          data={projectModalData.data}
          show={projectModalData.show}
        />
      ) : null}
    </div>
  );
}

export default ProjectBox