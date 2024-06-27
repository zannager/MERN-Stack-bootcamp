// rest operator

// const cities = ["sydney", "melbourne", "brisbane"];
// cities.push("canberra");
// const [first, ...rest] = cities;

// console.log("FIRST =>", first);
// console.log("REST =>", rest);

const user = {
  name: "greg",
  email: "red",
  password: "passwprd",
};

const { password, ...rest } = user;
console.log(rest);
