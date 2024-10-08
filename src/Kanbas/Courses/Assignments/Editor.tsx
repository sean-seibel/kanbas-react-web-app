import { IoIosClose } from "react-icons/io";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" className="form-control">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <div className="row py-2">
        <div className="col-3">
          <label htmlFor="wd-points" className="float-end">
            Points
          </label>
        </div>
        <div className="col-8">
          <input id="wd-points" className="form-control" value={100} />
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
            <input id="wd-media-recordings" className="me-2" type="checkbox" />
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
            defaultValue={"2021-05-01"}
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
                defaultValue={"2021-05-01"}
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
                defaultValue={"2021-05-01"}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
