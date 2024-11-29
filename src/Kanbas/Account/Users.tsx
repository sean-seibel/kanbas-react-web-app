import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa";
export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const filterUsersByRole = async (role_: string) => {
    setRole(role_);
  };
  const [name, setName] = useState("");
  const filterUsersByName = async (name_: string) => {
    setName(name_);
  };

  const createUser = async () => {
    const user = await client.createUser({
      _id: Date.now(),
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  const { uid } = useParams();
  const fetchUsers = async () => {
    let users;
    if (name) {
      users = await client.findUsersByPartialName(name);
    } else if (role) {
      users = await client.findUsersByRole(role); // a lot nicer ux to do by both role and name
    } else {
      users = await client.findAllUsers();
    }
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, [uid, name, role]);
  return (
    <div>
      <button
        onClick={createUser}
        className="float-end btn btn-danger wd-add-people"
      >
        <FaPlus className="me-2" />
        User
      </button>
      <h3>Users</h3>
      <input
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name"
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>{" "}
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>{" "}
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} />
    </div>
  );
}
