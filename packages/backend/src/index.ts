import { Express, Request, Response } from "express";
import express from "express";
import cors from "cors";

const app: Express = express();
const port = 3000;

app.use(cors()); // TODO: add specific configuration for environment

app.get("/", (req: Request, res: Response) => {
  res.json({ data: ["some", "data"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
