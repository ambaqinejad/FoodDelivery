const getRegisterPage = (req, res, next) => {
  res.render("pages/auth/register.ejs", {
    title: "REGISTER",
  });
};

module.exports = {
  getRegisterPage,
};
