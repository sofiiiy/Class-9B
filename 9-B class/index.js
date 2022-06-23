const express = require("express");
const app = express();
const path = require("path");
require("./helper/db")();
const { create } = require("express-handlebars");

const pupilRouter = require("./router/pupil.js");

const hbs = create({
  defaultLayout: "layout",
  extname: "hbs",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/pupil", pupilRouter);

const port = normalizePort(process.env.port || 5000);
const host = "localhost";
try {
  app.listen(port, host, () => {
    console.log(`Server is working on port ${port}`);
  });
} catch (error) {
  console.log(error);
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port > 0) {
    return val;
  }

  return false;
}
