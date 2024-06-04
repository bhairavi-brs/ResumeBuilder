import React, { useRef } from "react";
import { Modal, Button, Spin } from "antd";
import Logo from "./BrickRedLogo.png";
import ReactToPdf from "react-to-pdf";
import "./PreviewForm.css"; 
import { usePDF } from 'react-to-pdf';


import generatePDF, { Options } from "react-to-pdf";

export const PreviewForm = ({ isModalOpen, handleCancel, userDetails }) => {
  const ref = useRef();

  const options = {
    filename: "using-function.pdf",
    page: {
      margin: 20,
    },
  };

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});


  // const getTargetElement = () => document.getElementById("container");

  // const downloadPdf = () => generatePDF(getTargetElement, options);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const formatCompanyName = (name) => {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <Modal
        title="Preview Form"
        open={isModalOpen}
        width={"80%"}
        footer={null}
        onCancel={handleCancel}
      >
        <div ref={targetRef}  className="preview-container" id="container">
          <div className="header-section">
            <h1>
              {userDetails.firstName} {userDetails.lastName}
            </h1>
            <p>{userDetails.designation}</p>
            <p>
              Email:
              <a href={`mailto:${userDetails.email}`}>{userDetails.email}</a>
            </p>
            <img src={Logo} alt="Brickred Logo" />
          </div>

          <div className="content-section">
            <div className="section">
              <div className="section-title">
                <strong>Profile Summary</strong>
              </div>
              <p>{userDetails.profileSummary}</p>
            </div>

            <div className="section">
              <div className="section-title">
                <strong>Technical Skills</strong>
              </div>
              <p>{userDetails?.technicalSkills?.join(", ")}</p>
            </div>

            <div className="section">
              <div className="section-title">
                <strong>Work Experience</strong>
              </div>
              {userDetails?.workExperiences?.map((experience, index) => (
                <div key={index}>
                  <p>
                    <strong>
                      • {formatCompanyName(experience.companyName)}
                    </strong>
                  </p>
                  <p>{experience.designation}</p>
                  <p>
                    {formatDate(experience.startDate)} –{" "}
                    {experience.endDate
                      ? formatDate(experience.endDate)
                      : "Present"}
                  </p>
                </div>
              ))}
            </div>

            <div className="section">
              <div className="section-title">
                <strong>Project Details</strong>
              </div>
              {userDetails?.projects?.map((project, index) => (
                <div key={index} className="project">
                  <div>Name: {project.projectName}</div>
                  <p>
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p>
                    <strong>Technology Used:</strong> {project.technologyUsed}
                  </p>
                  <p>
                    <strong>Number of Members:</strong>{" "}
                    {project.numberOfMembers}
                  </p>
                  <p>
                    <strong>Description:</strong> {project.projectDetail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => toPDF()}>Download PDF</button>
      </Modal>
    </>
  );
};
