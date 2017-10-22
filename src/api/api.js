const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");
const connection = mongoose.connection;

connection.on("error", function(error) {
    console.log("DB connection error!: ", error);
});

connection.on("open", function() {
    console.log("DB connected!");
});

const postSchema = mongoose.Schema({
    title: String
});
const model = mongoose.model("posts", postSchema);

const server = new express();

server.get("/posts", function (request, response) {
    model.find({}, function (err, data) {
        response.json(data);
    });
});

server.listen(5310, function () {
    console.log("api server started");
});