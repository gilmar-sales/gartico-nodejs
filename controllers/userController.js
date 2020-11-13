const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { username, password, nickname, email } = request.body;

    if (
      (await connection("users").where({ username: username }).select("id"))
        .length
    ) {
      return response.status(400).json({ error: "Username already exists!" });
    }

    const [id] = await connection("users").returning("id").insert({
      username,
      password,
      nickname,
      email,
    });

    return response.json({ id });
  },

  async authenticate(request, response) {
    const { username, password } = request.body;

    const [auth] = await connection("users")
      .where({ username: username })
      .select("id", "password", "nickname");

    if (!auth) {
      return response.json({ error: "Username doesn't exists" });
    } else if (auth.password !== password) {
      return response.json({ error: "Wrong password!" });
    } else {
      return response.json({ id: auth.id, nickname: auth.nickname });
    }
  },
  async view(request, response) {
    const { id } = request.body;

    const user = await connection("users").where({ id: id }).select("nickname");

    if (user) {
      return response.status(200).json(user);
    } else {
      return response.sendStatus(400).json({ error: "User not found!" });
    }
  },

  async list(request, response) {
    const users = await connection("users").select("username", "nickname");
    return response.json(users);
  },
};
