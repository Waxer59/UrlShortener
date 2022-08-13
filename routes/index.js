const { Router } = require("express");
const { checkUrl } = require("../controllers");
const router = Router();

router.get('/:code', checkUrl)

module.exports = router;