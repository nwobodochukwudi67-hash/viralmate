const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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

app.post("/api/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        error: "Please enter an image prompt."
      });
    }

    const result = await openai.images.generate({
      model: "gpt-image-2",
      prompt: prompt.trim()
    });

    res.json({
      image: result.data[0].b64_json
    });
  } catch (error) {
    console.error("Image generation error:", error);



    res.status(500).json({
      error: error.message || "Image generation failed."
    });
  }
});
  }
});
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`ViralMate AI running on port ${PORT}`);
});
