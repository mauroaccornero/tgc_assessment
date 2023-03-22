import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/items.routes";

const app: Express = express();
const port = 3000;

app.use(cors()); // TODO: add specific configuration for environment
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
