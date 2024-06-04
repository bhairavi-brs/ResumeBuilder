import React, { useState } from "react";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { PreviewForm } from "../PreviewForm/PreviewForm";
import mainPicture from '../assets/mainPicture.jpg'

import "./Details.css"; 

export const Details = () => {
  const location = useLocation();
  const { state } = location;
  const { register, handleSubmit } = useForm();
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [workExperiences, setWorkExperiences] = useState([{ id: 0 }]);
  const [projects, setProjects] = useState([{ id: 0 }]);
  const [additionalDetails, setAdditionalDetails] = useState([{ id: 0 }]);

  const handleAddWorkExperience = () => {
    const newWorkExperiences = [
      ...workExperiences,
      { id: workExperiences.length },
    ];
    setWorkExperiences(newWorkExperiences);
  };

  const handleAddProject = () => {
    const newProjects = [...projects, { id: projects.length }];
    setProjects(newProjects);
  };

  const handleAddAdditionalDetail = () => {
    const newAdditionalDetails = [
      ...additionalDetails,
      { id: additionalDetails.length },
    ];
    setAdditionalDetails(newAdditionalDetails);
  };

  const onSubmit = (data) => {
    if (data?.technicalSkills) {
      data.technicalSkills = data?.technicalSkills.split(",");
    }

    setOpenPreviewModal(true);
    setUserDetails({ ...state.formData, ...data });
  };

  return (
    <div className="mainContainerDetails">
      <div className="formContainerDetails">
        <form className="formDetailss" onSubmit={handleSubmit(onSubmit)}>
          <div className="formHeadingDetails">
            <h2 style={{ color: "#125832" }}>Details</h2>
          </div>

          {/* Technical Skills Section */}
          <section className="technicalSkillsSection">
            <div className="sectionHeading">
              <p style={{ color: "#125832", textAlign: "start" }}>
                Technical Skills*
              </p>
            </div>
            <div className="deleteIconContainer"></div>
            <div className="formGroup">
              <input
                className="input"
                type="text"
                id={`technicalSkill`}
                name={`technicalSkill`}
                placeholder="Enter technical skill"
                {...register(`technicalSkills`)}
                required
              />
            </div>
          </section>

          <section className="workExperienceSection">
            <div className="sectionHeading">
              <PlusCircleOutlined
                className="icon"
                onClick={handleAddWorkExperience}
              />
              <p style={{ color: "#125832", textAlign: "start" }}>
                Work Experiences
              </p>
            </div>
            {workExperiences.map((exp, index) => (
              <div className="sectionDivision" key={index}>
                <div className="deleteIconContainer">
                  <DeleteOutlined
                    className="icon"
                    onClick={() => {
                      const updatedWorkExperiences = workExperiences.filter(
                        (_, i) => i !== index
                      );
                      setWorkExperiences(updatedWorkExperiences);
                    }}
                  />
                </div>
                <div className="formGroupHalf">
                  <div className="formGroup" style={{ width: "48%" }}>
                    <label className="label" htmlFor={`companyName${index}`}>
                      Company Name:
                    </label>
                    <input
                      className="input"
                      type="text"
                      id={`companyName${index}`}
                      name={`companyName${index}`}
                      placeholder="Company Name"
                      {...register(`workExperiences[${index}].companyName`)}
                    />
                  </div>
                  <div className="formGroup" style={{ width: "48%" }}>
                    <label className="label" htmlFor={`designation${index}`}>
                      Designation:
                    </label>
                    <input
                      className="input"
                      type="text"
                      id={`designation${index}`}
                      name={`designation${index}`}
                      placeholder="Designation"
                      {...register(`workExperiences[${index}].designation`)}
                    />
                  </div>
                </div>
                <div className="formGroupHalf">
                  <div className="formGroup" style={{ width: "48%" }}>
                    <label className="label" htmlFor={`startDate${index}`}>
                      Start Date:
                    </label>
                    <input
                      className="input"
                      type="date"
                      id={`startDate${index}`}
                      name={`startDate${index}`}
                      {...register(`workExperiences[${index}].startDate`)}  
                    />
                  </div>
                  <div className="formGroup" style={{ width: "48%" }}>
                    <label className="label" htmlFor={`endDate${index}`}>
                      End Date:
                    </label>
                    <input
                      className="input"
                      type="date"
                      id={`endDate${index}`}
                      name={`endDate${index}`}
                      {...register(`workExperiences[${index}].endDate`)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="projectDetailsSection">
            <div className="sectionHeading">
              <PlusCircleOutlined className="icon" onClick={handleAddProject} />
              <p style={{ color: "#125832", textAlign: "start" }}>
                Project Details
              </p>
            </div>
            {projects.map((project, index) => (
              <div className="sectionDivision" key={index}>
                <div className="deleteIconContainer">
                  <DeleteOutlined
                    className="icon"
                    onClick={() => {
                      const updatedProject = projects.filter(
                        (_, i) => i !== index
                      );
                      setProjects(updatedProject);
                    }}
                  />
                </div>
                <div className="formGroupHalf">
                  <div className="formGroup" style={{ width: "48%" }}>
                    <label className="label" htmlFor={`projectName${index}`}>
                      Project Name:
                    </label>
                    <input
                      className="input"
                      type="text"
                      id={`projectName${index}`}
                      name={`projectName${index}`}
                      placeholder="Project Name"
                      {...register(`projects[${index}].projectName`)}
                    />
                  </div>
                  <div className="formGroup" style={{ width: "48%" }}>
                    <label className="label" htmlFor={`role${index}`}>
                      Role:
                    </label>
                    <input
                      className="input"
                      type="text"
                      id={`role${index}`}
                      name={`role${index}`}
                      placeholder="Role"
                      {...register(`projects[${index}].role`)}
                    />
                  </div>
                </div>
                <div className="formGroup">
                  <label className="label" htmlFor={`numberOfMembers${index}`}>
                    Number of Members:
                  </label>
                  <input
                    className="input"
                    type="number"
                    id={`numberOfMembers${index}`}
                    name={`numberOfMembers${index}`}
                    placeholder="Number of Members"
                    {...register(`projects[${index}].numberOfMembers`)}
                  />
                </div>
                <div className="formGroup">
                  <label className="label" htmlFor={`technologyUsed${index}`}>
                    Technology Used:
                  </label>
                  <input
                    className="input"
                    type="text"
                    id={`technologyUsed${index}`}
                    name={`technologyUsed${index}`}
                    placeholder="Technology Used"
                    {...register(`projects[${index}].technologyUsed`)}
                  />
                </div>
                <div className="formGroup">
                  <label className="label" htmlFor={`projectDetail${index}`}>
                    Project Detail:
                  </label>
                  <textarea
                    className="input"
                    id={`projectDetail${index}`}
                    name={`projectDetail${index}`}
                    rows="4"
                    placeholder="Project Detail"
                    {...register(`projects[${index}].projectDetail`)}
                  ></textarea>
                </div>
              </div>
            ))}
          </section>

          {/* Additional Details */}
          <section className="additionalDetailsSection">
            <div className="sectionHeading">
              <PlusCircleOutlined
                className="icon"
                onClick={handleAddAdditionalDetail}
              />
              <p style={{ color: "#125832", textAlign: "start" }}>
                Additional Details
              </p>
            </div>
            {additionalDetails.map((detail, index) => (
              <div key={index}>
                <div className="formGroup">
                  <label className="label" htmlFor={`additionalDetail${index}`}>
                    Detail:
                  </label>
                  <textarea
                    className="input"
                    id={`additionalDetail${index}`}
                    name={`additionalDetail${index}`}
                    rows="4"
                    placeholder="Additional Detail"
                    {...register(`additionalDetails[${index}].detail`)}
                  ></textarea>
                </div>
              </div>
            ))}
          </section>

          <div className="formButtons">
            {/* <button
              className="submitButton"
              type="button"
              onClick={() => setOpenPreviewModal(true)}
            >
              <EyeOutlined /> Preview
            </button> */}
            <button className="submitButton" type="submit">
              Submit
            </button>
          </div>
          {openPreviewModal && (
            <PreviewForm
              isModalOpen={openPreviewModal}
              handleCancel={() => setOpenPreviewModal(false)}
              userDetails={userDetails}
            />
          )}
        </form>
      </div>
    </div>
  );
};
