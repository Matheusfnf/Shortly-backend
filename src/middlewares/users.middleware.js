import { userSchema } from "../models/userSchema.js";

export async function validSchemaUsers(req, res, next) {
  const { name, email, password } = req.body;
  const sendObj = { name, email, password };

  const validation = userSchema.validate(sendObj, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    res.send(errors);
    return;
  }

  next();
}
