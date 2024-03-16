// const express = require("express");
import express from "express";
// const cors = require("cors");
import cors from "cors";
// const mongo = require("mongodb").MongoClient;
import { MongoClient } from "mongodb";
const conStr = "mongodb://127.0.0.1:27017";

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
// Fetching Data
app.get("/customer", (req, res) => {
  MongoClient.connect(conStr)
    .then((obj) => {
      var database = obj.db("Tutorial");
      database
        .collection("customer")
        .find({})
        .toArray()
        .then((doc) => {
          res.send(doc);
          res.end();
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Creating Data
app.post("/addcustomer", (req, res) => {
  var customerDetails = {
    userId: req.body.userId,
    UserName: req.body.UserName,
    password: req.body.password,
    email: req.body.email,
    mobile: req.body.mobile,
  };
  MongoClient.connect(conStr)
    .then((obj) => {
      var database = obj.db("Tutorial");
      database
        .collection("customer")
        .insertOne(customerDetails)
        .then(() => {
          console.log("User Registered");
          res.redirect("/customer");
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen("5000");
console.log("Server Listening");
