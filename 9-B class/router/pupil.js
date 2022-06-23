const { Router } = require("express");
const router = Router();
const Pupil = require("../model/Pupil");

router.get("/", async (req, res) => {
  const pupil = await Pupil.find().sort({ score: -1 });
  res.render("pupil", {
    pupil,
  });
});

  router.get("/month/:month", async (req, res) => {
    const pupil = await Pupil.find({ month: req.params.month }).sort({score: -1})
    res.render("month", {
      pupil,
    });
  });

router.get("/add", async (req, res) => {
  res.render("add");
});

router.post("/add", async (req, res) => {
  const { name, surname, number, group, month, score } = req.body;
  const pupil = new Pupil({
    name,
    surname,
    number,
    group,
    month,
    score,
  });
  await pupil.save();
  res.redirect("/pupil");
});

router.get("/:id", async (req, res) => {
  const pupilFind = await Pupil.findById(req.params.id);
  res.render("addScore", {
    addScore: pupilFind,
  });
});

router.post("/score/:id", async (req, res) => {
  const test = +req.body.addScore + +req.body.oldScore;
  const pupilScore = {
    score: test,
  };
  await Pupil.findByIdAndUpdate(req.params.id, pupilScore);
  res.redirect("/pupil");
});

module.exports = router;
