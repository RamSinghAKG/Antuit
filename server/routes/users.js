var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('../model/Users');
const User = mongoose.model('User');

router.post('/create', function (req, res, next) {
  const userObj = {
    userId: req.body.userId,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    client: req.body.client,
  };

  saveUser(res, userObj);
});

router.put('/update', function (req, res, next) {
  updateUser(req, res);
});

router.get('/:offset', function (req, res, next) {
  getUsers(req, res);
});
async function getUsers(req, res) {
  try {
    const offset = req.params.offset;
    const numOfRecords = 5;
    const skips = offset * numOfRecords;
    let allRecords = await User.find({}).skip(skips).limit(numOfRecords);
    res.send({ data: allRecords, status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

async function saveUser(res, userInfo) {
  try {
    const user = new User(userInfo);
    await user.save();
    res.send({ status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
async function updateUser(req, res) {
  try {
    const user = req.body.user;
    await User.updateOne({ userId: user.userId }, user);
    res.send({ status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

module.exports = router;
