var user = require('../user.js')

module.exports = {
  getName: function(req, res) {
    res.status(200).send({
      "name": user.name
    })
  },

  getLocation: function(req, res) {
    res.status(200).send({
      "location": user.location
    })
  },

  getOccupations: function(req,res) {
    res.status(200).send({
      "occupations": user.occupations
    })
  },

  getLatest: function(req,res) {
    res.status(200).send({
      "latestOccupation": user.occupations[user.occupations.length -1]
    })
  },

  getHobbies: function(req, res) {
    res.status(200).send({
      "hobbies": user.hobbies
    })
  },

  getHobbiesType: function(req, res, next) {
    // res.status(200).send()
    // console.log(req.params)
    var paramy = req.params.type;
    var results = user.hobbies.filter(function(value){
      if (value.name === paramy) {
        return value;
      }
    })
    res.status(200).send({
      hobbies: results
    })
  },

  getFamily: function (req, res) {
    res.status(200).send({
      family: user.family
    })
  },

  getFamilyGender: function (req, res) {
    var param = req.params.gender;
    var result = user.family.filter(function(value){
      if (value.gender === param) {
        return value;
      }
    });
    res.status(200).send({
      family: result
    })
  },

  getRestaurants: function(req, res) {
    res.status(200).send({
      restaurants: user.restaurants
    })
  },

  getRestaurantsName: function(req, res) {
    var param = req.params.name;
    var results = user.restaurants.filter(function(value) {
      if (value.name === param) {
        return value
      }
    });
    res.status(200).send({
      restaurants: results
    })
  }

}
