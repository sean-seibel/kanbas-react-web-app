import { createSlice, current } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { user, course } }) => {
      if (!state.enrollments.some((enr) => enr.user === user && enr.course === course)) {
        state.enrollments.push({ _id: new Date().getTime().toString(), user, course });
      }
    },
    unenroll: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter((enr) => enr.user !== user || enr.course !== course)
    },
  },
});
export const { enroll, unenroll } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;