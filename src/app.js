import express from "express";
import indexRoutes from "./routes/index.routes";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(morgan("dev")); // Middleware
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

export default app;
