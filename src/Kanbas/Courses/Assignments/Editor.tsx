export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
              <option value="LETTER">Letter</option>
              <option value="PASSFAIL">Pass-Fail</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
            </select>
            <br />
            Online Entry Option
            <br />
            <input id="wd-text-entry" type="checkbox" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input id="wd-website-url" type="checkbox" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input id="wd-media-recordings" type="checkbox" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input id="wd-student-annotation" type="checkbox" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input id="wd-file-upload" type="checkbox" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label>
            <br />
            <textarea id="wd-assign-to" defaultValue={"Everyone"} />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input id="wd-due-date" type="date"></input>
            <br />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input id="wd-available-from" type="date"></input>
                </td>
                <td>
                  <input id="wd-available-until" type="date"></input>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
  );
}
