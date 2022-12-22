import connection from "../database/pg.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class Token {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await connection.query(
        `SELECT * FROM users WHERE email = $1 `,
        [email]
      );

      if (user.rows.length < 1) {
        return res.status(404).json({ error: "Usuario nao encontrado" });
      }

      bcrypt.compare(
        req.body.password,
        user.rows[0].password,
        function (err, resBool) {
          if (err) {
            console.log(err);
          }
          if (resBool) {
            const { id } = user.rows[0];
            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
              expiresIn: process.env.TOKEN_EXPIRATION,
            });
            return res.status(200).json({ token });
          } else {
            return res.json({
              success: false,
              message: "passwords do not match",
            });
          }
        }
      );
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }
}

export default new Token();
