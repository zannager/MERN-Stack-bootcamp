// spread operator

const ausCities = ["sydney", "melbourne", "brisbane"];
const usCities = ["ny", "la", "ca"];

const allCities = [...ausCities, ...usCities];

console.log(allCities.join(", "));
