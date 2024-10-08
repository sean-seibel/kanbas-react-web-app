import { BsGripVertical, BsPen, BsPlus } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center py-4">
        <div className="">
          <label className="border d-flex align-items-center">
            <IoMdSearch className="fs-4 mx-2" />
            <input
              id="wd-search-assignment"
              className="border-0 fs-4"
              placeholder="Search..."
            />
          </label>
        </div>
        <div className="ms-auto">
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary me-1"
          >
            <BsPlus className="fs-3" /> Group
          </button>
        </div>
        <div className="">
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1">
            <BsPlus className="fs-3" /> Assignment
          </button>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            Assignments
            <AssignmentsControlButtons />
          </div>
          <ul className="list-group rounded-0">
            <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
              <div className="p-2">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-2 fs-3 text-success" />
              </div>
              <div>
                <a
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <strong>A1 - ENV + HTML</strong>
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00am |
                <br />
                <b>Due</b> May 13 at 11:59pm | 100 pts
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
              <div className="p-2">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-2 fs-3 text-success" />
              </div>
              <div>
                <a
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="#/Kanbas/Courses/1234/Assignments/124"
                >
                  <strong>A2 - CSS + BOOTSTRAP</strong>
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 13 at 12:00am |
                <br />
                <b>Due</b> May 20 at 11:59pm | 100 pts
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
              <div className="p-2">
                <BsGripVertical className="me-2 fs-3" />
                <BsPencilSquare className="me-2 fs-3 text-success" />
              </div>
              <div>
                <a
                  className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="#/Kanbas/Courses/1234/Assignments/125"
                >
                  <strong>A3 - JAVASCRIPT + REACT</strong>
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 20 at 12:00am |
                <br />
                <b>Due</b> May 27 at 11:59pm | 100 pts
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
