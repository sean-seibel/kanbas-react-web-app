import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaHome, FaWaveSquare } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid, LiaSpeakerDeck } from "react-icons/lia";
import { TbSpeakerphone } from "react-icons/tb";
import { RiTestTubeLine } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>
      {/* Complete the rest of the buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaWaveSquare className="me-2 fs-5" /> View Course Stream
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TbSpeakerphone className="me-2 fs-5" /> New Announcement
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <RiTestTubeLine className="me-2 fs-5" /> New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiMemoPad className="me-2 fs-5" /> View Course Notifications
      </button>
    </div>
  );
}
