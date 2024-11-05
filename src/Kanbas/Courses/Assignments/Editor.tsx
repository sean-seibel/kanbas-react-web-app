import { IoIosClose } from "react-icons/io";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { ChangeEventHandler, useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const asg =
    aid === "new"
      ? {
          title: "New Assignment",
          course: cid,
          available: "2021-05-06T00:00:00",
          due: "2021-05-13T23:59:00",
          availableUntil: "2021-05-13T23:59:00",
          points: 100,
          description: "Assignment Description",
        }
      : assignments.find((a: any) => a._id == aid);

  const [thisAsg, setThisAsg] = useState(asg);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isNotFaculty = currentUser.role !== "FACULTY";

  if (!asg) {
    return <div>{`No assignment with id ${aid} :(`}</div>;
  }

  const updateAsg = (field: string, value: any) => {
    const newAsg: any = { ...thisAsg };
    newAsg[field] = value;
    setThisAsg(newAsg);
  };

  const dateTimeStringToDateString = (dt: string) => dt.split("T")[0];

  return (
    <div id="wd-assignments-editor">
      <div className="border-bottom p-2 pb-4">
        <label htmlFor="wd-name">Assignment Name</label>
        <input
          id="wd-name"
          className="form-control"
          onChange={(e) => updateAsg("title", e.target.value)}
          value={thisAsg.title}
          readOnly={isNotFaculty}
        />
        <br />
        <br />
        <textarea
          id="wd-description"
          className="form-control"
          onChange={(e) => updateAsg("description", e.target.value)}
          readOnly={isNotFaculty}
        >
          {thisAsg.description}
        </textarea>
        <br />
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-points" className="float-end">
              Points
            </label>
          </div>
          <div className="col-8">
            <input
              id="wd-points"
              className="form-control"
              onChange={(e) => updateAsg("points", e.target.value)}
              readOnly={isNotFaculty}
              value={thisAsg.points}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-group" className="float-end">
              Assignment Group
            </label>
          </div>
          <div className="col-8">
            <select
              id="wd-group"
              className="form-select"
              disabled={isNotFaculty}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-display-grade-as" className="float-end">
              Display Grade as
            </label>
          </div>
          <div className="col-8">
            <select
              id="wd-display-grade-as"
              className="form-select"
              disabled={isNotFaculty}
            >
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
              <option value="LETTER">Letter</option>
              <option value="PASSFAIL">Pass-Fail</option>
            </select>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-submission-type" className="float-end">
              Submission Type
            </label>
          </div>
          <div className="col-8 p-3 border">
            <select
              id="wd-submission-type"
              className="form-select"
              disabled={isNotFaculty}
            >
              <option value="ONLINE">Online</option>
            </select>
            <strong>Online Entry Option</strong>
            <div className="d-flex align-items-center">
              <input
                id="wd-text-entry"
                className="me-2"
                type="checkbox"
                disabled={isNotFaculty}
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                id="wd-website-url"
                className="me-2"
                type="checkbox"
                disabled={isNotFaculty}
              />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                id="wd-media-recordings"
                className="me-2"
                type="checkbox"
                disabled={isNotFaculty}
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                id="wd-student-annotation"
                className="me-2"
                type="checkbox"
                disabled={isNotFaculty}
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                id="wd-file-upload"
                className="me-2"
                type="checkbox"
                disabled={isNotFaculty}
              />
              <label htmlFor="wd-file-upload">File Upload</label>
            </div>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-assign-to" className="float-end">
              Assign
            </label>
          </div>
          <div className="col-8 p-3 border">
            <label htmlFor="wd-assign-to" className="row">
              <strong>Assign To</strong>
            </label>
            <textarea
              id="wd-assign-to"
              className="form-control"
              defaultValue={"Everyone x"}
              readOnly={isNotFaculty}
            ></textarea>
            <br />
            <label htmlFor="wd-due-date" className="row">
              <strong>Due</strong>
            </label>
            <input
              id="wd-due-date"
              className="form-control"
              type="date"
              onChange={(e) => updateAsg("due", e.target.value)}
              readOnly={isNotFaculty}
              defaultValue={dateTimeStringToDateString(thisAsg.due)}
            />
            <br />
            <div className="d-flex">
              <div className="me-3">
                <label htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                  id="wd-available-from"
                  className="form-control"
                  type="date"
                  onChange={(e) => updateAsg("available", e.target.value)}
                  readOnly={isNotFaculty}
                  defaultValue={dateTimeStringToDateString(thisAsg.available)}
                />
              </div>
              <div>
                <label htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="date"
                  onChange={(e) => updateAsg("availableUntil", e.target.value)}
                  readOnly={isNotFaculty}
                  defaultValue={dateTimeStringToDateString(
                    thisAsg.availableUntil
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        {!isNotFaculty && (
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button
              id="wd-save-assignment-edit"
              className="btn btn-lg btn-danger me-1 float-end"
              onClick={() => {
                if (aid === "new") {
                  dispatch(addAssignment(thisAsg));
                } else {
                  dispatch(updateAssignment(thisAsg));
                }
              }}
            >
              Save
            </button>
          </Link>
        )}
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-cancel-assignment-edit"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            {isNotFaculty ? "Exit" : "Cancel"}
          </button>
        </Link>
      </div>
    </div>
  );
}
