import React, { useRef } from "react";
import { Modal, Button } from "antd";
import Logo from "../assets/BrickRedLogo.png";
import { Margin, usePDF } from "react-to-pdf";

export const PreviewForm = ({ isModalOpen, handleCancel, userDetails }) => {
  const ref = useRef();

  const { toPDF, targetRef } = usePDF({
    filename: "page.pdf",
    page: { margin: Margin.SMALL },
  });
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
        <div
          ref={targetRef}
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
            color: "black",
            padding: "20px",
            border: "1px solid #dddddd",
          }}
          id="container"
        >
          <div style={{ padding: "20px" }}>
            <h1
              style={{
                display: "block",
                fontSize: "2em",
                marginBlockStart: "0.67em",
                marginBlockEnd: "0.67em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontWeight: "bold",
                unicodeBidi: "isolate",
                margin: "0",
              }}
            >
              {userDetails.firstName} {userDetails.lastName}
            </h1>
            <p style={{ margin: "0" }}>{userDetails.designation}</p>
            <p style={{ margin: "0" }}>
              Email:
              <a
                href={`mailto:${userDetails.email}`}
                style={{ color: "inherit" }}
              >
                {userDetails.email}
              </a>
            </p>
            <img
              src={Logo}
              alt="Brickred Logo"
              style={{
                position: "absolute",
                top: "67px",
                right: "119px",
                width: "150px",
                maxWidth: "150px",
              }}
            />
          </div>

          <div
            style={{
              padding: "20px",
              paddingTop: "0px",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "18px",
                  borderBottom: "2px solid black",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                <strong>Profile Summary</strong>
              </div>
              <p>{userDetails.profileSummary}</p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "18px",
                  borderBottom: "2px solid black",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                <strong>Technical Skills</strong>
              </div>
              <p>{userDetails?.technicalSkills?.join(", ")}</p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "18px",
                  borderBottom: "2px solid black",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                <strong>Work Experience</strong>
              </div>
              {userDetails?.workExperiences?.map((experience, index) => (
                <div key={index} style={{ marginBottom: "15px" }}>
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

            <div style={{ marginBottom: "20px"}}>
              <div
                style={{
                  fontSize: "18px",
                  borderBottom: "2px solid black",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                <strong>Project Details</strong>
              </div>
              {userDetails?.projects?.map((project, index) => (
                <div key={index} style={{ marginBottom: "15px"}}>
                  <strong>Name: {project.projectName}</strong>
                  <p>
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p>
                    <strong>Technology Used:</strong> {project.technologyUsed}
                  </p>
                  <p>
                    <strong>Number of Members:</strong>
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
