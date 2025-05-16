import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
module.exports = app;