import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

export const register = async (req, res) => {
  console.log("REGISTER ENDPOINT =>", req.body);
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.send("User registered");

  const { name, email, password, secret } = req.body;
  //validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be 6 characters long");
  if (!secret) return res.status(400).send("Answer is required");

  const exist = await User.findOne({ email });
  if (exist) {
    return res.status(400).send("Email is taken");
  }

  const hashedPassword = await hashPassword(password);

  const user = new User({ name, email, password: hashedPassword, secret });
  try {
    await user.save();
    // console.log("REGISTERED USER =>", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("REGISTER FAILED =>", err);
    // return res.status(400).send("Error, Try again.");
    return res.status(400).json({ error: "Error, try again." });
  }

  // try {
  //   const exist = await User.findOne({ email });
  //   if (exist) {
  //     return res.status(400).send("Email is taken");
  //   }

  //   const hashedPassword = await hashPassword(password);

  //   const user = new User({ name, email, password: hashedPassword, secret });
  //   await user.save();

  //   console.log("REGISTERED USER =>", user);
  //   return res.json({ ok: true });
  // } catch (err) {
  //   console.log("REGISTER FAILED =>", err);
  //   return res.status(400).send("Error, Try again.");
  // }

  // res.send("User registered");
};
