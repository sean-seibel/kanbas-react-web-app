import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const path = useLocation().pathname;
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <div>
          <Link
            id="wd-course-home-link"
            to={`/Kanbas/Courses/${cid}/${link}`}
            className={`list-group-item border border-0 ${
              path.includes(link) ? "active" : "inactive text-danger"
            }`}
          >
            {link}
          </Link>
        </div>
      ))}
    </div>
  );
}
