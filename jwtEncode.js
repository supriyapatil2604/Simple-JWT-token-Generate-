const express = require("express");
const jwt = require("jsonwebtoken");
const fs =require('fs');

const privateKey = fs.readFileSync('private.key', 'utf8');

  var payload ={};
  payload.username="Johnsmith";
  payload.password="Johnsmith@123";
  payload.email="Johnsmith@example.com";
  payload.id=5;
 
  console.log("Payload", JSON.stringify(payload));

  var exp = '24h';

  var signOption = {
    expiresIn : exp,
    algorithm : 'RS256'
  }

  console.log("Options", JSON.stringify(signOption));
  var token = jwt.sign(payload,privateKey, signOption);
  console.log("---------------------------------------------------------------");
  console.log("source  == "+token);
  console.log("---------------------------------------------------------------");
