import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({
  onDelete,
}: {
  onDelete: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  return (
    <div className="ms-auto">
      {isFaculty && (
        <FaTrash
          className="text-danger me-2 mb-1 wd-clickable"
          onClick={() => onDelete()}
          data-bs-toggle="modal"
          data-bs-target="#wd-delete-assignment-dialog"
        />
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
