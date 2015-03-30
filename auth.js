var base32 = require("thirty-two");
var crypto = require("crypto");
var Buffer = require("buffer").Buffer;


function hotp(key, counter, length) {
  var key = base32.decode(key);
  var hmac = crypto.createHmac("sha1", key);
  var counterBuf = new Buffer(8);
  var c = counter;
  for (var i = 0; i < 8; i++) {
    counterBuf[7 - i] = c & 255;
    c = c >> 8;
  }
  hmac.update(counterBuf);
  var digest = hmac.digest("hex");
  var hmac_result = new Buffer(digest, "hex");
  //evil copy and paste from rfc4226
  var offset = hmac_result[19] & 0xf;
  var bin_code = (hmac_result[offset] & 0x7f) << 24 | (hmac_result[offset + 1] & 0xff) << 16 | (hmac_result[offset + 2] & 0xff) << 8 | (hmac_result[offset + 3] & 0xff);
  var codeStr = bin_code.toString();
  return codeStr.substr(codeStr.length - length);
}
module.exports=hotp;
