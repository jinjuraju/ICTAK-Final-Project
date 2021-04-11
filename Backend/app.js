const express = require('express');
const app = new express();

var port = process.env.PORT || 7000
const jwt = require('jsonwebtoken');

var LoginData = require("./src/models/logindata");
var DiaryData = require("./src/models/diarydata");


const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {

    LoginData.find({ email: req.body.user.email }).then(data => {
        if (data[0]) {
            res.send({ "message": "email dupe" });
        }
        else {
            var user = LoginData(req.body.user);
            user.save();
            res.send({ "message": "success" });
        }
    });

});

app.post('/login', (req, res) => {
    var user = req.body.user;
    LoginData.find({ email:user.email }).then(data => {
        if (data[0]) {
            if (data[0].password == user.password) {
                res.send({ "message": "success" });
            }
            else {

                res.send({ "message": "Incorrect Password" });
            }
        }
        else {

            res.send({ "message": "Invalid Email" });
        }
    });

});

app.post('/getalldiarys', (req, res) => {
    DiaryData.find().then(data => {
        res.send(data);
    })
});

app.post('/getdiary', (req, res) => {
    DiaryData.find({ _id: req.body.id }).then(data => {
        res.send(data[0]);
    });
});

app.post('/deletediary', (req, res) => {
    DiaryData.findByIdAndDelete({ _id: req.body.id }).then(data => {
        res.send({ "message": "success" });
    });
});

app.post('/adddiary', (req, res) => {
    var diary = DiaryData(req.body.diary);
    diary.save();
    res.send({ "message": "success" });
});

app.post('/editdiary', (req, res) => {
    var diary = req.body.diary;
    DiaryData.findByIdAndUpdate({ _id: diary._id }, diary, function (err, result) {
        if (err) console.log(err)
        else {
            res.send({ "message": "success" });
        }
    });

});

app.get('/', function (req, res) {
    res.send('yes');
});

app.listen(port, function () {
    console.log('Backend listening at port ' + port);
});