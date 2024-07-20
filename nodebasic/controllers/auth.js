export const users = (req, res) => {
  //   res.send("hello from node api");
  res.json({
    users: [
      {
        name: "greg",
        age: 30,
      },
      {
        name: "norman",
        age: 20,
      },
    ],
  });
};

export const register = (req, res) => {
  const { name, email, password, secret } = req.body;
  // Add your registration logic here
  // For example, save the user data to the database
  res.status(200).send({ message: "User registered successfully" });
};
