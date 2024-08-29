import React, { useState } from "react";
import "./dashboard.css";
import { Navbar } from "../../components/navbar/navbar";
// import { useNavigate } from "react-router-dom";

import LinearProgressCountUp from "../../components/linearProgressCount";
export const Dashboard = () => {
  // const navigate = useNavigate();

  // Dummy data for enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      name: "Python for Machine Learning",
      instructor: "Professor Grace Robinson",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dueDate: "2024-12-31",
      progress: 90,
      completed: false,
    },
    {
      id: 2,
      name: "Data Structures and Algorithms in C++",
      instructor: "Ms. Sophia White",
      thumbnail:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dueDate: "2024-12-31",
      progress: 60,
      completed: false,
    },
    {
      id: 3,
      name: "Java Spring Boot Microservices",
      instructor: "Dr. Mia Garcia",
      thumbnail:
        "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dueDate: "2024-12-15",
      progress: 0,
      completed: false,
    },
    {
      id: 4,
      name: "DevOps Fundamentals",
      instructor: "Professor Ava Wilson",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dueDate: "2024-12-15",
      progress: 20,
      completed: false,
    },
    {
      id: 5,
      name: "Python for Data Science",
      instructor: "Ms. Peyton Ward",
      thumbnail:
        "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dueDate: "2024-12-15",
      progress: 50,
      completed: false,
    },
    {
      id: 6,
      name: "Introduction to Java Programming",
      instructor: "Professor Alexander Harris",
      thumbnail:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dueDate: "2024-12-15",
      progress: 10,
      completed: false,
    },
  ]);

  const handleMarkAsCompleted = (courseId) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };
  // const handleClick = (course) => {
  //   navigate({
  //     pathname: `/coursedetails/${course.id}`,
  //     state: { courseData: course },
  //   });
  // };
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <Navbar />
        <div className="dashboard-page">
          <section className="dashboard-top-wrapper">
            <div className="dashboard-top-wrapper-heading">
              Courses Enrolled
            </div>
          </section>
          <section className="dashboard-bottom-wrapper">
            <div className="dashboard-bottom-container">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="dashboard-bottom-card"
                  //  onClick={() => handleClick(course)}
                >
                  <div className="dashboard-bottom-card-top">
                    <img
                      className="dashboard-bottom-card-top-svg"
                      src={course.thumbnail}
                      alt={`Thumbnail for ${course.name}`}
                    />
                  </div>
                  <div className="dashboard-bottom-card-bottom">
                    <div className="dashboard-bottom-card-bottom-first">
                      <div className="dashboard-bottom-card-bottom-heading">
                        {course.name}
                      </div>
                      <div className="dashboard-bottom-card-bottom-content">
                        {/* Additional course details */}
                        Instructor: {course.instructor}
                      </div>
                    </div>
                    <div className="dashboard-bottom-card-bottom-second">
                      <div className="dashboard-bottom-card-bottom-second-ins">
                        Due Date: {course.dueDate}
                      </div>
                      <div className="dashboard-bottom-card-bottom-second-price">
                        {!course.completed && (
                          <>
                            <LinearProgressCountUp progress={course.progress} />
                            <div
                              style={{ marginTop: "10px" }}
                              className="dashboard-bottom-card-bottom-button-con"
                            >
                              <button
                                onClick={() => handleMarkAsCompleted(course.id)}
                                className="dashboard-bottom-card-bottom-button"
                              >
                                Mark as Completed
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      {course.completed && (
                        <span style={{ color: "green" }}>Completed</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
