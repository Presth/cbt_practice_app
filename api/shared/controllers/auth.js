export const login = (req, res) => {
  console.log("login");
  res.status(200).json({ message: "login" });
};

export const createAccount = (req, res) => {
  const { username, fullname, password } = req.body;
  console.table(username, fullname, password);
  console.log("login");
  res.status(200).json({ message: "login" });
};
