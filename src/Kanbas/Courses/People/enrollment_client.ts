import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true }); // sure whatever
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const enrollRequest = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, { user: userId, course: courseId } );
  return response.data;
};
export const unenrollRequest = async (
  userId: string,
  courseId: string
) => {
  const { data } = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return data;
};
