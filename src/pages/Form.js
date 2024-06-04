import React, { useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { PreviewForm } from "../PreviewForm/PreviewForm";
import "./styles.css";
import { EyeOutlined } from "@ant-design/icons";

const Form = () => {
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const formRef = useRef();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields: workExperienceFields, append: appendWorkExperience } =
    useFieldArray({
      control,
      name: "workExperiences",
    });
  const { fields: projectFields, append: appendProject } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = (data) => {
    if (data.technicalSkills) {
      data.technicalSkills = data.technicalSkills.split(",");
    }
    setUserDetails(data);
    setOpenPreviewModal(true);
  };

  const handleAddWorkExperience = () => {
    appendWorkExperience({
      companyName: "",
      startDate: "",
      endDate: "",
      designation: "",
    });
  };

  const handleAddProjectDetails = () => {
    appendProject({
      projectName: "",
      numberOfMembers: "",
      role: "",
      technologyUsed: "",
      detail: "",
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <h1>Resume Form</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%" }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div style={{ width: "30%" }}>
          <label htmlFor="designation">Designation:</label>
          <input
            id="designation"
            {...register("designation", {
              required: "Designation is required",
            })}
          />
          {errors.designation && <p>{errors.designation.message}</p>}
        </div>

        <div style={{ width: "30%" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="profileSummary">Profile Summary:</label>
        <textarea
          id="profileSummary"
          className="textArea"
          {...register("profileSummary", {
            required: "Profile Summary is required",
          })}
        />
        {errors.profileSummary && <p>{errors.profileSummary.message}</p>}
      </div>
      <div>
        <label htmlFor="technicalSkills">Technical Skills:</label>
        <textarea
          id="technicalSkills"
          className="textArea"
          {...register("technicalSkills", {
            required: "Technical Skills are required",
          })}
        />
        {errors.technicalSkills && <p>{errors.technicalSkills.message}</p>}
      </div>
      <button
        type="button"
        className="addDetailsBtn"
        onClick={handleAddWorkExperience}
      >
        Add Work Experience
      </button>
      {workExperienceFields.map((item, index) => (
        <div key={item.id} className="workExperienceSection">
          <div>
            <label htmlFor={`workExperiences[${index}].companyName`}>
              Company Name:
            </label>
            <input
              id={`workExperiences[${index}].companyName`}
              {...register(`workExperiences[${index}].companyName`, {
                required: "Company Name is required",
              })}
            />
            {errors.workExperiences &&
              errors.workExperiences[index] &&
              errors.workExperiences[index].companyName && (
                <p>{errors.workExperiences[index].companyName.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`workExperiences[${index}].startDate`}>
              Start Date:
            </label>
            <input
              type="date"
              id={`workExperiences[${index}].startDate`}
              {...register(`workExperiences[${index}].startDate`, {
                required: "Start Date is required",
              })}
            />
            {errors.workExperiences &&
              errors.workExperiences[index] &&
              errors.workExperiences[index].startDate && (
                <p>{errors.workExperiences[index].startDate.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`workExperiences[${index}].endDate`}>
              End Date:
            </label>
            <input
              type="date"
              id={`workExperiences[${index}].endDate`}
              {...register(`workExperiences[${index}].endDate`, {
                required: "End Date is required",
              })}
            />
            {errors.workExperiences &&
              errors.workExperiences[index] &&
              errors.workExperiences[index].endDate && (
                <p>{errors.workExperiences[index].endDate.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`workExperiences[${index}].designation`}>
              Designation:
            </label>
            <input
              id={`workExperiences[${index}].designation`}
              {...register(`workExperiences[${index}].designation`, {
                required: "Designation is required",
              })}
            />
            {errors.workExperiences &&
              errors.workExperiences[index] &&
              errors.workExperiences[index].designation && (
                <p>{errors.workExperiences[index].designation.message}</p>
              )}
          </div>
        </div>
      ))}
      <button
        type="button"
        className="addDetailsBtn"
        onClick={handleAddProjectDetails}
      >
        Add Project Details
      </button>
      {projectFields.map((item, index) => (
        <div key={item.id} className="projectDetailsSection">
          <div>
            <label htmlFor={`projects[${index}].projectName`}>
              Project Name:
            </label>
            <input
              id={`projects[${index}].projectName`}
              {...register(`projects[${index}].projectName`, {
                required: "Project Name is required",
              })}
            />
            {errors.projects &&
              errors.projects[index] &&
              errors.projects[index].projectName && (
                <p>{errors.projects[index].projectName.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`projects[${index}].numberOfmembers`}>
              Number of members:
            </label>
            <input
              id={`projects[${index}].numberOfmembers`}
              {...register(`projects[${index}].numberOfmembers`, {
                required: "Number of members are required",
              })}
            />
            {errors.projects &&
              errors.projects[index] &&
              errors.projects[index].numberOfmembers && (
                <p>{errors.projects[index].numberOfmembers.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`projects[${index}].role`}>Role:</label>
            <input
              id={`projects[${index}].role`}
              {...register(`projects[${index}].role`, {
                required: "Role is required",
              })}
            />
            {errors.projects &&
              errors.projects[index] &&
              errors.projects[index].role && (
                <p>{errors.projects[index].role.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`projects[${index}].technologyUsed`}>
              Technology used:
            </label>
            <input
              id={`projects[${index}].technologyUsed`}
              {...register(`projects[${index}].technologyUsed`, {
                required: "Technology used is required",
              })}
            />
            {errors.projects &&
              errors.projects[index] &&
              errors.projects[index].technologyUsed && (
                <p>{errors.projects[index].technologyUsed.message}</p>
              )}
          </div>

          <div>
            <label htmlFor={`projects[${index}].projectdetail`}>
              Project detail:
            </label>
            <input
              id={`projects[${index}].projectdetail`}
              {...register(`projects[${index}].projectdetail`, {
                required: "Project detail is required",
              })}
            />
            {errors.projects &&
              errors.projects[index] &&
              errors.projects[index].projectdetail && (
                <p>{errors.projects[index].projectdetail.message}</p>
              )}
          </div>
        </div>
      ))}

      <div className="formButtons">
        <EyeOutlined
          className="previewButton"
          onClick={() => formRef.current.requestSubmit()}
        />

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
  );
};

export default Form;
