var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('../model/Roles');
const Role = mongoose.model('Role');

router.post('/create', function (req, res, next) {
  let roleObj = { 
    name: req.body.name,
    permission: req.body.permission
  };
  saveRole(res, roleObj);
});
router.put('/update', function (req, res, next) {
  updateRole(req, res);
});

router.post('/delete', async function (req, res, next) {
    try {
      await Role.deleteMany({name: 'Test'});
      res.send({status: 200, statusText: "SUCCESS" });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
});

router.get('/', function (req, res, next) {
  getRoles(req, res);
});

async function getRoles(req, res) {
  try {
    let allRecords = await Role.find({});
    res.send({data: allRecords, status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

async function saveRole(res, roleInfo) {
  try {
    const role = new Role(roleInfo);
    await role.save();
    res.send({ status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
async function updateRole(req, res) {
  try {
    const role = req.body.role;
    await Role.updateOne({name: role.name}, {
      name: role.name,
      permission: role.permission});
    res.send({ status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

module.exports = router;
