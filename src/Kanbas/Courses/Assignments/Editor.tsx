import { IoIosClose } from "react-icons/io";
import { useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const asg = assignments.find((a) => a._id == aid);
  if (!asg) {
    return <div>{`No assignment with id ${aid} :(`}</div>;
  }
  const dateTimeStringToDateString = (dt: string) => dt.split("T")[0];
  return (
    <div id="wd-assignments-editor">
      <div className="border-bottom p-2 pb-4">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" className="form-control" value={asg.title} />
        <br />
        <br />
        <textarea id="wd-description" className="form-control">
          {asg.description}
        </textarea>
        <br />
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-points" className="float-end">
              Points
            </label>
          </div>
          <div className="col-8">
            <input id="wd-points" className="form-control" value={asg.points} />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-3">
            <label htmlFor="wd-group" className="float-end">
              Assignment Group
            </label>
          </div>
          <div className="col-8">
            <select id="wd-group" className="form-select">
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
            <select id="wd-display-grade-as" className="form-select">
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
            <select id="wd-submission-type" className="form-select">
              <option value="ONLINE">Online</option>
            </select>
            <strong>Online Entry Option</strong>
            <div className="d-flex align-items-center">
              <input id="wd-text-entry" className="me-2" type="checkbox" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="d-flex align-items-center">
              <input id="wd-website-url" className="me-2" type="checkbox" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                id="wd-media-recordings"
                className="me-2"
                type="checkbox"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="d-flex align-items-center">
              <input
                id="wd-student-annotation"
                className="me-2"
                type="checkbox"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="d-flex align-items-center">
              <input id="wd-file-upload" className="me-2" type="checkbox" />
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
            ></textarea>
            <br />
            <label htmlFor="wd-due-date" className="row">
              <strong>Due</strong>
            </label>
            <input
              id="wd-due-date"
              className="form-control"
              type="date"
              defaultValue={dateTimeStringToDateString(asg.due)}
            ></input>
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
                  defaultValue={dateTimeStringToDateString(asg.available)}
                ></input>
              </div>
              <div>
                <label htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="date"
                  defaultValue={dateTimeStringToDateString(asg.due)}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-save-assignment-edit"
            className="btn btn-lg btn-danger me-1 float-end"
          >
            Save
          </button>
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-cancel-assignment-edit"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}
