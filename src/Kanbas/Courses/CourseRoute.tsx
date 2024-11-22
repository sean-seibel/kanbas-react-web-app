import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function CourseRoute({
  courses,
  children,
}: {
  courses: any[];
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();
  if (
    currentUser &&
    // enrollments.some(
    //   (enrollment: any) =>
    //     enrollment.user === currentUser._id && enrollment.course === cid
    // )
    courses.some((c) => c._id == cid)
  ) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }
}
