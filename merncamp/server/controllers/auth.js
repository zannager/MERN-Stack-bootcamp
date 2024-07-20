export const register = (req, res) => {
  console.log("REGISTER ENDPOINT =>", req.body);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send("User registered");
};
