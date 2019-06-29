const { Router } = require("express");

const routes = new Router();

routes.get("/teste", (req, res) => {
  return res.json({ message: "hello, node" });
});

module.exports = routes;
