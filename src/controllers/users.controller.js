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
        "INSERT INTO users (name, email, password, signature) VALUES ($1, $2, $3, $4)",
        [name, email, hashPassword, email]
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
    const { id } = req.user;

    try {
      const users = await connection.query(
        `SELECT users.id AS "usersID", users.name AS username, urls."visitCount" AS "visitCountSingle", urls.id AS urlsid, urls."shortUrl" AS shorturl, urls.url AS url FROM users INNER JOIN urls ON urls."userId" = users.id WHERE users.id = ${id}`
      );

      const sum = await connection.query(
        `SELECT SUM("visitCount") FROM urls WHERE "userId" = ${id}`
      );
      const arr = users.rows.map((row) => {
        const obj = {
          id: row.usersID,
          name: row.username,
          visitCount: sum.rows[0].sum,
          shortenedUrls: {
            id: row.urlsid,
            shortUrl: row.shorturl,
            url: row.url,
            visitCount: row.visitCountSingle,
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
  async ranking(req, res) {
    try {
      const users = await connection.query(
        `SELECT users.*, urls.id AS "urlsIdTst", urls."visitCount" AS "visitCount" FROM users INNER JOIN urls ON users."signature" = urls."userSignature" ORDER BY users.id DESC`
      );
      const tesorado = users.rows;

      const obj = {};

      tesorado.map((row) => {
        if (obj[row.id]?.length < 1 || !obj[row.id]) {
          obj[row.id] = {
            id: row.id,
            name: row.name,
            linksCount: 1,
            visitCount: Number([row.visitCount]),
          };
        } else {
          console.log(row);
          obj[row.id].visitCount += Number(row.visitCount);
          obj[row.id].linksCount += 1;
        }
      });

      const sorted = Object.values(obj).sort(function (a, b) {
        return b.visitCount - a.visitCount;
      });

      res.status(200).json(sorted.splice(0, 10));
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  }
}



export default new Users();
