import connection from "../database/pg.js";
import bcrypt from "bcrypt";

class Users {
  async store(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Senhas nao coincidem" });
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const response = await connection.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    if (response.rowCount > 0) {
      return res.status(422).json({
        statuscode: 422,
        message: "email já existente!",
      });
    }

    try {
      await connection.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        [name, email, hashPassword]
      );
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async show(req, res) {
    try {
      const users = await connection.query("SELECT * FROM users");
      res.send(users.rows);
    } catch (e) {
      console.log(e);
      res.status(400).json();
    }
  }

  async showme(req, res) {
    try {
      const users = await connection.query(
        'SELECT users.id, users.name, urls.* FROM users INNER JOIN urls ON urls."userId" = users.id'
      );
      const arr = users.rows.map((row) => {
        const obj = {
          id: row.users.id,
          name: row.users.name,
          visitCount: row.urls.visitCount,
          shortenedUrls: {
            id: row.urls.id,
            shortUrl: row.urls.shortUrl,
            url: row.urls.url,
            visitCount: row.urls.visitCount,
          },
        };
        return obj;
      });

      res.status(200).send(arr);
    } catch (e) {
      console.log(e);
      res.status(400).json();
    }
  }
}

export default new Users();
