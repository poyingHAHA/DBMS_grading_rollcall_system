const jwt = require("jsonwebtoken");

const createJWT = async (account, role) => {
  const token = jwt.sign({account: account, role: role}, "thisismysecret");
  return token;
}

module.exports = {createJWT};