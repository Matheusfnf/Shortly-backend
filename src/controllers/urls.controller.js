import e from "express";
import { nanoid } from "nanoid";
import connection from "../database/pg.js";

class Urls {
  async store(req, res) {
    const { url } = req.body;
    const modelID = nanoid(6);
    const { id, email} = req.user;

    if (!url) return res.status(400).json({ error: "URL nao informada" });

    try {
      const response = await connection.query(
        'INSERT INTO urls (url, "shortUrl", "userId", "userSignature") VALUES ($1, $2, $3, $4)',
        [url, modelID, id, email]
      );
      return res.status(201).send({ shortUrl: modelID });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  async findid(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(404);

      const response = await connection.query(
        `SELECT id, "shortUrl", url FROM urls WHERE id = ${req.params.id}`
      );

      if (response.rowCount > 0) {
        res.send(response.rows[0]);
      } else {
        return res.status(404).json({
          statuscode: 404,
          message: "Url não encontrada!",
        });
      }
    } catch (e) {
      res.sendStatus(404);
    }
  }

  async convertLink(req, res) {
    try {
      const { shortUrl } = req.params;
      if (!shortUrl)
        return res.status(400).json({ error: "Url nao informada" });

      const url = await connection.query(
        `SELECT * FROM urls WHERE "shortUrl" = $1`,
        [shortUrl]
      );
      if (url.rows.length < 1)
        return res.status(404).json({ error: "URL NOT FOUND" });
      const sum = url.rows[0].visitCount + 1;

      await connection.query(
        `UPDATE urls SET "visitCount" = $1 WHERE id = $2`,
        [sum, url.rows[0].id]
      );
      return res.redirect(url.rows[0].url);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async deleteURL(req, res) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "id não informado" });
    
    

    try {
      const url = await connection.query(`DELETE FROM urls WHERE id=$1`, [id]);

      if (url.rowCount > 0) {
        return res.status(201).json({
          statuscode: 201,
          message: "deletado com sucesso!",
        });
      } else {
        return res.status(404).json({
          statuscode: 404,
          message: "Url não encontrada!",
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }
}

export default new Urls();
