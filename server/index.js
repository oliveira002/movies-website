const express = require('express');
const app = express();
const mariadb = require('mariadb');
const cors = require("cors");
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const saltRounds = 10;

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST","DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    key: "id",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 2,
    },
}))

const db = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dev',
    database: 'movies'
});

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hashed = await bcrypt.hash(password,saltRounds);
    try {
        // Check if the username already exists
        const existingUser = await db.query("SELECT * FROM users WHERE username = ?", [username]);
        if (existingUser.length > 0) {
            return res.status(400).send({ error: 'The username already exists' });
        }
        // Insert the new user into the database
        await db.query("INSERT INTO users (username,password) VALUES (?,?)", [username, hashed]);
        res.status(201).send({ error: 'User registered successfully' });
    } catch (err) {
        res.status(500).send({ error: 'An error occurred while registering the user' });
    }
});

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        // Check if the username and password match
        const user = await db.query("SELECT * FROM users WHERE username = ? ", [username]);
        if (user.length > 0) {
            if(await bcrypt.compare(password,user[0].password)) {
                req.session.user = user;
                res.status(200).send({ error: 'Login successful' });
            }
            else {
                return res.status(401).send({ error: 'Wrong Credentials' });
            }
        }
        else {
            return res.status(401).send({ error: 'User does not exist' });
        }
    } catch (err) {
        return res.status(500).send({ error: 'An error occurred while logging in' });
    }
});

app.get("/login",(req,res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }
    else {
        res.send({loggedIn: false})
    }
})
app.listen(3001,'localhost');