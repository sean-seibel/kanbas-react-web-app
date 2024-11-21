import { Link } from "react-router-dom";

// all photos royalty-free
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Courses/People/enrollment_reducer";

export default function Dashboard({
  courses,
  allCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  allCourses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showingAll, setShowingAll] = useState(false);
  const enrolledCourses = courses;
  const unenrolledCourses = allCourses.filter(
    (course) =>
      !enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      )
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
          {(showingAll
            ? enrolledCourses.concat(unenrolledCourses)
            : enrolledCourses
          ).map((course) => (
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
                    {currentUser.role === "FACULTY" && (
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
                    {currentUser.role === "STUDENT" &&
                      (enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      ) ? (
                        <div>
                          <button className="btn btn-primary"> Go </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(
                                unenroll({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              );
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
                            dispatch(
                              enroll({
                                user: currentUser._id,
                                course: course._id,
                              })
                            );
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
          ))}
        </div>
      </div>
    </div>
  );
}
