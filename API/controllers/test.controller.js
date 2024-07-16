import jwt from "jsonwebtoken";
export const shoulBeLoggedIn = (req, res) => {
  console.log(req.userId);
  res.json({ message: "Authenticated Route - should-be-logged-in" });
};

export const shouldBeAdmin = (req, res) => {
  console.log(req.userId);
  res.json({ message: "Admin Route - should-be-admin" });
};
