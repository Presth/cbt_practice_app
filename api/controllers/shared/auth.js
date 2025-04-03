export const login = async (req, res) => {
  res.status(200).json({ message: "Login success" });
};

export const createAccount = async (req, res) => {
  res.status(200).json({ message: "Account created" });
};
