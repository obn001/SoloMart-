const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { full_name, phone, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    full_name,
    phone,
    role,
    password_hash: hashed,
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;

  const user = await User.findOne({ where: { phone } });
  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
};
