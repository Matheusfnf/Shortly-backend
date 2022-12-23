import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().required().min(1),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().required().min(3),
});
