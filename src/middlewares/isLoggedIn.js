import jwt from "jsonwebtoken";

export async function isLoggedIn(req, res, next) {
  const { authorization } = req.headers;
  

  if (!authorization) return res.status(400).json({ error: "Auth missing" });
  const [, token] = authorization.split(" ");

  try {
    
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decode;

    return next();
  } catch (e) {
    return res.status(401).json(e);
  }
}
