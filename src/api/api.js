require("babel-core/register")({
    "presets": ["env", "react"]
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const post = require("./models/post");
const users = require("./models/users");

mongoose.connect("mongodb://localhost/blog");
const connection = mongoose.connection;

connection.on("error", function(error) {
    console.log("DB connection error!: ", error);
});

connection.on("open", function() {
    console.log("DB connected!");
});

const server = new express();
server.use(bodyParser.json());
server.set("jwtSecret", "8s!haT6a@3s");

// verify token middleware
const apiRoutes = express.Router();
apiRoutes.use((req, res, next) => {
    const token = req.body.token || req.headers.authorization;

    // if no token
    if (!token) {
        // status 403 - forbidden
        return res.status(403).send({
            message: "No token provided.",
            authenticated: false
        })
    }

    // verify token & expiration
    jwt.verify(token, server.get("jwtSecret"), (err, decoded) => {
        if (err) {
            return res.status(403).json({
                message: "Bad token.",
                authenticated: false
            })
        }

        // save request for use in next routes
        req.decoded = decoded;
        next();
    });
});

// authenticate
server.post("/login", (req, res) => {
    users.findOne({ login: req.body.login }, (err, user) => {
        // if user not found
        if (!user) {
            return res.status(401).json({
                message: "User authentication failed (user nor found).",
                authenticated: false
            })
        }

        // check password
        if (user.password !== req.body.password) {
            return res.status(401).json({
                message: "User authentication failed (wrong password).",
                authenticated: false
            })
        }

        // user & password match then create jwt token
        const payload = { login: user.login };
        const settings = { expiresIn : 1440 };
        const token = jwt.sign(payload, server.get("jwtSecret"), settings);

        res.status(200).json({
            message: "Successfully logged in.",
            authenticated: true,
            token: token,
            user: _.pick(user, ["_id", "login"])
        });
    })
});

server.get("/posts", function (request, response) {
    post.find({}, function (err, data) {
        response.json(data);
    });
});

server.post("/post", function (req, res) {
    post.create(req.body, (err, data) => {
        if (err) {
            return res.status(500).end();
        }
        res.json(data);
    })
});

server.listen(5310, function () {
    console.log("api server started");
});