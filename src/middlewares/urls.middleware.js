import { urlSchema } from "../models/urlsSchema.js";

export async function validSchemaUrls(req, res, next) {
  const { url } = req.body;
  const sendObj = { url };

  const validation = urlSchema.validate(sendObj, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    res.send(errors);
    return;
  }

  next();
}
