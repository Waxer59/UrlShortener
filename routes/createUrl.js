const { Router } = require("express");
const { check } = require("express-validator");
const { createUrl } = require("../controllers/createUrl");
const { validateFields } = require("../middlewares/validateFields");
const router = Router();

router.post("/", [
  check("url", "The url is required").not().isEmpty(),
  validateFields,
], createUrl);

/* 
{
    url:
    code:
    pass:
}


*/

module.exports = router;
