// import the controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")

module.exports = (app) => {
    app.get("/api/hello", NinjaController.sayHello)

}
