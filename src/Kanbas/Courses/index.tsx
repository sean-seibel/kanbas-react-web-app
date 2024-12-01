import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useEffect, useState } from "react";

import * as coursesClient from "../Courses/client"

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const p = await coursesClient.findUsersForCourse(cid || "");
    setPeople(p);
  }

  useEffect(() => {
    fetchPeople();
  }, [])

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}
        <span className="text-secondary"> &gt; {pathname.split("/")[4]}</span>
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={people} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
