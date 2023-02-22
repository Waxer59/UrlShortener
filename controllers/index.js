const Url = require("../models/url");
const Cryptr = require("cryptr");

const checkUrl = async (req, res) => {
  const { code } = req.params;
  try {
    const urlDb = await Url.findOne({ code });

    if (!urlDb) {
      res.redirect(process.env.BASE_URL)
      return;
    }
    const cryptr = new Cryptr(process.env.SECRETKEY);
    const urlRedirect = cryptr.decrypt(urlDb.url);
    
    res.redirect(urlRedirect);
  } catch (error) {
    res.redirect(process.env.BASE_URL)
  }
};

module.exports = {
  checkUrl,
};
