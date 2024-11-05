import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="row" id="wd-home">
      <div className="col-12 col-xl-8">
        <Modules />
      </div>
      {currentUser.role === "FACULTY" && (
        <div className="col-12 col-xl-4">
          <CourseStatus />
        </div>
      )}
    </div>
  );
}
