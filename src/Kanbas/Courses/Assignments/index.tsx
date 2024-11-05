import { BsGripVertical, BsPen, BsPlus } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AssignmentDeleteDialog from "./AssignmentDeleter";
import { useState } from "react";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formatTime = (d: Date) =>
    `${((d.getHours() + 11) % 12) + 1}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}${d.getHours() < 12 ? "am" : "pm"}`;
  const formatDate = (d: Date) =>
    `${months[d.getMonth()]} ${d.getDate()} at ${formatTime(d)}`;

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [toDelete, setToDelete] = useState(assignments[0]);
  const dispatch = useDispatch();

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
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/new`}
            id="wd-add-assignment"
            className="btn btn-lg btn-danger me-1"
          >
            <BsPlus className="fs-3" /> Assignment
          </Link>
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
            {assignments
              .filter((asg: any) => asg.course == cid)
              .map((asg: any) => {
                return (
                  <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
                    <div className="p-2">
                      <BsGripVertical className="me-2 fs-3" />
                      <BsPencilSquare className="me-2 fs-3 text-success" />
                    </div>
                    <div>
                      <a
                        className="wd-assignment-link link-dark link-underline-opacity-0 link-underline-opacity-100-hover"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${asg._id}`}
                      >
                        <strong>{asg.title}</strong>
                      </a>
                      <br />
                      <span className="text-danger">
                        Multiple Modules
                      </span> | <b>Not available until</b>{" "}
                      {formatDate(new Date(asg.available))} |
                      <br />
                      <b>Due</b> {formatDate(new Date(asg.due))} | {asg.points}{" "}
                      pts
                    </div>
                    <AssignmentControlButtons
                      onDelete={() => {
                        setToDelete(asg);
                      }}
                    />
                  </li>
                );
              })}
          </ul>
        </li>
      </ul>
      <AssignmentDeleteDialog
        dialogTitle={"Delete Assignment"}
        assignmentName={toDelete.title}
        deleteAssignment={() => dispatch(deleteAssignment(toDelete._id))}
      />
    </div>
  );
}
