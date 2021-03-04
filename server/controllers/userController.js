const oktaClient = require("../services/oktaClient");

const userController = {
  createUser: async (req, res) => {
    try {
      const newUser = {
        profile: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          login: req.body.email,
        },
        credentials: {
          password: {
            value: req.body.password,
          },
        },
      };
      const user = await oktaClient.createUser(newUser);
      res.status(200).json({
        user,
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        error,
        success: false,
      });
      console.log("error", error);
    }
  },
};
module.exports = userController;
