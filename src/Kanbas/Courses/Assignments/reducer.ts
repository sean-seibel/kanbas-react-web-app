import { createSlice, current } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState: { assignments: any[] } = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = [...assignments];
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        available: assignment.available,
        due: assignment.due,
        points: assignment.points,
        description: assignment.description,
        availableUntil: assignment.availableUntil,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      );
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
