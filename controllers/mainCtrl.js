var user = require('../user.js')
var skillz = require('../skillz.js');
var secrets = require('../secrets.js')

module.exports = {

// GET REQUESTS //
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
    var query = req.query.order;
    var results = user.occupations;
    switch(query) {
      case 'desc':
        res.status(200).send({
          "occupations": results.sort()
        })
        break;
      case 'asc':
        res.status(200).send({
          "occupations": results.reverse()
        })
        break;
      default:
      res.status(200).send({
        "occupations": results
      })
    }
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
  },

  getSkillz: function (req, res) {
    var expQuery = req.query.experience;
    console.log(expQuery, req.query)
    switch (expQuery) {
      case 'Beginner':
        var beginnerSkills = skillz.list.filter(function(value){
          console.log(value.experience)
          if (value.experience === expQuery) {
            return value;
          }
        });
        console.log(beginnerSkills)
        res.status(200).send(beginnerSkills);
        break;
      case 'Intermediate':
        res.status(200).send({
          beginnerSkills: skillz.list.filter(function(value){
            if (value.experience === expQuery) {
              return value;
            }
          })
        })
        break;
      case 'Expert':
        res.status(200).send({
          beginnerSkills: skillz.list.filter(function(value){
            if (value.experience === expQuery) {
              return value;
            }
          })
        })
        break;
      default:
      res.status(200).send({
        skills: skillz.list
      })
    }
  },

  getSecrets: function (req, res) {
    console.log(2)
    res.status(200).send({
      secrets: secrets.secrets
    })
  },



  //PUT REQUESTS //

  putName: function(req, res) {
    user.name = req.body.name;
    res.status(200).send({
      updated: user.name
    })
  },

  putLocation: function(req, res) {
    console.log(req.body.location)
    if (req.body.location) {
      user.location = req.body.location;
    }
    res.status(200).send(user)
  },

  // POST REQUESTS //

  postHobbies: function (req, res) {
    user.hobbies.push(req.body);
    res.status(200).send(user.hobbies)
  },

  postOccupations: function (req, res) {
    user.occupations.push(req.body);
    res.status(200).send(user.occupations)
  },

  postFamily: function (req, res) {
    user.family.push(req.body);
    res.status(200).send(user.family)
  },

  postRestaurants: function (req, res) {
    user.restaurants.push(req.body);
    res.status(200).send(user.restaurants)
  },

  postSkill: function(req, res) {
    skillz.list.push(req.body);
    res.status(200).send(skillz.list)
  }

}
