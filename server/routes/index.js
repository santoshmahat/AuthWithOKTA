const userRoute = require("./userRoute");

const rootRouter = (app) => {
  app.use("/api/users", userRoute);
};

module.exports = rootRouter;
