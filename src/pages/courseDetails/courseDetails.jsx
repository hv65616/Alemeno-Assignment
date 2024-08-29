import React, { useState, useEffect } from "react";
import "./courseDetails.css";
import { Navbar } from "../../components/navbar/navbar";
import Backgrund from "../../assets/Rectangle.png";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
  const { id } = useParams();

  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://coursesdata.free.mockoapp.net/courses/${id}`
        );
        const data = await response.json();
        console.log("API response:", data);
        const matchingCourse = data.find(
          (course) => course.id === parseInt(id)
        );

        console.log("Matching Course:", matchingCourse);

        setCourseDetails(matchingCourse);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);
  return (
    <div className="course-details-wrapper">
      <div className="course-details">
        <Navbar />
        <div className="course-details-page">
          {courseDetails && (
            <>
              <section className="course-details-main">
                <div className="course-details-main-left">
                  <img
                    className="course-details-main-left-img"
                    src={courseDetails.thumbnail}
                    alt=""
                  />
                </div>
                <div className="course-details-main-right">
                  <div className="course-details-main-right-course">
                    <span style={{ fontWeight: "700" }}>
                      {courseDetails.name}
                    </span>
                  </div>
                  <div className="course-details-main-right-instructor">
                    <span style={{ fontWeight: "700" }}>Teacher: </span>{" "}
                    {courseDetails.instructor}{" "}
                  </div>
                  <div className="course-details-main-right-prerequisites">
                    <span style={{ fontWeight: "700" }}>Prerequisites: </span>{" "}
                    {courseDetails.prerequisites.join(", ")}
                  </div>
                  <div className="course-details-main-right-enrollmentStatus">
                    <span style={{ fontWeight: "700" }}>
                      EnrollmentStatus:{" "}
                    </span>{" "}
                    {courseDetails.enrollmentStatus}
                  </div>
                  <div className="course-details-main-right-duration">
                    <span style={{ fontWeight: "700" }}>Duration: </span>{" "}
                    {courseDetails.duration}
                  </div>
                  <div className="course-details-main-right-schedule">
                    <span style={{ fontWeight: "700" }}>Schedule: </span>
                    {courseDetails.schedule}
                  </div>
                  <div className="course-details-main-right-location">
                    <span style={{ fontWeight: "700" }}>Location: </span>{" "}
                    {courseDetails.location}
                  </div>
                  <div className="course-details-main-right-price">
                    <span style={{ fontWeight: "700" }}>Price: </span> ₹
                    {courseDetails.price}{" "}
                  </div>
                </div>
              </section>
              <section className="course-details-content">
                <div className="course-details-content-main">
                  <div className="course-details-content-main-desc">
                    <div className="course-details-content-main-desc-head">
                      Description
                    </div>
                    <div className="course-details-content-main-desc-con">
                      {courseDetails.description}
                    </div>
                  </div>
                  <div className="course-details-content-main-syll">
                    <div className="course-details-content-main-syll-head">
                      Syllabus
                    </div>
                    {courseDetails.syllabus.map((item, index) => (
                      <div
                        key={index}
                        className="course-details-content-main-syll-con"
                      >
                        <div className="course-details-content-main-syll-week">
                          Week {item.week}
                        </div>
                        <div className="course-details-content-main-syll-week-head">
                          {item.topic}
                        </div>
                        <div className="course-details-content-main-syll-week-con">
                          {item.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
