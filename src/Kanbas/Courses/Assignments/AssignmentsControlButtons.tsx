import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <span className="border border-dark-subtle rounded-pill bg-light p-2 ">
        40% of Total
      </span>
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
