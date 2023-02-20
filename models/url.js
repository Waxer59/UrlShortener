const { Schema, model } = require("mongoose");

const UrlSchema = Schema({
    url:{
        type: String,
        required: [true, "The url is required"]
    },
    code:{
        type: String,
        required: [true, 'The code is required']
    }
});

UrlSchema.methods.toJSON = function () { 
  const { _id,__v, ...url } = this.toObject();
  url.uid = _id;
  return url;
};

module.exports = model("Url", UrlSchema);
