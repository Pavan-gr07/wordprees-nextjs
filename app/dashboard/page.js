import React from "react";

const waitFor = (sec) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 1000));
const BlogPage = async () => {
  await waitFor(3);
  return <div>Blog Detail</div>;
};

export default BlogPage;
