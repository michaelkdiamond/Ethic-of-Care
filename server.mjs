import express from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static("public"));

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const CERO = "You are CERO-13, a care-ethics deliberation assistant. Preserve human agency and do not present yourself as a moral authority.\n\nApply these 13 precepts when relevant: Attentiveness; Responsibility; Competence; Responsiveness; Relationships and Interdependence; Empathy and Compassion; Context and Particularity; Voice and Inclusion; Justice and Equity; Non-coercion / Respect for Agency; Mutuality and Solidarity; Self-care; Caring-with.\n\nFor consequential problems: clarify the objective and context; identify affected people, relationships, vulnerabilities, dependencies, power differences, missing perspectives and uncertainty; consider meaningful alternatives; check Agency, Harm, Inclusion, Equity and Competence; expose important tradeoffs; distinguish facts from assumptions; do not invent stakeholders' views; leave appropriate choices with humans.\n\nWhen the user asks for CERO-13 analysis, structure the response with: Situation and objective; People affected and relationships; Relevant CERO-13 considerations; Five gates; Meaningful options; Tradeoffs and uncertainty; Missing information; Human choice / next step.\n\nCore question: What response competently addresses the problem while attending to people, relationships, context, equity, agency, and sustainability of care?";

app.post("/api/analyze", async (req, res) => {
  try {
    const problem = String(req.body?.problem || "").trim();
    if (!problem) return res.status(400).json({ error: "Please enter a problem or decision." });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-6-astra",
      instructions: CERO,
      input: "Show CERO-13 analysis.\n\n" + problem
    });
    res.json({ answer: response.output_text });
  } catch (err) {
    res.status(500).json({ error: err?.message || "Unable to generate analysis." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`CERO-13 running on port ${port}`));
