import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: { blogs: null },
  reducers: {
    fetchBlogs(state, action) {
      state.blogs = action.payload;
    },
    addBlog(state, action) {
      state.blogs = [action.payload, ...state.blogs];
    },
  },
});

export const { fetchBlogs, addBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
