const express = require("express");
const app = express();
const PORT = 8000 || process.env.PORT;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors"); // Importa il modulo cors

app.use(cors());
app.use(express.json()); // Per consentire il parsing del corpo delle richieste in formato JSON

app.get("/", async (req, res) => {
  const idsToKeep = [1, 2, 3];

  try {
    await prisma.defaulMix.deleteMany({
      where: {
        NOT: {
          mix_id: {
            in: idsToKeep,
          },
        },
      },
    });
    res.json({ message: "Eliminati" });
  } catch (error) {
    console.log("error");
    res.json({ message: error });
  } finally {
    prisma.$disconnect();
  }
});

app.get("/api/defaultMix", async (req, res) => {
  try {
    const data = await prisma.defaulMix.findMany();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  } finally {
    prisma.$disconnect();
  }
});
module.exports = app;
