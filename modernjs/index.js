//object destructuring

//old
let thingsToDo = {
  morning: "exercise",
  afternoon: "workd",
  evening: "code",
  night: ["sleep", "dream"],
};

console.log(thingsToDo.morning);

//new
let { morning, afternoon, evening, night } = thingsToDo;

console.log(night);

//destructuring function arguments
//passing an object as function arguments

//old
// const uniStudents = (student) => {
//   console.log(`${student.fname} is from unversity of baguio`);
// };

// uniStudents({
//   fname: "greg",
//   lname: "boy",
// });

//new
// const uniStudents = (student) => {
//   const { fname, lname } = student;
//   console.log(`${fname} ${lname} is from unversity of baguio`);
// };

// uniStudents({
//   fname: "greg",
//   lname: "yaman",
// });

//or
const uniStudents = ({ fname, lname }) => {
  // const { fname, lname } = student;
  console.log(`${fname} ${lname} is from unversity of baguio`);
};

uniStudents({
  fname: "greg",
  lname: "yaman",
});
