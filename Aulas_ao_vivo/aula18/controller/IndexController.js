const IndexController = {
  showSobre: (req, res) => {
    res.render("sobre",{nomeDoVisitante:"Ana Sousa"});
  },
  showIndex: (req, res) => {
    res.render("index", { title: "Express" });
  },
};

module.exports = IndexController;
