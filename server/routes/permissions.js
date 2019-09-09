var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('../model/Permissions');
const Permission = mongoose.model('Permission');

router.get('/create', function (req, res, next) {
    const permissions = [
        {name: 'ALL', create: true, write: true,  read: true, delete: true},
        {name: 'RW', create: false, write: true,  read: true, delete: false},
        {name: 'RO', create: false, write: false,  read: true, delete: false}
    ]
  savePermission(res, permissions);
});



async function savePermission(res, permissions) {
  try {
        permissions.forEach( async (permision) => {
            const permissionObj = new Permission(permision);
            await permissionObj.save();
        });
        res.send({ status: 200, statusText: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}


module.exports = router;
