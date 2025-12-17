import express from "express"
import cors from "cors"
import { db, testDB } from "./db/index.js";
const app = express()

// middlewares
app.use(express.json())
app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

await testDB()

app.get("/users", async (req, res) => {
  const [users] = await db.query(`SELECT * FROM users`)
  return res.status(200).json({ password: users[0].password })
})

app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const [users] = await db.query(`SELECT * FROM users`)

  if (!users) {
    return res.status(404).json({ success: false, message: "no users found" })
  }

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Missing fields" })
  }

  if (email !== users[0].email || password !== users[0].password) {
    return res.status(400).json({ success: false, message: "Wrong email or password" })
  }

  return res.status(200).json({ success: true, message: "user logged in Successfully" })

})

const PORT = 3000;

app.listen(PORT, (error) => {
  console.log("Server is Successfully Running, ·and App is listening on port " + PORT);
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
