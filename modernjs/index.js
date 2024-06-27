// arrow function and return keyword
// function greeting(message) {
//   alert(`${message} everyone!`);
// }

// const greeting = (message) => alert(`${message} everyone!`);

// greeting("hello");

const createBlog = (title, body) => {
  if (!title) {
    throw new Error("a title is needed");
  }
  if (!body) {
    throw new Error("body can not be empty");
  }
  return `${title} - ${body}`;
};
alert(createBlog("a blog title", "this is my first blog"));
