const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    app: "ViralMate AI"
  });
});

app.get("/api/paystack/config", (req, res) => {
  res.json({
    publicKey: process.env.PAYSTACK_PUBLIC_KEY || "",
    planCode: process.env.PAYSTACK_PLAN_CODE || ""
  });
});

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`ViralMate AI running on port ${PORT}`);
});
