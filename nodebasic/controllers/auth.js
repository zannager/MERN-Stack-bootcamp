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
