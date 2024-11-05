import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return (
    <div className="ms-auto">
      <FaTrash
        className="text-danger me-2 mb-1 wd-clickable"
        onClick={() => onDelete()}
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment-dialog"
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
