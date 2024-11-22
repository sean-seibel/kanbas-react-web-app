import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const enrollRequest = async (userId: string, courseId: string) => {
  const response = await axios.post(`${ENROLLMENTS_API}`, { user: userId, course: courseId } );
  return response.data;
};
export const unenrollRequest = async (
  userId: string,
  courseId: string
) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return data;
};
