const Url = require("../models/url");
const shortid = require("shortid");
const validUrl = require("valid-url");
const Cryptr = require('cryptr');

const createUrl = async (req, res) => {
  var { url } = req.body;
  try {
    if (!validUrl.isUri(url)) {
      res.status(400).json({
        msg: `That's not a valid url`,
      });
      return;
    }
    const cryptr = new Cryptr(process.env.SECRETKEY);

    url = cryptr.encrypt(url);

    const code = shortid.generate();

    const urlDb = new Url({ url, code });

    await urlDb.save();

    res.json({
      msg: "ok",
      url: `${process.env.ROOT}/${code}`
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "An error has occurred - Please try again",
    });
  }
};

module.exports = {
  createUrl,
};
