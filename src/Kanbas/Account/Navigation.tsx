import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.includes("Signin") && (
        <div>
          <Link
            to={`/Kanbas/Account/Signin`}
            className={`list-group-item border border-0 ${
              pathname.includes("Signin") ? "active" : "inactive text-danger"
            }`}
          >
            Signin
          </Link>
          <br />
        </div>
      )}
      {links.includes("Signup") && (
        <div>
          <Link
            to={`/Kanbas/Account/Signup`}
            className={`list-group-item border border-0 ${
              pathname.includes("Signup") ? "active" : "inactive text-danger"
            }`}
          >
            Signup
          </Link>
          <br />
        </div>
      )}
      {links.includes("Profile") && (
        <div>
          <Link
            to={`/Kanbas/Account/Profile`}
            className={`list-group-item ${
              pathname.includes("Profile") ? "active" : "inactive text-danger"
            } border border-0`}
          >
            Profile
          </Link>
          <br />
        </div>
      )}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item border border-0 ${
            pathname.includes("Users") ? "active" : "inactive text-danger"
          }`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
