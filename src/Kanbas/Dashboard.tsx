import { Link } from "react-router-dom";

// all photos royalty-free
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import {
//   enroll,
//   setEnrollments,
//   unenroll,
// } from "./Courses/People/enrollment_reducer";
import * as userClient from "./Account/client";

export default function Dashboard({
  courses,
  allCourses,
  course,
  enrollUser,
  unenrollUser,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  allCourses: any[];
  course: any;
  enrollUser: (cid: string) => void;
  unenrollUser: (cid: string) => void;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [showingAll, setShowingAll] = useState(false);
  const enrolledCourses = courses;
  console.log("courses1", enrolledCourses);

  // const fetchEnrollments = async () => {
  //   const enrolls = (await userClient.findMyCourses()).map((c: any) => {
  //     return { user: currentUser._id, course: c._id };
  //   });
  //   console.log("courses", enrolledCourses);
  //   console.log("enrolls", JSON.stringify(enrolls));
  //   dispatch(setEnrollments(enrolls));
  // };
  // useEffect(() => {
  //   fetchEnrollments();
  // }, []);

  // const enrolls = enrolledCourses.map((c) => {
  //   return { user: currentUser._id, course: c._id };
  // });
  // console.log("courses", enrolledCourses);
  // console.log("enrolls", JSON.stringify(enrolls));
  // dispatch(setEnrollments(enrolls));

  const unenrolledCourses = allCourses.filter(
    (course) =>
      !courses.some((otherCourse: any) => otherCourse._id === course._id)
  );

  const courseCard = (course: any, isFaculty: boolean, isEnrolled: boolean) => (
    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
      <div className="card rounded-3 overflow-hidden">
        <Link
          to={`/Kanbas/Courses/${course._id}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <img src="images/xiangqi.png" width="100%" height={160} />
          <div className="card-body">
            <h5 className="wd-dashboard-course-title card-title">
              {course.name}
            </h5>
            <p
              className="wd-dashboard-course-title card-text overflow-y-hidden"
              style={{ maxHeight: 100 }}
            >
              {course.description}
            </p>
            {isFaculty && (
              <div>
                <button className="btn btn-primary"> Go </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                  className="btn btn-danger float-end"
                  id="wd-delete-course-click"
                >
                  Delete
                </button>
                <button
                  id="wd-edit-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                  className="btn btn-warning me-2 float-end"
                >
                  Edit
                </button>
              </div>
            )}
            {!isFaculty &&
              (isEnrolled ? (
                <div>
                  <button className="btn btn-primary"> Go </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      unenrollUser(course._id);
                    }}
                    className="btn btn-danger float-end"
                  >
                    Unenroll
                  </button>
                </div>
              ) : (
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    enrollUser(course._id);
                  }}
                  className="btn btn-success"
                >
                  Enroll
                </button>
              ))}
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>

          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        {currentUser.role === "STUDENT"
          ? showingAll
            ? "All"
            : "Your"
          : "Published"}{" "}
        Courses (
        {enrolledCourses.length + (showingAll ? unenrolledCourses.length : 0)})
        {currentUser.role === "STUDENT" && (
          <div className="float-end">
            <button
              className="btn btn-primary"
              onClick={() => setShowingAll(!showingAll)}
            >
              Enrollments
            </button>
          </div>
        )}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {enrolledCourses.map((course) =>
            courseCard(course, currentUser.role === "FACULTY", true)
          )}
          {showingAll &&
            unenrolledCourses.map((course) =>
              courseCard(course, currentUser.role === "FACULTY", false)
            )}
        </div>
      </div>
    </div>
  );
}
