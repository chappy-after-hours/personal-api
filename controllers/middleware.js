var skillz = require('../skillz.js');
var secrets = require('../secrets.js')
module.exports = {
  addHeaders: function(req,res,next) {
    res.status(200).set({
      'Content-Type': 'applications/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },

  generateId: function(req, res, next) {
    var lastId = skillz.list[skillz.list.length - 1].id;
    req.body.id = lastId +1;
    next();
  },

  verifyUser: function(req, res, next) {
    console.log(1, req.params)
    if (req.params.username === 'chappy' && req.params.pin === '1234') {
      next()
    } else {
      res.status(404).send({message:'Invalid Info'});
    }
  }
}
