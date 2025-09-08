const express = require("express");
const jwt = require("jsonwebtoken");
const fs =require('fs');

const publicKey = fs.readFileSync('public.key', 'utf8');
 
  console.log("Payload", JSON.stringify(payload));
 
  //Desination source code

  var verifyOption = {
    expiresIn : exp,
    algorithm : ['RS256']
  };

  var verified = jwt.verify(token, publicKey,verifyOption);
  console.log(verified);
/**
 * Decode
 */

var decoded = jwt.decode(token,{complete: true});
console.log("decoded Header"+JSON.stringify(decoded.header));
console.log("decoded Payload"+JSON.stringify(decoded.payload));
