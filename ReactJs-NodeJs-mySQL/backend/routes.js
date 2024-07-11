const express = require("express");
const db = require("./db");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Create a new user
router.post(
  "/users",
  upload.single("image"),

  async (req, res) => {
    try {
      const { name, email, gender, course, jobTitle, bio, skills, image } =
        req.body;

      const sql = `
        INSERT INTO users (name, email, gender, course, jobTitle, bio, skills, image)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.query(sql, [
        name,
        email,
        gender,
        course,
        jobTitle,
        bio,
        JSON.stringify(skills),
        image,
      ]);

      console.log(result);
      res.status(201).send("User created successfully");
    } catch (err) {
      // console.error(err);
      res.status(500).send("Error creating user");
    }
  }
);

// Read all users
router.get("/users", async (req, res, next) => {
  try {
    const sql = "SELECT * FROM users";
    const [results] = await db.query(sql);

    // EachUser store "users" array
    const users = results.map((user) => {
      return user;
    });

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// Update user by id
router.put(
  "/users/:id",
  upload.single("image"),

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, email, gender, course, jobTitle, bio, skills, image } =
        req.body;

      let sql =
        "UPDATE users SET name = ?, email = ?, gender = ?, course = ?, jobTitle = ?, bio = ?, skills = ?";
      const params = [
        name,
        email,
        gender,
        course,
        jobTitle,
        bio,
        JSON.stringify(skills),
      ];

      if (image) {
        sql += ", image = ?";
        params.push(image);
      }

      sql += " WHERE id = ?";
      params.push(id);

      const [result] = await db.query(sql, params);
      if (result.affectedRows === 0) {
        res.status(404).send(" not found");
      } else {
        res.status(200).send("User updated success");
      }
    } catch (err) {
      next(err);
    }
  }
);

// Delete user by id
router.delete("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = "DELETE FROM users WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    if (result.affectedRows === 0) {
      res.status(404).send(" not found");
    } else {
      res.status(200).send("User deleted success");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
