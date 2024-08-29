import React, { useState, useEffect, Suspense } from "react";
import { styled, alpha } from "@mui/material/styles";
import "./coursesPage.css";
import { Navbar } from "../../components/navbar/navbar";
import Banner from "../../assets/courses-banner-img.png";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Skeleton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "80ch",
      },
    },
  },
}));
export const CoursesPage = () => {
  const [coursesData, setCoursesData] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://coursesdata.free.mockoapp.net/coursesData"
        );
        const data = await response.json();
        setCoursesData(data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClick = (course) => {
    navigate({
      pathname: `/coursedetails/${course.id}`,
      state: { courseData: course },
    });
  };
  const handleLike = (courseId) => {
    setCoursesData((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, liked: !course.liked } : course
      )
    );
  };
  const filteredCourses =
    coursesData &&
    coursesData.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="courses-wrapper">
      <div className="courses">
        <Navbar />
        <div className="courses-page">
          <section className="courses-top-banner-wrapper">
            <div className="courses-top-banner">
              <div className="courses-top-banner-left">
                <div className="courses-top-banner-left-heading">
                  Edudu offers you a 30% discount this season
                </div>
                <div className="courses-top-banner-left-subheading">
                  Promotion valid from Aug 29, 2024 - Nov 29, 2024
                </div>
                <div className="courses-top-banner-left-button">
                  <div className="courses-top-banner-left-button-text">
                    Explore now
                  </div>
                </div>
              </div>
              <div className="courses-top-banner-right">
                <div className="courses-top-banner-right-img">
                  <img className="course-banner" src={Banner} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="courses-mid-wrapper">
            <div className="courses-mid-main">
              <div className="courses-mid-main-search-box">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Courses, Instructors, etc......"
                    inputProps={{ "aria-label": "search" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Search>
              </div>
            </div>
          </section>
          <section className="courses-course-wrapper">
            <div className="courses-course-container">
              <Suspense
                fallback={
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={600}
                    height={400}
                  />
                }
              >
                {filteredCourses &&
                  filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      className="courses-course-card"
                      onClick={() => handleClick(course)}
                    >
                      <div className="courses-course-card-top">
                        <img
                          className="courses-course-card-top-svg"
                          src={course.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className="courses-course-card-bottom">
                        <div className="courses-course-card-bottom-first">
                          <div className="courses-course-card-bottom-heading">
                            {course.name}
                          </div>
                          <div className="courses-course-card-bottom-content">
                            {course.description}
                          </div>
                        </div>
                        <div className="courses-course-card-bottom-second">
                          <div className="courses-course-card-bottom-second-ins">
                            {course.instructor}
                          </div>
                          <div className="courses-course-card-bottom-second-price">
                            ₹{course.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Suspense>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
